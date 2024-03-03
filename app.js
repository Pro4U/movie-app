let movies = document.querySelector("#movies");

let inp = document.querySelector("input");

let btn = document.querySelector("button");


btn.addEventListener("click",function(){

   callApi();

});


function callApi(){

    axios("https://api.tvmaze.com/search/shows?q=girls")
        .then(function (res) {
            fetch(res.data);
        })
        .catch(function (err) {
            console.log(err);
        });
}

function fetch(data){



}