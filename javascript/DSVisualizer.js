//CANVAS VARIABLES
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var stage = new createjs.Stage("myCanvas");

//VARIABLES
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
var NODE_SIZE = 30;
const NODE_COLOUR = "DeepSkyBlue";

// blacks out canvas
function screenBlack() {
    //draws rectangle over screen
    var rect = new createjs.Shape();
    rect.graphics.beginFill('black');
    rect.graphics.drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    rect.graphics.endFill();
    stage.addChild(rect); 
    stage.update();  
}

// STACK FUNCTIONS: PUSH, POP
var SNODE_COUNT = 0;
var SXPOS = 50, SYPOS = 50; SDX = 100;
var STACK_NODE_LIST = [];

var stackData = 0;
$('#push').click(function (){
    //out of space on canvas
    if(SNODE_COUNT == 48) {
        alert("Out of Space!")
    } else {
        //creates new node, adds it to node list, and draws new node
        STACK_NODE_LIST.push(new Node(SXPOS, SYPOS, stackData));
        STACK_NODE_LIST[STACK_NODE_LIST.length - 1].drawNode();
        //updates next node's position
        SNODE_COUNT++;
        SYPOS = 50 + (Math.floor(SNODE_COUNT/8) * 100);
        SXPOS = 50 + ((SNODE_COUNT % 8) * 100);  
        stackData++; 
    }
});

$('#pop').click(function (){
    if(STACK_NODE_LIST.length > 0) {
        //pops node from list
        let deletedNode = STACK_NODE_LIST.pop();
        //draws rectangle over screen
        screenBlack();
        //redraw every node
        for(let i = 0; i < STACK_NODE_LIST.length; i++) {
            STACK_NODE_LIST[i].drawNode();
        }
        stage.update();
        //calcualtes next node's position
        SNODE_COUNT--;
        SXPOS = deletedNode.getX();
        SYPOS = 50 + (Math.floor(SNODE_COUNT/8) * 100);
    }
});

// QUEUE FUNCTIONS: ENQUEUE, DEQUEUE
var QNODE_COUNT = 0;
var QXPOS = 50, QYPOS = 50; QDX = 100;
var QUEUE_NODE_LIST = [];

var queueData = 0;
$('#enqueue').click(function (){
    //out of space on canvas
    if(QNODE_COUNT == 48) {
        alert("Out of Space!")
    } else {
        //creates new node, adds it to node list, and draws new node
        QUEUE_NODE_LIST.push(new Node(QXPOS, QYPOS, queueData));
        QUEUE_NODE_LIST[QUEUE_NODE_LIST.length - 1].drawNode();
        //updates next node's position
        QNODE_COUNT++;
        QYPOS = 50 + (Math.floor(QNODE_COUNT/8) * 100);
        QXPOS = 50 + ((QNODE_COUNT % 8) * 100);
        console.log(QXPOS);
        // if(QNODE_COUNT % 8 == 0) {
        //     QXPOS += 0;
        // } else if(Math.floor(QNODE_COUNT/8) % 2 == 0){
        //     QXPOS += 100;
        // } else {
        //     QXPOS -= 100;
        // }    
        queueData++; 
        console.log(QXPOS, QYPOS);
    }
});

$('#dequeue').click(function () {
    if(QUEUE_NODE_LIST.length > 0) {
        //draws rectangle over screen
        screenBlack();
        //temp list for shifting x and y positions    
        let tempList = [];
        for(let i = 0; i < QUEUE_NODE_LIST.length; i++) {
            tempList.push(new Node(QUEUE_NODE_LIST[i].getX(), QUEUE_NODE_LIST[i].getY(), QUEUE_NODE_LIST[i].getData()));
        }
        for(let i = 1; i < QUEUE_NODE_LIST.length; i++) {
            //console.log(tempList[i-1].getX());
            QUEUE_NODE_LIST[i].setX(tempList[i-1].getX());
            QUEUE_NODE_LIST[i].setY(tempList[i-1].getY());
            QUEUE_NODE_LIST[i].drawNode();
        }
        QUEUE_NODE_LIST.shift();
        QXPOS = tempList[tempList.length-1].getX();
        QYPOS = tempList[tempList.length-1].getY();
        QNODE_COUNT--;
        console.log(QXPOS, QYPOS);
    }
});

///////////////////////////MENU BUTTONS///////////////////////////////
$('#stack_button').click(function () {
    $('.right_button').hide();
    $('#stack').show();
    screenBlack();
    //redraw every node
    for(let i = 0; i < STACK_NODE_LIST.length; i++) {
        STACK_NODE_LIST[i].drawNode();
    }
});
$('#queue_button').click(function () {
    $('.right_button').hide();
    $('#queue').show();
    screenBlack();
    //redraw every node
    for(let i = 0; i < QUEUE_NODE_LIST.length; i++) {
        QUEUE_NODE_LIST[i].drawNode();
    }
});
$('#bst_button').click(function () {
    $('.right_button').hide();
    $('#bst').show();
    screenBlack();
    //redraw every node
});
///////////////////////////NODE CLASS///////////////////////////////
class Node {
    constructor(x, y, data) {
        this.x = x;
        this.y = y;
        this.data = data;
        
        this.circle = new createjs.Shape();
            this.circle.graphics.beginFill(NODE_COLOUR).drawCircle(0, 0, NODE_SIZE);
            this.circle.x = x;
            this.circle.y = y;
        
        this.text = new createjs.Text(data, "20px Arial", "#000");
            this.text.x = x - this.text.getMeasuredWidth()/2;
            this.text.y = y + this.text.getMeasuredHeight()/2;
            this.text.textBaseline = "alphabetic";
    }

    drawNode() {
        stage.addChild(this.circle);
        stage.addChild(this.text);
        stage.update();
    } 

    getX() {return this.x;}
    getY() {return this.y;}
    getData() {return this.data}
    setX(x) {
        this.x = x;
        this.circle.x = x;
        this.text.x = x - this.text.getMeasuredWidth()/2;
    }
    setY(y) {
        this.y = y;
        this.circle.y = y;
        this.text.y = y + this.text.getMeasuredHeight()/2;
    }
    setData(data) {this.data = data}
}