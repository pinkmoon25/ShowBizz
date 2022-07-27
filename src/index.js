import './style.css';
import showApiUrl from './config/showsAPI';

// get shows from API source function
const getShows = async () => {
  const res = await fetch(showApiUrl);
  const result = await res.json();
  return result;
};

const renderShows = async () => {
  const shows = await getShows(showApiUrl);
  const showSection = document.querySelector('.shows-container');
  shows.length = 20;
  document.querySelector('.loaderContainer').remove();
  shows.forEach((show) => {
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