//Modal window



const modalWindow = () => { 
    const modalOverlay = document.querySelector('.modal-overlay'),
        callbackBtn = document.querySelectorAll('.callback-btn'),
        modalClose = document.querySelector('.modal-close'),
        modalCallback = document.querySelector('.modal-callback'),
        buttonServices = document.querySelector('.button-services'),
        orderBtn = document.querySelectorAll('.absolute');        
    let count = -48;  


    function goGo() {
        
        let goGoId = requestAnimationFrame(goGo);
        count=count+4;
        modalCallback.style.left = count + '%';
        if(count === 48) {                         
            cancelAnimationFrame(goGoId);
            count = -48;
        }
    }

    callbackBtn[1].addEventListener('click', () => {
            modalOverlay.style.display = 'block';
            modalCallback.style.display = 'block';
            goGo();
        });
    
    orderBtn.forEach((elem) => { 
            elem.addEventListener('click', () => {
                goGo();
                modalOverlay.style.display = 'block';
                modalCallback.style.display = 'block';                
            });
    });    

    modalClose.addEventListener('click', () => { 
        modalOverlay.style.display = 'none';
        modalCallback.style.display = 'none';
    });

    buttonServices.addEventListener('click', ()=>{
       modalOverlay.style.display = 'block';
       modalCallback.style.display = 'block';
       goGo();
    })

    modalOverlay.addEventListener('click', (event) =>{
         let target = event.target;

            if(target!= target.closest('.modal-callback')){
                modalOverlay.style.display = 'none';
                modalCallback.style.display = 'none';
            }
            if(target.classList.contains('modal-close')){
                modalOverlay.display = 'none';
                modalCallback.style.display = 'none';
            }
    });

}

modalWindow();




const scroll=()=>{
    const btnUp = document.querySelector('.up');  
    const titleH2 = document.querySelector('.title-h2'); 
   
    btnUp.style.display = 'none';
    
    window.addEventListener('scroll', function() {
        if(pageYOffset <= titleH2.clientHeight){
            btnUp.classList.add('hidden')
        }else{
            btnUp.classList.remove('hidden')
            btnUp.style.display = 'block'
        }
    });
      
    btnUp.addEventListener('click', function(elem) {
        elem.preventDefault();                
        window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
    });   
     
}
scroll();

const slider = () => {
    const slide = document.querySelectorAll('.item'),
    text = document.querySelectorAll('.table')           
    let currentSlide = 0;
       
    slide[currentSlide].style.display = 'block';
    text[currentSlide].classList.add('active');    

    const autoplaySlide = () => {
        slide[currentSlide].style.display = 'none';
        text[currentSlide].classList.remove('active');        
           
            currentSlide++;
            if (currentSlide >=slide.length){
                currentSlide=0;
            }
            slide[currentSlide].style.display = 'block';
        text[currentSlide].classList.add('active');     
    };   
        
    const startSlide = (time=3000) => {
            setInterval(autoplaySlide, time); 
    };              
   
    startSlide(3000);
}
    
slider();
