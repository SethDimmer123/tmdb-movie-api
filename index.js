// https://api.themoviedb.org/3/movie/550?api_key=d8fbeaf51bf149bc2f2be18ee1207509/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc

const ratedmoviesElem = document.querySelector('.movie-list')



async function main(movie) {
    const movies = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=d8fbeaf51bf149bc2f2be18ee1207509/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc`);
    const moviesData = await movies.json();
    console.log(moviesData)
    ratedmoviesElem.innerHTML = moviesData.slice(0,6).map((movie) => movieHTML(movie)).join("");
}
main();

function movieHTML(movie) {
    return` <div class="show-list">
    <div class="show-card">
      <div class="user-card__container">
         <figure>
          <img src=""
          <h3 class=""></h3>
          <h4 class="year"></h4>
        </figure>
        </div>
      </div> 
    </div>`;
}