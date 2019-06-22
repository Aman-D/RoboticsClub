let show  = new TimelineMax(); 
show.addLabel('events');
show
    .to('.right-fixed,.navButton,.container',1,{opacity:0})
    .set('.right-fixed,.navButton,.container',{css:{display:"none"}})
    .set('.events',{css:{display:"flex"}})
    .to('.events',1,{opacity:1});
    
    
show.seek("events");  
show.pause('events');
  
 function showEvents(){
   document.documentElement.scrollTop = 0;
   show.play('events');
 }
 function closeEvent(){
   document.documentElement.scrollTop = 0;
   show.reverse('events');
 }
 
  function showProjects(){
    const project_img = document.querySelector(".projects");
  const project_intro = document.querySelector(".prj-board");
  let expand  = new TimelineMax();
  expand.addLabel('project');
  expand
  .to('.projects',1,{opacity:0})
  .set('.projects',{css:{display:"none"}})
  .to('.prj-content',1,{width:"100%"})
  .to('.prj-intro h3, .prj-intro p, .prj-intro button',0.5,{opacity:0})
  .set('.pr-slider,.prev,.next,.dots',{css:{display:"block"}})
  .to('.pr-slider,.prev,.next,.dots',1,{opacity:1})
  .to('.prj-intro',1,{backgroundColor:"rgba(24, 22, 22)"});
  }