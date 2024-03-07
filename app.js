let movies = document.querySelector("#movies");

let inp = document.querySelector("input");

let btn = document.querySelector("button");

btn.addEventListener("click",function(){

    let inpText = inp.value;

    if(inpText == ""){
        alert("Please enter movie name!");
    }
    else{
        movies.innerHTML = "";

        callApi(inpText);

        inp.value = "";
    }


});


function callApi(inpText){

    axios(`https://api.tvmaze.com/search/shows?q=${inpText}`)
        .then(function (res) {
          fetch(res.data);
        })
        .catch(function (err) {
            console.log(err);
        });
}

function fetch(data){

    for (const element of data) {

        let li = document.createElement("li");

        li.innerHTML = `
            <image src="${element.show.image.medium}" />
            <h3>${element.show.name}</h3>
            <p>${element.show.language}</p>
            `;
        movies.append(li);

    }

      
}