<navbar>
  <nav id="nav-bar"class="navbar navbar-default top-navbar">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <img alt="Kinesiocinesis" src="http://lorempixel.com/image_output/food-q-g-150-60-4.jpg">
        </a>
      </div>
      <ul class="nav nav-pills pull-right">
    <li each="{opts.items}" role="presentation" class="{this.class}"><a href="{this.url}">{this.title}</a></li>
      </ul>
    </div>
  </nav>

<style>
navbar .navbar{ margin-bottom: 0px; }
navbar .container{ margin-bottom: 25px }
navbar .nav {padding-top: 25px;  margin: 0;}
navbar .navbar-header {
    height:50px;
    line-height:100px;
    color:#fff;
    font-size:12px;
}
navbar .navbar-fixed {
    top: 0;
    z-index: 100;
    position: fixed;
    width: 100%;
}
<!--navbar .nav li a {
    padding: 5px 15.5px;
    text-decoration: none;
}
-->
</style>
<!--
<script>
$(document).ready(function() {
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 0) {
      $('#nav-bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 1) {
      $('#nav-bar').removeClass('navbar-fixed');
    }
  });
});
</script>
-->
</navbar>
