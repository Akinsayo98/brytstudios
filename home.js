

//  disappearing header 
let lastScrollTop = 0;
let header = document.querySelector("header");



window.addEventListener("scroll", ()=>{
const scrollTop = window.pageYOffset ||
document.documentElement.scrollTop
if( scrollTop > lastScrollTop){
  header.style.top = "-110px";
}
else{
  header.style.top = "0";
}
lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// section color 

var section = document.querySelector("section");
let sec2 = document.querySelectorAll(".sec2");
for (i = 0; i < sec2.length; i++){
sec2[i].addEventListener("mouseover",function(){
section.style.transition = "3s";
section.style.background = 'linear-gradient(338deg, gray 50%, white 50%)';
});
}


 // sitemap drop 
    let sitemap =document.querySelector(".sitemap");
    let clic =document.querySelector(".click");
    let plan = document.querySelector(".plan")
    let planA = document.querySelector(".plan a")
    
    // clic.addEventListener("click", ()=>{
    //         sitemap.style.display = "block";
    //         // body.style.filter = "blur(2px)"
    //         // body.style.opacity = 0.4
    //     });
    //     document.querySelector(".sitemap i").addEventListener("click", ()=>{
    //         sitemap.style.display = "none";        
    //     })
        document.querySelector(".extras").addEventListener("click", (e)=>{
            e.preventDefault();
            plan.classList.toggle("plan")
            plan.style.width = "80%";
            plan.style.background = "ghostwhite";
            plan.style.border = "2px solid rgb(195, 180, 180)";
            plan.style.height ="fit-content";
            plan.style.margin  = "10px 2%"
            plan.style.padding = "20px 20px"
            plan.style.borderRadius = "10px"
            planA.style.color = "rgb(125, 112, 112)"
            planA.style.textDecoration = "none";
            planA.style.fontSize = "23px";
            planA.style.paddingBottom = "23px";
        })
        let menu = document.querySelector("#moore")
        menu.addEventListener("click", (e)=>{
          e.preventDefault();
        })




        // text animation on the text
        document.addEventListener("DOMContentLoaded", function(){
          const observer = new IntersectionObserver(
              (entries, observer) =>{
                  entries.forEach((entry) =>{
                      if(entry.isIntersecting){
                          entry.target.classList.add("show");
                          observer.unobserve(entry.target);
                      }
                      else{
                          entry.target.classList.remove("show");
                      }
                  })

              }, {threshold: 0.2}
          );
          document.querySelectorAll(".hidden").forEach((element) =>{
              observer.observe(element);
          });
      })

      // the first 3 rows 
      document.addEventListener("DOMContentLoaded", function(){
          const observer = new IntersectionObserver(
              (entries, observer) =>{
                  entries.forEach((entry) =>{
                      if(entry.isIntersecting){
                          entry.target.classList.add("show");
                          // observer.unobserve(entry.target);
                      }
                      else{
                          entry.target.classList.remove("show")
                          // observer.unobserve(entry.target);
                      }
                  })
              }, {threshold: 0.5}
          );
          document.querySelectorAll(".hidden2").forEach((element) =>{
              observer.observe(element);
          });
      })