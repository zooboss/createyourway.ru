<?php
function sendmail($name, $email, $subject, $text)
{
    
    $to = "sandrozz@yandex.ru";
    $from_add = "createyourway.ru";
    
    $text .= "\r\n $name";
    $text .="\r\n $email";
    
	$headers = "From: $from_add \r\n";
    $headers .= "Reply-To: $email \r\n";
	$headers .= "Return-Path: $email\r\n";
	$headers .= "X-Mailer: PHP \r\n"; 
    
    mail($to, $subject, $text, $headers);
    
    
}












?>