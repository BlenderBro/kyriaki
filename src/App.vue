<template>
	<div id="app">
		<nav class="navbar navbar-transparent navbar-fixed-top navbar-color-on-scroll">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-index">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a href="/">
						<div class="logo-container">
							<div class="logo">
								<img style="max-width:30%" class="img-responsive" src='../static/img/logo_new.png' alt="Kyriaki Logo" rel="tooltip" title="Website Designed & Coded with care by <b>Facepunch Digital</b>" data-placement="bottom" data-html="true">
							</div>               
						</div>
					</a>
				</div>
				<div class="collapse navbar-collapse" id="navigation-index">
					<ul class="nav navbar-nav navbar-right">
						<li>
							<router-link to='/'>Home</router-link>
						</li>
						<li>
							<router-link to='/test'>Test</router-link>
						</li>
						<li>
							<a rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="#" target="_blank" class="btn btn-white btn-simple btn-just-icon">
								<i class="fa fa-twitter"></i>
							</a>
						</li>
						<li>
							<a rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="#" target="_blank" class="btn btn-white btn-simple btn-just-icon">
								<i class="fa fa-facebook-square"></i>
							</a>
						</li>
						<li>
							<a rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="#" target="_blank" class="btn btn-white btn-simple btn-just-icon">
								<i class="fa fa-instagram"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="wrapper">
			<div class="header header-filter" style="background-image: url('../static/img/thassos2.jpg');">
				<div class="container">
					<bookroom></bookroom>
				</div>
			</div>
			<div class="main main-raised">
				
				<div class="container">
					<router-view></router-view>
				</div>
			</div>
			<footer class="footer">
				<div class="container">
					<nav class="pull-left">
						<ul>
							<li>
								<a href="http://www.creative-tim.com">
									Creative Tim
								</a>
							</li>
							<li>
								<a href="http://presentation.creative-tim.com">
									About Us
								</a>
							</li>
							<li>
								<a href="http://blog.creative-tim.com">
									Blog
								</a>
							</li>
							<li>
								<a href="http://www.creative-tim.com/license">
									Licenses
								</a>
							</li>
						</ul>
					</nav>
					<div class="copyright pull-right">
						&copy; 2016, made with
						<i class="fa fa-heart heart"></i> by Creative Tim
					</div>
				</div>
			</footer>
		</div>
	</div>
</template>

<script>
import bookroom from './components/BookRoom.vue'
export default {
	name: 'app',
	components: {
		bookroom
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
}
</style>
