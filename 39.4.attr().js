/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList;
var nav = $(".nav-list");
var item = nav.children().first();
navList = item.find("a").attr("href", "#1");
