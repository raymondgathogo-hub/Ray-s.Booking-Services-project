function bookRoom(){
    let name = document.getElementById("name").ariaValueMax;
    let date = document.getElementById("date").ariaValueMax;
}

if (name ===""||date ==="") {
    alert("Plese fill in info")
    
} else {
    alert("Booking succesful!\n"+
        "Name:" + name +"\n"+
        "Date:" + date + "\n"+
    )
    
}