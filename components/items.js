<items>
<div class="header-container gradient">
  <div class ="container">
    <div class="header-nav">
      <div class="header-logo">
        <a class="pull-left" href="">#</a>
      </div>
      <ul class="nav nav-pills pull-right">
        <li role="presentation" class="active"><a href="#">Home</a></li>
        <li role="presentation"><a href="#">Profile</a></li>
        <li role="presentation"><a href="#">Messages</a></li>
      </ul>
    </div>
  </div>
</div>

<video autoplay  poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" loop>
  <!-- WCAG general accessibility recommendation is that media such as background video play through only once. Loop turned on for the purposes of illustration; if removed, the end of the video will fade in the same way created by pressing the "Pause" button  -->
<source src="//demosthenes.info/assets/videos/polina.webm" type="video/webm">
<source src="//demosthenes.info/assets/videos/polina.mp4" type="video/mp4">
</video>




<div class ="container">
  <div class="row">
  <h2>{ opts.title }</h2>
    <div each={ opts.items } class="col-sm-6 col-md-3">
    <div class="">
      <img src="{ thumb }" class="img-responsive img-rounded img-thumbnail " alt="...">
      <div class="caption">
    <h3>{ title }</h3>
    <p>{ description }</p>
      </div>
    </div>
    </div>
  </div>
</div>

    <style>
    items { }
items body {
    font-family: "Open Sans", sans-serif;
    padding-top: 70px;
    color: #4b505a;
    background-color: #f5f5f5;
    line-height: 24px;
        -webkit-font-smoothing:antialiased;
    text-rendering: optimizeLegibility;
}
items .header-nav {
    height:100px;
    line-height:100px;
    color:#fff;
    font-size:12px;
    font-weight:600;
}
items .nav>li>a{
    display:inline;
}
items .header-nav .nav{ float:right; }
items .header-nav .nav a{
    font-weight:600;
    color:#fff;
    text-decoration:none;
    padding:8px;
    margin-left:20px;
    transition: all 0.2s ease-out;
}
items .header-nav .nav a:hover{
    color:#fff;
    font-weight:600;
    opacity: 1;
    background-color: rgba(0,0,0,0.2);
}

items .nav-pills>li.active>a, .nav-pills>li.active>a:focus, .nav-pills>li.active>a:hover{
    color:#fff;
    font-weight:600;
    background-color: rgba(0,0,0,0.2);
}


items .header-logo {
    font-size:16px;
    font-weight:600;
    text-transform: uppercase;
}
items .header-logo a {
    color: #fff;
    text-decoration: none;
}

items .header-container {
    background: rgba(0,0,0,0.3);
    padding: 0;
    min-height: 20px;
}

items a { transition: all 0.2s ease-out; }
items a:hover, a:active{ opacity: 0.8; }
items h3 { font-size:  }
items h2 {  }

items img {   }
items .header-nav .nav { float: right;}

items video { 
    position: relative;

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
	
  </script>
</items>
