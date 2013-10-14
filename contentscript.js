$(function() {
  // Trollface image must be at 'my_extension/images/trollface.jpg'.
  var rabbit = chrome.extension.getURL("images/image.jpg");
  $('img').each(function(index, image){
    $(image).attr('src', rabbit);
  });
});