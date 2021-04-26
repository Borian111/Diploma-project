//send-ajax-form

const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMesage = 'Спасибо! мы скоро с Вами свяжемся!';
       
    const formsAll = document.querySelectorAll('form');
    const sendBtn = document.querySelector('.feedback');
    console.log(sendBtn);
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';
   
    
   formsAll.forEach(item => {
        item.addEventListener('submit', (event) => {
            event.preventDefault(); 
            status(event.target)
        })
    });
 
    const status = (formsAll) => {
        statusMessage.textContent = loadMessage; 
        formsAll.appendChild(statusMessage); 
        const formData = new FormData(formsAll); 
        let body = {}; 

        formData.forEach((val, key)=>{
            body[key] = val;
        });

        postData(body, formsAll)
        .then((response) => {
            if(response.status !== 200){
                throw new Error('status network not 200');
            }
            outputData(formsAll);
        }) 
        .catch(error => console.error(error));
    }

    const outputData = (formsAll) => {
        statusMessage.textContent = successMesage; 
        const inputs = formsAll.querySelectorAll('input'); 
        inputs.forEach((item) => {
            item.value = '' 
        })
        console.log(sendBtn);
        sendBtn.style.display = 'none';


    }

    const postData = (body) => { 

        return fetch('./server.php', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'include'
        })
    
    }

}
/*
const sendForm = () => {
    const errorMessage = 'Что то пошло не так...';
    const loadMessage = 'Загрузка...';
    const successMessage = 'Ваша заявка отправлена! Мы с вами свяжемся!';
  
    const form = document.querySelectorAll('form');
    const statusMessage = document.createElement('div');
  
    form.forEach(item => {
      item.addEventListener('submit', (event) => {
        event.preventDefault();
  
        const formData = new FormData(item)
        const body = {}
  
        statusMessage.textContent = loadMessage
  
        item.append(statusMessage)
  
        formData.forEach((value, key) => {
          body[key] = value
        })
  
        postData(body)
          .then(() => {
            setTimeout(() => {
              (response) => {
                if (response.status !== 200) {
                  throw new Error('status network not 200.')
                }
              }
  
              form.forEach(item => {
                item.reset()
              })
  
              statusMessage.textContent = successMessage
              statusMessage.style.color = '#000'
            }, 3000)
  
            setTimeout(() => {
              statusMessage.textContent = ''
            }, 5000)
  
            setTimeout(() => {
              const modalCallBack = document.querySelector('#callback')
              const modalOverlay = document.querySelector('.modal-overlay')
  
              modalCallBack.style.display = 'none'
              modalOverlay.style.display = 'none'
            }, 5500)
          })
          .catch((error) => {
            statusMessage.textContent = errorMessage
            console.error(error)
          })
      })
    })
  
    const postData = (body) => {
      return fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
    }
  }
*/
 export default sendForm;