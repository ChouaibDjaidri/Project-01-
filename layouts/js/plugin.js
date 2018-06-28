$(document).ready(function(){

  // make sure the password and repeat password are the same
  $('#btn1').click(function(){
      $("#fo").show();
      $("#fo1").hide();
  });

  $('#btn2').click(function(){
      $("#fo1").show();
      $("#fo").hide();

  });


});

var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btnck");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("act");
        current[0].className = current[0].className.replace(" act", "");
        this.className += " act";
    });
}

