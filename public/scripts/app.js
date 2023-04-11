// Client facing scripts here
// Client facing scripts here
$(() => {

  function createMyUrlsTable(data) {
        let table = "<table border=1>";
        // add a row for name and marks
        table += `<tr>
                    <th colspan="3">My URLs</th>
                  </tr>`;
        // now add another row to show subject
        table += `<tr>
                    <th>Title</th>
                    <th colspan="2">Options</th>
                  </tr>`;
        // now loop through students
        // show their name and marks
        var tr = "";
        for(let title in data["data"]) {
          tr += "<tr>";
          tr += `<td>${title["my_urls_titles"]}</td>`;
          tr += `<td><form method="GET" action="/resource/<%= id %>"><button type="submit" class="btn btn-outline-primary">Edit</button></form></td>`;
          tr += `<td><form method="POST" action="/users/<%= id %>/delete"><button type="submit" class="btn btn-outline-danger">Delete</button></form></td>`;
          tr += "</tr>"
        }
        table += tr + "</table>";
        
          // append table to body
            $myUrls.prepend(table);
        }



  $('body').load(() => {
    $.ajax({
      method: 'GET',
      url: '/users-api/user-myurls'
    })
    .done((response) => {
      // console.log(response);
      response.array.forEach(element => {
        console.log(element.my_urls_titles);
        const tableRow = `    
       <tr>
        <td>
          ${element.my_urls_titles}
        </td>
        <td>
          <form method="GET" action="/resource/<%= id %>">
            <button type="submit" class="btn btn-outline-primary">Edit</button>
          </form>
        </td>
        <td>
          <form method="POST" action="/users/<%= id %>/delete">
            <button type="submit" class="btn btn-outline-danger">Delete</button>
          </form>
        </td>
        </tr>`;
    
        $('#tablerows').append(tableRow);
      });




      // const $myUrls = $('#myUrls');
      // $myUrls.empty();

      // createMyUrlsTable(response.data)
    });
  });  });