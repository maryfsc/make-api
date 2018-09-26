page('/', index);
page('/mascara', productsList);
page('/lipstick', productsList);
page('/blush', productsList);
page();

function index() {

  document.querySelector('#main-content')
    .innerHTML = `
    <div class="container">
      <div class="row text-center">
        <div class="col-sm-12">
          <h1 class="home-text">Welcome to Make API!</h1>
          <p class="home-text">To start, browse all products or search for a specific type of product.</p>
          <p class="home-text">Tips: try search for "lipstick", "blush", "eyeshadow", "mascara"...</p>
          <img id="loading-pic" class="align-self-center" src="https://loading.io/spinners/eclipse/lg.ring-loading-gif.gif">
        </div>
      </div>
    </div>`;
}

function productsList(context) {
    
  let selected = context.path.replace('/', '');

  console.log(selected);

  getProducts(selected);
}