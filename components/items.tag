/*Monocromatico
#BAEAD6
#70ce9b
*/


/*
items body {
    font-family: "Open Sans", sans-serif;
    padding-top: 70px;
    padding-bottom: 70px;
    color: #4b505a;
    background-color: #f5f5f5;
    line-height: 24px;
        -webkit-font-smoothing:antialiased;
    text-rendering: optimizeLegibility;
}
items .navbar-header.nav{ float:right; }
items .navbar-header .nav a{
    color:#fff;
    text-decoration:none;
    padding:8px;
    margin-left:20px;
    transition: all 0.3s ease-out;
}
items .navbar-header .nav a:hover{
    color:#fff;
    opacity: 1;
    background-color: rgba(0,0,0,0.2);
}
items .nav-pills>li.active>a, .nav-pills>li.active>a:focus, .nav-pills>li.active>a:hover{
    color:#fff;
    background-color: rgba(0,0,0,0.2);
}

*/
<items>
<div class ="container">
  <div class="row">
    <h2>{ opts.title }</h2>
    <div each={ opts.items } class="col-sm-6 col-md-4">
        <div class="thumb">
          <img src="{ thumb }" class="img-responsive img-rounded img-thumbnail " alt="..." />
          <div class="caption">
            <h3>{ title }</h3>
            <p>{ description }</p>
          </div>
        </div>
    </div>
  </div>
</div>

<style>

items a {
    transition: all 0.2s ease-out;
    color:#4b505a
}

items .row{
    margin: 25px 25px 25px 25px;
    padding: 15px 15px 15px 15px;
}
    /** otros estilos específicos a la etiqueta "todo" **/
</style>

  <script>
    console.log(typeof this.opts.items);
    for (i=0; i<this.opts.items.length; i++) {
	if(!(this.opts.items[i].thumb)) {
            this.opts.items[i].thumb = "http://www.jackrusselltr.com/wp-content/uploads/2014/12/yavru-pug-mops.jpg";
	}
    }

	
  </script>
</items>
/*
items a, a:visited { 
    color: #eb234; 
    text-decoration: none; 
    transition: all 0.2s ease-out;
}
items a:hover, a:active{ 
    text-decoration:underline; 
    color:#eb2344; 
//    opacity: 0.8;
}

items a.navigate{
    background-color: rgba(0,0,0,0.5);
    font-size: 12px;
    padding-left: 4px;
    padding-right: 4px;
    min-width: 100px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    color:#fff;
    text-decoration: none;
}
items a.navigate:hover{
    opacity: 0.8;
}

items a.more{
    font-size: 12px;
    margin-top: 30px;
}

*/
