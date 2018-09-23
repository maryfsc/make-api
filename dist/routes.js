page('/', index);
page('', index);
page('/products', products);
// page('/products/:products_id', productsId);
page();

function index() {
  document.querySelector('#main-content')
    .innerHTML = `
    <div class="container">
      <div class="row text-center">
        <div class="col-sm-12">
          <h1>Welcome to Make API!</h1>
          <p>To start, browse all products or search for a specific type of product.</p>
        </div>
      </div>
    </div>`;
}

function products() {
  document.querySelector('#main-content')
    .innerHTML = `<div>hewooooo productssss</div>`
}

// function productsId() {
//   document.querySelector('#main-content')
//     .innerHTML = `<div>hewooooo product iddd</div>`
// }
