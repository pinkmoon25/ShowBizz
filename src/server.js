const postData = async (data, api) => {
  const req = fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });
  try {
    await req.reject(new Error(`HTTP - ERROR${(await req).status}`));
  } catch (error) {
    console.error(error); //  eslint-disable-line
  }
};

// get shows from API source function
const getApiData = async (showApiUrl) => {
  const res = await fetch(showApiUrl);
  const result = await res.json();
  return result;
};

async function postComment(api, show, input, userComment) {
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      item_id: show.id,
      username: input.value,
      comment: userComment.value,
    }),
  });
  const result = await JSON.parse(JSON.stringify(response));
  return result;
}

async function getComments(api, id) {
  const res = await fetch(api + id);
  const result = await res.json();
  return result;
}

function renderComments(comments) {
  const commentsDiv = document.querySelector('.comments-container');
  document.querySelector('.comments-count').innerText = `Comments (${comments.length})`;
  commentsDiv.innerHTML = '';
  comments.forEach((comment) => {
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment-container');
    const username = document.createElement('span');
    const commentSummary = document.createElement('span');
    const commentDate = document.createElement('span');
    username.innerText = `${comment.username}:`;
    commentSummary.innerText = comment.comment;
    commentDate.innerText = comment.creation_date;
    commentContainer.appendChild(username);
    commentContainer.appendChild(commentSummary);
    commentContainer.appendChild(commentDate);
    commentsDiv.appendChild(commentContainer);
  });
}

export {
  postData, getApiData, postComment, getComments, renderComments,
};
