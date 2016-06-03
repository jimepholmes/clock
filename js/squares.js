/**
 * Created by admin on 27/05/2016.
 */

function groupSquareOneHit(startAt, tl1, tl2, tr1, tr2, bl1, bl2, br1, br2, dur, rndSeed){
    //this has coords for each item in the group.  set them all
    //do container 1
    animate("#hand" + startAt, tl1, dur, $.easing.easeInOutSine, rndSeed);
    animate("#hand" + (startAt+1), tr1, dur, $.easing.easeInOutSine, rndSeed);
    animate("#hand" + (startAt+16), bl1, dur, $.easing.easeInOutSine, rndSeed);
    animate("#hand" + (startAt+17), br1, dur, $.easing.easeInOutSine, rndSeed);

    //do container 2
    animate("#hand" + (startAt+160), tl2, dur, $.easing.easeInOutSine, rndSeed);
    animate("#hand" + (startAt+161), tr2, dur, $.easing.easeInOutSine, rndSeed);
    animate("#hand" + (startAt+176), bl2, dur, $.easing.easeInOutSine, rndSeed);
    animate("#hand" + (startAt+177), br2, dur, $.easing.easeInOutSine, rndSeed);
}

function groupAll(dur, rndSeed, ignoreFigures){
    for (i=1; i<=intAbsGroupCounter; i++){
        groupSquare(i, dur, rndSeed, ignoreFigures);
    }
}

function groupOutAll(dur, rndSeed, ignoreFigures){
    for (i=1; i<=intAbsGroupCounter; i++){
        groupOutSquare(i, dur, rndSeed, ignoreFigures);
    }
}


function groupSquare(intGroup, dur, rndSeed, ignoreFigures){
    var degrees = 0;
    var boolSkip = false;

    clearInterval(intInterval);

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
                    switch (handArray[i].positionInGroup) {
                        case 1:
                            //$("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                            degrees = 90;
                            break;
                        case 2:
                            degrees = 270;
                            break;
                        case 3:
                            degrees = 90;
                            break;
                        case 4:
                            degrees = 270;
                            break;
                        default:
                            break;
                    }
                } else {
                    switch (handArray[i].positionInGroup) {
                        case 1:
                            degrees = 180;
                            break;
                        case 2:
                            degrees = 180;
                            break;
                        case 3:
                            degrees = 0;
                            break;
                        case 4:
                            degrees = 0;
                            break;
                        default:
                            break;
                    }
                }
                animate("#hand" + i, degrees, dur, $.easing.easeInOutSine, rndSeed);
            }
        }
    }
}


function groupOutSquare(intGroup, dur, rndSeed, ignoreFigures){
    clearInterval(intInterval);
    var degrees = 0;
    var boolSkip = false;

    for (var i=0; i<=handArray.length-1; i++){
        degrees = 0;
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
                    switch (handArray[i].positionInGroup) {
                        case 1:
                            //$("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                            degrees = 270;
                            break;
                        case 2:
                            degrees = 90;
                            break;
                        case 3:
                            degrees = 270;
                            break;
                        case 4:
                            degrees = 90;
                            break;
                        default:
                            break;
                    }
                } else {
                    switch (handArray[i].positionInGroup) {
                        case 1:
                            degrees = 0;
                            break;
                        case 2:
                            degrees = 0;
                            break;
                        case 3:
                            degrees = 180;
                            break;
                        case 4:
                            degrees = 180;
                            break;
                        default:
                            break;
                    }
                }
                animate("#hand" + i, degrees, dur, $.easing.easeInOutSine, rndSeed);
            }
        }
    }
}

