const dialogRef = document.getElementById("PopUpPhoto");
const dialogPic = document.getElementById("dialogImg");
const imgNumber = document.getElementById("imgNumber");
const picDesc = document.getElementById("picDesc");

const grid = document.getElementById("photoGrid");

let images = [  //für Beschreibung vllt neue Array? 
    "img1.jpg",
    "img2.jpg",
    "img3.png",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
    "img10.jpg",
    "img11.jpg",
    "img12.jpg"
];

let imagesRef = [
    "Bild 1",
    "Bild 2",
    "Bild 3",
    "Bild 4",
    "Bild 5",
    "Bild 6",
    "Bild 7",
    "Bild 8",
    "Bild 9",
    "Bild 10",
    "Bild 11",
    "Bild 12"
];

let currentIndex = 0;

function renderPic (){ //Global oder als Funktion
    grid.innerHTML = "";
    dialogPic.innerHTML = "";

    for (let i = 0; i < images.length; i++) {
        let imgPath = images[i];
        const imgRef = imagesRef[i];   
    
        grid.innerHTML += imgTemplate(imgPath, imgRef, i);
        dialogPic.innerHTML += showPic(imgPath, imgRef, i);
    }
}

function imgTemplate(imgPath, imgRef, i){
    return `<button class="imgBtn" onclick="openDialog(this)">
                <img src="IMG/${imgPath}" alt="${imgRef}" data-index="${i}"/>
            </button>`;
}

function showPic(imgPath, imgRef, i){
    return `<img src="IMG/${images[i]}" alt="${imagesRef[i]}" data-index="${i}"/>`; 

    imgNumber.textContent = `${i + 1}/${images.length}`;
    picDesc.textContent = imagesRef[i];
}

function nextPic() {
    let next = currentIndex + 1;
    if (next >= images.length) next = 0 ;
    showPic(next);
}

function prevPic() {
    let prev = currentIndex - 1;
    if (prev < 0) prev = images.length - 1 ;
    showPic(prev);
}

function openDialog(btn, i){
    document.body.classList.add("overflow-hidden");

    showPic(i);
    dialogRef.showModal();
    dialogRef.classList.add("opened");
}

function closeDialog(){
    document.body.classList.remove("overflow-hidden");
    dialogRef.close();
    dialogRef.classList.remove("opened");
}

function closeOnBackdrop(event){
    if (event.target === event.currentTarget) {
        closeDialog();
    }
}

