'use strict';

let submit_btns = $('.submit_btn');
for (let i = 0; i < submit_btns.length; i++){
    let submit_btn = submit_btns[i];
    submit_btn.onclick = () => {
        let product_id = submit_btn.dataset.product_id;
        let product_name = submit_btn.dataset.product_name;
        let product_price = submit_btn.dataset.product_price;
        console.log(product_id);
        console.log(product_name);
        console.log(product_price);
        $('.basket-items ul').append(
            '<li>'
            + product_name + ' $' + product_price + ' ' + '<a class="delete-item fas fa-times" href=""></a>' +
            '</li>'
        );
    };
}
//корзина
function showingBasket(){
    $('.basket-items').toggleClass('hidden');
}

$('.basket-container').on('click', function(e) {
    e.preventDefault();
    showingBasket();
});

$('.basket-container').mouseover(function(){
    showingBasket();
});

$('.basket-container').mouseout(function(){
    showingBasket();
});

//удаление товара
$(document).on('click', '.delete-item', function(e){
    e.preventDefault();
    $(this).closest('li').remove();
    
});

