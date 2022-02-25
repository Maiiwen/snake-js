<?php
function getTable($table)
{
    include 'dbinfo.php';
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = $conn->query("SELECT * FROM $table ORDER BY `score` DESC, `timeRecord` LIMIT 20");
        $table = $sql->fetchAll();

        return $table;
    } catch (PDOException $e) {
        return $sql . "<br>" . $e->getMessage();
    }
    die;
}
