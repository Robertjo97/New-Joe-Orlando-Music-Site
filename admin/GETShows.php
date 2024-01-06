<?php
$rawData = file_get_contents('../shows.json', true);
if($_SERVER["REQUEST_METHOD"] == 'GET'){
    echo $rawData;
}
?>