<?php
header("Content-type: text/css; charset: UTF-8");
$font = $_GET['font'];
$ggfont = $_GET['ggfont'];
$bg = $_GET['bg'];
$colors = $_GET['cl'];
$ci = explode( ',', $colors );
$ciSize = sizeof($ci);
?>

body{
background-color: #<?=$bg?>;
color: #<?=$font?>;
}

/*===
BUTTON
===*/

.btn {
color: #fff !important;
background: #<?=$ci[0]?>;
}
.btn:hover{
background:#<?=$ci[1]?>;
}


/*===
COLOR
===*/

<?php for ($i=0; $i <$ciSize; $i++) {  ?>
.cl-ci<?=$i+1?>{
color: #<?=$ci[$i]?> !important;
fill: #<?=$ci[$i]?> !important;
}
.bg-ci<?=$i+1?>{
background-color: #<?=$ci[$i]?> !important;
}
.hover-cl-ci<?=$i+1?>:hover{
color: #<?=$ci[$i]?> !important;
fill: #<?=$ci[$i]?> !important;
}
.hover-bg-ci<?=$i+1?>:hover{
background-color: #<?=$ci[$i]?> !important;
}
<?php } ?>

a,
a:link,
a:visited{
color: #<?=$ci[0]?>;
transition: all .2s;
text-decoration:none;
}
a:hover{
color: #<?=$ci[1]?>;
}

/*===
Google Font
===*/

.ffont,.mm,h1,h2,h3,h4,h5,h6{
font-family: '<?=$ggfont?>',sans-serif !important;
}

