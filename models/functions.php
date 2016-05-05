<?php
function sendmail($name, $email, $subject, $text)
{
    mail('sandrozz@yandex.ru', $subject, $text, 'From: ' . $email . " " . $name);
    
}












?>