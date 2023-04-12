const { getResourceById, getCommentsById } = require('../../db/queries/resource');


$(() => {


  //helper function to escape script for XSS
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //function to crete tweet elements layout
  function createCommentElement(comment) {
    const $comment =
      $(`<article class="new-comment">
        <p>
         ${escape(comment)}
        <p>
      </article>`);

    return $comment;

  };

  //funtion to render comment from the DB
  const renderComments = function(comments) {
    // loops through comments
    for (let comment of comments) {

      let $comment = createCommentElement(comment);

      $('.appended-comments').append($comment);
    }
  };

  // function to get comments from the DB and render with our function
  const loadComments = function() {
    const id = window.location.pathname.slice(-1);
    console.log(id)
    $.ajax('/comments-api', { //future reference, use $.get()
      method: "GET"
    }).then(function(comments) {
      renderComments(comments);
    }).catch((e) => {
      console.log('there was an error');
    });
  };

  loadComments();


  // actions taken on resource form submission
  $('#comment-form').on('submit', function(event) {
    event.preventDefault();


      // const formData = $(this).serialize();
      // $('.appended-comments').empty();
      // $.ajax({
      //   method: "POST",
      //   url: '/comments-api',
      //   data: formData
      // }).then(() => {
      //   $('#comment-text').val('');

      //   loadTweets();

      // });

  //document ready closing
})});
