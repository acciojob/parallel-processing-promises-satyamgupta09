//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function PromiseCreation(url){
	return new Promise((resolve, reject) => {
		let img = new Image();

		img.onload = function(){
			return resolve(img);
		}

		img.onerror = function(){
			return reject(new Error(`Failed to load image's URL: ${url}`));
		}

		img.src=url;
	});
};

btn.addEventListener('click', function(){
	let promisesArr = images.map((imgUrl) => PromiseCreation(imgUrl.url));//map returns the output to prmoises

	Promise.all(promisesArr).then((images) => {
		images.forEach((img) => {
			output.appendChild(img);
		})
	})
	.catch((error)=>{
			console.log(error);
	})
});
