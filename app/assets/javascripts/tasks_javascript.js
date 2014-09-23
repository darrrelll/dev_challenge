// You can use CoffeScript in tasks.js.coffee if you'd rather.

// Adding styling for quick javascript change
function click_complete(id)
{
    var row2Change = document.getElementsByTagName("tr")[id];
    $(row2Change).children().toggleClass("complete-color");
}