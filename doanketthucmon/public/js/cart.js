var itemList = []

function loadCart() {
    var json = localStorage.getItem('cart')
    if (json != null) {
        itemList = JSON.parse(json)     //sử dụng để chuyển đổi một chuỗi JSON thành một đối tượng JavaScript.
    }

    console.log(itemList)
    render(itemList)
}

function saveToLocaStorage() {
    this.localStorage.setItem('cart', JSON.stringify(itemList))
}
//Save todoList to localStorage when tab closing
window.addEventListener('beforeunload', function (e) {
    saveToLocaStorage()
});

function addToCart(item) {
    let count = 0
    itemList.forEach(it => {
        if (it.productId == item.productId) {
            it.quantity += item.quantity
            count++;
        }
    })
    if (count == 0) {
        itemList.push(item)
    }

    saveToLocaStorage()
}

function removeFromCart(productId) {
    for (let i = 0; i < itemList.length; i++) {
        if (productId == itemList[i].productId) {
            itemList.splice(i, 1)

        }
    }
    render(itemList)
}

function render(cart) {
    $('#cart-list').empty()
    for (let i = 0; i < cart.length; i++) {
        let product = cart[i];
        let productElement =`
        <div class="small-container cart-page">
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src="${product.productImage}" alt="">
                        <div>
                            <p>${product.productName}</p>
                            <Small>Price:${product.productPrice}</Small>
                            <br>
                            <a href="">Remove</a>
                        </div>
                    </div>

                </td>
                <td><input type="number" vaule="1"></td>
                <td>$50.00</td>
            </tr>
        </table>


        <div class="total-price">
            <table>
                <tr>
                    <td>Subtotal</td>
                    <td>$200.0</td>
                </tr>
            </table>
        </div>
    </div>
                

                `;

                // Thêm sản phẩm vào #cart-list
                $('#cart-list').append(productElement);

    }
                // Tính tổng số lượng và giá trị đơn hàng
                let subtotal = 0;
                for (let i = 0; i < cart.length; i++) {
                const product = cart[i];
                subtotal += product.productPrice * product.quantity;
    }

                // Formatting subtotal as currency


                // Render summary
                let summaryElement = `

                    `;

                    $('#cart-list').append(summaryElement);
                    addCartEvents();
}

                    function addCartEvents() {
                        let btnDeleteItem = document.getElementById('btnDeleteItem')
                    btnDeleteItem.addEventListener('click', doDeleteItem)
}

                    function doDeleteItem() {
                        let productId = Number(document.getElementById('productId').value)
                    removeFromCart(productId)
}