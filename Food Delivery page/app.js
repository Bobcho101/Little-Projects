

const mobile = document.querySelector('.bars');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active")
})




var count = 0;

function myFunction(x){
    var x;
    if(x == 1){
        count=count+1;
    }

    if(count == 1){
        document.getElementById("site").style.background="black";
        document.getElementById("all-menu-box").style.background="gray";
        document.getElementById("body").style.background="black";
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }

    else if(count == 2){
        document.getElementById("site").style.background="#D9F2EE";
        document.getElementById("all-menu-box").style.background="#F4F4F4";
        document.getElementById("body").style.background="#D9F2EE";
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        count = 0;
    }
}


const body = document.querySelector('body');
const btn = document.querySelector('.circle3');
const icon = document.querySelector('.btn__icon');

btn.addEventListener('click', () => {

   /*  body.classList.toggle('dark-mode'); */
   

    if(body.classList.contains('dark-mode')){
     icon.className.remove('fa-sun');
     icon.className.add('fa-moon');
    }
    else{
     icon.className.remove('fa-moon');
     icon.className.add('fa-sun');
    }


  
}) 

tn.addEventListener('click', () => {

    body.classList.toggle('white-mode');
   

    if(body.classList.contains('white-mode')){
     icon.className.remove('fa-moon');
     icon.className.add('fa-sun');
    }
  
})

let ChangeIcon = function(icon){
    icon.classList.toggle("fa-moon");
}


const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.site',{delay:200, origin:'top'});