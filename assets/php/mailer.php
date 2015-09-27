<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
       
        $name = strip_tags(trim($_POST["c_name"]));
        $name = str_replace(array("\r","\n"),array(" "," "),$name);
        
        $email = filter_var(trim($_POST["c_email"]), FILTER_SANITIZE_EMAIL);
        
        $tel = trim($_POST["c_tel"]);
        
        $message = trim($_POST["c_message"]);

        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $mes = json_encode(array('message'=>'Oops! There was a problem with your submission. Please complete the form and try again.', 'sendstatus' => '3'));
            die($mes);

        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "foolman.sy@gmail.com";

        // Set the email subject.
        $subject = "Новый заказ с JEWELER.DP.UA от $name";

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Telephone:\n$tel\n";
        $email_content .= "Message:\n$message\n";

        $email_headers = "From: $name <$email>";

        if (mail($recipient, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            $mes = json_encode(array('message'=>'Спасибо ' .$name. '. Ваше сообщение было отправлено. Мы свяжемся с Вами в ближайшее время.', 'sendstatus' => '1'));
            die($mes);
        } else {
            http_response_code(500);
            $mes = json_encode(array('message'=>'Oops! Something went wrong and we couldn\'t send your message', 'sendstatus' => '2'));
            die($mes);
        }

    } else {
        http_response_code(403);
        $mes = json_encode(array('message'=>'There was a problem with your submission, please try again.', 'sendstatus' => '0'));
        die($mes);
    }

?>
