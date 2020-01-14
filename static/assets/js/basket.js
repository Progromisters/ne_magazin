$(document).ready(function () {
    //сохранение информации в data для ajax-запроса
    function basketUpdating(product_id, product_count, is_delete) {
        var data = {};
        data.product_id = product_id;
        data.product_count = product_count;
        var csrf_token = $('#form_btn [name="csrfmiddlewaretoken"]').val();
        data['csrfmiddlewaretoken'] = csrf_token;
        if (is_delete) {
            data["is_delete"] = true;
        }
        var url = $('#form_btn').attr('action');
        //ajax-запрос
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            cache: true,
            success: function (data) {
                console.log('OK');
                //отображение количества товаров в корзине
                if (data.products_total || data.products_total == 0) {
                    $('#basket_total').text(data.products_total);
                    $('.basket-items').html("");
                    $.each(data.products, function (k, v) {
                        $('.basket-items').append(
                            '<li class="dropdown__item basket__item">'
                            + v.pr_name + ' $' + v.pr_price + ' ' + ' (' + v.pr_count + ') ' +
                            '<a class="devare-item fas fa-times" href="" data-product_id="' + v.pr_id + '" ></a>' +
                            '</li>'
                        );
                    });
                }

            },
            error: function () {
                console.log('ERROR');
            }
        });
    }

    //проход по кнопкам в цикле
    var product_count;
    var submit_btns = document.querySelectorAll('.submit_btn');
    submit_btns.forEach(function(submit_btn){
        submit_btn.addEventListener('click', function(){
            //сохранение информации о товаре
            var product_id = submit_btn.dataset.product_id;
            product_count = 1;
            
            basketUpdating(product_id, product_count, is_delete=false);
        });
    });

    //удаление товара
    $(document).on('click', '.devare-item', function (e) {
        // e.stopImmediatePropagation();
        e.preventDefault();
        product_id = $(this).data("product_id");
        product_count = 0;

        basketUpdating(product_id, product_count, is_delete=true);
    });
});
