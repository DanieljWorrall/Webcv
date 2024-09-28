// personal statement button//
const readMoreBtn = document.querySelector('.read-more-btn');
const readmoretext = document.querySelector('.readmoretext');

readMoreBtn.addEventListener('click',(e)=>{
    readmoretext.classList.toggle('show-more');
    if(readMoreBtn.innerText === 'Show More'){
        readMoreBtn.innerText = 'Show Less';
    }else{
    readMoreBtn.innerText = 'Show More';
    }
})

// 6 Orchard show more button //
const readMoreBtnorc = document.querySelector('.read-more-btnorc');
const readmoretextorc = document.querySelector('.readmoretextorc');
const readmoretextorc2 = document.querySelector('.readmoretextorc2');
const readmoretextorc3 = document.querySelector('.readmoretextorc3');

readMoreBtnorc.addEventListener('click',(e)=>{
    readmoretextorc.classList.toggle('show-more');
    readmoretextorc2.classList.toggle('show-more');
    readmoretextorc3.classList.toggle('show-more');
    if(readMoreBtnorc.innerText === 'Show More'){
        readMoreBtnorc.innerText = 'Show Less';
    }else{
    readMoreBtnorc.innerText = 'Show More';
    }
})





// 5-Vice Media show more button //
const readMoreBtnvi = document.querySelector('.read-more-btnvi');
const readmoretextvi = document.querySelector('.readmoretextvi');
const readmoretextvi2 = document.querySelector('.readmoretextvi2');

readMoreBtnvi.addEventListener('click',(e)=>{
    readmoretextvi.classList.toggle('show-more');
    readmoretextvi2.classList.toggle('show-more');
    if(readMoreBtnvi.innerText === 'Show More'){
        readMoreBtnvi.innerText = 'Show Less';
    }else{
    readMoreBtnvi.innerText = 'Show More';
    }
})

// 4-Pulse Films show more button //
const readMoreBtnpulse = document.querySelector('.read-more-btnpulse');
const readmoretextpulse = document.querySelector('.readmoretextpulse');

readMoreBtnpulse.addEventListener('click',(e)=>{
    readmoretextpulse.classList.toggle('show-more');
    if(readMoreBtnpulse.innerText === 'Show More'){
        readMoreBtnpulse.innerText = 'Show Less';
    }else{
    readMoreBtnpulse.innerText = 'Show More';
    }
})

// 3-Sony Music show more button //
const readMoreBtnso = document.querySelector('.read-more-btnso');
const readmoretextso = document.querySelector('.readmoretextso');
const readmoretextso2 = document.querySelector('.readmoretextso2');
const readmoretextso3 = document.querySelector('.readmoretextso3');

readMoreBtnso.addEventListener('click',(e)=>{
    readmoretextso.classList.toggle('show-more');
    readmoretextso2.classList.toggle('show-more');
    readmoretextso3.classList.toggle('show-more');
    if(readMoreBtnso.innerText === 'Show More'){
        readMoreBtnso.innerText = 'Show Less';
    }else{
    readMoreBtnso.innerText = 'Show More';
    }
})

// 2-WorkPlaceLive show more button //
const readMoreBtnwpl = document.querySelector('.read-more-btnwpl');
const readmoretextwpl = document.querySelector('.readmoretextwpl');
const readmoretextwpl2 = document.querySelector('.readmoretextwpl2');
const readmoretextwpl3 = document.querySelector('.readmoretextwpl3');

readMoreBtnwpl.addEventListener('click',(e)=>{
    readmoretextwpl.classList.toggle('show-more');
    readmoretextwpl2.classList.toggle('show-more');
    readmoretextwpl3.classList.toggle('show-more');
    if(readMoreBtnwpl.innerText === 'Show More'){
        readMoreBtnwpl.innerText = 'Show Less';
    }else{
    readMoreBtnwpl.innerText = 'Show More';
    }
})

// 1-Restup show more button //
const readMoreBtnru = document.querySelector('.read-more-btnru');
const readmoretextru = document.querySelector('.readmoretextru');
const readmoretextru2 = document.querySelector('.readmoretextru2');
const readmoretextru3 = document.querySelector('.readmoretextru3');

readMoreBtnru.addEventListener('click',(e)=>{
    readmoretextru.classList.toggle('show-more');
    readmoretextru2.classList.toggle('show-more');
    readmoretextru3.classList.toggle('show-more');
    if(readMoreBtnru.innerText === 'Show More'){
        readMoreBtnru.innerText = 'Show Less';
    }else{
    readMoreBtnru.innerText = 'Show More';
    }
})
