
const uploadBox = document.querySelector(".upload-box"),
previewImg = uploadBox.querySelector("img"),
fileInput = uploadBox.querySelector("input"),
widthInput = document.querySelector(".width input"),
heightInput = document.querySelector(".height input"),
ratioInput = document.querySelector(".ratio input");

let ogImageRatio;

const loadFile = (e) =>{
	const file = e.target.files[0];
	if(!file) return; 
	previewImg.src = URL.createObjectURL(file);
	previewImg.addEventListener("load", ()=>{
		widthInput.value = previewImg.naturalWidth;
		heightInput.value = previewImg.naturalHeight;
		ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight;
		document.querySelector(".wrapper").classList.add("active")
	})
	console.log(file)
}

widthInput.addEventListener("keyup", ()=>{
	const height = ratioInput.checked ? widthInput.value / ogImageRatio : heightInput.value;
	 heightInput.value = Math.floor(height);
});

heightInput.addEventListener("keyup", ()=>{
	const width = ratioInput.checked ? heightInput.value * ogImageRatio : widthInput.value;
	 widthInput.value = Math.floor(width);
});

fileInput.addEventListener("change", loadFile);
uploadBox.addEventListener("click", () => fileInput.click());