const imageOne = document.getElementById('photo-one');
const imageTwo = document.getElementById('photo-two');

const hrefOne = document.getElementById('href-one');
const hrefTwo = document.getElementById('href-two')


const nameOfArtistOne = document.getElementById('nameOne')
const nameOfArtistTwo = document.getElementById('nameTwo')


const btn = document.getElementById('refresh-btn');

const fetchCall = async () => {

    // Get random number to get different pictures every time; 
    let numOne = Math.floor((Math.random() * 20) + 1);
    let numTwo = Math.floor((Math.random() * 20) + 2);
    let numThree = 4;
    // Make sure the same image never appears
    if(numOne === numTwo || numOne === numThree || numTwo === numThree){
       let numONe = 2;
       let numTwo = 5;
    }

    // API call 
    const response = await fetch ("https://api.unsplash.com/photos/?client_id=t8tCzmX2DA78Ho50bKlGin7GBsruYNN9W5rV9amF6n8&per_page=30&order_by=popular")
    const images = await response.json()

    console.log(images[numOne].user.first_name)
    console.log(images[numOne].user.last_name)

    // Sets image to html element 
    imageOne.src =  images[numOne].urls.small 
    imageTwo.src =  images[numTwo].urls.small 

    // Sets download link to href to image
    hrefOne.href = images[numOne].links.download;
    hrefTwo.href = images[numTwo].links.download;

    if(images[numOne].user.first_name === null|| images[numOne].user.last_name === null) {
        nameOfArtistOne.innerHTML = `John Doe`
    } else{
        nameOfArtistOne.innerHTML = `${images[numOne].user.first_name} ${images[numOne].user.last_name}`
    }

    if(images[numTwo].user.first_name === null || images[numTwo].user.last_name === null ){
        nameOfArtistTwo.innerHTML =  `Jane Doe`
    } else {
        nameOfArtistTwo.innerHTML = `${images[numTwo].user.first_name} ${images[numOne].user.last_name}`
    }
}

const refresh = () => {
    fetchCall()
}

btn.addEventListener('click', () => {
    refresh()
});

fetchCall();

