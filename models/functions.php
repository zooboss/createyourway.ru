<?php
function sendmail($name, $email, $subject, $text)
{
    $to = "sandrozz@yandex.ru";
    $from_add = "createyourway.ru";
    
	$headers = "From: $from_add \r\n";
    $headers .= "$name";
	$headers .= "Reply-To: $email \r\n";
	    
    mail($to, $subject, $text, $headers);
}












?>