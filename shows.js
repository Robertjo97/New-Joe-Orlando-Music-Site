let display = (shows) => {
  let table = document.createElement("table");
  let container = document.getElementById("dates");
  for (let i = -1; i < shows.length; i++) {
    let tr = document.createElement("tr");
    if (i == -1) {
      let thDate = document.createElement("th");
      let thLocation = document.createElement("th");
      let thBand = document.createElement("th");

      thDate.innerHTML = "Date";
      thLocation.innerHTML = "Location";
      thBand.innerHTML = "Band";

      tr.appendChild(thDate);
      tr.appendChild(thLocation);
      tr.appendChild(thBand);
      table.appendChild(tr);
    } else {
      let date = document.createElement("td");
      let location = document.createElement("td");
      let band = document.createElement("td");
      date.innerHTML = shows[i].date;
      location.innerHTML = shows[i].location;
      band.innerHTML = shows[i].band;
      tr.appendChild(date);
      tr.appendChild(location);
      tr.appendChild(band);
      table.appendChild(tr);
    }
  }
  container.appendChild(table);
};
let grabShows = () => {
  let request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState == 4 && request.status == 200) {
      display(JSON.parse(request.responseText));
    }
  };
  request.open("GET", "./pullShows.php");
  request.send();
};
grabShows();
