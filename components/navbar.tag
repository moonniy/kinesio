<navbar>
    <nav id="inicio" class="navbar navbar-default top-navbar">
	<div class="container-fluid menu1">
	    <img id="logo" src="static/img/logo.png" alt="Fisiobalance">
            <a class="navbar-logo" href="#">Fisiobalance</a>
            <ul class="list-inline">
		<li each="{opts.items}" role="presentation" class="{this.class}"><a href="{this.url}">{this.title}</a></li>
            </ul>
	</div>

	<div class="dropdown menu_mobile">
	    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
		<span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
	    </button>
	    <ul class="dropdown-menu menu" aria-labelledby="dropdownMenu1">
		<li each="{opts.items}" role="presentation" class="{this.class}"><a href="{this.url}">{this.title}</a></li>
	    </ul>
	</div>
	
    </nav>

<style>


navbar .list-inline {
    padding-top: 20px;
    padding-bottom: 10px;
    margin: 0;
    display: inline-block;
    position: absolute;
    right: 0;
}
navbar .list-inline li {
    padding-right: 30px;
    padding-left: 30px;
    vertical-align: middle;
}
navbar .list-inline>li.active a{
    color: #02b8bf; 
}
navbar .list-inline>li a{
    color: #333333;
    text-decoration: none;
}
navbar img#logo{
    height: 80px;
    margin-right: 10px;
}

navbar a{
    font-size: 15px;
}
navbar li a:hover{
    color: #02b8bf;
    transition: .20s;
}
navbar .navbar{
    margin-bottom: 0px;
    background-color: #fafafa;
}
navbar .container-fluid {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
    margin-left: 187px;
    margin-right: 187px;
    position: relative;
}
a.navbar-logo {
    text-decoration: none;
    font-size: 31px;
    padding-top: 15px;
    color: #116089;
    position:absolute;
    letter-spacing: 1px;
}

</style>
</navbar>
