import { searchShowUrl } from "./config/showsAPI";
import { commentDataApi, likesApi } from "./config/involvement";
import { renderComments } from "./server";

const searchInput = document.querySelector('#search'); 
const searchBtn = document.querySelector('.search');

const searchShows = async ()=>{
  const url = encodeURI(searchShowUrl+`${searchInput.value}`);
  const res = await fetch(url);
  const result = await res.json();
  return result;
};

async function search(renderPopup, getComments, postData){
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
      if(search.show.image === null) return;
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
        renderPopup(search.show.id);
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
  };

export { searchBtn, searchInput, searchShows, search };