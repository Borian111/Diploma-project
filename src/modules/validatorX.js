const validatorX = () =>{
    const name = () => {
        const nam = document.querySelectorAll('input[name=fio]'); 
            nam.forEach((elem) =>{
                elem.addEventListener('input', (elem)=>{
                    elem.target.value = elem.target.value.replace(/[^а-яА-ЯёЁ\s+]/g, '')
                })    
                elem.addEventListener('blur', (elem) => {            
                    elem.target.value = elem.target.value.replace(/\s+/g, ' ');
                    elem.target.value = elem.target.value.replace(/^\s+|\s{2,}|\s+$/g,'');
                   
                    if(elem.target.value !=='' && elem.target.value.length>2){
                        elem.target.value = elem.target.value.toLowerCase();
                        elem.target.value = elem.target.value.split(/\s/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
                    }
                    else{
                      alert('В поле "Ваше имя" должно быть не менее 2 символов')
                      elem.target.value =''
                    }
                })           
                              
            })           
        }       
    
    name();    
        
        const allPhone = () => {
          
            const phone =  document.querySelectorAll('input[name=tel]');         
              
             phone.forEach((elem) =>{
                  
                  elem.addEventListener('input', (elem) => {
                    elem.target.value = elem.target.value.replace(/[^0-9\+]/g, '');
                    elem.target.value = elem.target.value
                    })  
                    
                  elem.addEventListener('blur', (elem) => {            
                    console.log(elem.target.value)    ;              
                      if(elem.target.value.length<7 || elem.target.value.length>11){
                          alert('В поле "Телефон" должно быть от 7 до 11 символов');
                          elem.target.value ='';
                      }                 
                  })    
            })
        }
        
        allPhone();
    }

export default validatorX;