/*
Using string methods, convert "audacity" to "Udacity".

Check out MDN's documentation on JavaScript string methods before you get started (hint: slice() will probably be useful).
*/
var s = "audacity";

var udacityizer = function(s) {
    s = s[1].toUpperCase() + s.slice(2);
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));
