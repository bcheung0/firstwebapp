/*
This is a JavaScript (JS) file.
JavaScript is the programming language that powers the web.

To use this file, place the following <script> tag just before the closing </body> tag in your HTML file, making sure that the filename after "src" matches the name of your file...

    <script src="script.js"></script>

Learn more about JavaScript at https://developer.mozilla.org/en-US/Learn/JavaScript

When you're done, you can delete all of this grey text, it's just a comment.
*/


fetch("https://source.unsplash.com/random/800x600")
  .then(res =>  res.blob())
  //.then(body => console.log(body))
  .then(blob => document.getElementById('picture').src= URL.createObjectURL(blob))
  .catch(error => console.log('Error: ', error));


