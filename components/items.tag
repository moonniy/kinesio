<items>
<div class ="container-fluid">
    <h3>{ opts.title }</h3>
    <virtual each={ element, i in opts.items }>
      <div class="col col-xs-6 col-sm-5">
            <h4>{ element.title }</h4>
            <p>{ element.description }</p>
      </div>    
    </virtual>
</div>

<style>
items .container-fluid{
    padding-left: 183px;
    padding-right: 183px;
    background: linear-gradient(rgba(13, 87, 119, 0.90),
                rgba(13, 87, 119, 0.90)),
		url(http://clinicaciudaddejaen.es/img/010.jpg) no-repeat center;
    padding-top: 56px;
    padding-bottom: 157px;
}

items div .col{
    background-color: rgba(255,255,255,0.1);
    margin-top: 2%;
    margin-left: 2%;
    height: 260px;
    width: 48%;
    padding: 30px 40px 20px 40px;
}

items a {
    transition: all 0.2s ease-out;
    color:#4b505a
}

items h3{
   font-size: 60px;
   text-align: center;
   margin-bottom: 50px;
   font-weight: bold;
   color: #fff;
}

items h4{
   color: #fff;
   letter-spacing: 0.1em;
   font-size: 24px;
   text-align: center;
}

items p{
   color: #fff;
   margin-top: 30px;
   text-align: center;
   overflow: hidden;
   height: 120px;
}

items .thumb{
    margin: 10px;
    height: 570px;
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
