
// Client facing scripts here
$(document).ready(() => {

  const categoryName = window.location.pathname.replaceAll("/category/", "");

  $('#h1').append(`<h1>${categoryName}</h1>`);

  $.ajax({
    method: 'GET',
    url: `/category-api/${categoryName}`
  })
    .then((response) => {
      console.log(response);
      response.data.forEach(element => {

        $.ajax({
          method: 'GET',
          url: `/category-api/feedback/${element.resource_id}`
        })
          .then((resourceData) => {
            console.log('resourceData', resourceData);

            const tableRow = `    
                <tr>
                  <td>
                    ${element.title}
                  </td>
                  <td>
                    ${element.url}
                  </td>
                  <td>
                    ${resourceData.data[0].likes}
                  </td>
                  <td>
                    ${resourceData.data[0].ratings}
                  </td>
                </tr>`;

            $('#resourcesFound').append(tableRow);
          })
          .catch(err => console.log(err));
      });
    })
    .catch(err => console.log(err));
});