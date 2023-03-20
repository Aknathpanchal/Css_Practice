

async function searchMovie() {

    var inputValue = document.getElementById("search").value;
    // console.log(inputValue)


    try {
        let res = await fetch(`https://www.omdbapi.com/?apikey=aef8e813&s=${inputValue}`)

        let data = await res.json()

        return data.Search;
        //appendData(data.Search);

    }
    catch (error) {
        console.log(error)
    }
}


function appendData(data) {

    document.getElementById("result").innerHTML = null;

    data.forEach(function (elem) {
        let innerdiv = document.createElement("div");

        innerdiv.addEventListener("click", function () {
            details(elem);
        })

        let img = document.createElement("img");
        img.src = elem.Poster;

        let h4 = document.createElement("h4");
        h4.innerText = elem.Title;

        innerdiv.append(img, h4);
        document.getElementById("result").append(innerdiv)
    })

}

//now we are joint(searchMovie+Appendmovie) two function in one function 

async function main() {

    let data = await searchMovie();

    if (data === undefined) {
        return false
    }

    appendData(data);

}

let timerid;
function debounce(func, delay) {

    if (timerid) {
        clearTimeout(timerid) //almost similar to like innerHTML.null
    }
    timerid = setTimeout(function () {

        func()  // these is main function we r only change name here 

    }, delay)
}

//how its execute now debounce-> main->searchMovies->appendData

function details(elem) {
    console.log(elem)

    document.getElementById("show").innerHTML = null;

    let innerdiv = document.createElement("div");

    let img = document.createElement("img");
    img.src = elem.Poster;

    let title = document.createElement("h2");
    title.innerText = elem.Title;

    let p = document.createElement("p");
    p.innerText = elem.Type;

    let year = document.createElement("h4");
    year.innerText = elem.Year;

    let imdb = document.createElement("h4");
    imdb.innerText = "IMDb " + elem.imdbID;

    innerdiv.append(title, p, year, imdb);
    document.getElementById("show").append(img, innerdiv)

}


//trending movies

trendingMovies();

async function trendingMovies() {

    try {

        let res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_tFzePSvKllYVON9UleRjdiYVG6QEOK4sCqeqA8cMNkxy6HlT5IGebFbGODBBJRB4`);

        let data = await res.json()

        console.log("Cat", data)

        tendingDataAppend(data.results);
    }
    catch (error) {
        console.log(error);
    }
}


function tendingDataAppend(data) {

    document.getElementById("trending").innerHTML = null;

    data.forEach(function (elem) {

        let innerdiv = document.createElement("div");

        let img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w500/${elem.poster_path}`

        let title = document.createElement("h4");
        title.innerText = elem.title;

        let p = document.createElement("p");
        p.innerText = elem.media_type;

        let year = document.createElement("h4");
        year.innerText = elem.release_date;

        let Popularity = document.createElement("h5");
        Popularity.innerText = "IMDb " + "⭐" +elem.vote_average;

        innerdiv.append(img, title, p, year, Popularity);
        document.getElementById("trending").append(innerdiv)
    })
}