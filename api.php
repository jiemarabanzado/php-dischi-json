<?php 
$disks=file_get_contents('dischi.json');


header('Content-Type:application/json');
echo $disks


?>