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

