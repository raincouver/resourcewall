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
    
    for (let item of items) {
      $("#results-container").append(createSearchItemElement(item))
    }
  }

  $(".search-form").on("submit", function(event) {
    event.preventDefault();
    const searchTerm = $("#search-input").val()
    
    $.ajax({
      url: `http://localhost:8080/search/term/${searchTerm}`,
      type: "GET",
    }).then((response) => {
      console.log('success', response)
      renderSearch(response)
    })
  })
  
});