<!DOCTYPE html>
<html>
<head>
	<title>JaySS2 | A front-end framework that EASY / FUN / CLEAN</title>
	<meta charset=utf-8>
	<meta name=description content="">
	<meta name=viewport content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="//jabont.com/jayss/jayss2.css">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
<div id="app">
	<!--=== The Section Boxes :  ===-->
	<section id="_section" class="padding-l-vtc shadow bg-white">
		<sp class="vl"></sp>
		<div class="cont-pd ">
			<div class="article-margin">
				<h2 class="h5 cl-ci1">Font Family - แบบอักษร</h2>
				<p>
					เราเตรียม Font Family ที่มักถูกใช้งานบ่อยๆ โดยได้เปิดให้ใช้งานได้เลยโดยไม่จำเป็นต้องฝังฟอนท์ใดๆ<br>
					เพียงแค่นำชื่อคลาสไปใส่ใน element ที่ต้องการ หรือใช้ค่า var() สำหรับ css ก็ได้เช่นกัน
				</p>
				<p>
					ในกรณีที่ต้องการใช้เป็นฟอนท์หลักของทั้งเว็บไซต์ที่นำไปฝัง ให้กำหนดค่าที่ 
					<code class="bg-cloud padding-s round">--pmr-font:</code> และ  
					<code class="bg-cloud padding-s round">--txt-font:</code> ของ 
					<code class="bg-cloud padding-s round">:root{}</code>
				</p>
				<h3>ตัวอย่าง</h3>
				<pre class="bg-cloud inline-block round padding shadow">
:root{
--pmr-font:var(--font-anuphan);
--txt-font:var(--font-ibm-loop);
}</pre>


			</div>
		</div>
	</section>
	<section class="padding-l-vtc bg-cloud">
		<div class="cont-pd">
			<sp class="l"></sp>
			<h3>รายชื่อฟอนท์</h3>
			<sp class=""></sp>
			<theboxes class="top spacing-l -clip" boxing="2">				
				<?php 
				$font_family = [
					['Anakotmai','anakotmai',[5,7]],
					['Noto Sans Thai','noto',[5,7]],
					['Maledpan','maledpan',[5,7]],
					['CHULALONGKORN','chulalongkorn',[5,7]],
					['KMITL 2020','kmitl-2020',[5,7]],
					['KMITL Go','kmitl-go',[3,5,7]],
					['Chulabhorn Display','chulabhorn-display',[7]],
					['Chulabhorn text','chulabhorn-text',[3,5,7]],
					['Sarabun','sarabun',[5,7,9]],
					['IBM Plex Sans Thai','ibm',[2,5,7,9]],
					['IBM Plex Sans Thai Looped','ibm-loop',[2,5,7,9]],
					['Anuphan','anuphan',[2,5,7,9]],
					['Serithai (by jipatype.com)','serithai',[5]],
					['PGVIM','pgvim',[5]],
					['Srinakharinwirot','srinakharinwirot',[5]],
					['Sans Serif','sans',[2,5,7,9]],
				];
				?>
				<?php 
				foreach ($font_family as $key => $f) {
					?>
					<box col=""><inner class="">
						<div class="round shadow padding-l bg-white article-margin <?=$f[1]?>">
							<h3 class="h7 <?=$f[1]?> b<?=$f[2][sizeof($f[2])-1]?> no-mg"><?=$f[0]?></h3>
							<pre class="inline-block padding-s bg-cloud round">class="<?=$f[1]?>"</pre>
							<pre class="inline-block padding-s bg-cloud round">font-family: var(--font-<?=$f[1]?>)</pre>
							<?php 
							foreach ($f[2] as $key => $b) {
								?>
								<h4 class="v-middle-wrap h8">
									<pre class="no-mg inline-block padding-s bg-cloud round b5 size-rm">b<?=$b?></pre>&nbsp;
									<span class="b<?=$b?> <?=$f[1]?>">
										Hello World เรามาอย่างเป็นมิตร
									</span>
								</h4>
								<?php
							}
							?>
							<sp class=""></sp>
							<sp class="xs bg-cloud"></sp>
							<sp class=""></sp>
							<p>
								<b>Do you hear the people sing?</b>
								Singing a song of angry men
								It is the music of a people
								Who will not be slaves again
								When the beating of your heart
								Echoes the beating of the drums
								There is a life about to start
								When tomorrow comes
							</p>
							<p>
								<b>เธอได้ยินผู้คนร้องไหม ร้องเพลงนั่นไงเพลงคนคลั่งโกรธ</b> นี่คือดนตรีของผู้คน ที่จะไม่เป็นทาสใครอีกแล้ว เมื่อหัวใจเต้นระรัวเสียง สะท้อนจังหวะกลองระรัวก้อง นั้นชีวิตหนึ่งจะเกิดขึ้นมายามพรุ่งรุ่งวัน
							</p>
							<h4 class="h8 <?=$f[1]?> lh-m b<?=$f[2][sizeof($f[2])-1]?>">
							เพื่อลบรอยคราบน้ำตาประชาราษฎร์ สักพันชาติจักสู้ม้วยด้วยหฤหรรษ์ แม้นชีพใหม่มีเหมือนหวังอีกครั้งครัน จักน้อมพลีชีพนั้นเพื่อมวลชน</h4>

						</div>
					</inner></box>
					<?php
				}
				?>


			</theboxes>
		</div>
		<sp class="vl"></sp>
	</section>
	<!--=== The Section Boxes : font2 ===-->
	<section id="font2_section" class="padding-l-vtc">
		<anchor id="font2"></anchor>
		<div class="cont-pd">
			<sp class="l"></sp>
			<h3>ตัวอย่างฟอนท์พาดหัว</h3>
			<sp class=""></sp>
			<input type="text" v-model="font_headline">
			<sp class="l"></sp>
			<?php 
			foreach ($font_family as $key => $f) {
				?>
				<pre class="inline-block padding-s bg-cloud round no-mg">--font-<?=$f[1]?></pre>
				<h4 class="h5 <?=$f[1]?> lh-s b<?=$f[2][sizeof($f[2])-1]?>">
				{{font_headline}}</h4>
				<sp class=""></sp>
				<?php
			}
			?>
		</div>
	</section>
	</div>
	<script>
		let app = new Vue({
			el: '#app',
			data: {
				font_headline:'ดาวยังพราย ศรัทธาเย้ยฟ้าดิน'
			}
		})
	</script>
</body>
</html>