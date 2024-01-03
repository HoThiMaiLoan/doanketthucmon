function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    return urlParams.get(param)
}

$(document).ready(function () {
    var productId = getParam('productId')
    $.ajax({
        url: 'http://localhost/api/products/show.php?productId=' + productId,
        type: 'GET',
        success: function (data) {
            var product = JSON.parse(data)
            renderProductUI(product)
            addEvents()
        },
        error: function (e) {
            console.log(e.message);
        }
    });
})


// show All Detail Products
function renderProductUI(products) {
    $('#product-detail').append(
            `
            <div class="small-container single-product">
            <div class="row">
               <div class="col-2">
                    <img src="${products.image}" width="100%" id="productimg">
                    <div class="small-img-row">
                        
                    </div>
                </div>
                <div class="col-2">
                    
                    <h1>${products.name}</h1>
                    <h4>${products.price}</h4>
                    <select name="" id="">
                        <option value="">Select Size</option>
                        <option value="">30cm</option>
                        <option value="">35cm</option>
                        <option value="">40cm</option>
                        <option value="">45cm</option>
                        
                    </select>
                    <input type="number" value="1">
                    <button id ="btnAddToCart" href="cart.html" class="btn">Add TO Card</button>
                    </br>
                    </br>
                    </br>
                </br>
                    <p>
                    
                    </p>
                </div>
            </div>
        </div>
            `
    )
}

