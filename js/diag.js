/**
 * Created by admin on 27/05/2016.
 */
function groupDiagAll(ignoreFigures){
    for (var i=1; i<=intAbsGroupCounter; i++){
        groupDiag(i, ignoreFigures);
    }
}

function groupDiagOutAll(ignoreFigures){
    for (var i=1; i<=intAbsGroupCounter; i++){
        groupOutDiag(i, ignoreFigures);
    }
}


function groupDiag(intGroup, ignoreFigures){
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
                            $("#hand" + i).rotate({
                                animateTo: 45,
                                duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                                easing: $.easing.easeInOutSine
                            })
                            break;
                        case 2:
                            $("#hand" + i).rotate({
                                animateTo: 225,
                                duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                                easing: $.easing.easeInOutSine
                            })
                            break;
                        case 3:
                            $("#hand" + i).rotate({
                                animateTo: 45,
                                duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                                easing: $.easing.easeInOutSine
                            })
                            break;
                        case 4:
                            $("#hand" + i).rotate({
                                animateTo: 225,
                                duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                                easing: $.easing.easeInOutSine
                            })
                            break;
                        default:
                            break;
                    }
                } else {
                    switch (handArray[i].positionInGroup) {
                        case 1:
                            $("#hand" + i).rotate({
                                animateTo: 225,
                                duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                                easing: $.easing.easeInOutSine
                            })
                            break;
                        case 2:
                            $("#hand" + i).rotate({
                                animateTo: 45,
                                duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                                easing: $.easing.easeInOutSine
                            })
                            break;
                        case 3:
                            $("#hand" + i).rotate({
                                animateTo: 225,
                                duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                                easing: $.easing.easeInOutSine
                            })
                            break;
                        case 4:
                            $("#hand" + i).rotate({
                                animateTo: 45,
                                duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                                easing: $.easing.easeInOutSine
                            })
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
}


function groupOutDiag(intGroup, ignoreFigures){
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
                    switch (handArray[i].positionInGroup) {
                        case 1:
                            $("#hand" + i).rotate({
                                animateTo: 315,
                                duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                                easing: $.easing.easeInOutSine
                            })
                            break;
                        case 2:
                            $("#hand" + i).rotate({
                                animateTo: 135,
                                duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                                easing: $.easing.easeInOutSine
                            })
                            break;
                        case 3:
                            $("#hand" + i).rotate({
                                animateTo: 315,
                                duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                                easing: $.easing.easeInOutSine
                            })
                            break;
                        case 4:
                            $("#hand" + i).rotate({
                                animateTo: 135,
                                duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                                easing: $.easing.easeInOutSine
                            })
                            break;
                        default:
                            break;
                    }
                } else {
                    switch (handArray[i].positionInGroup) {
                        case 1:
                            $("#hand" + i).rotate({
                                animateTo: 135,
                                duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                                easing: $.easing.easeInOutSine
                            })
                            break;
                        case 2:
                            $("#hand" + i).rotate({
                                animateTo: 315,
                                duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                                easing: $.easing.easeInOutSine
                            })
                            break;
                        case 3:
                            $("#hand" + i).rotate({
                                animateTo: 135,
                                duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                                easing: $.easing.easeInOutSine
                            })
                            break;
                        case 4:
                            $("#hand" + i).rotate({
                                animateTo: 315,
                                duration: 2000 + Math.floor(Math.random() * 2000) + 1,
                                easing: $.easing.easeInOutSine
                            })
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
}

