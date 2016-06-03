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


function digit0(intStartAt, digitPos, duration, rndSeed){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                        //animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 4:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 7:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 10:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 13:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 16:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                default:
                    break
            }

        }
    }
}


function digit1(intStartAt, digitPos, duration, rndSeed){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    handArray[i].tempFigurePosition = "";
                    handArray[i].tempFigureName = "";
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 4:
                    handArray[i].tempFigurePosition = "";
                    handArray[i].tempFigureName = "";
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 7:
                    handArray[i].tempFigurePosition = "";
                    handArray[i].tempFigureName = "";
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 10:
                    handArray[i].tempFigurePosition = "";
                    handArray[i].tempFigureName = "";
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;

                case 13:
                    handArray[i].tempFigurePosition = "";
                    handArray[i].tempFigureName = "";
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;

                case 16:
                    handArray[i].tempFigurePosition = "";
                    handArray[i].tempFigureName = "";
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                default:
                    break
            }

        }
    }
}


function digit2(intStartAt, digitPos, duration, rndSeed){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 4:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 7:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 10:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;

                case 13:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;

                case 16:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                default:
                    break
            }

        }
    }
}


function digit3(intStartAt, digitPos, duration, rndSeed){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 4:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 7:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 10:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;

                case 13:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 16:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                default:
                    break
            }

        }
    }
}


function digit4(intStartAt, digitPos, duration, rndSeed){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 4:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 7:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 10:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 13:
                    handArray[i].tempFigurePosition = "";
                    handArray[i].tempFigureName = "";
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 16:
                    handArray[i].tempFigurePosition = "";
                    handArray[i].tempFigureName = "";
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                default:
                    break
            }

        }
    }
}


function digit5(intStartAt, digitPos, duration, rndSeed){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 4:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 7:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 10:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;

                case 13:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 16:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                default:
                    break
            }

        }
    }
}


function digit6(intStartAt, digitPos, duration, rndSeed){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 4:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 7:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 10:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;

                case 13:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;

                case 16:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                default:
                    break
            }

        }
    }
}


function digit7(intStartAt, digitPos, duration, rndSeed){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 4:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 7:
                    handArray[i].tempFigurePosition = "";
                    handArray[i].tempFigureName = "";
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 10:
                    handArray[i].tempFigurePosition = "";
                    handArray[i].tempFigureName = "";
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 13:
                    handArray[i].tempFigurePosition = "";
                    handArray[i].tempFigureName = "";
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 16:
                    handArray[i].tempFigurePosition = "";
                    handArray[i].tempFigureName = "";
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                default:
                    break
            }

        }
    }
}


function digit8(intStartAt, digitPos, duration, rndSeed){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 4:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 7:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        $("#hand" + i).rotate({ animateTo:145,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        $("#hand" + i).rotate({ animateTo:215,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }
                    break;
                case 10:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:45,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        $("#hand" + i).rotate({ animateTo:315,duration:2000 + Math.floor(Math.random() * 2000) + 1,easing: $.easing.easeInOutSine })
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;

                case 13:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;

                case 16:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                default:
                    break
            }

        }
    }
}


function digit9(intStartAt, digitPos, duration, rndSeed){
    configureDigit(intStartAt, digitPos);

    for (var i=0; i<=handArray.length-1; i++){
        if (handArray[i].tempFigureName === digitPos){
            switch(handArray[i].tempFigurePosition) {
                case 1:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 2:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 3:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 4:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 5:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 6:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 7:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 8:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 9:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 10:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 11:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 12:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;

                case 13:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 14:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 15:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 180, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;

                case 16:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 17:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 90, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                case 18:
                    if (handArray[i].divId === "container"){
                        animate("#hand" + i, 0, duration, $.easing.easeInOutSine, rndSeed);
                    }else{
                        animate("#hand" + i, 270, duration, $.easing.easeInOutSine, rndSeed);
                    }
                    break;
                default:
                    break
            }

        }
    }
}
