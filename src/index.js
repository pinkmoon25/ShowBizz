import './style.css';
import showApiUrl from './config/showsAPI';

const modalSection = document.querySelector('.modal');
const body = document.querySelector('body');

// get shows from API source function
const getShows = async () => {
  const res = await fetch(showApiUrl);
  const result = await res.json();
  return result;
};

//create show List

const renderShows = async () => {
  const shows = await getShows(showApiUrl);
  const showSection = document.querySelector('.shows-container');
  shows.length = 20;
  document.querySelector('.loaderContainer').remove();
  shows.forEach((show, index) => {
    const symbolContainer = document.createElement('span');
    const likesContainer = document.createElement('span');
    const showContainer = document.createElement('div');
    const commentBtnContainer = document.createElement('div');
    const commentBtn = document.createElement('button');
    const showImage = document.createElement('img');
    const fig = document.createElement('figure');
    const figcaption = document.createElement('figcaption');
    const p = document.createElement('p');

    showContainer.classList.add('show-container');
    symbolContainer.classList.add('like-symbol');
    likesContainer.classList.add('likes-count');
    commentBtnContainer.classList.add('comment-btn-container');

    showImage.setAttribute('src', show.image.medium);
    showImage.setAttribute('alt', `${show.name} image`);

    p.innerText = `${show.name}`;
    symbolContainer.innerHTML = '&#9825;';
    likesContainer.innerText = '100';
    commentBtn.textContent = 'comments';
    commentBtn.addEventListener('click', ()=>{
      modalSection.style.display = 'block';
      body.style.overflowY = 'hidden'
      renderPopup(index);
    })

    figcaption.appendChild(p);
    figcaption.appendChild(symbolContainer);
    figcaption.appendChild(likesContainer);
    fig.appendChild(showImage);
    fig.appendChild(figcaption);
    commentBtnContainer.appendChild(commentBtn);
    showContainer.appendChild(fig);
    showContainer.appendChild(commentBtnContainer);

    showSection.appendChild(showContainer);
  });
};

renderShows();

//create popup

async function renderPopup(i){
  const show = await getShows();
  modalSection.innerHTML = '';
    const popupContainer = document.createElement('div');
    const closeBtn = document.createElement('button');
    const popupFig = document.createElement('figure');
    const popupImage = document.createElement('img');
    const figcaption = document.createElement('figcaption');
    const popupShowTitle = document.createElement('h3');
    
    popupContainer.classList.add('popup-container');
    closeBtn.classList.add('close-popup');
    figcaption.classList.add('popup-details');
    popupImage.classList.add('popup-img');

    popupImage.setAttribute('src', show[i].image.original);
    popupImage.setAttribute('alt', `${show[i].name} image`);
    
    closeBtn.innerHTML = '&times;';
    popupShowTitle.innerHTML = show[i].name;
    figcaption.innerHTML = show[i].summary;

    figcaption.appendChild(popupShowTitle);
    popupFig.appendChild(popupImage);
    popupFig.appendChild(figcaption);
    popupContainer.appendChild(closeBtn);
    popupContainer.appendChild(popupFig);

    modalSection.appendChild(popupContainer);
    closeBtn.addEventListener('click', ()=>{
      modalSection.style.display = 'none';
      body.style.overflowY = 'auto'
    })
};
