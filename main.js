function startClassification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CJXtQ3oY5/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){
        console.error(error);
    } else {
        console.log(results);
        
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear a - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2) + '%';

        document.getElementById("result_label").style.color = "rgb(" + random_number_r + ", " + random_number_g + ", " + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + ", " + random_number_g + ", " + random_number_r + ")";

        img1 = document.getElementById("chicken");
        img2 = document.getElementById("cow");
        img3 = document.getElementById("dog");
        img4 = document.getElementById("cat");

        if (results[0].label == "chicken"){
            img1.src = 'chicken.gif';
            img2.src = 'cow.png';
            img3.src = 'dog.png';
            img4.src = 'cat.png';
        } else if (results[0].label == "cow") {
            img1.src = 'chicken.png';
            img2.src = 'cow.gif';
            img3.src = 'dog.png';
            img4.src = 'cat.png';
        } else if (results[0].label == "dog") {
            img1.src = 'chicken.png';
            img2.src = 'cow.png';
            img3.src = 'dog.gif';
            img4.src = 'cat.png';
        } else {
            img1.src = 'chicken.png';
            img2.src = 'cow.png';
            img3.src = 'dog.png';
            img4.src = 'cat.gif';
        }
    }
}