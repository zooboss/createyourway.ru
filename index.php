<?php
    require_once(dirname(__FILE__)."/models/database.php");
    require_once(dirname(__FILE__)."/models/functions.php");

    //$link = db_connect();
    
    
    $action = isset($_GET['action']) ? $_GET['action'] : NULL;
    echo $action;

    if($action == 'email') {
        echo $_POST['mail_name'] . $_POST['mail_contact'] . $_POST['mail_subject'] . $_POST['mail_text'];
        sendmail($_POST['mail_name'], $_POST['mail_contact'], $_POST['mail_subject'], $_POST['mail_text']);
        header("Location: index.php#anchor");
    }


    include(dirname(__FILE__)."/veiws/mainpage.php");
    
    

?>


