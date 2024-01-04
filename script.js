class Show {
  constructor(date, location, band) {
    this.date = date;
    this.location = location;
    this.band = band;
  }
}

let addShow = () => {
  let date = document.getElementById("date").value;
  let location = document.getElementById("location").value;
  let band = document.getElementById("band").value;

  let show = new Show(date, location, band);

  let request = new XMLHttpRequest();
  request.open("POST", "./dataEntry.php", true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send('show=' + JSON.stringify(show));
};

let writeTicket = (show) => {
  let ticket = document.getElementById("ticketText");
  ticket.innerHTML =
    "<h2>Next Show:</h2>" +
    "<h3>" +
    show.date +
    "</h3>" +
    "<h3>" +
    show.location +
    "</h3>" +
    "<h3>" +
    show.band +
    "</h3>";
};

let pullShow = () => {
  let request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState == 4 && request.status == 200) {
      writeTicket(JSON.parse(request.responseText));
    }
  };
  request.open("GET", "./pullShow.php");
  request.send();
};

pullShow();