<?php
function dbadd($table, $element1, $element2, $element3)
{
    include 'dbinfo.php';
    try {
        $conn = new PDO(
            "mysql:host=$servername;dbname=$dbname",
            $username,
            $password
        );
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $query = "INSERT INTO $table(`name`, `score`, `timeRecord`, `dateRecord`) VALUES (?,?,?,now())";

        $sql = $conn->prepare($query);

        // use exec() because no results are returned
        $sql->execute([$element1, $element2, $element3]);
        return true;
    } catch (PDOException $e) {
        return false;
    }
    die;
}
