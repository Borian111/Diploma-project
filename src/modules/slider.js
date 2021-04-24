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

export default slider;