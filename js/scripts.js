// back end -----------------------------------------------------
function pizza(toppings, size) {
    this.toppings = toppings;
    this.pizzaSize = size;
}

pizza.prototype.price = function(){
  var cost = 0;
  if (newPizza.pizzaSize === "small"){
    cost = 4;
  }
    else if (newPizza.pizzaSize === "med"){
      cost = 5;
    }
      else if (newPizza.pizzaSize === "large"){
        cost = 6;
      }
      for (var i =1; i < newPizza.toppings.length; i ++) {
        cost += .10;
      }
      return cost

}






//front end -----------------------------------------------
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
      var toppings = [];
      $('input:checkbox[name=toppings]:checked').each(function(){
        toppings.push($(this).val())
      });
      var size = parseInt($('input:radio[name=size]:checked').val());
      var newPizza = new pizza(toppings, size);
      console.log(newPizza);
  });
});
