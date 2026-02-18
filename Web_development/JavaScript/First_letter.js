// inputing name name from user
// display the entered name only with firt letter should be capital letter 
var name=prompt("What is your name?");
name_Length=name.length;
first=name.slice(0,1);
capital=first.toUpperCase();
last=name.slice(1,name_Length);
lower_name=last.toLowerCase();
alert("Hello " +capital+lower_name)
