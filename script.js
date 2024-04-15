let writeTicket = (show) => {
  let ticket = document.getElementById("ticketText");
  ticket.innerHTML =
    "<h4>Next Show:</h4>" +
    "<p>" +
    show.date +
    "</p>" +
    "<p>" +
    show.location +
    "</p>" +
    "<p>" +
    show.band +
    "</p>";
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