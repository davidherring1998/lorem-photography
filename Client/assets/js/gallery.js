let imageOne = document.getElementById('photo-one');
let imageTwo = document.getElementById('photo-two');
let imageThree = document.getElementById('photo-three');

let hrefOne = document.getElementById('href-one');
let hrefTwo = document.getElementById('href-two')
let hrefThree = document.getElementById('href-three')

let headOne = document.getElementById('name-one')
let headTwo= document.getElementById('name-two')
let headThree = document.getElementById('name-three')

const fetchCall = async () => {

    // Get random number to get different pictures every time; 
    let numOne = Math.floor((Math.random() * 20) + 1);
    let numTwo = Math.floor((Math.random() * 20) + 1);
    let numThree = Math.floor((Math.random() * 20) + 1);
    
    // API call 
    const response = await fetch ("https://api.unsplash.com/photos/?client_id=t8tCzmX2DA78Ho50bKlGin7GBsruYNN9W5rV9amF6n8&per_page=30&order_by=popular")
    const images = await response.json()

    // Sets image to html element 
    imageOne.src =  images[numOne].urls.small 
    imageTwo.src =  images[numTwo].urls.small 
    imageThree.src =  images[numThree].urls.small 

    // Sets download link to href to image
    hrefOne.href = images[numOne].links.download;
    hrefTwo.href = images[numTwo].links.download;
    hrefThree.href = images[numThree].links.download;
}
fetchCall();

const fetchReviewCall = async () => {
    const response = await fetch('http://localhost:8000/api/reviews')
    const reviews  = await response.json()

    console.log(reviews[3])
    headOne = reviews[3].name

}

fetchReviewCall()