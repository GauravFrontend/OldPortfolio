
  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
  
// *********************** cursor ***********************
let innerCursor = document.querySelector(".inner-cursor");
let outercursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);
function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outercursor.style.left = `${x}px`;
    outercursor.style.top = `${y}px`;


}
let namee = document.querySelector("#name");
namee.addEventListener("mouseover",() => {
    innerCursor.classList.add("grow");
    outercursor.classList.add("hidouter");
});
namee.addEventListener("mouseleave",() => {
    innerCursor.classList.remove("grow");
    outercursor.classList.remove("hidouter");
});
let aboutleft = document.querySelector("#aboutleft");
aboutleft.addEventListener("mouseover",() => {
    innerCursor.classList.add("grow");
    outercursor.classList.add("hidouter");
});
aboutleft.addEventListener("mouseleave",() => {
    innerCursor.classList.remove("grow");
    outercursor.classList.remove("hidouter");
});
let work = document.querySelector("#work");
work.addEventListener("mouseover",() => {
    innerCursor.classList.add("grow");
    outercursor.classList.add("hidouter");
});
work.addEventListener("mouseleave",() => {
    innerCursor.classList.remove("grow");
    outercursor.classList.remove("hidouter");
});
let getintouch = document.querySelector("#getintouch");
getintouch.addEventListener("mouseover",() => {
    innerCursor.classList.add("grow");
    outercursor.classList.add("hidouter");
});
getintouch.addEventListener("mouseleave",() => {
    innerCursor.classList.remove("grow");
    outercursor.classList.remove("hidouter");
});
// *********************** cursor ***********************
