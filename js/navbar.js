// const navButton = document.querySelector('.navButton');
//     navButton.innerHTML = "Home";


const home  = new TimelineMax();
home
.to('.navButton-text',0.2,{text:"about"});
// .to("#home-btn",1,{opacity:0,text:"maman"});
const about  = new TimelineMax();
about
.to(".navButton-text",0.2,{text:"achievements"});
const projects  = new TimelineMax();
projects
.to(".navButton-text",0.2,{text:"projects"});
const teams  = new TimelineMax();
teams
.to(".navButton-text",0.2,{text:"team"});

const team = new TimelineMax();
team
.to('#we',0,{opacity:1})
.to('#are',0,{opacity:1},0.7)
.to('#the',0,{opacity:1},1.2)
.to('#change-text',0.5,{text:"Dreamers"},1.7)
.to('#change-text',0.5,{text:"Innovators"},2.7)
.to('#change-text',0.5,{text:"Achievers"},3.7)
.to('#we,#are,#the',0.5,{opacity:0},4.2)
.to('#change-text',1,{text:"Meet Us"},5.2)
.to('.team-intro',3.5,{x:2000,ease: Power4.easeOut},7);




 const controller = new ScrollMagic.Controller();

 const scene1 = new ScrollMagic.Scene({
    trigger:"#bars",
    offset:765,
    duration:50,
    reverse:true,
    triggerHook:0.5,
})
.setTween(home)
.addIndicators()
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
    trigger:"#achievements",
    offset:1410,
    duration:50,
    reverse:true,
    triggerHook:0.5,
})
.setTween(about)
.addIndicators()
.addTo(controller);

const scene3 = new ScrollMagic.Scene({
    trigger:"#projects",
    offset:2150,
    duration:50,    
    reverse:true,
    triggerHook:0.5,
})
.setTween(projects)
.addIndicators()
.addTo(controller);

const scene4 = new ScrollMagic.Scene({
    trigger:"#projects",
    offset:2800,
    duration:50,    
    reverse:true,
    triggerHook:0.5,
})
.setTween(teams)
.addIndicators()
.addTo(controller);

const scene5 = new ScrollMagic.Scene({
    trigger:"#team",
    offset:2900,
    reverse:false,
    triggerHook:0.5,
}) 
.setTween(team)
.addIndicators()
.addTo(controller);
