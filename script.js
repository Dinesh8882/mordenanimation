function startPageAnimation() {
    let tl = gsap.timeline();
    tl.to(".gsap-box li", {
        scaleY: 1,
        duration: 1,
        delay: 1,
        transformOrigin: "bottom left",
        stagger: 0.2
    }).from(".content h1", {
        opacity: 0
    }).to(".gsap-box li",{
        duration:.5,
        scaleY:0,
        transformOrigin:"top left",
        stagger:.1,
        delay:0.25
    })
}
startPageAnimation()