$(document).ready(() => {


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
         ${escape(comment.message)}
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
    const id = window.location.pathname.replaceAll("/resource/", "");
    $.ajax(`/comments-api/${id}`,  { //future reference, use $.get()
      method: "GET"
    }).then(function(comments) {
      console.log('comments:', comments)
      renderComments(comments.resource);
    }).catch((e) => {
      console.log('there was an error', error);
    });
  };

  loadComments();


  // actions taken on resource form submission
  $('#comment-form').on('submit', function(event) {
    event.preventDefault();
    const id = window.location.pathname.replaceAll("/resource/", "");


      const formData = $(this).serialize();
      $('.appended-comments').empty();
      $.ajax({
        method: "POST",
        url: `/comments-api/${id}`,
        data: formData
      }).then(() => {
        $('#comment-text').val('');

        loadComments();

      });

  //document ready closing
})});
