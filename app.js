const movies = [
    {
        name: "Dunkirk",
        year: 2012,
        genre: "Action",
        runTime: 172
    },
    {
        name: "The Hate U Give",
        year: 2016,
        genre: "Drama",
        runTime: 149
    },
    {
        name: "Pearl Harbor",
        year: 2003,
        genre: "Action",
        runTime: 165
    },
    {
        name: "The Book Thief",
        year: 2001,
        genre: "Drama",
        runTime: 120
    },{
        name: "Newsies",
        year: 2013,
        genre: "Drama",
        runTime: 184
    },
    {
        name: "Good Will Hunting",
        year: 2005,
        genre: "Drama",
        runTime: 159
    },{
        name: "Tin Tin",
        year: 1998,
        genre: "Comedy",
        runTime: 110
    },
    {
        name: "Lord of the Rings",
        year: 1999,
        genre: "Adventure",
        runTime: 225
    },
    {
        name: "Fast and Furious",
        year: 2005,
        genre: "Action",
        runTime: 160
    },
    {
        name: "Airplanes",
        year: 1992,
        genre: "Action",
        runTime: 120
    },
    {
        name: "Open Season",
        year: 2009,
        genre: "Comedy",
        runTime: 139
    }
]

const moviesContainer = document.querySelector(".movies");
const sortYear = document.getElementById("sortYear");
const sortTitle = document.getElementById("sortTitle");
const selectGenre = document.getElementById("genreSelect");
const pickMe = document.getElementById("pickMe");
const pickMeWords = document.querySelector(".pickmeWords");
const movieCount = document.getElementById("movieCount");
var moviesSorted = [];
var randIdx = 0

    console.log(moviesSorted);


sortTitle.addEventListener("click", ()=> {
    console.log("Title")

    moviesSorted = movies.sort((a,b)=> a.name.localeCompare(b.name));

    update(moviesSorted);

})

sortYear.addEventListener("click", ()=> {
    console.log("Year")

    moviesSorted = movies.sort((a,b)=> b.year - a.year);

    update(moviesSorted);

})

selectGenre.addEventListener("change", (e) =>{
    // currentGenre = selectGenre.value;

    // updateBooks();
    console.log(selectGenre.value)

    moviesSorted = movies.filter(movies => movies.genre === selectGenre.value);
    update(moviesSorted);

    if (selectGenre.value === "None") {
        update(movies);
    }

})

pickMe.addEventListener("click", ()=>{
    pickMeWords.innerHTML = "";

    console.log(moviesSorted);

    const words = document.createElement("div")
    
    if(moviesSorted.length === 0) {
        randIdx = Math.floor(Math.random() * movies.length);

        words.innerText = "Your watching: " + movies[randIdx].name 
    } else {
        randIdx = Math.floor(Math.random() * moviesSorted.length);

        words.innerText = "Your watching: " + moviesSorted[randIdx].name
    }
    
    pickMeWords.appendChild(words)
})

function update(list) {
    moviesContainer.innerHTML = ""

list.forEach((movie) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    const title = document.createElement("div");
    title.classList.add("movieTitle")
    title.innerText = movie.name

    const yearGenre = document.createElement("div");
    yearGenre.classList.add("movieYear")
    yearGenre.innerText = movie.year + "  |  " + movie.genre

    const runTime = document.createElement("div");
    runTime.classList.add("movieRunTime")
    runTime.innerText = movie.runTime + "mins"


    movieDiv.appendChild(title);
    movieDiv.appendChild(yearGenre);
    movieDiv.appendChild(runTime);


    moviesContainer.appendChild(movieDiv);

});

    if(moviesSorted.length === 0) {
        movieCount.innerText = "Showing " + movies.length + " of 11";
 
    } else {
        movieCount.innerText = "Showing " + moviesSorted.length + " of 11";
    }

}

update(movies);