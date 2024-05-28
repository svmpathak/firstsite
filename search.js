


function search() {
let input=document.getElementById('search').value
input=input.toUpperCase();
let x=document.getElementById('s');

for (var i = 0; i < x.length; i++) {
  if (!x[i].innerHTML.toUpperCase().includes(input) ) {

x[i].style.display="none";


  }
  else {
    x[i].style.display='items';
  }
}
}
