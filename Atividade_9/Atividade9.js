function transformar(){

  var txt = document.getElementById('txt');

  if(document.getElementById('chk1').checked == true)
    txt.value = txt.value.toUpperCase();
  else
    if(document.getElementById('chk2').checked == true)
      txt.value = txt.value.toLowerCase();


}
