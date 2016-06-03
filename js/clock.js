/**
 * Created by admin on 27/05/2016.
 */
var intInterval;
var handArray = [];
var intAbsGroupCounter = 1;

function hand(id, positionInGroup, group, tempFigurePosition, tempFigureName, divId) {
    this.id = id;
    this.positionInGroup = positionInGroup;
    this.group = group;
    this.divId = divId;
    this.tempFigurePosition = tempFigurePosition;  //this is used for when the item is being configured with other items to form a figure
    this.tempFigureName = tempFigureName;  //this is used for when the item is being configured with other items to form a figure
}


$( document ).ready(function() {
    populateArrays();
    addHandsToPage();
});




function test1(){
    showTime();
}

function test2(){
    //groupHoriz(4);
    //all1Vert();
    //groupSquare(4);
    //groupDiagAll(true);
    //groupSquareOneHit(5, 90, 180, 270, 180, 90, 0, 270, 0, 2000);
    groupAll(1000, 0, true);
    //groupCircle(4, 2000, 0);
    //groupCircleAll(2000, 0, true);
}

function test3(){
    //groupDiagOutAll(true);
    //groupOutSquare(4);
    groupOutAll(1000, 0, true);
    //groupOutCircle(4, 2000, 0);
    //groupOutCircleAll(2000, 0, true);
}

function animate(elId, animateTo, duration, easing, rndDurationSeed){
    var dur = duration;
    if (rndDurationSeed > 0){
        dur += Math.floor(Math.random() * rndDurationSeed) + 1
    }
    $(elId).rotate(
        {
            animateTo:animateTo,
            duration:dur,
            easing: easing
        }
    )
}


function clearHandArray(){
    //loop through the array and clear all of the temporary values
    for (var i=0; i<=handArray.length-1; i++){
        handArray[i].tempFigureName = "";
        handArray[i].tempFigurePosition = "";
    }
}

function populateArrays(){
    //create the array of hands
    var divId = "container";
    var intLimit = (160*2);
    var intLocationCounter = 1;
    var intRowCounter = 1;
    var int1stRowToggle = true;
    var intGroupCounter = 1;
    var intGroupValue = 1;
    var intAbsRowCounter = 1;
    intAbsGroupCounter = 1;

    for (var i=0; i<=intLimit-1; i++){
        if (i===(intLimit/2)){
            divId = "container2";

            //reset all of the counters for the new div layer
            intAbsRowCounter = 1;
            intRowCounter = 1;
            intGroupCounter = 1;
            intGroupValue = 1;
        }
        handArray.push(new hand("hand" + i, intLocationCounter, intGroupValue, 0, "", divId));

        intRowCounter ++;
        intLocationCounter++;
        intGroupCounter ++;

        //increment the group counter after each 2 items
        if (intGroupCounter===3){
            intAbsGroupCounter ++;
            intGroupValue ++;
            intGroupCounter=1;
        }

        //change the row toggle after every 16 items
        if (intRowCounter===17){
            intAbsRowCounter ++;
            intRowCounter = 1;
            int1stRowToggle = !int1stRowToggle;
            if (int1stRowToggle) {
                intLocationCounter = 1;
            }else{
                intLocationCounter = 3;
            }

            //the row has changed, so set the group value accordingly
            //reset the group value based on the row counter
            switch(intAbsRowCounter) {
                case 1:
                    break;
                case 2:
                    intGroupValue = 1;
                    break;
                case 4:
                    intGroupValue = 9;
                    break;
                case 6:
                    intGroupValue = 17;
                    break;
                case 8:
                    intGroupValue = 25;
                    break;
                case 10:
                    intGroupValue = 33;
                    break;
                default:
                    break;
            }

        }

        if (int1stRowToggle){
            //this now toggles between 1 and 2
            if (intLocationCounter===3){
                intLocationCounter=1;
            }
        }else{
            //this now toggles between 3 and 4
            if (intLocationCounter===5){
                intLocationCounter=3;
            }
        }

    }
}

function addHandsToPage(){

    var element;
    for (var i=0; i<=handArray.length-1; i++){
        element = document.createElement("div");
        element.className = "hand";
        element.innerHTML = '<img id="hand' + i + '"  src="img/hand2.png" posInGrp="' + handArray[i].positionInGroup + '" width="58px" height="58px">';
        //element.appendChild(document.createTextNode('<img id="hand' + i + '"  src="img/hand.png">'));
        document.getElementById(handArray[i].divId).appendChild(element);
    }
}


function rotateHands(moveTo, duration){
    for (var i=0; i<=handArray.length-1; i++){
        $("#hand" + i).rotate({ animateTo:Math.floor(Math.random() * 359) + 1,duration:duration + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
    }
}

function startRandom(){
    rotateHands(Math.floor(Math.random() * 359) + 1 , 2000);

    intInterval = setInterval(function(){
        rotateHands(Math.floor(Math.random() * 359) + 1 , 2000);
    }, 5000);
}

function stop() {
    clearInterval(intInterval);
}


function showTime(duration, rndSeed){
    var d = new Date();
    var intDig1 = 0;
    var intDig2 = 0;
    var intDig3 = 0;
    var intDig4 = 0;
    if (String(d.getHours()).length<2){
        intDig2 = String(d.getHours());
    }else{
        intDig1 = String(d.getHours()).substr(0, 1);
        intDig2 = String(d.getHours()).substr(1, 1);
    }
    if (String(d.getMinutes()).length<2){
        intDig4 = String(d.getMinutes());
    }else{
        intDig3 = String(d.getMinutes()).substr(0, 1);
        intDig4 = String(d.getMinutes()).substr(1, 1);
    }

    //clear the current values
    clearHandArray();

    showDigit(intDig1, 18, "digitPos1", duration,rndSeed);
    showDigit(intDig2, 21, "digitPos2", duration, rndSeed);
    showDigit(intDig3, 25, "digitPos3", duration, rndSeed);
    showDigit(intDig4, 28, "digitPos4", duration, rndSeed);
}

function showDigit(intDigit, intStartAt, digitPos, duration, rndSeed) {
    switch (String(intDigit)) {
        case "0":
            digit0(intStartAt, digitPos, duration, rndSeed);
            break;
        case "1":
            digit1(intStartAt, digitPos, duration, rndSeed);
            break;
        case "2":
            digit2(intStartAt, digitPos, duration, rndSeed);
            break;
        case "3":
            digit3(intStartAt, digitPos, duration, rndSeed);
            break;
        case "4":
            digit4(intStartAt, digitPos, duration, rndSeed);
            break;
        case "5":
            digit5(intStartAt, digitPos, duration, rndSeed);
            break;
        case "6":
            digit6(intStartAt, digitPos, rndSeed);
            break;
        case "7":
            digit7(intStartAt, digitPos, rndSeed);
            break;
        case "8":
            digit8(intStartAt, digitPos, rndSeed);
            break;
        case "9":
            digit9(intStartAt, digitPos, rndSeed);
            break;
        default:
            break;
    }
}


function allHoriz(ignoreFigures){
    clearInterval(intInterval);
    var boolSkip = false;

    for (var i=0; i<=handArray.length-1; i++){
        boolSkip = false;
        //if there are figures drawn and we want to retain them, ignore any clocks that have are part of a figure
        if (ignoreFigures===true){
            if (handArray[i].tempFigurePosition != ""){
                boolSkip = true;
            }
        }
        if (!boolSkip) {
            if (handArray[i].divId === "container") {
                $("#hand" + i).rotate({
                    animateTo: 90,
                    duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                    easing: $.easing.easeInOutSine
                })
            } else {
                $("#hand" + i).rotate({
                    animateTo: 270,
                    duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                    easing: $.easing.easeInOutSine
                })
            }
        }
    }
}

function allVert(ignoreFigures){
    clearInterval(intInterval);
    var boolSkip = false;

    for (var i=0; i<=handArray.length-1; i++){
        boolSkip = false;
        //if there are figures drawn and we want to retain them, ignore any clocks that have are part of a figure
        if (ignoreFigures===true){
            if (handArray[i].tempFigurePosition != ""){
                boolSkip = true;
            }
        }
        if (!boolSkip) {
            if (handArray[i].divId === "container") {
                $("#hand" + i).rotate({
                    animateTo: 0,
                    duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                    easing: $.easing.easeInOutSine
                })
            } else {
                $("#hand" + i).rotate({
                    animateTo: 180,
                    duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                    easing: $.easing.easeInOutSine
                })
            }
        }
    }
}

function groupHoriz(intGroup, ignoreFigures){
    clearInterval(intInterval);
    var boolSkip = false;

    for (var i=0; i<=handArray.length-1; i++){
        boolSkip = false;
        //if there are figures drawn and we want to retain them, ignore any clocks that have are part of a figure
        if (ignoreFigures===true){
            if (handArray[i].tempFigurePosition != ""){
                boolSkip = true;
            }
        }
        if (!boolSkip) {
            if (handArray[i].group === intGroup) {
                if (handArray[i].divId === "container") {
                    $("#hand" + i).rotate({
                        animateTo: 0,
                        duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                        easing: $.easing.easeInOutSine
                    })
                } else {
                    $("#hand" + i).rotate({
                        animateTo: 180,
                        duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                        easing: $.easing.easeInOutSine
                    })
                }
            }
        }
    }
}



function all1Vert(){
    //move all position 1 to vertical
    clearInterval(intInterval);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].positionInGroup === 1){
            if (handArray[i].divId === "container"){
                $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
            }else{
                $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
            }
        }
    }
}
