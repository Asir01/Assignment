                                                                                    //problem 1

                                                                                    
function feetToMile(feet){
    var mile= feet*0.000189393939; //feetTo mile
    return mile;
}
var result= feetToMile(1000);
if (result<0){
    console.log("Input positive number");
    return 0;
}

    console.log(result + " mile ");






                                                                                    //Problem 2


function woodCalculator (chair,table,bed){
    var chairWood= 1*chair;
    var tableWood= 3*table;
    var bedWood=5*bed;
    var total= (chairWood+tableWood+bedWood);
    return total;

}
var result= woodCalculator(5,6,7);
if(result<0){
    console.log("Input positive number");
}
console.log(result+ " cubic feet ");




                                                                                    //problem 3
function brickCalculator(n){
   return n;
}
var totalBrick= brickCalculator(-20);
if(totalBrick<0){
   // return 0;
    console.log("Input positive value");
}
else if(totalBrick<=10){
   var total=totalBrick*15*1000;
   console.log("Total Brick is" + total);
}
else if(totalBrick>10 && totalBrick<=20){
  var  total= totalBrick*12*1000;
    console.log("Total Brick is" + total);
}
else if(totalBrick>20){
   var total=totalBrick*10*1000;
    console.log("Total Brick is" + total);

}
console.log("Total Brick for" + totalBrick + "th floor is:"+total );




                                                                                    //problem 4


function tinyFriend (string){
    var tiny= string[0];
    for(var i=0; i<=string.length;i++){
        var currString= string[i];
        if(currString>tiny){
            tiny=currString;
        }


    }
    return tiny;
}
var myArr=['saklain','turag','emon',' '];
var myTiny= tinyFriend(myArr);
if(myTiny== ' '){
    return 0;
}
console.log("tiny friend " + myTiny);


