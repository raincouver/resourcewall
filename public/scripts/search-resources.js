$(() => {

  const createSearchItemElement = (item) => {
    return `
    <a href="/resource/${item.id}">
      <article class="search-results">
        <div class="results-body">
          <div>Title: ${item.title}</div>
          <div>URL: ${item.url}</div>
          <div>Category: ${item.category}</div>
          <div>Rating: ${item.average_rating}</div>
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