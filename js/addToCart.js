$(document).on("ready", function () {
  
  $(".plus-btn").click(function (e) {
    e.preventDefault();

    alert("hello");

    var qty = $(this).closest(".product_data").find(".qty-input").val();

    var value = parseInt(qty, 10);
    value = isNaN(value) ? 0 : value;

    if (value < 10) {
      value++;
      $(".qty-input").val(value);
      $(this).closest(".product_data").find(".qty-input").val(value);
    }
  });

  $(".minus-btn").click(function (e) {
    e.preventDefault();

    alert("hello");

    var qty = $(this).closest(".product_data").find(".qty-input").val();

    var value = parseInt(qty, 10);
    value = isNaN(value) ? 0 : value;

    if (value > 1) {
      value--;
      $(".qty-input").val(value);
      $(this).closest(".product_data").find(".qty-input").val(value);
    }
  });
});
