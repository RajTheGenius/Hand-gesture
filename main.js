Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
})
Webcam.attach("#camera");

function takeSnap() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "image" src = "'+ data_uri+'">'
    })
   
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yXjkTRTRM/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model loaded sucessfully")
}

