'use strict';
$(document).ready(function () {
//проход по кнопкам в цикле
    let submit_btns = $('.submit_btn');
    for (let i = 0; i < submit_btns.length; i++) {
        let submit_btn = submit_btns[i];
        submit_btn.onclick = () =>
        {
//сохранение информации о товаре
            let product_id = submit_btn.dataset.product_id;
            let product_name = submit_btn.dataset.product_name;
            let product_price = submit_btn.dataset.product_price;
            console.log(product_id);
            console.log(product_name);
            console.log(product_price);
//сохранение информации в data для ajax-запроса
            let data = {};
            data.product_id = product_id;
            data.product_name = product_name;
            data.product_price = product_price;
            let csrf_token = $('#form_btn [name="csrfmiddlewaretoken"]').val();
            data["csrfmiddlewaretoken"] = csrf_token;
            let url = $('#form_btn').attr('action');
            console.log(url);
            console.log(data);
//ajax-запрос
            $.ajax({
                url: url,
                type: 'POST',
                data: data,
                cache: true,
                success: function(data){
                    console.log("OK");
                    console.log(data.products_total);
                    if (data.products_total){
//отображение количества товаром в корзине
                        $('#basket_total').text(data.products_total)
                    }
                },
                error: function () {
                    console.log("ERROR");
                }
            });
//добавление строки товара в корзину
            $('.basket-items ul').append(
                '<li>'
                + product_name + ' $' + product_price + ' ' + '<a class="delete-item fas fa-times" href=""></a>' +
                '</li>'
            );
        }
    }

//отображение корзины
    function showingBasket() {
        $('.basket-items').toggleClass('hidden');
    }

    $('.basket-container').on('click', function (e) {
        e.preventDefault();
        showingBasket();
    });

    $('.basket-container').mouseover(function () {
        showingBasket();
    });

    $('.basket-container').mouseout(function () {
        showingBasket();
    });

//удаление товара
        $(document).on('click', '.delete-item', function (e) {
            e.preventDefault();
            $(this).closest('li').remove();
        })
});
