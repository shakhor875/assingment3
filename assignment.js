//kilometer To Meter//

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var kilometer = kilometerToMeter();
console.log();


//Budget Calculator//

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;

    return totalPrice;
}
var price = budgetCalculator();
console.log();


//hotel cost//

function hotelCost(day) {
    var cost = 0;

    if (day <= 10) {
        var cost = day * 100;
    }
    else if (day <= 20) {
        var firstDay = day * 100;
        var remainingDay = day - 10;

        var secondDay= remainingDay*80;
        cost = firstDay+secondDay;

    }
    else{
        var firstDay = 10*100;
        var secondDay=10*80;
        var remaingDay=day-20;
        var thirdDay = remaingDay*50;

        cost =firstDay + secondDay + thirdDay;
    
    }
    return cost;


}

var totalCost = hotelCost();
console.log(totalCost);

//mega Friend//

function magaFriend(friendname){
     var mega = 0;

     for(var i = 0; i <friendname.length;i++){
         var element = friendname[i];


         if(element>mega){
             mega=element;
         }
         return mega;
     }
}
var friendname =["rohim,abul,bolods"];
console.log(friendname);
