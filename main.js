$('.search-button').on('click', function (){
  $.ajax({
    url: 'https://www.omdbapi.com/?apikey=b3ddf57c&s=' + $('.input-keyword').val(),
    success: results => {
      const movie = results.Search;
      let card = "";
      movie.forEach(m => {
        card += showCard(m);
      });
  
      $('.movie-container').html(card);
  
      $(".button").on('click', function() {
  
        $.ajax({
          url: 'https://www.omdbapi.com/?apikey=b3ddf57c&i=' + $(this).data("imdbid"),
          success: m => {
            const movieDetail = showDetail(m);
            $('.modal-body').html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText)
          }
        });
      });
  
    },
    error: (e) => {
      console.log(e.responseText)
    }
  
  });
})


















function showCard (m) {
  return `<div class="col-md-4 my-3">
            <div class="card">
                    <img src="${m.Poster}" class="card-img-top" alt="foto 1">
                  <div class="card-body">
                   <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary button" data-bs-toggle="modal" data-bs-target="#MovieDetailModal" data-imdbid="${m.imdbID}">Selengkapnya</a>
            </div>
         </div>
      </div>`
}


function showDetail (m) {
  return ` <div class="container-fluid">
                     <div class="row">
                       <div class="col-md-3">
                         <img src="${m.Poster}" alt="foto1" class="img-fluid"/>
                       </div>
                    <div class="col-md">
                     <ul class="list-group">
             <li class="list-group-item"><h3>${m.Title}</h3>${m.Year}</li>
             <li class="list-group-item"><strong>DIREKTUR :</strong> ${m.Director}</li>
             <li class="list-group-item"><strong>AKTOR :</strong> ${m.Actors}</li>
             <li class="list-group-item"><strong>PENULIS :</strong> ${m.Writer}</li>
             <li class="list-group-item"><strong>PLOT :</strong></br>${m.Plot}</li>
           </ul>
                       </div>
                     </div>
                   </div>`
}