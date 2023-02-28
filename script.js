let flag = 0;

function slideshow(num){
  let slides = document.getElementsByClassName('slide');
  for(let y of slides){
    y.style.display = "none"
  }
  slides[num].style.display = "block";
}

slideshow(flag);

function controller(x){
  flag = flag + x;
  if(flag < 0){
    flag = 2;
  }

  if(flag > 2){
    flag = 0;
  }
  slideshow(flag)
}