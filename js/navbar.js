// const navButton = document.querySelector('.navButton');
//     navButton.innerHTML = "Home";


const home  = new TimelineMax();
home
.to("#home-btn",1,{opacity:0});
const about  = new TimelineMax();
about
.to("#about-btn",1,{opacity:0});
const projects  = new TimelineMax();
projects
.to("#ach-btn",1,{opacity:0});


 const controller = new ScrollMagic.Controller();

 const scene1 = new ScrollMagic.Scene({
    trigger:"#bars",
    offset:765,
    duration:100,
    reverse:true,
    triggerHook:0.5,
})
.setTween(home)
.addIndicators()
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
    trigger:"#achievements",
    offset:1410,
    duration:100,
    reverse:true,
    triggerHook:0.5,
})
.setTween(about)
.addIndicators()
.addTo(controller);

const scene3 = new ScrollMagic.Scene({
    trigger:"#projects",
    offset:2150,
    duration:100,
    reverse:true,
    triggerHook:0.5,
})
.setTween(projects)
.addIndicators()
.addTo(controller);