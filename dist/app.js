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

  renderQueryProducts();
}

function renderQueryProducts() {
  let mainContent = $('#main-content');
  mainContent.empty();

  mainContent.html(
    `<div class="row">
      <div class="col-sm-12 d-flex flex-wrap">
      ${products.map(product => 
      ` <div class="my-3 mx-3">
          <h3>${product.name}</h3>
          <h4>${product.brand}</h4>
          <img src="${product.image_link}" height="150" width="150">
          </div>`).join('')}
        </div>
      </div>`


    // <div class="row">
    //   <div class="col-sm-12">
    //     <div class="">${products.map(product => `
    //       <h3>${product.name}</h3>
    //       <h4>${product.brand}</h4>
    //       <img src="${product.image_link}" height="150" width="150"`).join('')}
    //     </div>
    //   </div>
    // </div>
    // `);
)};

// function renderIndex() {
//   return `
//     <div class="container">
//       <div class="row text-center">
//         <div class="col-sm-12">
//           <h1>Welcome to Make API!</h1>
//           <p>To start, browse all products or search for a specific type of product.</p>
//         </div>
//       </div>
//     </div>`
// }
