const chavo = () => {
    
    const element = document.querySelectorAll('.element');
    
    for (let i=16; i<20; i++){
        element[i].id='jjj';
    }
    
    const elementJJJ = document.querySelectorAll('#jjj');
        
    elementJJJ.forEach(item => {
        const elCont = item.querySelector('.element-content');
        item.addEventListener('click', () => {                
                   
          if  (item.classList.contains("active")) {
                  item.classList.remove('active');
                  elCont.style.display = 'none' ;            
          }else{              
              elementJJJ.forEach(item => {
                  item.classList.remove('active');  
                  item.querySelector('.element-content').style.display = 'none';
                  });
              item.classList.add('active');
              elCont.style.display = 'block';
           }        
        });
    });
};

export default chavo;