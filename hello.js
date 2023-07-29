
(function (obj){
    let helloSpeaker ={};
    let speakWord = "Hello";
    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }
    obj.helloSpeaker=helloSpeaker;

})(window);

