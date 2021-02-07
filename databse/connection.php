<?php

    function OpenCon() {

        $HOST       = "localhost";
        $USER       = "root";
        $PASSWORD   = "";
        $DB_NAME    = "webstudios";

        $con = new mysqli($HOST, $USER, $PASSWORD,$DB_NAME) or die("Connect failed: %s\n". $conn -> error);
        
        return $con;
    }
    
    function CloseCon($con) {
        $conn -> close();
    }

    OpenCon();
   
?>