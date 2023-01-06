
//todo item count
var todoCount = 1

//adds todo item with information entered in the modal
$(function() {
    $('#submit-information').click(function() {
        //gets title and description from inputs
        var title = $('#title').val();
        var description = $('#description').val();

        //adds todo to list with entered data
        var newDiv = $('<div class="todo-item ' + todoCount + '"><div class="todo-item-left"><input type="checkbox" id="check1"> <label for="check1" id="title'+todoCount+'">Title</label></div><div class="todo-item-right"><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash" id="trash"></i></div></div>');
        $('.todo-container').prepend(newDiv);   
        $('#title'+todoCount).text(title);
        todoCount += 1;
    });
});

//closes modal
$(function() {
    $('.close').click(function() {
         $('#add-modal').css('display', 'none');
         $('#title').val('');
         $('#description').val('');
    });
});

$(function() {
    $('#trash').click(function() {
         var parent = $(this).parent();
        console.log("cunt");
    });
});




/////////////////////////////MODAL CODE////////////////////////////////////////

// Get the modal
var modal = document.getElementById("add-modal");

// Get the button that opens the modal
var btn = document.getElementById("add-button");

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];
var close2 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}