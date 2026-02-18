/* Robot will go and collect milk from store and return home
with balance money*/
milk=prompt("How much will cost for Milk?")
function getMilk(amount) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("I bought "+ Bottle_Bought(amount,milk)+" bottles of milk")
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  console.log("Master , your balance is "+balancemoney(amount,milk)+ " dollar")
  
}
function Bottle_Bought(startingMoney,coastPerbottle){
   Money=Math.floor(startingMoney/coastPerbottle)
  return Money;
}
function balancemoney(startingMoney,coastPerbottle){
  return startingMoney%coastPerbottle;
}

getMilk(10)