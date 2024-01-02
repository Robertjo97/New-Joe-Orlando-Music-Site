<?php
$rawData = file_get_contents('./shows.json');
$data = json_decode($rawData, true);
$show = $data[0];

echo json_encode($show);
?>