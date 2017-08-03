<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>
		<hr>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id turpis in 
			nisi vehicula ultrices sit amet sit amet arcu. Proin id lacus vel justo porttitor
			 luctus. Fusce eros lectus, viverra fringilla dui sit amet, accumsan semper nisl.
			  Donec et dignissim lorem, et venenatis orci. Maecenas vel est pharetra, tempor nibh at,
			   aliquam augue. Etiam scelerisque lacinia sapien, eget tempor nunc pharetra et. Morbi
			    at tellus ac magna elementum tincidunt id a quam. Sed at felis massa. Aenean convallis,
				 arcu at cursus laoreet, urna lorem malesuada quam, id ullamcorper est mauris ut lorem.</p>

		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula tellus, sagittis eu magna id,
			 efficitur tristique risus. In hac habitasse platea dictumst. Nulla ornare elit elementum ante 
			 lobortis egestas. Curabitur hendrerit mi a vestibulum elementum. Pellentesque mattis orci mauris,
			  a semper magna auctor at. Etiam quis placerat tortor, in mattis libero. Nam blandit venenatis
			   elit vitae rhoncus. Etiam quam turpis, auctor sed posuere id, rhoncus vitae mi. Nullam ac gravida
			    dui, sed suscipit sapien. Donec ultrices lacus ac odio auctor fringilla.</p>
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
p {
	font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
hr {
	width: 60%;
	color: #bdc3c7;
}
</style>
