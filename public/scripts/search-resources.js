$(() => {

  const createSearchItemElement = (item) => {
    return `
     <div>${item.title}</div>
     <div>${item.average_rating}</div>
     <div>--------</div>
    `
  }

  const renderSearch = (items) => {
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