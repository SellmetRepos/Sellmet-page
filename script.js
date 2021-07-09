let content = document.getElementById('content')

let cards = document.querySelectorAll('.brand-card')

let wrapper = document.querySelector('.hourglass-wrapper')

let brandCards = document.querySelectorAll('.mobile-brand-desc')

// Sliders brands

document.addEventListener('scroll', ()=> {
    cards.forEach((card,idx) => {
        if(window.innerHeight + window.pageYOffset > card.offsetTop){
            cards[idx].classList.add('visable')
        } else {
            cards[idx].classList.remove('visable')
        }
    })
})

// Loading wrapper

var callback = function(){
   
    wrapper.classList.add('hidden')

    content.style.display = "block"

    setTimeout(() => {
        wrapper.remove()
    },3000)
  };
  
  if (
      document.readyState === "complete" ||
      (document.readyState !== "loading" && !document.documentElement.doScroll)
  ) {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }

//  Brand site

brandCards.forEach(el =>{
    el.addEventListener('click', ()=>{
        el.classList.toggle('active')
    })
})