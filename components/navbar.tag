<navbar>
  <nav class="navbar navbar-default top-navbar">
    <div class="container-fluid">
        <a class="navbar-logo" href="#">Kinesiocinesis</a>
        <ul class="list-inline">
          <li each="{opts.items}" role="presentation" class="{this.class}"><a href="{this.url}">{this.title}</a></li>
        </ul>
    </div>
  </nav>

<style>
navbar .list-inline {
    padding-top: 30px;
    padding-bottom: 10px;
    margin: 0;
    display: inline-block;
    position: absolute;
    right: 0;
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
    margin-top: 30px;
    margin-bottom: 70px;
    padding: 5px;
    margin-left: 187px;
    margin-right: 187px;
    position: relative;
}
a.navbar-logo {
    text-decoration: none;
    font-size: 31px;
    padding-top: 10px;
    color: #116089;
    position:absolute;
    letter-spacing: 1px;
}

</style>
</navbar>
