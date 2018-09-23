page('/', index);
page('/products', products);
page('/products/:products_id', productsId);
page();

function index() {
  document.querySelector('#main-content')
    .innerHTML = home();
}

function products() {
  document.querySelector('#main-content')
    .innerHTML = `<div>hewooooo productssss</div>`
}

function productsId() {
  document.querySelector('#main-content')
    .innerHTML = `<div>hewooooo product iddd</div>`
}
