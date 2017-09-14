<?php
$target_dir = "../images/";
$target_file = $target_dir . basename($_FILES["image"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["image"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" ) {
    echo "Sorry, only JPG, JPEG and PNG files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
		$filename = basename( $_FILES["image"]["name"]);
		$title = $_POST["title"];
		$text = $_POST["text"];
		$link = $_POST["link"];
        echo "The file ". $filename. " has been uploaded.";
		$mysqli = new mysqli("localhost", "root", "", "mimicaBase");
		$mysqli->query("SET NAMES 'utf8'");
		
		$mysqli->query("INSERT INTO `news` (`Name`, `Text`, `Link`, `Image`) VALUES ('$title', '$text', '$link', '$filename')");
		$mysqli->close();
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}