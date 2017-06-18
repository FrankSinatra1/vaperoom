$(document).ready(function() {
	$('#fullpage').fullpage({
        navigation: true,
	});
});


$(document).ready(function(){
  let owl = $(".owl-carousel"),
      url = null,
      bgDrop = $(".bg-drop"),
      prev = $("#left"),
      next = $("#right");

  owl.owlCarousel({
    loop: true,
    margin: 50,
    center: true,
    margin: 80,
    item: 1,
    responsive: {
      0: {
        items: 3,
      },
      640: {
      },
      1224: {
      },
    }
  });
  owl.on("changed.owl.carousel", function(){
    setTimeout(() => {
      let centerImg = owl.find(".center").find("div"),
          url = centerImg.css('background-image');
      bgDrop.css('background-image', url);
    }, 20)
  });

  next.on("click", ()=>{
    owl.trigger("next.owl.carousel");
  });
  prev.on("click", ()=>{
    owl.trigger("prev.owl.carousel");
  })
})





