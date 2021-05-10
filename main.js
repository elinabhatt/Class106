
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
 });
 camera = document.getElementById("camera");
 Webcam.attach('#camera');
 
 function take_snapshot() {
    Webcam.snap(function (data_uri) {
       document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
 }
 console.log('ml5 version:', ml5.version);
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vKDUiIcpH/model.json',modelLoaded);
 
 function modelLoaded() {
    console.log('Model Loaded!');
 }
 
 function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
 }
 
 function gotResult(error, results) {
    if (error) {
       console.log(error);
    } else {
       console.log(results);
       document.getElementById("result_object_name").innerHTML = results[0].label;
       gesture = results[0].label;
       
   
         if (gesture == "OK") {
          speak = "I see you are doing ok";
          document.getElementById("result_object_gesture_icon").innerHTML = "&#128076;";
       } if (gesture == "Thumbs Up") {
          speak = "You seem to be good today";
          document.getElementById("result_object_gesture_icon").innerHTML = "&#128077;";
       } if (gesture == "Victory") {
          speak = "That was a great victory";
          document.getElementById("result_object_gesture_icon").innerHTML = "&#9996;";
       }  
       
       tospeak();        
    }
}
 
 function tospeak() {
    var synth = windows.speechSynthesis;
    speak_data = Speak;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
 
 }

