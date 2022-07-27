import './style.css';
import showAP1_URL from './config/showsAPI';

// creating dom elements
const div = document.createElement('div');
const fig = document.createElement('figure');
const image = document.createElement('img');
const figcaption = document.createElement('figcaption');
const btn = document.createElement('button');
const p = document.createElement('p');
const span = document.createElement('span');

// get shows from API source function
const getShows = async () => {
    const res = await fetch(showAP1_URL);
    const result = await res.json();
    return result;
};


 const renderShows = async () => {
    const shows = await getShows(showAP1_URL);
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
      const p = document.createElement('p')


        showContainer.classList.add('show-container');
        symbolContainer.classList.add('like-symbol')
        likesContainer.classList.add('likes-count')
        commentBtnContainer.classList.add('comment-btn-container')

        console.log(showImage);

        showImage.setAttribute('src', show.image.medium);
        image.setAttribute('alt', `${show.name} image`);

        p.innerText = `${show.name}`;
        symbolContainer.innerHTML = '&#9825;';
        likesContainer.innerText = '100';
        commentBtn.textContent = 'comments';

        figcaption.appendChild(p)
        figcaption.appendChild(symbolContainer)
        figcaption.appendChild(likesContainer)
        fig.appendChild(showImage);
        fig.appendChild(figcaption);
        commentBtnContainer.appendChild(commentBtn);
        showContainer.appendChild(fig);
        showContainer.appendChild(commentBtnContainer);
        
        showSection.appendChild(showContainer);
    })
};

renderShows();