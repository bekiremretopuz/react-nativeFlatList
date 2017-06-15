<?php
error_reporting(0);
require "con.php";

$qr = "SELECT * FROM  CaSi";

$ds = mysqli_query($con , $qr);

$mang = array();
while($row = mysqli_fetch_array($ds)){
  array_push($mang, new CaSi(
  $row["id"],
  $row["Name"],
  $row["Hinh"],
  $row["MoTa"]
));
}
echo json_encode($mang);

?>
