$(document).ready(() => {
  $('#loading-pic').hide();

}) // end document ready jquery

var products = [];

function handleError() {
  // to be implemented
  throw new Error('Request failed!');
}

function getProducts(clicked) {

  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${clicked}`;

  $('#loading-pic').show();
  $('.home-text').hide();

  jQuery.ajax({
    type: 'GET',
    url,
    success: loadProducts,
    error: handleError,
    crossDomain: true,
    complete: function() {
      $('#loading-pic').hide()
    }
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
            <img src="${product.image_link}" class="img-fluid img-thumbnail" height="150" width="150">
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
        <div class="col-lg-6">
        ${product.map(item => 
          ` <div class="product-details">
              <h3>${item.name}</h3>
              <h4>${item.brand}</h4>
              <img src="${item.image_link}" class="img-fluid img-thumbnail" height="200" width="200">
              <p>${item.description}</p>
            </div>`
        ).join('')}
      </div>
    </div>
    `)
}

