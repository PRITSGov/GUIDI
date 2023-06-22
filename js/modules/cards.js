export const cardInner = document.getElementsByClassName('card-front');
export const closeFlip = document.getElementsByClassName('card-back-close');

export const cardOpen = (function(){
    for (let i = 0; i < cardInner.length; i++){
        cardInner[i].addEventListener('click', function(){
            const cardContainer = this.closest('.card-container');
            cardContainer.classList.add('is-flipped')
        })
        
    }
});

export const cardClose = (function(){
    for (let i = 0; i < closeFlip.length; i++){
        closeFlip[i].addEventListener('click', function(){
            const cardContainer = this.closest('.card-container');
            cardContainer.classList.remove('is-flipped')
        })
    }
});