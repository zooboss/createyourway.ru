<?php
function sendmail($name, $email, $subject, $text)
{
    $headers = "From:";
    mail("sandrozz@yandex.ru", $subject, $text, $headers);
    echo $name . $email . $subject . $text;
    
}












?>