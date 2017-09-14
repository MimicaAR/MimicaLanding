<?php

$mysqli = new mysqli("localhost", "root", "", "mimicaBase");
$mysqli->query("SET NAMES 'utf8'");

$set = $mysqli->query("SELECT * FROM `news`");

$arr = array();

while($row = $set->fetch_assoc()) {
	$res = array("name" => $row["Name"], "text" => $row["Text"], "link" => $row["Link"], "image" => $row["Image"]);
	array_push($arr, $res);
}

$mysqli->close();
echo json_encode($arr);