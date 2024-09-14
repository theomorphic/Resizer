
const uploadBox = document.querySelector(".upload-box"),
fileInput = uploadBox.querySelector("input");

const loadFile = (e) =>{
	const file = e.target.files[0];
	console.log(file)
}

fileInput.addEventListener("change", loadFile);
uploadBox.addEventListener("click", () => fileInput.click());