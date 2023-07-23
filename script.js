const imgElement = document.querySelector('.img-width');
const container = document.querySelector('.container');

function updateImage() {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 768) {
    removeImage()
  } else {
    removeImage()
    imgElement.src = "https://tw.hicdn.beanfun.com/beanfun/promo/DragonNest/E20230717/css/img/body-bg-mb.jpg";
  }
}

updateImage();

window.addEventListener('resize', updateImage);


function removeImage() {
    const windowWidth = window.innerWidth;
    if (windowWidth > 768) {
      imgElement.remove();
    }
    else{
        if (!container.contains(imgElement)) {
            container.appendChild(imgElement);
          }
    }
  }