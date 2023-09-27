fetch('data.json')
.then(function (response) {
    return response.json();
})

.then(function (data) {
        document.getElementById("dataOne").innerHTML += data[0].category;
        document.getElementById("dataTwo").innerHTML += data[1].category;
        document.getElementById("dataThree").innerHTML += data[2].category;
        document.getElementById("dataFour").innerHTML += data[3].category;
        document.getElementById("dataOneScore").innerHTML += data[0].score;
        document.getElementById("dataTwoScore").innerHTML += data[1].score;
        document.getElementById("dataThreeScore").innerHTML += data[2].score;
        document.getElementById("dataFourScore").innerHTML += data[3].score;
        document.getElementById("statsOneImg").src += data[0].icon;
        document.getElementById("statsTwoImg").src += data[1].icon;
        document.getElementById("statsThreeImg").src += data[2].icon;
        document.getElementById("statsFourImg").src += data[3].icon;
})

.catch(function (err) {
    console.log(err);
})