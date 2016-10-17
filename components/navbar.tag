<navbar>
  <nav class="navbar navbar-default top-navbar">
    <div class="container">
        <a class="navbar-logo" href="#">Kinesiocinesis</a>
        <ul class="list-inline pull-right">
          <li each="{opts.items}" role="presentation" class="{this.class}"><a href="{this.url}">{this.title}</a></li>
        </ul>
    </div>
  </nav>

<style>
navbar .list-inline {
    padding-top: 30px;
    padding-bottom: 10px;
    margin: 0;
}
navbar .list-inline li {
    padding-right: 30px;
    padding-left: 30px;
}
navbar .list-inline>li.active a{
    color: #02b8bf; 
}
navbar .list-inline>li a{
    color: #333333;
    text-decoration: none;
}
navbar li a:hover{
    color: #02b8bf;
    transition: .20s;
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
a.navbar-logo {
    text-decoration: none;
    font-size: 34px;
    padding-top: 10px;
    color: #116089;
}

<!--navbar .navbar-fixed {
    top: 0;
    z-index: 100;
    position: fixed;
    width: 100%;
}
<img alt="Kinesiocinesis" src="/static/img/logo.png">
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
