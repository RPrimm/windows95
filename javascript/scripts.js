//dragging
$(function() {
    $(".draggable").draggable();
});

//time
let date = new Date();
let time = date.getTime();
console.log(date.getHours()+":"+date.getMinutes());

//language
$('[lang="ge"]').hide();
$('#language').click(function() {
    $('[lang="ge"]').toggle();
    $('[lang="en"]').toggle();
});

//conway
let conwayOpen = false;
$("#conway-icon").dblclick(function() {
    if(!conwayOpen) {
        $("#conway-window").show();
        let newDiv = $('<div class="footer-tab" id="conway-footer">Conway</div>');
        $('#footer-left').append(newDiv);
        conwayOpen = true;
    } 
});
$("#conway-close").click(function() {
    if(conwayOpen) {
        $("#conway-window").hide();
        $('#conway-footer').remove();
        conwayOpen = false;
    } 
});

//todo
let todoOpen = false;
$("#todo-icon").dblclick(function() {
    if(!todoOpen) {
        $("#todo-window").show();
        let newDiv = $('<div class="footer-tab" id="todo-footer">To-Do List</div>');
        $('#footer-left').append(newDiv); 
        todoOpen = true;
    }
});
$("#todo-close").click(function() {
    if(todoOpen) {
        $("#todo-window").hide();
        $('#todo-footer').remove();
        todoOpen = false;
    }
});

//Data Strucutre
let dsvOpen = false;
$("#dsv-icon").dblclick(function() {
    if(!dsvOpen) {
        $("#dsv-window").show();
        let newDiv = $('<div class="footer-tab" id="dsv-footer">Data Structure</div>');
        $('#footer-left').append(newDiv); 
        dsvOpen = true;
    }
});
$("#dsv-close").click(function() {
    if(dsvOpen) {
        $("#dsv-window").hide();
        $('#dsv-footer').remove();
        dsvOpen = false;
    }
});

//links
$("#linkedin-icon").dblclick(function() {
    window.location.href = 'https://linkedin.com/in/rocket-primm-b81600250'; 
});
$("#github-icon").dblclick(function() {
    window.location.href = 'https://github.com/RPrimm'; 
});
$("#about-icon").dblclick(function() {
    alert("Still working on it!")
});