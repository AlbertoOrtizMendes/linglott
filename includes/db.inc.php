<?php

$servername = 'localhost';
$dbUserName = 'root';
$dbPassword = '';
$dbName = 'test';

$conn = mysqli_connect($servername, $dbUserName, $dbPassword, $dbName);

if(!$conn){
  die("Deu erro na conexão " . mysqli_connect_error());
}
else{
  echo('deu certo');
}


?>
