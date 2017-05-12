function pizza(meats, veggies, size) {
    this.pizzaMeats = meats;
    this.pizzaVeggies = veggies;
    this.pizzaSize = size;

}







$(document).ready(funciton(){
  $("form#pizza").submit(function(event){
    event.preventDefault();

    var meats = $(input:checkbox[name=meats]:checked).val();
    var veggies = $(input:checkbox[name=veggies]:checked).val();
    var size = $(input:checkbox[name=size]:checked).val();
    var newPizza = new pizza(meats, veggies, size);
  });
});
