//dragging
$(function() {
    $(".draggable").draggable();
});

//conway
$("#conway-icon").dblclick(function() {
    $("#conway-window").show();
});
$("#conway-close").click(function() {
    $("#conway-window").hide();
});

//todo
$("#todo-icon").dblclick(function() {
    $("#todo-window").show();
});
$("#todo-close").click(function() {
    $("#todo-window").hide();
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