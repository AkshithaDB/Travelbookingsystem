const apiKey = 'https://partners.api.skyscanner.net/apiservices/';
const apiUrl = 'https://rapidapi.p.rapidapi.com/apiservices';

document.getElementById('search').addEventListener('click', function() {
    const searchType = document.getElementById('search-type').value;
    const location = document.getElementById('location').value;
    
    let apiEndpoint = '';
    switch (searchType) {
        case 'flights':
            apiEndpoint = `${apiUrl}/browsequotes/v1.0/US/USD/en-US/${location}/${location}/${checkin}?inboundpartialdate=${checkout}`;
            break;
        case 'hotels':
            apiEndpoint = `${apiUrl}/hotels/autosuggest/v1.0/US/USD/en-US/${location}`;
            break;
        case 'cars':
            apiEndpoint = `${apiUrl}/carhire/liveprices/v2/US/USD/en-US/${location}/${location}/${checkin}/${checkout}`;
            break;
        default:
            return;
    }

    fetch(apiEndpoint, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
            'x-rapidapi-key': apiKey
        }
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('search').addEventListener('click', function() {
    const searchType = document.getElementById('search-type').value;
    const location = document.getElementById('location').value;
    
    if (searchType === 'flights') {
        displayFlightResults(location, checkin, checkout);
    }
    
});

function displayFlightResults(location, checkin, checkout) {
    const hardcodedFlights = [
        {
            carrier: 'Airline A',
            origin: 'Chennai',
            destination: 'Delhi',
            departureDate: '2024-07-10',
            fare: 7000
        },
        {
            carrier: 'Airline B',
            origin: 'Chennai',
            destination: 'Mumbai',
            departureDate: '2024-07-11',
            fare: 5000
        },
        {
            carrier: 'Airline C',
            origin: 'Delhi',
            destination: 'Hyderabad',
            departureDate: '2024-07-12',
            fare: 4000
        }
    ];

    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = ''; // Clear previous results

    const filteredFlights = hardcodedFlights.filter(flight => 
        flight.origin.toLowerCase() === location.toLowerCase() && 
        flight.departureDate === checkin
    );

    if (filteredFlights.length > 0) {
        filteredFlights.forEach(flight => {
            const listItem = document.createElement('li');
            listItem.textContent = `Flight with ${flight.carrier} from ${flight.origin} to ${flight.destination} on ${flight.departureDate} for $${flight.fare}`;
            resultsList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No flights found for the selected dates and location.';
        resultsList.appendChild(listItem);
    }
}

