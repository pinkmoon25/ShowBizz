import './style.css';
import showApiUrl from './config/showsAPI';
import { likesApi, commentApi, commentDataApi } from './config/involvement';
import {
  postData, getApiData, postComment, getComments, renderComments,
} from './server';

const modalSection = document.querySelector('.modal');
const body = document.querySelector('body');

// create popup
const renderPopup = async (i) => {
  const show = await getApiData(showApiUrl);
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

  commentInputBtn.textContent = 'Comment';

  commentInputBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    if (commentInput.value.trim() === '' || commentText.value.trim() === '') return;
    postComment(commentApi, show[i], commentInput, commentText);
    setTimeout(async () => {
      const comments = await getComments(commentDataApi, show[i].id);
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
};

// create show List

const renderShows = async () => {
  const shows = await getApiData(showApiUrl);
  const showSection = document.querySelector('.shows-container');
  shows.length = 20;
  // sort randomly whenever the page is loaded;
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

    likesContainer.setAttribute('data-id', `showId${show.id}`);
    symbolContainer.setAttribute('title', 'like');
    showImage.setAttribute('src', show.image.medium);
    showImage.setAttribute('alt', `${show.name} image`);
    showLink.setAttribute('href', show.url);
    showLink.setAttribute('target', '_blank');

    p.innerText = `${show.name}`;
    symbolContainer.innerHTML = '&#9825';
    commentBtn.textContent = 'comments';
    commentBtn.addEventListener('click', () => {
      modalSection.classList.remove('hide-modal');
      modalSection.classList.add('show-modal');
      body.style.overflowY = 'hidden';
      renderPopup(index);
      setTimeout(async () => {
        const comments = await getComments(commentDataApi, show.id);
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
};

const renderLikes = async () => {
  const likes = await getApiData(likesApi);
  likes.forEach((like, index) => {
    const likeContainer = document.querySelector(`[data-id = '${like.item_id}']`);
    if (index < 20) {
      likeContainer.innerHTML = like.likes;
    }
  });
};

renderShows();

// render likes after DOM content have been loaded
document.addEventListener('DOMContentLoaded', () => {
  renderLikes();
});
