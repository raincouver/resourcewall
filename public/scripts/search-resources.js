$(() => {

  const createSearchItemElement = (item) => {
    return `
    <a href="/resource/${item.id}">
      <article class="search-results">
        <div class="results-body">
          <div id="results-title">"${item.title}"</div>
          <div id="results-url">URL: ${item.url}</div>
          <div id="results-category">Category: ${item.category}</div>
          <div id="results-rating">Rating: ${item.average_rating}</div>
        </div>  
      </article>
    `
  }

  const renderSearch = (items) => {
    // empty child nodes before rending results
    $("#results-container").empty();
    
    const $errorMessage = $("#error-message-container");
    $errorMessage.slideUp();

    // if database returns empty array, no item found, return error
    if (items.length === 0) {
      $errorMessage.html(`<span class="error-message">No results found :(</span>`);
      $errorMessage.slideDown(400);
      setTimeout(() => {
        $errorMessage.slideUp(400);
      }, 2000);
      return;
    }

    for (let item of items) {
      $("#results-container").append(createSearchItemElement(item))
    }
  }

// 

  $(".search-form").on("submit", function(event) {
    event.preventDefault();
    const searchTerm = $("#search-input").val()
    
    // error handling element
    const $errorMessage = $("#error-message-container");
    $errorMessage.slideUp();
    
    // error message if no search submitted 
    if(searchTerm.trim().length === 0) {
      $errorMessage.html(`<span class="error-message">⚠ Search empty! ⚠</span>`);
      $errorMessage.slideDown(400);
      setTimeout(() => {
        $errorMessage.slideUp(400);
      }, 2000);
      return;
    }

    $.ajax({
      url: `http://localhost:8080/search/term/${searchTerm}`,
      type: "GET",
    }).then((response) => {
      console.log('success', response)
      renderSearch(response)
    })
  });
});