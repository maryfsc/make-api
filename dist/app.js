$(document).ready(() => {
  $('#loading-pic').hide();

}) // end document ready jquery

var products = [];

function handleError() {
  // to be implemented
  console.log('an error occured!');
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
  let products = data;
  console.log(products);

  renderProducts();
}

function renderProducts() {

  let mainContent = $('#main-content');
  mainContent.empty();

  mainContent.html(
    `<div class="row">
      <div class="col-sm-12 d-flex flex-wrap">
      ${products.map(product => 
      ` <div id="${product.id}" class="my-3 mx-3 p-2 text-center d-flex flex-column justify-content-center product-box">
          <h3>${product.name}</h3>
          <h4>${product.brand}</h4>
          <img src="${product.image_link}" class="img-fluid img-thumbnail" height="150" width="150">
          <p>$${product.price}</p>
          <a href="/shopcart" class="btn btn-light my-3 add-btn">Add to My List</a>
          </div>`).join('')}
        </div>
      </div>`
      )
};


// <a class="btn btn-light" href="${product.product_link}"></a>

