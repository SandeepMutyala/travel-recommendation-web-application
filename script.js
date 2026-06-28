function searchPlace() {
    let place = document.getElementById('search').value;

    if (place == '') {
        alert('Please enter destination');
    } else {
        alert('Searching recommendations for ' + place);
    }
}
