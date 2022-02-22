<?php
function dbadd($table, $element1, $element2, $element3)
{
    date_default_timezone_set('Europe/Paris');
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "snake";

    try {
        $conn = new PDO(
            "mysql:host=$servername;dbname=$dbname",
            $username,
            $password
        );
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $query = "INSERT INTO $table (name, score, timeRecord,dateRecord) 
        VALUES (?, ?, ?, ?)";

        $sql = $conn->prepare($query);

        // use exec() because no results are returned
        $sql->execute([$element1, $element2, $element3, date('d-m-y h:i:s')]);

        return "New record created successfully";
    } catch (PDOException $e) {
        return $conn . "<br>" . $e->getMessage();
    }

    $conn = null;
}
