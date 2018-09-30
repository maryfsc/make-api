$(document).ready(() => {
  $('#loading-pic').hide();

}); // end document ready jquery

function renderIndex() {
    var mainContent = $('#main-content');
    mainContent.html(`
    <div class="container-fluid index-content">
      <div class="row text-center">
        <div class="col-sm-12">
          <h1 class="home-text">Welcome to Make API!</h1>
          <p class="home-text">To start, browse products in the menu list.</p>
          <div id="carouselPics" class="carousel slide carousel-fade product-carousel" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
              <img class="d-block w-100" src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?ixlib=rb-0.3.5&s=6b320c3e8911938beae5c8ef35ff11c2&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" alt="First slide">
            </div>
              <div class="carousel-item">
               <img class="d-block w-100" src="https://images.unsplash.com/photo-1518715982419-9015401820ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=458b587e0a2a7dbca10b7e7b486aa0a8&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" alt="Second slide">
            </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://images.unsplash.com/photo-1512351647878-a53b7c6e4868?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=536833b40e1d9c6fbdb63c8a25ac9187&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselPics" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselPics" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <img id="loading-pic" class="align-self-center" src="https://loading.io/spinners/eclipse/lg.ring-loading-gif.gif">
        </div>
      </div>
    </div>`);
}

var products = [];

function handleError() {
  throw new Error('Request failed!');
}

function getProducts(clicked) {

  $('#loading-pic').show();
  $('.home-text').hide();
  $('#carouselPics').hide();

  const url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${clicked}`;

  jQuery.ajax({
    type: 'GET',
    url,
    success: loadProducts,
    error: handleError,
    crossDomain: true
  })
}

function loadProducts(data) {
  products = data;

  return renderProducts(products);
}

function renderProducts(selected) {
  var mainContent = $('#main-content');

  mainContent.empty();

  mainContent.html(
    `<div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 d-flex flex-wrap">
        ${products.map(product => 
        ` <div id="${product.id}" class="my-3 mx-3 p-2 text-center d-flex flex-column justify-content-center product-box">
            <h3>${product.name}</h3>
            <h4>${product.brand}</h4>
            <img src="${product.image_link}" class="img-fluid img-thumbnail product-img">
            <p>$ ${product.price}</p>
            <a href="/${product.product_type}/${product.id}" class="btn btn-light my-3 details-btn">Details</a>
            </div>`).join('')}
          </div>
        </div>
      </div>`
      );
};


function getSingleProduct(singleProduct) {

  return checkProductId(products, singleProduct);
}

function checkProductId(productTypeArray, singleProduct) {

  let result = productTypeArray.filter(item => {
    return item.id == singleProduct;
  });

  return renderProductInfo(result);
}

function renderProductInfo(product) {
  var mainContent = $('#main-content');

  mainContent.empty();

  mainContent.html(`
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
        ${product.map(item => 
          ` <div class="text-center product-details">
              <h3>${item.name}</h3>
              <h4>${item.brand}</h4>
              <img src="${item.image_link}" class="img-fluid img-thumbnail" height="250" width="250">
              <h4 class="mt-2">$ ${item.price}</h4>
              <p class="mt-2">${item.description}</p>
              <a id="checkout-btn" class="btn btn-light my-3" data-id="${item.id}" href="/checkout">Add to basket</a>
              <a class="btn btn-light" href="${item.product_link}">Brand site</a>
            </div>`
        ).join('')}
      </div>
    </div>
    `)
}
