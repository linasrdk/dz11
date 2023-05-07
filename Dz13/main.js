$('#m-square').click(function (e) { 
  e.preventDefault();
  let box = $('#box');
  box.animate({
    left: 200
  })
  box.animate({
    top:200
  })
  box.animate({
    left: 0
  })
  box.animate({
    top: 0
  })
});

$('#m-triangle').on('click', function(){
$('#box').animate({
left: 200
});
$('#box').animate({
top: 100,
left: 100
});
$('#box').animate({
left: 0,
top: 0
});
});

$('#animate').click(function () {
  if (box.style.width === "400px") {
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.opacity = 1;
  }
  else {
    box.style.width = "400px";
    box.style.height = "400px";
    box.style.opacity = 0;
  }
});

