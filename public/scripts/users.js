
// Client facing scripts here
$(() => {

  $.ajax({
    method: 'GET',
    url: '/users-api/userinfo'
  })
    .then((response) => {
      console.log(response);
      response.data.forEach(element => {
        console.log(element.my_urls_titles);
        const tableRow = `   

            <div>
              <img id="userAvatar" src=${element.profile_picture_path}>
            </div>
            <div>
              <span>Hi! ${element.email}</span>
            </div>`;

        $('#userInfo').append(tableRow);
      });
    })
    .catch(err => console.log(err));


<<<<<<< HEAD
// Client facing scripts here
$(() => {
  fetch('/users-api/user-myurls')
  .then(res => {return res.json()}) // parse the response as JSON
  .then(data => { 
    
    console.log(data);
    data.array.forEach(element => {
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
=======
    // console.log('alert');
    $.ajax({
      method: 'GET',
      url: '/users-api/user-myurls'
    })
      .then((response) => {
        console.log(response);
        response.data.forEach(element => {
          console.log(element.my_urls_titles);
          const tableRow = `   

            <tr>
              <td>
                ${element.my_urls_titles}
              </td>
              <td>
                <form method="GET" action="/resource/${element.id}">
                  <button type="submit" class="btn btn-outline-primary">Edit</button>
                </form>
              </td>
              <td>
                <form method="POST" action="/resource-modify/delete/${element.resource_id}">
                  <button type="submit" class="btn btn-outline-danger">Delete</button>
                </form>
              </td>
              </tr>`;

          $('#myUrltablerows').append(tableRow);
        });
      })
      .catch(err => console.log(err));




        $.ajax({
          method: 'GET',
          url: '/users-api/user-likedurls'
        })
          .then((response) => {
            console.log(response);
            response.data.forEach(element => {
              console.log(element.my_urls_titles);
              const tableRow = `   
>>>>>>> a8650324b2629b37bfcfc9a8398dea79dfd9296b
    
                <tr>
                  <td>
                    ${element.liked_urls_titles}
                  </td>
                  <td>
                    <form method="GET" action="/resource/${element.id}">
                      <button type="submit" class="btn btn-outline-primary">View</button>
                    </form>
                  </td>
                  <td>
                    <form method="POST" action="/resource-modify/dislike/${element.likes_id}">
                      <button type="submit" class="btn btn-outline-danger">Dislike</button>
                    </form>
                  </td>
                  </tr>`;
    
              $('#likedUrltablerows').append(tableRow);
            });
          })
          .catch(err => console.log(err));

});





<<<<<<< HEAD


=======
// Fetch resources
$(document).ready(() => {
  const $resultsContainer = $("#results-container");

  
})
>>>>>>> a8650324b2629b37bfcfc9a8398dea79dfd9296b

