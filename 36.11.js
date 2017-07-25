var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    finalName = finalName.toLowerCase();
    var a = finalName[0].toUpperCase();
    var b = finalName[finalName.indexOf(" ")+1].toUpperCase();
    finalName = a + finalName.slice(1,finalName.indexOf(" ")+1) + b + finalName.slice(finalName.indexOf(" ")+2);


    // Don't delete this line!
    return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}
