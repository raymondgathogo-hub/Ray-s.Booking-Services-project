
function bookRoom(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;

    if (name === "" || date === "") {
        alert("Please fill in info");
        return;
    }

    alert("Booking successful!\n" +
        "Name: " + name + "\n" +
        "Date: " + date);
    window.location.href = "success.html";
}

function bookSkylineApartment(){
    alert("You selected the skyline apartment")
}

function bookHolidayHouse(){
    alert("You selected the holiday house")
}

function bookBeachHouse(){
    alert("You selected the beach house")
}
