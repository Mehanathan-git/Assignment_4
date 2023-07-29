
(function (obj){
    let byeSpeaker ={};
    let speakWord = "Good Bye";
    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }
    obj.byeSpeaker=byeSpeaker;

})(window);

