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

export default scroll;