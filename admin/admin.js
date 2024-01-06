let display = (shows) => {
    let table = document.createElement('table');
    let container = document.getElementById('showsList');
    for(let i = 0; i < shows.length; i++){
        let tr = document.createElement('tr');
        let date = document.createElement('td');
        let location = document.createElement('td');
        let band = document.createElement('td');
        date.innerHTML = shows[i].date;
        location.innerHTML = shows[i].location;
        band.innerHTML = shows[i].band;
        tr.appendChild(date);
        tr.appendChild(location);
        tr.appendChild(band);
        table.appendChild(tr);
    }
    container.appendChild(table);
}

let listShows = () => {
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if(request.readyState == 4 && request.status == 200){
            shows = JSON.parse(request.responseText);
            display(shows);
        }
    }
    request.open('GET', './GETShows.php');
    request.send();
}

listShows();