const slider = document.getElementById('slider');
// slider.addEventListener('click', toggleSlider);

const sliderBall = document.getElementById('sliderBall');

const myStatus = document.getElementById('myStatus');

const friendLineOne = document.getElementById('friendLineOne');

const popupContainer = document.getElementById('popupContainer');

let sliderOn = false;

let contactShow = false;

function toggleSlider(){
  if (sliderOn === false){
    sliderBall.classList.add('sliderBallOn');
    myStatus.innerHTML = 'ONLINE';
    myStatus.classList.add('statusOn');
    slider.classList.add('sliderOn');
    sliderOn = true;
  } else {
    sliderBall.classList.remove('sliderBallOn');
    myStatus.innerHTML = 'OFFLINE';
    myStatus.classList.remove('statusOn');
    slider.classList.remove('sliderOn');
    sliderOn = false;
  }
}

// friendLineOne.addEventListener('click', displayContactOptions);

function displayContactOptions() {
  if (contactShow === false){
    popupContainer.style.visibility = 'visible';
    contactShow = true;
  } else {
    popupContainer.style.visibility = 'hidden';
    contactShow = false;
  }
}

window.onload = function(){
  online();
}

function online(){
  setTimeout(function(){
    sliderBall.classList.add('sliderBallOn');
    myStatus.innerHTML = 'ONLINE';
    myStatus.classList.add('statusOn');
    slider.classList.add('sliderOn');
    offline();
  }, 4000);
}

function offline(){
  setTimeout(function(){
    sliderBall.classList.remove('sliderBallOn');
    myStatus.innerHTML = 'OFFLINE';
    myStatus.classList.remove('statusOn');
    slider.classList.remove('sliderOn');
    online();
  }, 4000);
}