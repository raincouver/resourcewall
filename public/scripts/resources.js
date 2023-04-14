
// Client facing scripts here
$(() => {

  const id = window.location.pathname.replaceAll("/resource/", "");

  $.ajax({
    method: 'GET',
    url: `/resource-modify/like/${id}`
  })
    .then((response) => {

      const tableRow = `   
                      <form method="POST" action='/resource-modify/like/${id}'>
                      <button type="submit" id="likeButton" ${response.likeBtn.likeBtnStyle}>${response.likeBtn.likeBtnText}</button>
                      </form>`;

      $('.tags-container').prepend(tableRow);

    })
    .catch(err => console.log(err));


    // $.ajax({
    //   method: 'GET',
    //   url: `/resource-modify/rate/${id}`
    // })
    //   .then((response) => {
  
    //     document.querySelector('.star').disabled = `${response.rateBtn.rateBtnStatus}`;
  
    //   })
    //   .catch(err => console.log(err));



});


  // const ratingContainer = document.getElementById("rating-container");
  // const ratingBtns = ratingContainer.querySelectorAll(".rating-btn");
  // const submitBtn = ratingContainer.querySelector("#submit-btn");
  // let isRated = false;
  
  // function calculateAverageRating() {
  //   const ratedBtns = ratingContainer.querySelectorAll(".rated");
  //   const totalRated = ratedBtns.length;
  //   let sum = 0;
  //   ratedBtns.forEach((btn) => {
  //     sum += parseInt(btn.value);
  //   });
  //   const averageRating = sum / totalRated;
  //   alert(`Average Rating: ${averageRating}`);
  // }
  
  // ratingBtns.forEach((btn) => {
  //   btn.addEventListener("click", () => {
  //     if (!isRated) {
  //       btn.classList.add("rated");
  //       isRated = true;
  //     }
  //   });
  //   btn.addEventListener("mouseover", () => {
  //     if (!isRated) {
  //       btn.style.backgroundColor = "#ccc";
  //     }
  //   });
  //   btn.addEventListener("mouseout", () => {
  //     if (!isRated) {
  //       btn.style.backgroundColor = "#eee";
  //     }
  //   });
  // });
  
  // submitBtn.addEventListener("click", () => {
  //   calculateAverageRating();
  //   ratingBtns.forEach((btn) => {
  //     btn.classList.remove("rated");
  //     btn.setAttribute("disabled", "disabled");
  //   });
  //   submitBtn.style.display = "none";
  // });






