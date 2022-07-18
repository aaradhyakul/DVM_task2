let backgroundContainer = document.getElementById("backgroundContainer");
let containers = document.querySelectorAll("#backgroundContainer");

let contentContainer = document.getElementById("contentContainer");

let interval1 = null;
let width = Math.round(window.innerWidth);
let height = Math.round(window.innerHeight);

let slideNo = 1;
let newSlideNo = 1;
let slidevw = 0;

let openCounter = 0;

const scrollBar = document.getElementById("scrollbar");

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const slide4 = document.getElementById("slide4");
const slide5 = document.getElementById("slide5");

const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const content4 = document.getElementById("content4");
const content5 = document.getElementById("content5");

const navBar = document.querySelector("#navbar");
const hamburger = document.querySelector("#hamburger");
const navBelow = document.querySelector("#navBelow");
const navAbove = document.querySelector("#navAbove");

const ppf = document.querySelector("#ppf");
const divider = document.querySelectorAll(".divider-1");

slide1.style.backgroundColor = "white";

slide1.addEventListener("click", () => {
  removeStyle();
  newSlideNo = 1;
  if (slideNo != newSlideNo) {
    addActive();
    removeActive();
  }
  slidevw = slidevw + (slideNo - newSlideNo) * 100;

  

  backgroundContainer.style.transform = `translateX(${slidevw}vw)`;
  contentContainer.style.transform = `translateX(${slidevw}vw)`;
  slide1.style.backgroundColor = "white";

  slideNo = 1;
});

slide2.addEventListener("click", () => {
  removeStyle();

  newSlideNo = 2;
  if (slideNo != newSlideNo) {
    addActive();
    removeActive();
  }
  slidevw = slidevw + (slideNo - newSlideNo) * 100;

 

  backgroundContainer.style.transform = `translateX(${slidevw}vw)`;
  contentContainer.style.transform = `translateX(${slidevw}vw)`;

  slide2.style.backgroundColor = "white";

  slideNo = 2;
});

slide3.addEventListener("click", () => {
  removeStyle();

  newSlideNo = 3;
  if (slideNo != newSlideNo) {
    addActive();
    removeActive();
  }
  slidevw = slidevw + (slideNo - newSlideNo) * 100;

  

  backgroundContainer.style.transform = `translateX(${slidevw}vw)`;
  contentContainer.style.transform = `translateX(${slidevw}vw)`;

  slide3.style.backgroundColor = "white";

  slideNo = 3;
});
slide4.addEventListener("click", () => {
  removeStyle();

  newSlideNo = 4;
  if (slideNo != newSlideNo) {
    addActive();
    removeActive();
  }
  slidevw = slidevw + (slideNo - newSlideNo) * 100;

  

  backgroundContainer.style.transform = `translateX(${slidevw}vw)`;
  contentContainer.style.transform = `translateX(${slidevw}vw)`;

  slide4.style.backgroundColor = "white";

  slideNo = 4;
});
slide5.addEventListener("click", () => {
  removeStyle();

  newSlideNo = 5;
  if (slideNo != newSlideNo) {
    addActive();
    removeActive();
  }
  slidevw = slidevw + (slideNo - newSlideNo) * 100;

  

  backgroundContainer.style.transform = `translateX(${slidevw}vw)`;
  contentContainer.style.transform = `translateX(${slidevw}vw)`;

  slide5.style.backgroundColor = "white";

  slideNo = 5;
});

window.addEventListener("scroll", () => {
  scrollBar.scrollTop = 200;
});

function removeStyle() {
  slide1.style.backgroundColor = "";
  slide2.style.backgroundColor = "";
  slide3.style.backgroundColor = "";
  slide4.style.backgroundColor = "";
  slide5.style.backgroundColor = "";
}
let fadeRate;
const sans = document.getElementById("sans");
const serif = document.getElementById("serif");
const to = document.getElementById("to");
const txtbox1 = document.getElementById("txtbox1");
const fragment = document.getElementById("fragment");

const topParallax1=document.querySelector("#top-parallax1")
const topParallax2=document.querySelector("#top-parallax2")
const topParallax3=document.querySelector("#top-parallax3")
const midLeftParallax1=document.querySelector("#mid-left-parallax1")
const midLeftParallax2=document.querySelector("#mid-left-parallax2")
const midLeftParallax3=document.querySelector("#mid-left-parallax3")
const midRightParallax1=document.querySelector("#mid-right-parallax1")
const midRightParallax2=document.querySelector("#mid-right-parallax2")
const midRightParallax3=document.querySelector("#mid-right-parallax3")
const bottomLeftParallax1=document.querySelector("#bottom-left-parallax1")
const bottomLeftParallax2=document.querySelector("#bottom-left-parallax2")
const bottomLeftParallax3=document.querySelector("#bottom-left-parallax3")
const bottomRightParallax1=document.querySelector("#bottom-right-parallax1")
const bottomRightParallax2=document.querySelector("#bottom-right-parallax2")
const bottomRightParallax3=document.querySelector("#bottom-right-parallax3")

window.addEventListener("scroll", () => {
  let pagePos = window.scrollY;
  let scrollRate = pagePos * 0.3;
  let sansRate = pagePos * 0.44;
  let serifRate = pagePos * 0.8;
  let toRate = pagePos * 0.7;
  let txtbox1Rate = pagePos * 0.2;
  let fragmentRate = pagePos * 0.25;
  

  scrollBar.style.transform = `translate(0px,-${scrollRate}px)`;
  sans.style.transform = `translateY(-${sansRate}px)`;
  serif.style.transform = `translateY(-${serifRate}px)`;
  to.style.transform = `translateY(-${toRate}px)`;
  txtbox1.style.transform = `translateY(-${txtbox1Rate}px)`;
  fragment.style.transform = `translateY(-${fragmentRate}px)`;
  midLeftParallax1.style.transform = `translateY(-${sansRate}px)`;
  midLeftParallax2.style.transform = `translateY(-${sansRate}px)`;
  midLeftParallax3.style.transform = `translateY(-${sansRate}px)`;
  midRightParallax1.style.transform = `translateY(-${toRate}px)`;
  midRightParallax2.style.transform = `translateY(-${toRate}px)`;
  midRightParallax3.style.transform = `translateY(-${toRate}px)`;
  bottomLeftParallax1.style.transform = `translateY(-${txtbox1Rate}px)`;
  bottomLeftParallax2.style.transform = `translateY(-${txtbox1Rate}px)`;
  bottomLeftParallax3.style.transform = `translateY(-${txtbox1Rate}px)`;
  bottomRightParallax1.style.transform = `translateY(-${serifRate}px)`;
  bottomRightParallax2.style.transform = `translateY(-${serifRate}px)`;
  bottomRightParallax3.style.transform = `translateY(-${serifRate}px)`;
  topParallax1.style.transform = `translateY(-${fragmentRate}px)`;
  topParallax2.style.transform = `translateY(-${fragmentRate}px)`;
  topParallax3.style.transform = `translateY(-${fragmentRate}px)`;

  fadeRate = Math.round((pagePos * 1000) / height) / 1000;
  fadeRate = fadeRate ;

  containers.forEach((bg) => {
    bg.style.opacity = `${1 - fadeRate}`;
  });
});


hamburger.addEventListener("click", () => {
  navBar.dataset.loading = "false";
  hamburger.toggleAttribute("open");
  hamburger.toggleAttribute("closed");

  navAbove.toggleAttribute("open");
  navAbove.toggleAttribute("closed");

  navBelow.toggleAttribute("open");
  navBelow.toggleAttribute("closed");

  ppf.toggleAttribute("open");
  ppf.toggleAttribute("closed");
  hamburger2.toggleAttribute("open")
  hamburger2.toggleAttribute("closed")
});

const hamburger2=document.querySelector("#hamburger2")

hamburger2.addEventListener('click',()=>{

  navBar.dataset.loading = "false";
  
  hamburger.toggleAttribute("open");
  hamburger.toggleAttribute("closed");

  navAbove.toggleAttribute("open");
  navAbove.toggleAttribute("closed");

  navBelow.toggleAttribute("open");
  navBelow.toggleAttribute("closed");

  ppf.toggleAttribute("open");
  ppf.toggleAttribute("closed");
  hamburger2.toggleAttribute("open")
  hamburger2.toggleAttribute("closed")
})

const blackscreen = document.querySelector("#blackScreen");
window.addEventListener("DOMContentLoaded", () => {
  // content1.toggleAttribute("inactive")
  content1.toggleAttribute("active");
  navBar.dataset.loading = "true";
  blackscreen.setAttribute("remove", "");

  
});

function addActive() {
  if (newSlideNo == 1) {
    content1.setAttribute("active", "");
    content1.removeAttribute("inactive");
  }

  if (newSlideNo == 2) {
    content2.setAttribute("active", "");
    content2.removeAttribute("inactive");
  }
  if (newSlideNo == 3) {
    content3.setAttribute("active", "");
    content3.removeAttribute("inactive");
  }
  if (newSlideNo == 4) {
    content4.setAttribute("active", "");
    content4.removeAttribute("inactive");
  }
  if (newSlideNo == 5) {
    content5.setAttribute("active", "");
    content5.removeAttribute("inactive");
  }
}

function removeActive() {
  if (slideNo == 1) {
    content1.removeAttribute("active");
    content1.setAttribute("inactive", "");
  }
  if (slideNo == 2) {
    content2.removeAttribute("active");
    content2.setAttribute("inactive", "");
  }
  if (slideNo == 3) {
    content3.removeAttribute("active");
    content3.setAttribute("inactive", "");
  }
  if (slideNo == 4) {
    content4.removeAttribute("active");
    content4.setAttribute("inactive", "");
  }
  if (slideNo == 5) {
    content5.removeAttribute("active");
    content5.setAttribute("inactive", "");
  }
}

const navbar2 = document.querySelector("#navbar2");

// ------code for displaying page-2 ---------

const lightMode = document.querySelector("#lightMode");
const body = document.querySelector("body");
const secondPage = document.querySelector("#secondPage");

window.addEventListener("scroll", () => {
  let pagePosition = Math.round(window.scrollY);

  if (pagePosition >= height && pagePosition < 8*height) {
    setInterval(()=>{
      
      if (hamburger.hasAttribute("open")) {
        navbar2.style.cssText += "background-color:white;color:black;";
        divider.forEach((div) => {
          div.style.backgroundColor = "black";
        });
      }
      else{
        navbar2.removeAttribute("style")
        divider.forEach((div)=>{
          div.removeAttribute("style")
        })
      }
    },100)
    navbar2.dataset.state = "open";
  } else {
    navbar2.dataset.state = "closed";
  }
});

let root = document.querySelector(":root");
let rootStyles = getComputedStyle(root);

let lightOn = 0;

lightMode.addEventListener("click", () => {
  switch (lightOn) {
    case 0: {
      root.style.setProperty("--dark-mode-black", "white");
      root.style.setProperty("--dark-mode-white", "black");

      lightMode.innerText="Dark Mode"
      lightOn = 1;
      break;
    }

    case 1: {
      root.style.setProperty("--dark-mode-black", "black");
      root.style.setProperty("--dark-mode-white", "white");

      lightMode.innerText="Light Mode"


      lightOn = 0;
      break;
    }
  }
});

// --------page 3 js starts------------

const thirdPage = document.querySelector("#thirdPage");
const col2 = document.querySelector("#col-2");
const col3 = document.querySelector("#col-3");
const col4 = document.querySelector("#col-4");
const c22=document.querySelector("#c22")
let topDistance = Math.round(thirdPage.scrollY) - Math.round(window.scrollY);

window.addEventListener("scroll", () => {
  if (window.scrollY - 1.5 * height >= 0) {
    let offsetTop = 1.5 * height - window.scrollY;
    let col2Rate = 0.5 * offsetTop;
    let col3Rate = 0.2 * offsetTop;
    let col4Rate = 0.3 * offsetTop;

    col2.style.transform = `translateY(${col2Rate}px)`;
    col3.style.transform = `translateY(${col3Rate}px)`;
    col4.style.transform = `translateY(${col4Rate}px)`;

    checkScrollDirection()
    
    c22.setAttribute("circle-animate","")
    setTimeout(()=>{
       c22.removeAttribute("circle-animate")
    },400)


  }


});


// -----------to be modified---------------------
function checkScrollDirection(){
  let newScroll
  let oldScroll
  oldScroll=window.scrollY
  setTimeout(()=>{
    newScroll=window.scrollY
    if(newScroll>oldScroll){
      return true
    }
    if(newScroll<oldScroll){
      return false
    }
  },100)
}

// ---------page 4 js---------------

const project1Img=document.querySelector("#project1-img")
const project2Img=document.querySelector("#project2-img")
const project3Img=document.querySelector("#project3-img")
const project4Img=document.querySelector("#project4-img")
const project5Img=document.querySelector("#project5-img")

window.addEventListener('scroll',()=>{
 if(window.scrollY > 4.7*height){
   let offsetTop2=window.scrollY - 4.2*height;

   let project1ImgRate=offsetTop2*0.2;
   let project2ImgRate=offsetTop2*0.15;
   let project3ImgRate=offsetTop2*0.15;
   let project4ImgRate=offsetTop2*0.15;
   let project5ImgRate=offsetTop2*0.15;

   project1Img.style.transform=`translateY(${project1ImgRate}px)`
   project2Img.style.transform=`translateY(${project2ImgRate}px)`
   project3Img.style.transform=`translateY(${project3ImgRate}px)`
   project4Img.style.transform=`translateY(${project4ImgRate}px)`
   project5Img.style.transform=`translateY(${project5ImgRate}px)`
 }

})


const article1Img=document.querySelector("#article1-img")
const article2Img=document.querySelector("#article2-img")
const article3Img=document.querySelector("#article3-img")

window.addEventListener('scroll',()=>{
  if(window.scrollY > 6.5*height){
      
    let offsetTop3=window.scrollY-7.5*height

    let article1ImgRate=offsetTop3*0.2;
   let article2ImgRate=offsetTop3*0.15;
   let article3ImgRate=offsetTop3*0.15;

   article1Img.style.transform=`translateY(${article1ImgRate}px)`
   article2Img.style.transform=`translateY(${article2ImgRate}px)`
   article3Img.style.transform=`translateY(${article3ImgRate}px)`
  }
  
  

})

const lastPage=document.querySelector("#lastPage")
window.addEventListener('scroll',()=>{
  if(window.scrollY > 7.7*height && window.scrollY < 8.7*height){
    
    let offsetTop4=window.scrollY-8.7*height
    let lastPageRate=offsetTop4*0.2
   lastPage.style.transform=`translateY(${lastPageRate}px)`


  }
})







