
//kiloMeterToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(10);
console.log(result);

//budgetCalculator
budgetCalculator 
function budgetCalculator(clock,phone,laptop){
    var clockSum = clock * 50;
    var phoneSum = phone * 100;
    var laptopSum = laptop * 500;
    var result = clockSum + phoneSum + laptopSum;
    return result;
}
var input = budgetCalculator(10,10,10);
console.log(input);

// hotelCost
function hotelCost(day){

    var cost = 0;
    if(day <= 10){
        cost = day * 100;
        }else if(day <= 20){
            var firstPart = 10 * 100;
            var remaining = day - 10;
            var secondPart = remaining * 80;
            cost = firstPart + secondPart;
        }else{
            var firstPart = 10 * 100;
            var secondPart = 10 * 80;
            var remaining = day - 20;
            var thridPart = remaining * 50;
            cost = firstPart + secondPart + thridPart;
        } return cost;
    
    }
    
    var result = hotelCost(20);
    console.log(result);

//megaFriend
var longFriend= '';

var friends = ['rahim', 'karim', 'jabbar', 'sattaar', 'mattar'];

function megaFriend(friend){
  for (var i=0; i < friend.length; i++){
      if (friend[i].length > longFriend.length){
        longFriend= friend[i];
      }
  }
  return longFriend;
}
var result = megaFriend(friends);
console.log(result);