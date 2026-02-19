function bmiCalculator (weight, height) {
    BMI=weight/Math.pow(height,2);
    return BMI;
}
weight=prompt("What is your weight?");
height=prompt("what is your height in m ?")
bmi_value=bmiCalculator(weight,height)
if (bmi_value<=18.5){
    alert("Your bmi is"+ bmi_value + ", so you are underweight");
}
else if (bmi_value>18.5 && bmi_value<= 24.9) {
    alert("Your BMI is"+ bmi_value + ", so you have a normal weight.")
}
else{
    alert("Your BMI is"+ bmi_value + ", so you are over weight.")
}