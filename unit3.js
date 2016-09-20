/*jshint multistr:true */
var text = "Hey how are you \ doing? My name is Emmily.";
var myName = "Edison";
var hits = ["apple", "banana", "curuba", "durian", "eggplant"];

for ( var text = 0; text.length < 8; text++) {
    console.log(text);
}
if (myName[0] === "Edison") {
    for ( var messaging = text; messaging < (text.length < 9); text++)
        console.log("Your name wasn't found");
} else {
    console.log("goodbye");
}