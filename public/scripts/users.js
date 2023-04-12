
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




