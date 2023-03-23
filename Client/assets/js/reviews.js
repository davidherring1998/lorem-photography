const nameOne = document.getElementById('name-one');
const nameTwo = document.getElementById('name-two');
const nameThree = document.getElementById('name-three');
const bodyOne = document.getElementById('body-one')
const bodyTwo = document.getElementById('body-two')
const bodyThree = document.getElementById('body-three')

// API call for review data 
const reviewAPI = fetch("http://localhost:8000/api/reviews")
  .then((res) => res.json())
  .then((data) => {
    return data;
  })

const getReviews = async () => {
  const data = await reviewAPI;

  console.log(data)
  // Text box one
  bodyOne.innerHTML = data[0].body
  nameOne.innerHTML = `-${data[0].name}`

  // Text box one
  bodyTwo.innerHTML = data[1].body
  nameTwo.innerHTML = `-${data[1].name}`

  // Text box one
  bodyThree.innerHTML = data[2].body
  nameThree.innerHTML = `-${data[2].name}`
}

getReviews();