// back end -----------------------------------------------------
function pizza(toppings, size) {
    this.toppings = toppings;
    this.pizzaSize = size;
}

pizza.prototype.price = function(){
  var cost = 0;
  if (this.pizzaSize === "small"){
    cost = 14;
  }
    else if (this.pizzaSize === "medium"){
      cost = 17;
    }
      else if (this.pizzaSize === "large"){
        cost = 20;
      }
        for (var i = 0; i < this.toppings.length; i ++) {
          cost += 1;
        }
        return cost

}






//front end -----------------------------------------------
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
      var toppings = [];
      $('input:checkbox[name=toppings]:checked').each(function(){
        toppings.push($(this).val());
        console.log(toppings);
      });
      var size = $('input:radio[name=size]:checked').val();
      console.log(size);
      var newPizza = new pizza(toppings, size);
      console.log(newPizza)
      var totalPrice = newPizza.price();
      $("#display").text(totalPrice)
      $("#pizzaSize").text(size);
      toppings.forEach(function(i){
      $('#pizzaToppings').append("<li> + i + </li>");
      });
      $("#selectors").hide();
      $('#result').fadeIn();


  });
});
