gsap.from("#page1 #box", {
  rotate: 360,
  opacity: 0,
  duration: 2,
  scale: 0.5,
});

gsap.from("#page2 #box", {
  rotate: 360,
  opacity: 0,
  duration: 2,
  scale: 5,

  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 30%",
    end: "top 20%",
    scrub: true,
    // srub: 3,
  },
});
