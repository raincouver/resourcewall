
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
  const rendercomment = function(comments) {
    // loops through comments
    for (let comment of comments) {

      let $comment = createCommentElement(comment);

      $('.appended-comments').prepend($comment);
    }
  };

  // function to get comments from the DB and render with our function
  const loadComments = function() {
    $.ajax('/', { //future reference, use $.get()
      method: "GET"
    }).then(function(comments) {
      renderTweets(comments);
    }).catch((e) => {
      console.log('there was an error');
    });
  };

  loadComments();


  // actions taken on resource form submission
  $('#comment-form').on('submit', function(event) {
    event.preventDefault();
    // let formValue = $('#comment-text');

    // if (formValue.val() === '' || formValue.val() === null) {
    //   $('.error-section').slideDown(700).css('display', 'flex');

    //   $('.error-msg').text('You need to enter a valid input');
    //   setTimeout(() => {
    //     $('.error-section').slideUp(700);

    //   }, 2500);

    // } else if (formValue.val().length > 140) {
    //   $('.error-section').slideDown(700).css('display', 'flex');

    //   $('.error-msg').text('Too many characters! Twwets require 140 characters or less');
    //   setTimeout(() => {
    //     $('.error-section').slideUp(700);

    //   }, 2500);
    // }
    // else {

      const formData = $(this).serialize();
      $('.appended-comments').empty();
      $.ajax({
        method: "POST",
        url: '/resources',
        data: formData
      }).then(() => {
        $('#comment-text').val('');

        // $('.error-section').css('display', 'none');

        loadTweets();

      });
  //   }
  // });

  //document ready closing
})});
