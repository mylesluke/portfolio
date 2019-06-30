<?php

    $to = "contact@mylesluke.dev"; // Mail address from Site
    $name = $_POST['name'];
    $from = $_POST['email'];
    $subject = "Received Mail From '$name'";
    $message = $_POST['message'];
    $headers = "From: <$from> \r\n ";

    if (isset($_POST['btnSubmit'])) {
        mail($to, $subject, $message, $headers);
    }
    header("location: http://mylesluke.dev/contact");
?>