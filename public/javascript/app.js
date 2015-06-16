

function postFood(event) {
 event.preventDefault();
 var $formData = $(this).serialize();
 $.post('/foods', $formData)
   .done(function(data){
    console.log(data);
     var $food = $('<div class="">' + data.food.name +  "<button id='delete'>delete</button>" + '</div>');
     $(".listOfFood").append($food);
   });
}


function getFood() {
 // AJAX for getting todo data
 $.get("/foods")
   .done(function(data){
     $(data).each(function(index,food){
       var $food = $('<div class="todo">' + food.name + "<button id='delete'>delete</button>" + '</div>' );
       $(".listOfFood").append($food);
     });
   });
}

function deleteFood(e) {
 var deleteButton = $(this)
  $.post("/foods/:id", delete).done(function(data) {
    deleteButton.parent().remove;
  });
}

$(document).ready(function(){

getFood();

$('#newFood').on('submit', postFood);

$('.listOfFood').on('click', '#delete',  deleteFood);

});