/*logic for image and color change in main-image section */
function changeColor(color){
    const mainImage = document.getElementById('main-image');/*fetching main-image*/
    const thumbnails = document.querySelector(".thumbnails");/*fetching the thumbnils like color and diff images related to the product*/

    let images = [];/*matching with the users choice*/
    if(color === "blue"){
        images=[
            'https://m.media-amazon.com/images/I/61hmbsAzLpL._SY355_.jpg',
            'https://m.media-amazon.com/images/I/61YO4wXab3L._SY355_.jpg',
            'https://m.media-amazon.com/images/I/710JwD0MP5L._SY355_.jpg',
            'https://m.media-amazon.com/images/I/61u1VALn6JL._SY355_.jpg'
        ]
    }

    else if(color === "black"){
        images=[
            'https://m.media-amazon.com/images/I/51LYseQyugL._SY355_.jpg',
            'https://m.media-amazon.com/images/I/71QDnQWrVNL._SY355_.jpg',
            'https://m.media-amazon.com/images/I/61S2z5PwUqL._SY355_.jpg',
            'https://m.media-amazon.com/images/I/51xxA+6E+xL._SY355_.jpg'
        ]
    }
    else if(color==="white"){
        images=[
            'https://m.media-amazon.com/images/I/61zwqzDPknL._SY355_.jpg',
            'https://m.media-amazon.com/images/I/61OnrlA5hmL._SY355_.jpg',
            'https://m.media-amazon.com/images/I/710JwD0MP5L._SY355_.jpg',
            'https://m.media-amazon.com/images/I/610bnYBwzmL._SY355_.jpg'
        ]
    }
    /*updating the image section as per user choice*/
    mainImage.src = images[3];
    while(thumbnails.firstChild){
        thumbnails.removeChild(thumbnails.firstChild);
    }

    images.forEach(img => {
        const thumb = document.createElement('img');
        thumb.src= img;
        thumb.alt = `${color} Image`;
        thumb.classList.add('thumb');
        thumb.onclick = () => changeImage(img);
        thumbnails.appendChild(thumb);
    });
}   
/*main-image update when users select per image from choice*/
function changeImage(img){
    const mainImage = document.getElementById('main-image');
    mainImage.src = img;
}

