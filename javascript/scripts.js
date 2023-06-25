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
$('.language').click(function() {
    $('[lang="ge"]').toggle();
    $('[lang="en"]').toggle();
});

//tells which window was most recently clicked on
var active = "";

//CONWAY
//open window functionality
let conwayOpen = false;
$("#conway-icon").dblclick(function() {
    if(!conwayOpen) {
        $("#conway-window").show();
        let newDiv = $('<div class="footer-tab" id="conway-footer">Conway</div>');
        $('#footer-left').append(newDiv);
        conwayOpen = true;
    } 
});
// close button functionality
$("#conway-close").click(function() {
    if(conwayOpen) {
        $("#conway-window").hide();
        $('#conway-footer').remove();
        conwayOpen = false;
    } 
});
//makes the conway window the active tab
$('#conway-window').click(function() {
    if(active != 'c'){
        active = 'c';
        $('.project-item').css('z-index', '2');
        $('#conway-window').css('z-index', '9');
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
$('#todo-window').click(function() {
    if(active != 't'){
        active = 't';
        $('.project-item').css('z-index', '2');
        $('#todo-window').css('z-index', '9');
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
$('#dsv-window').click(function() {
    if(active != 'd'){
        active = 'd';
        $('.project-item').css('z-index', '2');
        $('#dsv-window').css('z-index', '9');
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