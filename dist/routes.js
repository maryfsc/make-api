page('/', index);
page('/mascara', productsList);
page('/lipstick', productsList);
page('/blush', productsList);
page('/:products/:ProductId', singleProduct)
page('/checkout', checkout);
page();


function index() {
  return renderIndex();
}

function productsList(context) {  
  let selected = context.path.replace('/', '');

  return getProducts(selected);
}

function singleProduct(context) {
  let selectedProduct = context.params.ProductId;

  return getSingleProduct(selectedProduct);
}

function checkout(context) {
  console.log(context)
}