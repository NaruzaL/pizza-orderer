function pizza(toppings, size) {
    this.toppings = toppings;
    this.pizzaSize = size;
}






//front end -----------------------------------------------
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
      var pizzaPrice = 0;
      var toppings = [];
      $('input:checkbox[name=toppings]:checked').each(function(){
        toppings.push($(this).val())
      });
      var size = parseInt($('input:radio[name=size]:checked').val());
      var newPizza = new pizza(toppings, size);
      console.log(newPizza);
  });
});
