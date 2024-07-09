gsap.to(".imagecontainer",{
    ease:Expo.easeInOut,
    width: "100%",
    duration : 2,
    stagger: 2
})

gsap.to(".text h5",{
    ease:Expo.easeInOut,
    stagger: 2.5,
    top: 0
})

gsap.to(".text h5",{
    delay: 2.5,
    ease:Expo.easeInOut,
    stagger: 2,
    top: "-200%"
})  