<?php 
class Show {
    public $date;
    public $location;
    public $band;

    function __construct($date, $location, $band){
        $this->date = $date;
        $this->location = $location;
        $this->band = $band;
    }
}

$rawData = file_get_contents('./shows.json');
$shows = json_decode($rawData, true);

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(isset($_POST["date"]) && isset($_POST["location"]) && isset($_POST["band"])){
        $date = $_POST["date"];
        $location = $_POST["location"];
        $band = $_POST["band"];

        $show = new Show($date, $location, $band);
        $shows[] = array("date" => $show->date, "location" => $show->location, "band" => $show->band);

        $newShow = json_encode($shows, JSON_PRETTY_PRINT);
        file_put_contents('./shows.json', $newShow);
    }
}
?>
<!--Make it modular. Add a show, Delete last show, maybe view them in a list?-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Entry</title>
    <link type="text/css" rel="stylesheet" href="./dataStyles.css">
</head>
<body>
    <div id="showContainer">
    <form method="post">
        <input type="text" name="date" placeholder="Date">
        <input type="text" name="location" placeholder="Location">
        <input type="text" name="band" placeholder="Band">
        <button>Submit</button>
    </form>
    </div>
    <div id="mediaContainer">
        <input type="text" placeholder="media">
    </div>
</body>
</html>

