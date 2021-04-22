//Modal window
const modalOverlay = document.querySelector('.modal-overlay'),
callbackBtn = document.querySelectorAll('.callback-btn'),

modalClose = document.querySelector('.modal-close'),
modalCallback = document.querySelector('.modal-callback'),
buttonServices = document.querySelector('.button-services'),
aaa = document.querySelectorAll('.row');
console.log(callbackBtn)
const modalWindow = () => { 
   /* const modalOverlay = document.querySelector('.modal-overlay'),
          callbackBtn = document.querySelectorAll('.callback-btn'),
          modalClose = document.querySelector('.modal-close'),
          modalCallback = document.querySelector('.modal-callback');*/
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
    

    modalClose.addEventListener('click', () => { 
        modalOverlay.style.display = 'none';
        modalCallback.style.display = 'none';
   });

   buttonServices.addEventListener('click', ()=>{
       modalOverlay.style.display = 'block';
       modalCallback.style.display = 'block';
       goGo();
   })

   /*aaa.addEventListener('click', ()=>{
    modalOverlay.style.display = 'block';
    modalCallback.style.display = 'block';
})*/

   modalOverlay.addEventListener('click', (event) =>{
         let target = event.target;

             if( target!= target.closest('.modal-callback')){
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

//qqq




