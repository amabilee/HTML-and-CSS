fetch('data.json')
.then(function (response) {
    return response.json();
})

.then(function (data) {
        document.getElementById("featureOneImg").src = data[0].logo;
        document.getElementById("featureOneText").innerHTML = data[0].title;
        document.getElementById("featureTwoImg").src = data[1].logo;
        document.getElementById("featureTwoText").innerHTML = data[1].title;
        document.getElementById("featureThreeImg").src = data[2].logo;
        document.getElementById("featureThreeText").innerHTML = data[2].title;
        document.getElementById("featureFourImg").src = data[3].logo;
        document.getElementById("featureFourText").innerHTML = data[3].title;
        document.getElementById("featureFiveImg").src = data[4].logo;
        document.getElementById("featureFiveText").innerHTML = data[4].title;
        document.getElementById("featureSixImg").src = data[5].logo;
        document.getElementById("featureSixText").innerHTML = data[5].title;
        document.getElementById("featureSevenText").innerHTML = data[6].title;
        document.getElementById("featureSevenImg").src = data[6].logo;
        document.getElementById("featureEightText").innerHTML = data[7].title;
        document.getElementById("featureEightImg").src = data[7].logo;
        document.getElementById("featureNineText").innerHTML = data[8].title;
        document.getElementById("featureNineImg").src = data[8].logo;
})

.catch(function (err) {
    console.log(err);
})
  
