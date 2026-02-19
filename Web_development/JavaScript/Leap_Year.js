function leapyear(year){
    if (year%4===0){
        if (year%100 ===0){
            if(year%400===0){
                return "THE year is Leap year"
            }else{
                return "Not leap year"
            }
            
        }else{
            return "Leap year";
        }
    }else{
        return "not LEAP year";
    }
}       
year=prompt("Enter the year")
leapyear(year);