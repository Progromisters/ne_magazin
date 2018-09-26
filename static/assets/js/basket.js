$(document).ready(function () {
  var submit_btn = $('#submit_btn');
  submit_btn.click(function () {
    var product_id = submit_btn.data("product_id");
    var product_name = submit_btn.data("product_name");
    var product_price = submit_btn.data("product_price");
    console.log(product_id);
    console.log(product_name);
    console.log(product_price);

    //
    $('.basket-items ul').append(
      '<li>'
      + product_name + ' $' + product_price + ' ' + '<a class="delete-item" href="">x</a>' +
      '</li>'
    );

  });


  //корзина
  function showingBasket(){
    $('.basket-items').toggleClass('hidden');
  }

  $('.basket-container').on('click', function(e){
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
     })
});
