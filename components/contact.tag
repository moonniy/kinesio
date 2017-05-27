<contact>
  <div class="container-fluid">
    <div class="info">
    <h3>{opts.title}</h3>
    <div class="col-sm-6 col">
      <h4>Dirección</h4>
      <ul>
        <li>{ opts.name }</li>
        <li>{ opts.tel } / { opts.phone }</li>
        <li>{ opts.direccion }</li>
      </ul>
     </div>
     <div class="col-sm-6 col">
      <h4>Horarios</h4>
        <ul>
	  <li>{ opts.horario1 }</li>
	  <li>{ opts.horario2 }</li>
        </ul>
     </div>
    </div>
    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.394658475166!2d-98.04803516907432!3d19.04637804841881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfeb62eb1b52f9%3A0x1ad412546408e66f!2sCalle+4+Pte.+705%2C+San+Miguel%2C+72990+Amozoc+de+Mota%2C+Pue.!5e0!3m2!1ses-419!2smx!4v1457481430673" width="100%" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </div>
<style>
contact .container-fluid{
    padding-left: 187px;
    padding-right: 187px;
    padding-top: 40px;
    padding-bottom: 90px;
    background-color: #fafafa;
}
contact h3{
   font-size: 60px;
   text-align: center;
   margin-bottom: 50px;
   font-weight: bold;
   color: #02b8bf;
}
contact h4{
    font-size: 23px;
    margin-bottom: 20px;
    text-align: center;
    letter-spacing: 2px;
    font-weight: bold;
}
contact div .col{
    display:inline-block;
    text-align: center;
}
contact div .col ul{
    padding: 0;
    margin-bottom: 50px;
}
contact .info ul li{
    list-style: none;
    color: #333;
    letter-spacing: 1px;
    padding-bottom: 5px;
}    
contact .map{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}
</style>
    
</contact>
