<?php
header("Content-type: text/css; charset: UTF-8");
$font = $_GET['font'];
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

a,
a:link,
a:visited{
	color: #<?=$ci[0]?>;
	fill:  #<?=$ci[0]?>;
	transition: all .2s;
	text-decoration:none;
}
a:hover{
	color: inherit;
	fill: inherit;
}


/*CI*/
<?php for ($i=0; $i <$ciSize; $i++) {  ?>
	a.link-ci<?=$i+1?>,
	a.link-ci<?=$i+1?>:link,
	a.link-ci<?=$i+1?>:visited,
	.link-ci<?=$i+1?> a,
	.link-ci<?=$i+1?> a:link,
	.link-ci<?=$i+1?> a:visited{
		color: #<?=$ci[$i]?>;
		fill: #<?=$ci[$i]?>;
	}
	a.link-ci<?=$i+1?>:hover,
	.link-ci<?=$i+1?> a:hover{
		color: inherit;
		fill: inherit;
	}

	a.link-ci<?=$i+1?>-in,
	a.link-ci<?=$i+1?>-in:link,
	a.link-ci<?=$i+1?>-in:visited,
	.link-ci<?=$i+1?>-in a,
	.link-ci<?=$i+1?>-in a:link,
	.link-ci<?=$i+1?>-in a:visited{
		color: inherit;
		fill: inherit;
	}
	a.link-ci<?=$i+1?>-in:hover,
	.link-ci<?=$i+1?>-in a:hover{
		color: #<?=$ci[$i]?>;
		fill: #<?=$ci[$i]?>;
	}

	/*----*/

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





