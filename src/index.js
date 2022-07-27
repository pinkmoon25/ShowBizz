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

// create popup

async function renderPopup(i) {
  const show = await getShows();
  modalSection.innerHTML = '';
  const popupContainer = document.createElement('div');
  const closeBtn = document.createElement('button');
  const popupFig = document.createElement('figure');
  const popupShowLink = document.createElement('a');
  const popupImage = document.createElement('img');
  const figcaption = document.createElement('figcaption');
  const popupShowTitle = document.createElement('h3');
  const showDetails = document.createElement('div');
  const genre = document.createElement('span');
  const rating = document.createElement('span');
  const premiered = document.createElement('span');

  popupContainer.classList.add('popup-container');
  closeBtn.classList.add('close-popup');
  figcaption.classList.add('popup-details');
  popupImage.classList.add('popup-img');
  showDetails.classList.add('show-details');

  popupImage.setAttribute('src', show[i].image.original);
  popupImage.setAttribute('alt', `${show[i].name} image`);
  popupShowLink.setAttribute('href', show[i].url);
  popupShowLink.setAttribute('target', '_blank');

  closeBtn.innerHTML = '&times;';
  popupShowTitle.innerHTML = show[i].name;
  figcaption.innerHTML = show[i].summary;
  genre.innerHTML = `Genres: ${show[i].genres.join(', ')}`;
  rating.innerHTML = `Rating: ${show[i].rating.average}`;
  premiered.innerHTML = `premiered: ${show[i].premiered}`;

  figcaption.appendChild(popupShowTitle);
  popupShowLink.appendChild(popupImage);
  popupFig.appendChild(popupShowLink);
  popupFig.appendChild(figcaption);
  showDetails.appendChild(genre);
  showDetails.appendChild(rating);
  showDetails.appendChild(premiered);
  popupContainer.appendChild(closeBtn);
  popupContainer.appendChild(popupFig);
  popupContainer.appendChild(showDetails);

  modalSection.appendChild(popupContainer);
  closeBtn.addEventListener('click', () => {
    modalSection.style.display = 'none';
    body.style.overflowY = 'auto';
  });
}

// create show List

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
    const showLink = document.createElement('a');
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
    showLink.setAttribute('href', show.url);
    showLink.setAttribute('target', '_blank');

    p.innerText = `${show.name}`;
    symbolContainer.innerHTML = '&#9825;';
    likesContainer.innerText = '100';
    commentBtn.textContent = 'comments';
    commentBtn.addEventListener('click', () => {
      modalSection.style.display = 'block';
      body.style.overflowY = 'hidden';
      renderPopup(index);
    });

    figcaption.appendChild(p);
    figcaption.appendChild(symbolContainer);
    figcaption.appendChild(likesContainer);
    showLink.appendChild(showImage);
    fig.appendChild(showLink);
    fig.appendChild(figcaption);
    commentBtnContainer.appendChild(commentBtn);
    showContainer.appendChild(fig);
    showContainer.appendChild(commentBtnContainer);

    showSection.appendChild(showContainer);
  });
};

renderShows();
