// sticky navigation
//very important part

let navbar=$(".navbar");
$(window).scroll(function(){
    let oTop =$(".section-2").offset().top-window.innerHeight;
    if($(window).scrollTop()>oTop){
        navbar.addClass("sticky");
    }else{
        navbar.removeClass("sticky");
    }
});;


//counting numbers

// let nCount= function(selector){
//     $(selector).each(function(){
//         $(this).animate({
//             Counter:$(this).text()
//         },{
//             duration:4000,
//             easing:"swing",
//             step:function(value){
//                 $(this).text(Math.cell(value));
//             }
//         });
//     });
// };
let nCount = selector => {
    $(selector).each(function () {
      $(this)
        .animate({
          Counter: $(this).text()
        }, {
          // A string or number determining how long the animation will run.
          duration: 4000,
          // A string indicating which easing function to use for the transition.
          easing: "swing",
          /**
           * A function to be called for each animated property of each animated element. 
           * This function provides an opportunity to
           *  modify the Tween object to change the value of the property before it is set.
           */
          step: function (value) {
            $(this).text(Math.ceil(value));
          }
        });
    });
  };
  

let a = 0;
$(window).scroll(function () {
  // The .offset() method allows us to retrieve the current position of an element  relative to the document
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});

