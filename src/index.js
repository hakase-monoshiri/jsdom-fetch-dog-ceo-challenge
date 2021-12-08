console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl).then( 
    resp => resp.json() )
    .then(
        obj => {
            obj.map( img => {
                const dogContainer = document.getElementById("dog-image-container");
                dogContainer.appendChild(img);
            })
        }
    )