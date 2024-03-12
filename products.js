var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}


const options = document.getElementById("filterOptions");
const option_container = document.getElementById("row_");

function byDefault() {
    option_container.innerHTML = `
    <div class="col-4">
            <a href="products-detaile.html"><img src="image/product-1.jpg" alt="1"></a>
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>200.00</p>
        </div>
        <div class="col-4">
            <img src="image/product-2.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star-half" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>25.00</p>
        </div>
        <div class="col-4">
            <img src="image/product-3.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>100.00</p>
        </div>
        <div class="col-4">
            <img src="image/product-4.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>600.00</p>
        </div>
        
    </div>
    <div class="row">
        <div class="col-4">
            <img src="image/product-5.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>550.00</p>
        </div>
        <div class="col-4">
            <img src="image/product-6.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star-half" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>600.00</p>
        </div>
        <div class="col-4">
            <img src="image/product-7.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>450.00</p>
        </div>
        <div class="col-4">
            <img src="image/product-8.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>500.00</p>
        </div>

        
    </div>
    <div class="row">
        <div class="col-4">
            <img src="image/product-9.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>500.00</p>
        </div>
        <div class="col-4">
            <img src="image/product-10.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star-half" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>500.00</p>
        </div>
        <div class="col-4">
            <img src="image/product-11.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>500.00</p>
        </div>
        <div class="col-4">
            <img src="image/product-12.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>500.00</p>
        </div>
    `
}

function byPrices() {
  option_container.innerHTML = `
  <div class="col-4">
  <img src="image/product-2.jpg" alt="1">
  <h4>Red Printed Store</h4>
  <div class="rating">
      <i class="fa fa-star" ></i>
      <i class="fa fa-star" ></i>
      <i class="fa fa-star" ></i>
      <i class="fa fa-star-half" ></i>
      <i class="fa-regular fa-star"></i>
  </div>
  <p>25.00</p>
</div>


<div class="col-4">
            <img src="image/product-3.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">    
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>100.00</p>
        </div>



        <div class="col-4">
            <a href="products-detaile.html"><img src="image/product-1.jpg" alt="1"></a>
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>200.00</p>
        </div>
        <div class="col-4">
        <img src="image/product-10.jpg" alt="1">
        <h4>Red Printed Store</h4>
        <div class="rating">
            <i class="fa fa-star" ></i>
            <i class="fa fa-star" ></i>
            <i class="fa fa-star" ></i>
            <i class="fa fa-star-half" ></i>
            <i class="fa-regular fa-star"></i>
        </div>
        <p>300.00</p>
    </div>

    <div class="col-4">
            <img src="image/product-11.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>350.00</p>
        </div>

        <div class="col-4">
        <img src="image/product-7.jpg" alt="1">
        <h4>Red Printed Store</h4>
        <div class="rating">
            <i class="fa fa-star" ></i>
            <i class="fa fa-star" ></i>
            <i class="fa fa-star" ></i>
            <i class="fa fa-star" ></i>
            <i class="fa-regular fa-star"></i>
        </div>
        <p>450.00</p>
    </div>

    <div class="col-4">
            <img src="image/product-8.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>500.00</p>
        </div>

        <div class="col-4">
            <img src="image/product-5.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>550.00</p>
        </div>

        <div class="col-4">
            <img src="image/product-4.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>600.00</p>
        </div>

        <div class="col-4">
            <img src="image/product-6.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star-half" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>650.00</p>
        </div>

        <div class="col-4">
            <img src="image/product-9.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>700.00</p>
        </div>
        <div class="col-4">
            <img src="image/product-12.jpg" alt="1">
            <h4>Red Printed Store</h4>
            <div class="rating">
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa fa-star" ></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>750.00</p>
        </div>
        
    
    `;
}


options.addEventListener("change", () => {
    if(options.value == "price"){
        byPrices();
    }
    if(options.value == "default") byDefault();
})
