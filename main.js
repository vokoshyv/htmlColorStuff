$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!

$('p').each(function(index, element){
  
  //select each of the two paragraph elements
  var $el = $(element);

  //grab the text of that element and split up the string based on spaces between the words. 
  var words = $el.text().split('');

  //clear the entire element; in this case, it is the paragraph element
  $el.html('');

  //loop through the words and append them to the $el within spans
  for (var i = 0; i < words.length; i++){
    var newSpan = $('<span>').text(words[i] + ' ');
    $el.append(newSpan);
  }
})







  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!

setInterval(function(){
    
var color = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');

var i = 0; 
var work = $('span');

setInterval(function(){
  var $current = $(work[i]);
  $current.css('color', color);
  i += 1;
  if (i === work.length){i = 0;}
}, 1)
    

}, 1000)

setInterval(function(){
    
var color = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');

var i = 0; 
var work = $('span');

setInterval(function(){
  var $current = $(work[i]);
  $current.css('color', color);
  i += 1;
  if (i === work.length){i = 0;}
}, 2)
    

}, 1000)

setInterval(function(){
    
var color = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');

var i = 0; 
var work = $('span');

setInterval(function(){
  var $current = $(work[i]);
  $current.css('color', color);
  i += 1;
  if (i === work.length){i = 0;}
}, 3)
    

}, 1000)

setInterval(function(){
    
var color = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');

var i = 0; 
var work = $('span');

setInterval(function(){
  var $current = $(work[i]);
  $current.css('color', color);
  i += 1;
  if (i === work.length){i = 0;}
}, 4)
    

}, 1000)

setInterval(function(){
    
var color = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');

var i = 0; 
var work = $('span');

setInterval(function(){
  var $current = $(work[i]);
  $current.css('color', color);
  i += 1;
  if (i === work.length){i = 0;}
}, 5)
    

}, 1000)

setInterval(function(){
    
var color = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');

var i = 0; 
var work = $('span');

setInterval(function(){
  var $current = $(work[i]);
  $current.css('color', color);
  i += 1;
  if (i === work.length){i = 0;}
}, 6)
    

}, 1000)

setInterval(function(){
    
var color = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');

var i = 0; 
var work = $('span');

setInterval(function(){
  var $current = $(work[i]);
  $current.css('color', color);
  i += 1;
  if (i === work.length){i = 0;}
}, 7)
    

}, 1000)

setInterval(function(){
    
var color = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');

var i = 0; 
var work = $('span');

setInterval(function(){
  var $current = $(work[i]);
  $current.css('color', color);
  i += 1;
  if (i === work.length){i = 0;}
}, 8)
    

}, 1000)

setInterval(function(){
    
var color = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');

var i = 0; 
var work = $('span');

setInterval(function(){
  var $current = $(work[i]);
  $current.css('color', color);
  i += 1;
  if (i === work.length){i = 0;}
}, 9)
    

}, 1000)

setInterval(function(){
    
var color = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');

var i = 0; 
var work = $('span');

setInterval(function(){
  var $current = $(work[i]);
  $current.css('color', color);
  i += 1;
  if (i === work.length){i = 0;}
}, 10)
    

}, 1000)


// setInterval(function(){
    
// var color = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
// return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');

// var work = $('span');
// var i = work.length-1; 

// setInterval(function(){
//   var $current = $(work[i]);
//   $current.css('color', color);
//   i -= 1;
//   if (i === 0){i = work.length-1;}
// }, 1)
    

// }, 1000)



});

      
      // $(this).css('color', color);