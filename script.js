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