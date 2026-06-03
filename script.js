const observer = new IntersectionObserver((entries)=>{

 entries.forEach((entry)=>{

   if(entry.isIntersecting){

     entry.target.classList.add("show");

   }

 });

});

const hiddenElements =
document.querySelectorAll(
".software-card"
);

hiddenElements.forEach((el)=>
observer.observe(el)
);

window.addEventListener("scroll",()=>{

 const scrollTop =
 document.documentElement.scrollTop;

 const scrollHeight =
 document.documentElement.scrollHeight -
 document.documentElement.clientHeight;

 const scrollPercent =
 (scrollTop/scrollHeight)*100;

 document.getElementById(
 "progress-bar"
 ).style.width =
 scrollPercent+"%";

});

const sections =
document.querySelectorAll(
".hidden"
);

const observer2 =
new IntersectionObserver(

(entries)=>{

 entries.forEach(entry=>{

  if(entry.isIntersecting){

   entry.target.classList.add(
   "show"
   );

  }

 });

});

sections.forEach(section=>{

 observer2.observe(section);

});


window.addEventListener("load",()=>{

 setTimeout(()=>{

  document.getElementById("loader")
  .style.opacity="0";

  setTimeout(()=>{

   document.getElementById("loader")
   .style.display="none";

  },1000);

 },1500);

});



const glow =
document.getElementById(
"cursor-glow"
);

document.addEventListener(
"mousemove",
(e)=>{

 glow.style.left =
 e.clientX+"px";

 glow.style.top =
 e.clientY+"px";

});


const modal =
document.getElementById(
"projectModal"
);

const modalVideo =
document.getElementById(
"modalVideo"
);

const modalTitle =
document.getElementById(
"modalTitle"
);

const modalDescription =
document.getElementById(
"modalDescription"
);

const projectCards =
document.querySelectorAll(
".project-card"
);

projectCards.forEach(card=>{

 card.addEventListener(
 "click",

 ()=>{

  modal.style.display=
  "flex";

  modalVideo.src=
  card.dataset.video;

  modalVideo.load();

modalVideo.play(); 

  modalTitle.textContent=
  card.dataset.title;

  modalDescription.textContent=
  card.dataset.description;

 });

});

document
.querySelector(
".close-modal"
)
.addEventListener(
"click",

()=>{

 modal.style.display=
 "none";

 modalVideo.pause();

});


window.addEventListener(
"click",

(e)=>{

 if(
  e.target===modal
 ){

  modal.style.display=
  "none";

  modalVideo.pause();

 }

});



const projectVideos =
document.querySelectorAll(
".project-video video"
);

projectVideos.forEach(video=>{

 video.parentElement
 .parentElement

 .addEventListener(
 "mouseenter",

 ()=>{

  video.play();

 });

 video.parentElement
 .parentElement

 .addEventListener(
 "mouseleave",

 ()=>{

  video.pause();

  video.currentTime=0;

 });

});



const shape1 =
document.querySelector(
".shape1"
);

const shape2 =
document.querySelector(
".shape2"
);

window.addEventListener(
"scroll",

()=>{

 const value =
 window.scrollY;

 shape1.style.transform=
 `translateY(${value*0.2}px)`;

 shape2.style.transform=
 `translateY(-${value*0.15}px)`;

});



const magneticButtons =
document.querySelectorAll(
"button,.project-btn"
);

magneticButtons.forEach(btn=>{

 btn.addEventListener(
 "mousemove",

 (e)=>{

  const rect =
  btn.getBoundingClientRect();

  const x =
  e.clientX -
  rect.left -
  rect.width/2;

  const y =
  e.clientY -
  rect.top -
  rect.height/2;

  btn.style.transform=
  `translate(${x*0.2}px,
  ${y*0.2}px)`;

 });

 btn.addEventListener(
 "mouseleave",

 ()=>{

  btn.style.transform=
  "translate(0,0)";

 });

});