
//todo item count
var todoCount = 1;
var edit = false;
var editTitle;

$(document).ready(function() {
  //adds todo item
  $('#add-button').click(function() {
    $('#add-modal').css('display', 'block');  
  });

  //adds todo item with information entered in the modal
  $('#submit-information').click(function() {
    // when first creating a todo item
    if(!edit) {
      //gets title and description from inputs
      var title = $('#title').val();
      var description = $('#description').val();

      //adds todo to list with entered data
      var newDiv = $('<div class="todo-item ' + todoCount + '"><div class="todo-item-left"><input type="checkbox" id="check1"><label for="check1" id="title'+todoCount+'">Title</label></div><div class="todo-item-right"><div class="edit"><i class="fa-solid fa-pen-to-square"></i></div><div class="trash"><i class="fa-solid fa-trash"></i></div></div></div>');
      $('.todo-container').prepend(newDiv);   
      $('#title'+todoCount).text(title);
      todoCount += 1;
    //when editing a todo item
    } else {
      var title = $('#title').val();
      var description = $('#description').val();
      $('#'+editTitle).text(title);
      edit = false;
    }
  });

  //closes modal
  $('.close').click(function() {
    $('#add-modal').css('display', 'none');
    $('#title').val('');
    $('#description').val('');
  });

  //deletes item when trashcan is clicked
  $(document).on('click', '.trash', function() {
    $(this).parent().parent().remove();
  });

  //allows editing of todo items
  $(document).on('click', '.edit', function() {
    edit = true;
    $('#add-modal').css('display', 'block');
    editTitle = $(this).parent().parent().find('label').attr('id');
    $('#title').val($('#'+editTitle).text());
  });
});
