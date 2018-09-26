$(document).ready(() => {
  // const searchButton = $('#search-button');
  // searchButton.on('click', getProducts);

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

  console.log(clicked);
}

function loadProducts(data) {
  products = data;
  console.log(products);

  renderQueryProducts();
}

function renderQueryProducts() {

  let mainContent = $('#main-content');
  mainContent.empty();

  mainContent.html(
    `<div class="row">
      <div class="col-sm-12 d-flex flex-wrap">
      ${products.map(product => 
      ` <div class="my-3 mx-3 p-2 text-center d-flex flex-column justify-content-center product-box">
          <h3>${product.name}</h3>
          <h4>${product.brand}</h4>
          <img src="${product.image_link}" class="img-fluid img-thumbnail" height="150" width="150">
          <button type="button" id="add-btn" class="btn btn-light my-3">Add to My List</button>
          <a class="btn btn-light" href="${product.product_link}">Buy!</a>
          </div>`).join('')}
        </div>
      </div>`
      )
};

