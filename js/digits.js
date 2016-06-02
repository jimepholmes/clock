/**
 * Created by admin on 27/05/2016.
 */
function configureDigit(intStartAt, figureName){
    //a digit is a 3x6 set of hands
    var intTargetHandIndex = intStartAt;
    var intColCounter = 1;

    //do div 1
    for (var i=1; i<=18; i++){
        handArray[intTargetHandIndex].tempFigurePosition = i;
        handArray[intTargetHandIndex].tempFigureName = figureName;

        //work out the next hand index
        intColCounter ++;
        if (intColCounter===4){
            intColCounter = 1;
            intTargetHandIndex += 14;
        }else{
            intTargetHandIndex ++;
        }
    }

    //do div 2
    intTargetHandIndex = intStartAt+160;
    for (var i=1; i<=18; i++){
        handArray[intTargetHandIndex].tempFigurePosition = i;
        handArray[intTargetHandIndex].tempFigureName = figureName;

        //work out the next hand index
        intColCounter ++;
        if (intColCounter===4){
            intColCounter = 1;
            intTargetHandIndex += 14;
        }else{
            intTargetHandIndex ++;
        }
    }
}



function digit0(intStartAt, digitPos, defaultUnused){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 4:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 7:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 10:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 13:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 16:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                default:
                    break
            }

        }
    }
}


function digit1(intStartAt, digitPos, defaultUnused){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 4:
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 7:
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 10:
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 13:
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 16:
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                default:
                    break
            }

        }
    }
}


function digit2(intStartAt, digitPos, defaultUnused){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 4:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 7:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 10:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 13:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 16:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                default:
                    break
            }

        }
    }
}


function digit3(intStartAt, digitPos, defaultUnused){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 4:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 7:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 10:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 13:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 16:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                default:
                    break
            }

        }
    }
}


function digit4(intStartAt, digitPos, defaultUnused){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 4:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 7:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 10:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 13:
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 16:
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                default:
                    break
            }

        }
    }
}


function digit5(intStartAt, digitPos, defaultUnused){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 4:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 7:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 10:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 13:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 16:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                default:
                    break
            }

        }
    }
}


function digit6(intStartAt, digitPos, defaultUnused){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 4:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 7:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 10:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 13:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 16:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                default:
                    break
            }

        }
    }
}


function digit7(intStartAt, digitPos, defaultUnused){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 4:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 7:
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 10:
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 13:
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 16:
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                default:
                    break
            }

        }
    }
}


function digit8(intStartAt, digitPos, defaultUnused){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 4:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 7:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:145,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:215,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 10:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:45,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:315,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 13:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 16:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                default:
                    break
            }

        }
    }
}


function digit9(intStartAt, digitPos, defaultUnused){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 4:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 7:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 10:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 13:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:180,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;

                case 16:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:90,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:0,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        $("#hand" + i).rotate({ animateTo:270,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                default:
                    break
            }

        }
    }
}
