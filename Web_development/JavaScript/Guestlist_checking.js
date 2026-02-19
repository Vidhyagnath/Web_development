var guest_list=["vidhya","gpg","jaya","gopy"]
var guest_name=prompt("What is your name?").toLowerCase()

if (guest_list.includes(guest_name)){
    alert("WELCOME")
}else{
    alert("Sorry next time!")
}