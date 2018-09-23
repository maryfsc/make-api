$(document).ready(() => {
  const searchButton = $('#search-button');
  searchButton.on('click', getProducts);

}) // end document ready jquery

var products = [];

function handleError() {
  // to be implemented
  console.log('an error occured!');
}

function querySearch() {
  return $('#form-search').val();
}

function getProducts(e) {
  e.preventDefault();

  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${querySearch()}`;

  jQuery.ajax({
    type: 'GET',
    url,
    success: loadProducts,
    error: handleError
  })
}

function loadProducts(data) {
  products = data;
  console.log(products);

  showProducts();
}

function showProducts() {
  let mainContent = $('#main-content');

  mainContent.html(`
    <div class="row>
      <div class="col-sm-12">
        <div>${products.map(product => `
          <h3>${product.name}</h3>
          <h4>${product.brand}</h4>
          <img src="${product.image_link}" height="150" width="100"`)}
        </div>
      </div>
    </div>
    `);
}