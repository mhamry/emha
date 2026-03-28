<?php

$host = 'localhost';
$userName = 'root';
$pass = '';
$dbName = 'db_emhaundangan';

$koneksi = mysqli_connect($host, $userName, $pass, $dbName);

function query($query){
    global $koneksi;

    $result = mysqli_query($koneksi, $query);

    $rows = [];
    while($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
    }
    return $rows;
}


function tambah ($data){
    global $koneksi;

    $template_id = htmlspecialchars($data['template_id']);
    $nama = htmlspecialchars($data['nama']);
    $kehadiran = htmlspecialchars($data['kehadiran']);
  
    $jumlahTamu = htmlspecialchars($data['jumlahtamu']);
    

    $query ="INSERT INTO tbl_rsvp(template_id,nama,kehadiran,jumlahtamu)
             VALUES('$template_id','$nama','$kehadiran','$jumlahTamu')";

    mysqli_query($koneksi, $query);

    return mysqli_affected_rows($koneksi);
}
function insert ($data){
    global $koneksi;

    $template_id = htmlspecialchars($data['template_id']);
    $nama = htmlspecialchars($data['nama']);
    $ucapan = htmlspecialchars($data['ucapan']);

    $query ="INSERT INTO tbl_ucapan(template_id,nama,ucapan)
             VALUES('$template_id','$nama','$ucapan')";

    mysqli_query($koneksi, $query);

    return mysqli_affected_rows($koneksi);
}


?>


