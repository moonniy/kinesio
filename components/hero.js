<hero>
<div class="video-container">
<video autoplay  poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" loop>
<source src="//demosthenes.info/assets/videos/polina.webm" type="video/webm">
<source src="//demosthenes.info/assets/videos/polina.mp4" type="video/mp4">
    </video>
    <div class="description">
       <h1>Short description of Product</h1>
       <p>Chocolate cake fruitcake sweet gingerbread.</p>
    </div>
</div>

    <style>

hero video{
    width: 100%;
}

hero .video-container{
    position: relative;
    text-align: center;
    display: inline-block;
    width: 100%;
}

hero .video-container .description{
    position: absolute;
    top: 25%;
    z-index: 2;
    width: 100%;
}

hero h1{
    font-size: 60px;
    color: #eee;
}

hero p{
    font-size: 30px;
    color: #efefef;
}

</style>
</hero>
