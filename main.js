var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var board = document.getElementById("board");

var intsizeInterval = 2;
var intTmrInterval  = 16;
var board_heightmin = 100;
var board_height = 300;
var board_aspect = 1.25;

var lightbutton = document.getElementsByClassName("lightButton");
console.log(lightbutton);

function UpdateBoardSize()
{
    console.log(window.innerHeight);
    str = window.innerHeight - board_height + "px";
    a1.style.height = str;
    str = board_height + "px";
    a2.style.height = str;
    str = board_height * board_aspect + "px";
    board.style.width = str;
}

function zoomUpDown(){
    tmr_zoomUp = setInterval(function(){
        board_height += intsizeInterval;
        UpdateBoardSize();
    }, intTmrInterval)
}

function zoomUpUp(){
    clearInterval(tmr_zoomUp);
}

function zoomOutDown(){
    tmr_zoomDown = setInterval(function(){
        board_height -= intsizeInterval;
        if(board_height < board_heightmin)board_height = board_heightmin;
        UpdateBoardSize();
    }, intTmrInterval)
}

function zoomOutUp(){
    clearInterval(tmr_zoomDown);
}

function lightOn(button){
    console.log(button);
    console.log(button.id);
    var output = document.getElementsByClassName("output");
    if(button.id == "0"){
        for(var i=0; i<output.length;i++){
            if(output[i].id == "out00"){
                output[i].style. background = "white";  
            }
        }
    }
    if(button.id == "1"){
        for(var i=0; i<output.length;i++){
            if(output[i].id == "out01"){
                output[i].style. background = "white";  
            }
        }
    }
    if(button.id == "2"){
        for(var i=0; i<output.length;i++){
            if(output[i].id == "out02"){
                output[i].style. background = "white";  
            }
        }
    }
    if(button.id == "3"){
        for(var i=0; i<output.length;i++){
            if(output[i].id == "out03"){
                output[i].style. background = "white";  
            }
        }
    }
    if(button.id == "4"){
        for(var i=0; i<output.length;i++){
            if(output[i].id == "out00"){
                output[i].style. background = "black";  
            }
        }
    }
    if(button.id == "5"){
        for(var i=0; i<output.length;i++){
            if(output[i].id == "out01"){
                output[i].style. background = "black";  
            }
        }
    }
    if(button.id == "6"){
        for(var i=0; i<output.length;i++){
            if(output[i].id == "out02"){
                output[i].style. background = "black";  
            }
        }
    }
    if(button.id == "7"){
        for(var i=0; i<output.length;i++){
            if(output[i].id == "out03"){
                output[i].style. background = "black";  
            }
        }
    }

}

window.onload = function(){
    UpdateBoardSize();
}
window.onresize = function(){
    UpdateBoardSize();
}