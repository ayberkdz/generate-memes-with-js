// const generateMemeBtn = document.querySelector(
//     ".meme-generator .generate-meme-btn"
//   );
//   const memeImage = document.querySelector(".meme-generator img");
//   const memeTitle = document.querySelector(".meme-generator .meme-title");
//   const memeAuthor = document.querySelector(".meme-generator .meme-author");

//   const updateDetails = (url, title, author) => {
//     memeImage.setAttribute("src", url);
//     memeTitle.innerHTML = title;
//     memeAuthor.innerHTML = `Meme by: ${author}`;
//   };

//   const generateMeme = () => {
//     fetch("https://meme-api.com/gimme/wholesomememes")
//       .then((response) => response.json())
//       .then((data) => {
//         updateDetails(data.url, data.title, data.author);
//       });
//   };

//   generateMemeBtn.addEventListener("click", generateMeme);

//   generateMeme();

const generateMemeBtn = document.querySelector(
	'.meme-generator .generate-meme-btn'
);

const memeImage = document.querySelector('.meme-generator img');

const memeTitle = document.querySelector('.meme-generator .meme-title');

const memeAuthor = document.querySelector('.meme-generator .meme-author');

const updateDetails = (url, title, author) => {
	memeImage.setAttribute('src', url);
	memeTitle.innerHTML = title;
	memeAuthor.innerHTML = 'Author: ' + author;
};

generateMeme = () => {
	fetch('https://meme-api.com/gimme/wholesomememes')
		.then((res) => res.json())
		.then((data) => {
            console.log(data);
			updateDetails(data.url, data.title, data.author);
		});
};

generateMemeBtn.addEventListener('click', () => generateMeme());
