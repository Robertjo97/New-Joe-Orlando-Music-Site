<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "joe.orlando@att.net";

mail($recipient, $subject, $message, $mailheader) or die("Error!");

echo'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Contact - Joe Orlando Music</title>
</head>
<body>
    <div class="header">
        <h1><a class="JOM" href="index.html">Joe Orlando Music</a></h1>
    </div>
    <div class="topnav">
        <a class="option" href="shows.html">Shows</a>
        <a class="option" href="contact.html">Contact</a>
        <a class="option" href="index.html">Music</a>
    </div>
    
    <h2 style="text-decoration: none;text-align: center;">Thank you for contacting me. I will get back to you as soon as possible!</h2>
    
</body>
</html>
';


?>