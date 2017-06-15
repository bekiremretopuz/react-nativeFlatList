<?php
$con = mysqli_connect("localhost", "root" , "");
mysqli_select_db($con,"react");
mysqli_query($con , "SET NAMES 'utf8'");


class CaSi{
  public $key;
  public $HOTEN;
  public $HINH;
  public $MOTA;


function CaSi($id, $hoten, $hinh, $mota){
  $this->key = $id;
  $this->HOTEN = $hoten;
  $this->HINH = $hinh;
  $this->MOTA = $mota;

}
}
?>
