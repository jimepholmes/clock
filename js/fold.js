/**
 * Created by admin on 04/06/2016.
 */

function groupFoldAll(dur, rndSeed, ignoreFigures){
    for (var i=1; i<=intAbsGroupCounter; i++){
        groupFold(i, dur, rndSeed, ignoreFigures);
    }
}

function groupOutFoldAll(dur, rndSeed, ignoreFigures){
    for (var i=1; i<=intAbsGroupCounter; i++){
        groupOutFold(i, dur, rndSeed, ignoreFigures);
    }
}

function groupFold(intGroup, dur, rndSeed, ignoreFigures){
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
                            degrees = 135;
                            break;
                        case 2:
                            degrees = 225;
                            break;
                        case 3:
                            degrees = 45;
                            break;
                        case 4:
                            degrees = 315;
                            break;
                        default:
                            break;
                    }
                } else {
                    switch (handArray[i].positionInGroup) {
                        case 1:
                            degrees = 135;
                            break;
                        case 2:
                            degrees = 225;
                            break;
                        case 3:
                            degrees = 45;
                            break;
                        case 4:
                            degrees = 315;
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

function groupOutFold(intGroup, dur, rndSeed, ignoreFigures){
    clearInterval(intInterval);
    var boolSkip = false;
    var degrees = 0;

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
                            degrees = 315;
                            break;
                        case 2:
                            degrees = 45;
                            break;
                        case 3:
                            degrees = 225;
                            break;
                        case 4:
                            degrees = 135;
                            break;
                        default:
                            break;
                    }
                } else {
                    switch (handArray[i].positionInGroup) {
                        case 1:
                            degrees = 315;
                            break;
                        case 2:
                            degrees = 45;
                            break;
                        case 3:
                            degrees = 225;
                            break;
                        case 4:
                            degrees = 135;
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

