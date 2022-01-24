<?php
    $to = 'Yashgaur908@gmail.com';
    $name = $_POST["name"];
    $email= $_POST["email"];
    $text= $_POST["message"];
    $subject= $_POST["subject"];
    


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email . "\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $message ='<table style="width:100%">
        <tr><td>Name:   '.$name.'</td></tr>
        <tr><td>Email:   '.$email.'</td></tr>
        <tr><td>Subject:   '.$subject.'</td></tr>
        <tr><td>Message:   '.$text.'</td></tr>
        
    </table>';

    if (@mail($to, $email, $message, $headers))
    {
        echo 'Your message has been sent.';
       // alert("Your message has been sent");
    }
    else
    {
        echo 'oops.....Your message has not been sent.';
        //alert("Sorry! Your message has Not been sent");
    }

?>
