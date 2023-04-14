const allStars = document.querySelectorAll('.star')
const currentRating = document.querySelector('.current-rating');
const ratingElement = document.getElementById('rating');

allStars.forEach((star, i) => {
  star.onclick = function() {
    let current_star_level = i + 1;
    allStars.forEach((star, j) => {
      if(current_star_level >= j + 1) {
        star.innerHTML = '&#9733'; 
      } else {
        star.innerHTML = '&#9734';
      }
    })
    ratingElement.value = current_star_level; 
    currentRating.textContent = `Rating: ${current_star_level} of 5`;

    // AJAX request to the server to add the rating
    const id = window.location.pathname.slice(-1)
    
    $.ajax({
      url: `/resource-modify/rate/${id}`,
      type: 'POST',
      data: {
        rating: current_star_level
      },
      success: function(response) {
        console.log(response);
      },
      error: function(error) {
        console.log(error);
      }
    });
  }
})