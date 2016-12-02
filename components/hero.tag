<hero>
<div class="video-container">
  <video autoplay  poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" loop>
   <source src="//demosthenes.info/assets/videos/polina.webm" type="video/webm">
   <source src="//demosthenes.info/assets/videos/polina.mp4" type="video/mp4">
  </video>
    <div class="description">
        <h1>{ opts.title }</h1>
        <p>{ opts.description }</p>
    </div>
</div>

<style>

hero video{
    width: 100%;
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
