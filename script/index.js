
const preloader = document.querySelector('.preloder')
window.addEventListener('load', (e) => {
    preloader.classList.add('hide-preloder')
})


  

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 400);
      } 
    });
 




const navbar = document.querySelector('.home')
window.addEventListener('scroll', () => {
    navbar.classList.toggle('fixed-nav', window.scrollY > 0)
})

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".mobile-slider");

toggleBtn.addEventListener("click", function () {

    sidebar.classList.toggle("active-mobile-slider");
    const link = document.querySelector('.sidebar-links')
    const x = link.children
    for (let i = 0; i < x.length; i++) {
        const element = x[i];

        element.addEventListener('click', (e) => {
            setTimeout(() => {
                sidebar.classList.remove("active-mobile-slider");
            }, 200);

        })

    }
});

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("active-mobile-slider");

});


const openAns = document.querySelectorAll('.plus')
const ansContainer = document.querySelectorAll('.quistion-s-box')

openAns.forEach((elem) => {

    elem.addEventListener('click', (val) => {
        ansContainer.forEach(e => {
            if(e.classList.contains('quition-active')){
            e.classList.remove('quition-active')
            }
        })
        const container = val.currentTarget.parentElement.parentElement.parentElement
        container.classList.add('quition-active')
    })

})

const closeAns = document.querySelectorAll('.minus')
closeAns.forEach((e)=>{
    e.addEventListener('click',(elem)=>{
        const r = elem.currentTarget.parentElement.parentElement.parentElement
        r.classList.remove('quition-active')
        })
})


$('.counter').counterUp({
    delay: 10,
    time: 1000,
    offset: 70,
    // beginAt: 100,
    formatter: function (n) {
        return n.replace(/,/g, '.');
    }
});