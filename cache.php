<?php
$host = "kabeers-papers-pdf2image.000webhostapp.com";
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
$branch = "";
function move_file($file, $to)
{
    $path_parts = pathinfo($file);
    $newplace = "$to/{$path_parts['basename']}";
    if (rename($file, $newplace))
        return $newplace;
    return null;
}
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES["file"])) {
    if (!file_exists("./$branch")) mkdir("./$branch");
    $errors = [];
    $checksum = md5_file($_FILES['file']['tmp_name']);
    $file_name = ($_FILES["file"]["name"]); // md5(uniqid() . uniqid()) . "." . pathinfo($_FILES["file"]["name"], PATHINFO_EXTENSION);
    $file_size = $_FILES["file"]["size"];
    $file_tmp = $_FILES["file"]["tmp_name"];
    $file_type = $_FILES["file"]["type"];
    $file_ext = pathinfo($_FILES["file"]["name"], PATHINFO_EXTENSION);

    if ($file_size > 90000000) $errors[] = "File size must not be more than 20 MB";

    if (empty($errors) == true) {
        $id = uniqid();
        mkdir($id);
        move_file("./index.json", "./" . $id . "/index.json");
        move_uploaded_file($file_tmp, "./$branch/" . $file_name);
        echo "" . json_encode(array("u" => true, "file" => array(
                "url" => "https://$host/kabeer-chats-storage/$branch/" . $file_name
            )));
    } else echo json_encode(array("u" => false, "m" => "File Upload Error", "errors" => $errors));
}
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo "Kabeer Cloud";
}