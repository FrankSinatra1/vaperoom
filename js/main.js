$(document).ready(function() {
	$('#fullpage').fullpage({
        navigation: true,
	});
});

$(document).ready(function(){
    let owl = $(".owl-carousel"),
        prev = $("#left"),
        next = $("#right");
    owl.on("changed.owl.carousel", function(){
        next.on("click", ()=>{
            owl.trigger("next.owl.carousel")
        });
        prev.on("click", ()=>{
            owl.trigger("prev.owl.carousel");
        })
    })
})






