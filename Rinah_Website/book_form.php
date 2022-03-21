<?php 
    $connection = mysqli_connect('localhost', 'root', '', 'bienvenidos_book_form');
    if(isset($_POST['send'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $guest = $_POST['guests'];
        $arrival = $_POST['arrival'];
        $arrival = $_POST['leaving'];


        $request = "insert into book_form(name,	email,	phone,	guest,	arrival, leaving	
        ) values('$name', '$email', '$phone', '$guest', '$arrival', '$leaving')";

        header('name:book.php');
    } else {
        echo 'something went wrong, please try again!';
    }
?>