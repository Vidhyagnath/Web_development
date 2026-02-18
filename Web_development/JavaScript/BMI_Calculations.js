//calculating Body Mass Index using (weight/(height*height) 
function BMI(weight,height){
    var BMI= weight/Math.pow(height,2);
    return Math.round(BMI);
}

var weig=prompt("What is your Weight?")
var Hei=prompt("What is your height in meters?")

var BMI_calculator= BMI(weig,Hei);
console.log(BMI_calculator);
alert("Your BMI is "+BMI_calculator)
