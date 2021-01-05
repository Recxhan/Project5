// Baguettebox
window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });

// Search
function search() {   
  var input, filter, div, anchor, a, i;
  input = document.getElementById('search-input');
  filter = input.value.toUpperCase();
  div = document.getElementById('search-opt');
  anchor = div.getElementsByTagName('a');
  for (i = 0; i < anchor.length; i++) {
    a = anchor[i];
    if (a.getAttribute('data-caption').toUpperCase().indexOf(filter) > -1) {
      anchor[i].style.display = "";
    } else {
      anchor[i].style.display = "none";
    }
  }
}


