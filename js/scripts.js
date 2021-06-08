$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $("#formOne").hide();
    const Item1 = $("input#item1").val(); 
    const Item2 = $("input#item2").val();
    const Item3 = $("input#item3").val();
    const Item4 = $("input#item4").val();
    const Item5 = $("input#item5").val();
  let Groceries = [Item1,Item2,Item3,Item4,Item5];
  console.log(Groceries)  
  Groceries.sort().forEach(function(i) {
  $(".list ul").append('<li>' + 'item: ' + i.toUpperCase() + '</li>');
});
 
  });  
});    
