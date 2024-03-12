var MenuItems=document.getElementById('MenuItems');
MenuItems.style.maxHeight="0px";

function menutoggle(){
    if(MenuItems.style.maxHeight=="0px"){
        MenuItems.style.maxHeight="200px";
    }
    else{
        MenuItems.style.maxHeight="0px";
    }
};
// 
function updateCart() {
    var cartRows = document.querySelectorAll('.cart-page table tr');
    var subtotal = 0;
   
    cartRows.forEach(function(cartRow, index) {
        if (index !== 0) { 
            var quantity = parseInt(cartRow.querySelector('input[type="number"]').value);
            var price = parseFloat(cartRow.querySelector('.card-info small').textContent.replace('Price: ₹', ''));
            var itemSubtotal = price * quantity;
            cartRow.querySelector('td:nth-child(3)').textContent = '₹' + itemSubtotal; 
            subtotal += itemSubtotal;
        }
    });
   
    document.querySelector('.total-price td:nth-child(2)').textContent = '₹' + subtotal;
    updateTotal(subtotal);
}


function updateTotal(subtotal) {
    
    var tax = subtotal * 0.1;
    var total = subtotal + tax;
   
    document.querySelector('.total-price td:nth-child(4)').textContent = '₹' + total;
}


var quantityInputs = document.querySelectorAll('.cart-page input[type="number"]');


quantityInputs.forEach(function(input) {
    input.addEventListener('input', function() {
        updateCart();
    });
});


var removeCartItemButtons = document.querySelectorAll('.card-info a');


removeCartItemButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        button.closest('tr').remove(); 
        updateCart(); 
    });
});


var checkoutButton = document.querySelector('.btn');

checkoutButton.addEventListener('click', function() {
 
    alert('Your order has been placed successfully!');
    window.location.href = 'index.html'; 
});

updateCart();
