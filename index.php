<?php
    require_once(dirname(__FILE__)."/models/database.php");
    require_once(dirname(__FILE__)."/models/functions.php");

    //$link = db_connect();
    
    include(dirname(__FILE__)."/veiws/mainpage.php");

     $action = isset($_GET['action']) ? $_GET['action'] : NULL;
    echo $action;

    if($action == 'email') {
        sendmail($_POST['mail_name'], $_POST['mail_contact'], $_POST['mail_subject'], $_POST['mail_text']);
        header("Location: index.php");
    }

?>


