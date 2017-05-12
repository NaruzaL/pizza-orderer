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
    else if (this.pizzaSize === "med"){
      cost = 25;
    }
      else if (this.pizzaSize === "large"){
        cost = 36;
      }
        for (var i =1; i < this.toppings.length; i ++) {
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
      var totalPrice = newPizza.price();
      $("#display").text(totalPrice)
      $("#pizzaSize").text(this.pizzaSize);
      $('#pizzaToppings').text(this.toppings);
      $("#selectors").hide();
      $('#result').fadeIn();


  });
});
