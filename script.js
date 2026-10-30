function startBooking() {
    document.getElementById("bookingForm").scrollIntoView();
    document.getElementById("customersName").focus();
}

function bookSkylineApartment() {
    startBooking();
}

function bookHolidayHouse() {
    startBooking();
}

function bookBeachHouse() {
    startBooking();
}

document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let booking = {
        name: document.getElementById("customersName").value,
        checkIn: document.getElementById("checkIn").value,
        checkOut: document.getElementById("checkOut").value

    };
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    
    alert("Booking succesful!");

});