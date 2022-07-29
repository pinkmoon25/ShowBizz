const likesCount = (likes) => {
  const likesSymbol = document.querySelector('.like-symbol');
  likesSymbol.addEventListener('click', () => {
    likes += 1;
  });
  likesSymbol.click();
  return likes;
};

export default likesCount;