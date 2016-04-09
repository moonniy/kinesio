<navbar>
  <nav class="navbar navbar-default top-navbar">
    <div class="container">
        <a class="navbar-logo" href="#">
          <img alt="Kinesiocinesis" src="/static/img/logo.png">
        </a>
        <ul class="nav nav-pills pull-right">
          <li each="{opts.items}" role="presentation" class="{this.class}"><a href="{this.url}">{this.title}</a></li>
        </ul>
    </div>
  </nav>

<style>
navbar .nav {
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0;
}
navbar .navbar{
    margin-bottom: 0px;
    background-color: #fafafa;
}
navbar .container {
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 5px;
}
navbar .navbar-logo img{
    height: 4.3em;
    padding: 20px;
}
<!--navbar .navbar-fixed {
    top: 0;
    z-index: 100;
    position: fixed;
    width: 100%;
}
navbar .nav li a {
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
