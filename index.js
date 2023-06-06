// variables
const generalBtn = document.getElementById('genral')
// Whenever we click on the button it will get deatils
// The generalBtn is an HTML button element that triggers a click event.
const businessBtn = document.getElementById('business')
const sportsBtn = document.getElementById('sport')
const entertainmentBtn = document.getElementById('entertainment')
const technologyBtn = document.getElementById('technology')
const healthBtn = document.getElementById('health')
const searchBtn = document.getElementById('searchBtn')

const newsQuery = document.getElementById('newsQuery')
const newsType = document.getElementById('newsType')
const newsdetails = document.getElementById('newsdetails')

// Array
var newsDataArr = []//inside the newsDataArr our news will be fetch in the json format

// apis

const API_KEY = '7d16c81d827648fa9162a3376f94cca9'

//Create a news API Key for every categories 
const HEADLINES_NEWS = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
const GENERAL_NEWS = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${API_KEY}`
const BUSINESS_NEWS = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${API_KEY}`
const SPORTS_NEWS = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${API_KEY}`
const TECHNOLOGY_NEWS = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${API_KEY}`
const ENTERTAINMENT_NEWS = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${API_KEY}`
const HEALTH_NEWS = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${API_KEY}`


const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

// window.onload function is an event handler that is executed when the web page finishes loading
window.onload = function () {
  newsType.innerHTML = '<h4>Headlines</h4>'
  fetchHeadlines()
}

// addEventListener() method is used to listen for a click event 
generalBtn.addEventListener('click', function () {
  newsType.innerHTML = '<h4>General news</h4>'
  fetchGeneralNews()
})

businessBtn.addEventListener('click', function () {
  newsType.innerHTML = '<h4>Business</h4>'
  fetchBusinessNews()
})

sportsBtn.addEventListener('click', function () {
  newsType.innerHTML = '<h4>Sports</h4>'
  fetchSportsNews()
})

entertainmentBtn.addEventListener('click', function () {
  newsType.innerHTML = '<h4>Entertainment</h4>'
  fetchEntertainmentNews()
})

technologyBtn.addEventListener('click', function () {
  newsType.innerHTML = '<h4>Technology</h4>'
  fetchTechnologyNews()
})
healthBtn.addEventListener('click', function () {
  newsType.innerHTML = '<h4>Health</h4>'
  fetchHealthNews();
})

searchBtn.addEventListener('click', function () {
  newsType.innerHTML = '<h4>Search : ' + newsQuery.value + '</h4>'
  fetchQueryNews()
})

const fetchHeadlines = async () => {
  const response = await fetch(HEADLINES_NEWS)
  newsDataArr = []
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json()
    newsDataArr = myJson.articles // inside the articles section , news deatils are available in the array  , so assign that deatils in the newsDataArr
  } else {
    // handle errors
    console.log(response.status, response.statusText)
    newsdetails.innerHTML = '<h5>No data found.</h5>'
    return
  }

  displayNews()
}

const fetchGeneralNews = async () => {
  const response = await fetch(GENERAL_NEWS)
  newsDataArr = []
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json()
    newsDataArr = myJson.articles
  } else {
    // handle errors
    console.log(response.status, response.statusText)
    newsdetails.innerHTML = '<h5>No data found.</h5>'
    return
  }

  displayNews()
}

const fetchBusinessNews = async () => {
  const response = await fetch(BUSINESS_NEWS)
  newsDataArr = []
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json()
    newsDataArr = myJson.articles
  } else {
    // handle errors
    console.log(response.status, response.statusText)
    newsdetails.innerHTML = '<h5>No data found.</h5>'
    return
  }

  displayNews()
}

const fetchEntertainmentNews = async () => {
  const response = await fetch(ENTERTAINMENT_NEWS)
  newsDataArr = []
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json()
    console.log(myJson)
    newsDataArr = myJson.articles
  } else {
    // handle errors
    console.log(response.status, response.statusText)
    newsdetails.innerHTML = '<h5>No data found.</h5>'
    return
  }

  displayNews()
}

const fetchSportsNews = async () => {
  const response = await fetch(SPORTS_NEWS)
  newsDataArr = []
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json()
    newsDataArr = myJson.articles
  } else {
    // handle errors
    console.log(response.status, response.statusText)
    newsdetails.innerHTML = '<h5>No data found.</h5>'
    return
  }

  displayNews()
}

const fetchTechnologyNews = async () => {
  const response = await fetch(TECHNOLOGY_NEWS)
  newsDataArr = []
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json()
    newsDataArr = myJson.articles
  } else {
    // handle errors
    console.log(response.status, response.statusText)
    newsdetails.innerHTML = '<h5>No data found.</h5>'
    return
  }

  displayNews()
}
const fetchHealthNews = async () => {
  const response = await fetch(HEALTH_NEWS)
  newsDataArr = []
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json()
    newsDataArr = myJson.articles
  } else {
    // handle errors
    console.log(response.status, response.statusText)
    newsdetails.innerHTML = '<h5>No data found.</h5>'
    return
  }

  displayNews()
}

const fetchQueryNews = async () => {

  if(newsQuery.value == null)
      return;

  const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);// we pass quiries as a input and then add api key
//  encodeURIComponent is used for make input in the queries form , if there is any sapce of commos , then it will remove 
  newsDataArr = [];
  if(response.status >= 200 && response.status < 300) {
      const myJson = await response.json();
      newsDataArr = myJson.articles; 
  } else {
      //error handle
      console.log(response.status, response.statusText);
      newsdetails.innerHTML = "<h5>No data found.</h5>"
      return;
  }

  displayNews();
}


function displayNews() {
  newsdetails.innerHTML = ''

  // if(newsDataArr.length == 0) {
  //     newsdetails.innerHTML = "<h5>No data found.</h5>"
  //     return;
  // }

  
  // Triverse in the newsDataArr
  newsDataArr.forEach((news) => {
    var date = news.publishedAt.split('T') // in the date variable date and time both are parset , in the form of array

    var col = document.createElement('div') // for c reate outline of the box
    col.className = 'col-sm-12 col-md-4 col-lg-3 p-2 card'

    var card = document.createElement('div') // for create card of box
    card.className = 'p-2'

    var image = document.createElement('img') // for set image in the box
    image.setAttribute('height', 'matchparent')
    image.setAttribute('width', '100%')
    image.src = news.urlToImage // convert image url into image

    var cardBody = document.createElement('div')

    var newsHeading = document.createElement('h5')
    newsHeading.className = 'card-title'
    newsHeading.innerHTML = news.title  

    var dateHeading = document.createElement('h6')
    dateHeading.className = 'text-primary'
    dateHeading.innerHTML = date[0]   // fetch date[0] means get date 

    var discription = document.createElement('p')
    discription.className = 'text-muted'
    discription.innerHTML = news.description

    // create button for read more
    var link = document.createElement('a')
    link.className = 'btn btn-dark'
    link.setAttribute('target', '_blank')
    link.href = news.url
    link.innerHTML = 'Read more'


    cardBody.appendChild(newsHeading)
    cardBody.appendChild(dateHeading)
    cardBody.appendChild(discription)
    cardBody.appendChild(link) // it will redirectd to the news articles

    card.appendChild(image)
    card.appendChild(cardBody)

    col.appendChild(card)

    newsdetails.appendChild(col)
  })
}
