
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

            <div class="user-avatar-name-container">
              <div>
                <span>${element.name}</span>
              </div>
              <div>
                <img id="userAvatar" src=${element.profile_picture_path}>
              </div>
              <div>
              <form method="POST" action="/resource-modify/newRandomAvatar/${element.id}">
              <button type="submit" class="btn btn-danger">Get a new look</button>
              </form>
              </div>
            </div>
            
            <div>
            <form method="POST" action="/resource-modify/changeUserName/${element.id}">
            <label>New nickname:</label>
            <input type="text" id="new-name" name="newName" placeholder="" value="" class="form-control"
              style="width:30rem">
            <button type="submit" class="btn btn-danger">Change Name</button>
            </form>
            </div>
            
            <div>
            <form method="POST" action="/resource-modify/changepwd/${element.id}">
            <label>New Password:</label>
            <input type="password" id="new-pwd" name="newPwd" placeholder="" value="" class="form-control"
              style="width:30rem">
            <button type="submit" class="btn btn-danger">Change Password</button>
            </form>
            </div>


            `;

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
              <td id="title-column">
                ${element.my_urls_titles}
              </td>
              <td id="view-column">
                <form method="GET" action="/resource/${element.id}">
                  <button type="submit" class="btn btn-outline-primary">View</button>
                </form>
              </td>
              <td>
                <form method="POST" action="/resource-modify/delete/${element.id}">
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
                  <td id="title-column">
                    ${element.liked_urls_titles}
                  </td>
                  <td id="view-column">
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




