function orderBurger(extras1) {
  extras1 = prompt(`What extras you want on your burgers?`);
  alert(`Burger with ` + extras1 + ` coming right up!`);
}
function orderPizza(topping) {
  topping = prompt(`What topping would you like on your pizza?`);
  if (topping == `olives`) {
    alert(`Sorry we're out of olives, try something else`);
    topping = prompt(`What topping would you like on your pizza?`);
  }
  drink = prompt(`What drink do you want?`);
  if (drink == `coca cola`) {
    zero = prompt(`normal or zero?`);
    alert(
      `Pizza with ` +
        topping +
        ` and ` +
        drink +
        ` ` +
        zero +
        ` on the side is on the way`
    );
  } else
    alert(
      `Pizza with ` + topping + ` and ` + drink + ` on the side is on the way`
    );
}
