import { searchShowUrl } from './config/showsAPI';
import { commentApi, commentDataApi, likesApi } from './config/involvement';
import { renderComments, postComment } from './server';

const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('.search');

const searchShows = async () => {
  const url = encodeURI(`${searchShowUrl}${searchInput.value}`);
  const res = await fetch(url);
  const result = await res.json();
  return result;
};

async function search(getComments, postData) {
  const body = document.querySelector('body');
  const showSection = document.querySelector('.shows-container');
  const modalSection = document.querySelector('.modal');
  const searchResults = await searchShows();
  showSection.innerHTML = '';
  searchResults.forEach((search) => {
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

    likesContainer.setAttribute('data-id', `showId${search.show.id}`);
    symbolContainer.setAttribute('title', 'like');
    if (search.show.image === null) return;
    showImage.setAttribute('src', search.show.image.medium);
    showImage.setAttribute('alt', `${search.show.name} image`);
    showLink.setAttribute('href', search.show.url);
    showLink.setAttribute('target', '_blank');
    p.innerText = `${search.show.name}`;
    symbolContainer.innerHTML = '&#9825';
    commentBtn.textContent = 'comments';
    commentBtn.addEventListener('click', () => {
      modalSection.classList.remove('hide-modal');
      modalSection.classList.add('show-modal');
      body.style.overflowY = 'hidden';
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
      const commentsCount = document.createElement('p');
      const commentForm = document.createElement('form');
      const commentInput = document.createElement('input');
      const commentText = document.createElement('textarea');
      const commentInputBtn = document.createElement('button');
      const commentsDiv = document.createElement('div');

      popupContainer.classList.add('popup-container');
      closeBtn.classList.add('close-popup');
      figcaption.classList.add('popup-details');
      popupImage.classList.add('popup-img');
      showDetails.classList.add('show-details');
      commentInputBtn.classList.add('comment-input-btn');
      commentsDiv.classList.add('comments-container');
      commentText.setAttribute('required', 'true');
      commentInputBtn.setAttribute('required', 'true');
      commentInput.setAttribute('placeholder', 'Your name');
      commentText.setAttribute('placeholder', 'Your insights');
      commentsCount.classList.add('comments-count');

      popupImage.setAttribute('src', search.show.image.original);
      popupImage.setAttribute('alt', `${search.show.name} image`);
      popupShowLink.setAttribute('href', search.show.url);
      popupShowLink.setAttribute('target', '_blank');
      closeBtn.innerHTML = '&times;';
      popupShowTitle.innerHTML = search.show.name;
      figcaption.innerHTML = search.show.summary;
      genre.innerHTML = `Genres: ${search.show.genres.join(', ')}`;
      rating.innerHTML = `Rating: ${search.show.rating.average}`;
      premiered.innerHTML = `premiered: ${search.show.premiered}`;

      commentInputBtn.textContent = 'Comment';

      commentInputBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        if (commentInput.value.trim() === '' || commentText.value.trim() === '') return;
        postComment(commentApi, search.show.id, commentInput, commentText);
        setTimeout(async () => {
          const comments = await getComments(commentDataApi, search.show.id);
          renderComments(comments);
        }, 1000);
        commentInput.value = '';
        commentText.value = '';
      });

      figcaption.appendChild(popupShowTitle);
      popupShowLink.appendChild(popupImage);
      popupFig.appendChild(popupShowLink);
      popupFig.appendChild(figcaption);
      showDetails.appendChild(genre);
      showDetails.appendChild(rating);
      showDetails.appendChild(premiered);
      commentForm.appendChild(commentInput);
      commentForm.appendChild(commentText);
      commentForm.appendChild(commentInputBtn);
      popupContainer.appendChild(closeBtn);
      popupContainer.appendChild(popupFig);
      popupContainer.appendChild(showDetails);
      popupContainer.appendChild(commentsCount);
      popupContainer.appendChild(commentsDiv);
      popupContainer.appendChild(commentForm);

      modalSection.appendChild(popupContainer);
      closeBtn.addEventListener('click', () => {
        modalSection.classList.remove('show-modal');
        modalSection.classList.add('hide-modal');
        body.style.overflowY = 'auto';
      });
      setTimeout(async () => {
        const comments = await getComments(commentDataApi, search.show.id);
        renderComments(comments);
      }, 1000);
    });

    symbolContainer.addEventListener('click', () => {
      let likeContainer = symbolContainer.nextSibling;
      // unlike show and stop updating it on the source api
      if (symbolContainer.innerHTML === '❤') {
        likeContainer.innerHTML = Number(likeContainer.innerHTML) - 1;
        symbolContainer.innerHTML = '&#9825';
        return;
      }
      symbolContainer.innerHTML = '&#10084;';

      likeContainer.innerHTML = Number(likeContainer.innerHTML) + 1;
      likeContainer = likeContainer.getAttribute('data-id');
      const data = {
        item_id: likeContainer,
      };
      postData(data, likesApi);
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
}

export {
  searchBtn, searchInput, searchShows, search,
};