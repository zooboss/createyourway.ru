<?php
    require_once(dirname(__FILE__)."/models/database.php");
    require_once(dirname(__FILE__)."/modes/functions.php");

    $link = db_connect();
    
    include(dirname(__FILE__)."/veiws/main.html");

?>


