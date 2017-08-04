<template>
	<div class="section text-center section-landing">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<h2 class="title">Vila Studios Kyriaki</h2>
				<h5 class="description">Bine ati venit la Vila Studios Kyriaki, in Limenaria Thasos! Vila Studios Kyriaki este o mica afacere de familie localizata in a doua statiune ca marime a insulei Thasos – Limenaria. </h5>
			</div>
		</div>
		<div class="row limenaria">
			<h3>Limenaria</h3>
			<div class="features">
			<div class="row">
				<div class="col-md-4">
					<div class="info">
						<div class="icon icon-primary">
							<i class="material-icons">directions_car</i>
						</div>
						<h4 class="info-title">Cum Ajungem</h4>		
						<p>Accesul pe insula se face cu feryboatul pana in Limenas si de aici ajungeti cu masina personala, autocare, autobuze sau masini inchiriate in Limenaria in aproximativ 40 de minute.</p>
					</div>
				</div>
				<div class="col-md-4">
					<div class="info">
						<div class="icon icon-success">
							<i class="fa fa-umbrella" aria-hidden="true"></i>
						</div>
						<h4 class="info-title">Plaje</h4>
						<p>Limenaria are un port mic si o multime de plaje deosebit de frumoase. Puteti vedea intreaga <a href="#">lista aici</a></p>
					</div>
				</div>
				<!-- http://grecia.de-weekend.ro/limenaria-thassos/  -->
				<div class="col-md-4">
					<div class="info">
						<div class="icon icon-danger">
							<i class="fa fa-map" aria-hidden="true"></i>
						</div>
						<h4 class="info-title">Obiective Turistice</h4>
						<p>Limenaria reprezinta o atractie turistica deosebita, in special datorita faptului ca aici s-au pastrat
						mare parte din traditiile si cultura grceasca. Puteti vedea toate <a href="#">obiectivele aici</a></p>
					</div>
				</div>
			</div>
		</div> 
		</div>
		<!--ABOUT  -->
		<div class="row">
			<!-- Tabs with icons on Card -->
			<div class="col-md-6 tabs"> 
				<div class="card card-nav-tabs">
					<div class="tabsz header-info">
						<!-- colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" -->
						<div class="nav-tabs-navigation">
							<div class="nav-tabs-wrapper">
								<ul class="nav nav-tabs" data-tabs="tabs">
									<li class="active">
										<a href="#profile" data-toggle="tab">
											<i class="fa fa-bed"></i> Camere</a>
									</li>
									<li>
										<a href="#messages" data-toggle="tab">
											<i class="material-icons">chat</i> Facilitati</a>
									</li>
									<li>
										<a href="#settings" data-toggle="tab">
											<i class="fa fa-info-circle"></i> Informatii</a>

									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="content">
						<div class="tab-content text-center">
							<div class="tab-pane active" id="profile">
								<p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>
							</div>
							<div class="tab-pane" id="messages">
								<p> I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
							</div>
							<div class="tab-pane" id="settings">
								<p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- End Tabs with icons on Card -->
			<div class="col-md-6 about">
				<h5 class="description">De ce noi?</h5>
				<p>La Studio Kyriaki ne vom ingriji pe parcursul sederii dumneavoastra pentru a ne satisface clientii.
					Pentru aceasta muncim din greu ca fiecare client sa fie multumit, sa aibe acces la toate facilitatile
					necesare pentru a crea o atmosfera prietenoasa si relaxata; uneori peisajele sunt de ajuns, alteori 
					indemnandu-va sa zambiti.</p>
			</div>
		</div>
		<!--//ABOUT  -->
	</div>
</template>

<script>
export default {
	name: 'hello',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.features{
	padding-top: 20px;
}
.limenaria{
	padding-top: 30px;
	/* padding-bottom: 30px; */
}
.about{
	margin-top: 45px;
}
h1,
h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}
/* p {
	font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
} */
hr {
	width: 60%;
	color: #bdc3c7;
}
.tabs{
	padding-bottom: 20px;
}
.card .header-info{
	background-color: #42b983;
}
</style>
