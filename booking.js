document.addEventListener('DOMContentLoaded', function() {
    const flightData = localStorage.getItem('selectedFlight');
    if (flightData) {
        const flight = JSON.parse(flightData);
        displayBookingDetails(flight);
    }

    document.getElementById('confirm-booking').addEventListener('click', function() {
        const confirmationMessage = document.getElementById('confirmation-message');
        confirmationMessage.textContent = 'Booking confirmed! Thank you for booking with us.';
    });
});

function displayBookingDetails(flight) {
    const bookingDetails = document.getElementById('booking-details');
    bookingDetails.innerHTML = `
        <p>Carrier: ${flight.carrier}</p>
        <p>From: ${flight.origin}</p>
        <p>To: ${flight.destination}</p>
        <p>Departure Date: ${flight.departureDate}</p>
        <p>Fare: $${flight.fare}</p>
    `;
}
