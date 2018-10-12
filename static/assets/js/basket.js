'use strict';
$(document).ready(function () {
    //проход по кнопкам в цикле
    var submit_btns = document.querySelectorAll('.submit_btn');
    submit_btns.forEach(function(submit_btn){
        submit_btn.addEventListener('click', function(){
            //сохранение информации о товаре
            var product_id = submit_btn.dataset.product_id;
            var product_name = submit_btn.dataset.product_name;
            var product_price = submit_btn.dataset.product_price;
            console.log(product_id);
            console.log(product_name);
            console.log(product_price);
            //сохранение информации в data для ajax-запроса
            var data = {};
            data.product_id = product_id;
            data.product_name = product_name;
            data.product_price = product_price;
            var csrf_token = $('#form_btn [name="csrfmiddlewaretoken"]').val();
            data['csrfmiddlewaretoken'] = csrf_token;
            var url = $('#form_btn').attr('action');
            console.log(url);
            console.log(data);
            //ajax-запрос
            $.ajax({
                url: url,
                type: 'POST',
                data: data,
                cache: true,
                success: function(data){
                    console.log('OK');
                    console.log(data.products_total);
                    if (data.products_total){
                        //отображение количества товаром в корзине
                        $('#basket_total').text(data.products_total);
                    }
                },
                error: function () {
                    console.log('ERROR');
                }
            });
            //добавление строки товара в корзину
            $('.basket-items').append(
                '<li class="dropdown__item basket__item">'
                + product_name + ' $' + product_price + ' ' + '<a class="devare-item fas fa-times" href=""></a>' +
                '</li>'
            );
        });
    });
    //удаление товара
    $(document).on('click', '.devare-item', function (e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        $(this).closest('li').remove();
    });
});
