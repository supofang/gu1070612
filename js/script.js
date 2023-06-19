$(document).ready(function($){
  $out();
  setInterval(function(){
    $out();
  },5000)
  function $out() {
    $('h1.tit div').removeClass('out').each(function(index){
      $(this).delay(index*100).animate({
        'background':'transparent'
      },0,function(){
        $(this).addClass('out')
      })
    })
  }

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $("canvas.snow").let_it_snow({
      windPower: -5,
      // speed: 2,
      //    color: "#ea0618",
      size:5,
      count: 20,
      image: "images/petal.png",
      opacity: 0
    });

  } else {
    $("canvas.snow").let_it_snow({
      windPower: -5,
      speed: 0,
      //    color: "#ea0618",
      size:2,
      count: 10,
      image: "images/petal.png",
      opacity: 0
    });

  }

});

