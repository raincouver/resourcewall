$(() => {

  const $searchResourceForm = $(`
  <form id="search-resource-form" class="search-resource-form">
      <div class="search-resource-form__field-wrapper">
        <label for="search-resource-form__input">Search Resources</label>
        <input type="text" name="searchTerm" placeholder="Search" id="search-resource-form__input">
      </div>
      <div class="search-resource-form__field-wrapper">
          <button>Search</button>
          <a id="search-resource-form__cancel" href="#">Cancel</a>
      </div>
    </form>
  `)
  window.$searchResourceForm = $searchResourceForm;

  $searchResourceForm.on('submit', function(event) {
    event.preventDefault();
    const searchTerm = $(this).find('#search-resource-form__input').val();
    console.log('Search term:', searchTerm);
    searchAllResources(searchTerm)
      .then((results) => {
        // Use the results to display the search output on the page
        console.log('Search results: ', results);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  $('body').on('click', '#search-resource-form__cancel', function() {
    // Hide the search form and show the default page content
    return false;
  });

});