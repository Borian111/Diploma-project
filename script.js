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

sendForm()

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
validatorX()

const chavo = () => {
    
    const element = document.querySelectorAll('.element')
    
    for (let i=16; i<20; i++){
        element[i].id='jjj'
    }
    
    const elementJJJ = document.querySelectorAll('#jjj')
        
    elementJJJ.forEach(item => {
        const elCont = item.querySelector('.element-content')
        item.addEventListener('click', () => {                
                   
          if (item.classList.contains("active")) {
                item.classList.remove('active')
                elCont.style.display = 'none'             
           }else{
                item.classList.add('active')
                    elementJJJ.forEach(item => {
                        item.querySelector('.element-content').style.display = 'none'
                    })
                elCont.style.display = 'block'
           }        
        
        })
    })
}
    
chavo();

class Carousel {
    constructor({ main, wrap, next, prev, infinity = false, position = 0, slidesToShow = 3, responsive }) {
  
      if (!main && !wrap) {
        console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!');
      };
  
      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slides = document.querySelector(wrap).children;
      this.next = document.querySelector(next);
      this.prev = document.querySelector(prev);
      this.slidesToShow = slidesToShow;
      this.options = {
        position,
        infinity,
        widthSlide: Math.floor(100 / this.slidesToShow),
        maxPosition: this.slides.length - this.slidesToShow
      };
      this.responsive = responsive;
    };
  
    init() {
      this.addGloClass();
      this.addStyle();
  
      if (this.prev && this.next) {
        this.controlSlider();
      } else {
        this.addArrow();
        this.controlSlider();
      };
  
      if (this.responsive) {
        this.responseInit();
      };
  
    };
  
    addGloClass() {
      this.main.classList.add('glo-slider');
      this.wrap.classList.add('glo-slider__wrap');
  
      for (const item of this.slides) {
        item.classList.add('glo-slider__item');
      };
    };
  
    addStyle() {
      let style = document.getElementById('sliderCarousel-style');
  
      if (!style) {
        style = document.createElement('style');
        style.id = 'sliderCarousel-style';
      };
  
      style.textContent = `
        .glo-slider {
          position: relative !important;
          overflow: hidden !important;
        }
        .glo-slider__wrap {
          display: flex !important;
          transition: transform 0.5s !important;
          will-change: transform !important;
        }
        .glo-slider__item {
          display: flex !important;
          aling-items: center !important;
          flex: 0 0 ${this.options.widthSlide}% !important;
          margin: auto 0 !important;
        }
      `;
  
      document.head.append(style);
    };
  
    controlSlider() {
      this.prev.addEventListener('click', this.prevSlider.bind(this));
      this.next.addEventListener('click', this.nextSlider.bind(this));
    };
  
    prevSlider() {
      if (this.options.infinity || this.options.position > 0) {
        --this.options.position;
  
        if (this.options.position < 0) {
          this.options.position = this.options.maxPosition;
        };
  
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      };
    };
  
    nextSlider() {
      if (this.options.infinity || this.options.position < this.options.maxPosition) {
        ++this.options.position;
  
        if (this.options.position > this.options.maxPosition) {
          this.options.position = 0;
        };
  
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      };
    };
  
    addArrow() {
      this.prev = document.createElement('button');
      this.next = document.createElement('button');
  
      this.prev.className = 'glo-slider__prev';
      this.next.className = 'glo-slider__next';
  
      this.main.append(this.prev);
      this.main.append(this.next);
  
      const style = document.createElement('style');
  
      style.textContent = `
        .glo-slider__next,
        .glo-slider__prev {
          margin: 0 10px !important;
          border: 20px solid #19b5fe !important;
          border-radius: 50% !important;
          background: transparent !important;
        }
        .glo-slider__next:hover,
        .glo-slider__prev:hover,
        .glo-slider__next:focus,
        .glo-slider__prev:focus {
          background: transparent !important;
          outline: none !important;
        }
      `;
      document.head.append(style);
    };
  
    responseInit() {
      const slidesToShowDefault = this.slidesToShow;
      const allResponse = this.responsive.map(item => item.breakpoint);
      const maxResponse = Math.max(...allResponse);
  
      const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
  
        if (widthWindow < maxResponse) {
          for (let i = 0; i < allResponse.length; i++) {
            if (widthWindow < allResponse[i]) {
              this.slidesToShow = this.responsive[i].slideToShow;
              this.options.widthSlide = Math.floor(100 / this.slidesToShow);
              this.addStyle();
            };
          };
        } else {
          this.slidesToShow = slidesToShowDefault;
          this.options.widthSlide = Math.floor(100 / this.slidesToShow);
          this.addStyle();
        };
      };
  
      checkResponse();
  
      window.addEventListener('resize', checkResponse);
    };
  };
  
  const carousel = new Carousel({
    main: '.services-elements',
    wrap: '.services-carousel',
    prev: '.arrow-left',
    next: '.arrow-right',
    slidesToShow: 3,
    infinity: true,
    responsive: [{
      breakpoint: 992,
      slideToShow: 3
    },
    {
      breakpoint: 768,
      slideToShow: 2
    },
    {
      breakpoint: 576,
      slideToShow: 1
    }]
  });
  
  carousel.init()


