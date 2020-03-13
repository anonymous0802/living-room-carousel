const items = document.querySelectorAll('.grid-carousel__item');
const leftButton = document.querySelector('.js-left');
const rightButton = document.querySelector('.js-right');

const getOrder = (elem) => {
  return parseInt(getComputedStyle(elem).order);
}


const moveRight = () => {
  items.forEach((item) => {

    order = getOrder(item);
    
    if(order == 1) {
      item.classList.add('featuredItem');
    } else {
      item.classList.remove('featuredItem');
    }

    if(order < items.length) {
      item.style.order = order += 1;
    } else {
      item.style.order = 1;
    }
  })
}

rightButton.addEventListener('click', function(){
  moveRight();
})

const moveLeft = () => {
  items.forEach((item) => {

    order = getOrder(item);
    
    if(order == 3) {
      item.classList.add('featuredItem');
    } else {
      item.classList.remove('featuredItem');
    }

    if(order > 1) {
      item.style.order = order -= 1;
    } else {
      item.style.order = items.length;
    }
  })
}

leftButton.addEventListener('click', function(){
  moveLeft();
})