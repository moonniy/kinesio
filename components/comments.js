<comments class="comments">
 <div class="comment">
  <div class="comment-image">
    <img src="img" alt="img-alfLogo image">
  </div>
  <div class="comment-content">
    <h1>First Comment Title or Author</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, aspernatur, quia modi minima debitis tempora ducimus quam vero impedit alias earum nemo error tenetur sed.</p>
    <p class="comment-detail">Date or details about this post</p>
  </div>
    </div>


    <style>
    .comment {
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  display: table;
	margin-bottom: 1.5em;
	margin-top: 1.5em;
  padding-bottom: 1em;
  width: 100%;
}

.comment .comment-image,
.comment .comment-content {
  display: table-cell;
  vertical-align: top;
}

.comment .comment-image {
  padding-right: 1.4em;
}

.comment .comment-image > img {
  background: #82a7db;
  border-radius: 3px;
  display: block;
  height: auto;
  max-width: none;
  padding: 0.7em;
  width: 4em;
}

.comment-reverse-order .comment .comment-image {
  padding-right: 0;
  padding-left: 10px;
}

.comment .comment-content {
  width: 100%;
}

.comment .comment-content h1 {
  font-size: 1em;
  margin: 0 0 0.5em 0;
}

.comment .comment-content p {
  line-height: 1.5em;
  margin-bottom: 0.5em;
}

.comment .comment-content p.comment-detail {
  color: rgba(51, 51, 51, 0.5);
  font-size: 0.9em;
  font-style: italic;
}
</style>
</comments>
