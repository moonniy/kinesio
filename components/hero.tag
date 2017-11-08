<hero>
<div id="video" class="video-container">
  <video autoplay  poster="/static/video/Puzzling.jpg" id="bgvid" loop>
   <source src="static/video/Puzzling.webm" type="video/webm">
   <source src="static/video/Puzzling.mp4" type="video/mp4">
  </video>
    <div class="description">
        <h1>{ opts.title }</h1>
        <p>{ opts.description }</p>
    </div>
</div>

<style>

hero video{
    width: 100%;
    position: fixed;
    left: 0;
    z-index: -1;
    top: 0;
}

hero .video-container{
    position: relative;
    text-align: center;
    width: 100%;
    height: 600px;
    overflow: hidden;
}

hero .video-container .description{
    position: absolute;
    top: 25%;
    z-index: 2;
    width: 100%;
}

hero h1{
    font-size: 80px;
    font-weight: bold;
    letter-spacing: 6px;
    color: #fff;
}

hero p{
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 3px;
    color: #fff;
}

</style>
</hero>
