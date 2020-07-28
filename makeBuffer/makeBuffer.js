function makeBuffer(){
    let text = "";
    return function(nextText){
        if(arguments.length == 0){
            return text;
        }
        text += nextText;
    }

}
var buffer = makeBuffer();
buffer("Test ");
buffer("тебя не съест");
alert(buffer());
