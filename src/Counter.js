const likesCount = (likes) => {
    const likesSymbol = document.querySelector(".like-symbol");
    likesSymbol.addEventListener("click", () => {
        likes++;
    })
    likesSymbol.click();
    return likes;
}

export { likesCount } 