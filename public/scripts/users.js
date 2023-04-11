// // JavaScript

// // select the output element where we will display the data
// const output = document.getElementById('myUrls');

// // use Fetch to get data from a URL
// fetch('../routes/user-api/user-myurls')
// .then(response => response.json()) // parse the response as JSON
// .then(data => {
//   // Select the div where the data will be displayed
//   const dataDiv = document.querySelector('#myUrls');

//   // Iterate through the data and create a new paragraph for each item
//   data.forEach(item => {
//     const p = document.createElement('p');
//     p.textContent = item.title;
//     dataDiv.appendChild(p);
//   });
// })
// .catch(error => console.error(error)); // handle any errors





// Client facing scripts here
$(() => {
  $('body').load(() => {
    $.ajax({
      method: 'GET',
      url: '/users-api/user-myurls'
    })
    .done((response) => {
  .then(data => { data.array.forEach(element => {
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

    document.querySelector('#tablerows').insertAdjacentElement('beforeend', tableRow);
  });
  });





  // $('#myurlsbutton').on('click', () => {
  //   fetch('/users-api/user-myurls')
  //   .then(response => response.json()) // parse the response as JSON
  //   .then(data => {
  //     // console.log(data)
  //     createMyUrlsTable(data)
  //   }
  //     );

  //     // const $myUrls = $('#myUrls');
  //     // showMyUrlsTable()
  //   });   


  //   $.ajax({
  //     method: 'GET',
  //     url: '/users-api/user-myurls'
  //   })
  //   .done((response) => {
  //     console.log(response);
  //     // const $myUrls = $('#myUrls');
  //     // $myUrls.empty();

  //     // createMyUrlsTable(response.data)
  //   });
  // });


  // fetch("../routes/user-api/user-myurls")

  // .then(response => response.json())
  // .then(data => 
  //   console.log(data)
  //   // createMyUrlsTable(data)
  //   )
  // });

//   

//     function showLikedUrlsTable(){
//       fetch("../routes/user-api/user-likedurls")
//         .then(response => response.json())
//         .then(data => createLikedUrlsTable(data));
//     }
  
//     function createLikedUrlsTable(data) {
//       let table = "<table border=1>";
//       // add a row for name and marks
//       table += `<tr>
//                   <th colspan="3">Liked URLs</th>
//                 </tr>`;
//       // now add another row to show subject
//       table += `<tr>
//                   <th>Title</th>
//                   <th colspan="2">Options</th>
//                 </tr>`;
//       // now loop through students
//       // show their name and marks
//       var tr = "";
//       for(let title in data["data"]) {
//         tr += "<tr>";
//         tr += `<td>${title["liked_urls_titles"]}</td>`;
//         tr += `<td><form method="GET" action="/resource/<%= id %>"><button type="submit" class="btn btn-outline-primary">View</button></form></td>`;
//         tr += `<td><form method="POST" action="/users/<%= id %>/delete"><button type="submit" class="btn btn-outline-danger">Delete</button></form></td>`;
//         tr += "</tr>"
//       }
//       table += tr + "</table>";
      
//         // append table to body
//         $likedUrls.prepend(table);
//       }
      
//       const renderTables = function() {

//         //empty the tweet canvas before fetch
//         $myUrls.empty();
//         $likedUrls.empty();

//         showMyUrlsTable();
//         showLikedUrlsTable()
//       };

//       const loadTables = (function() {

//         $.ajax({
//           method: 'GET',
//           url: '/users',
//         }).then(() => {
//           renderTables();
//         });
    
//       });

//       const $myUrls = $('#myUrls');
//       const $likedUrls = $('#likedUrls');

//       loadTables();

});


















// Fetch resources
$(document).ready(() => {
  const $resultsContainer = $("#results-container");

  
})