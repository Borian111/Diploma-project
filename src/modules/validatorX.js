const validatorX = () =>{
    const name = () => {
        const name = document.querySelectorAll('input[name=fio]'); 
            name.forEach((elem) =>{
                elem.addEventListener('input', (elem)=>{
                    elem.target.value = elem.target.value.replace(/[^а-яА-ЯёЁ\s+]/g, '')
                })    
                elem.addEventListener('blur', (elem) => {            
                    elem.target.value = elem.target.value.replace(/\s+/g, ' ');
                    elem.target.value = elem.target.value.replace(/^\s+|\s{2,}|\s+$/g,'');
                   
                    if(elem.target.value !==''){
                        elem.target.value = elem.target.value.toLowerCase();
                        elem.target.value = elem.target.value.split(/\s/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
                    }               
                })           
                              
            })
        }
        
    name();    
        
    const allPhone = () => {
          
        const phone = document.querySelectorAll('input[name=tel]');         
                
        phone.forEach((elem) =>{
            elem.addEventListener('input', (elem) => {
            elem.target.value = elem.target.value.replace(/[^0-9\+]/g, '')
            })          
        })
    }
        
        allPhone();
}

export default validatorX;