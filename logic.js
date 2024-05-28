function changeColor(color){
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelector(".thumbnails");

    let images = [];
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

function changeImage(img){
    const mainImage = document.getElementById('main-image');
    mainImage.src = img;
}

