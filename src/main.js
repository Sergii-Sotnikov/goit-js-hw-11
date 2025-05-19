import { refs } from "./js/render-functions";
import { handlerFormSub } from "./js/render-functions";
import { getImagesByQuery } from "./js/pixabay-api" ;
import { createGallery } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";
import iziToast from 'izitoast';
import { showLoader } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";



refs.formElem.addEventListener('submit', (event) => {
  event.preventDefault();
  clearGallery();
  showLoader()
  const query = handlerFormSub(event);
  getImagesByQuery(query).then(data =>{
    console.log(data.hits.length)
      hideLoader();
    if(data.hits.length === 0){
        iziToast.show({
          title: '',
          titleColor: '#FFFFFF',
          titleSize: '16px',
          backgroundColor: '#EF4040',
          iconUrl: './img/bi_x-octagon.svg',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          color: 'red',
          messageColor: '#FFFFFF',
          messageSize: '16px',
          closeOnEscape: true,
          closeOnClick: true,
          theme: 'dark',
  })
    return null;
    } else createGallery(data);
}).catch(error =>{
    iziToast.show({
          title: 'ERROR',
          titleColor: '#FFFFFF',
          titleSize: '16px',
          backgroundColor: '#EF4040',
          iconUrl: './img/bi_x-octagon.svg',
          message: 'Something wrong',
          position: 'topRight',
          color: 'red',
          messageColor: '#FFFFFF',
          messageSize: '16px',
          closeOnEscape: true,
          closeOnClick: true,
          theme: 'dark',
});
    return null;
}
)
});
