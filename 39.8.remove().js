/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems, ul;
articleItems = $(".article-item");
ul = articleItems.find("ul").first();
ul.remove()
// articleItems.css("color", "blue");
