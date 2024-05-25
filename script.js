
let switchButton = document.getElementById('switch'); 
let modeLight = document.getElementById('light-button')
let modeDark = document.getElementById('dark-button')
const slider = document.getElementById('slider')
let wrapper = document.getElementsByClassName('card-wrapper')

//consuming the github API


username = 'daniel-kav';

async function getGithubFollowerCount(username) {
    try {
        const response = await fetch('https://api.github.com/users/daniel-kav');
        if (!response.ok) {
            throw new Error(`Failed to retrieve data: ${response.status}`);
        }
        const data = await response.json();
        const followerCount = data.followers;
        return followerCount;
    } catch (error) {
        console.error(error);
        return null;
    }
}
getGithubFollowerCount();



async function displayFollowerCounts() {
  try {
    const response = await fetch('http://localhost:3000/cards');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();

    let twitterUser = document.getElementById('twitteruname');
    let instaUser = document.getElementById('instauname');
    let facebookUser = document.getElementById('fbuname');
    twitterUser.innerHTML = data.twitter.username;
    instaUser.innerHTML = data.instagram.username;
    facebookUser.innerHTML = data.facebook.username;

    let fbfollowers = document.getElementById('fbfollow')

    console.log(`Twitter: Username: ${data.twitter.username}, Followers: ${data.twitter.count}`);
    console.log(`Instagram: Username: ${data.instagram.username}, Followers: ${data.instagram.count}`);
    console.log(`Facebook: Username: ${data.facebook.username}, Followers: ${data.facebook.count}`);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the function to display the follower counts
displayFollowerCounts();

//consuming the json server data
fetch('http://localhost:3000/cards')
  .then(response => response.json())
  .then(data => {
    // Filter the data to get the Twitter card
    const twitterCard = data.find(card => card.platform === 'twitter');
    const instagramCard = data.find(card => card.platform === 'instagram');
    const facebookCard = data.find(card => card.platform === 'facebook');
    const youtubeCard = data.find(card => card.platform === 'youtube');
    
    // Use the Twitter card data as needed
    document.getElementById('twitteruname').innerHTML = twitterCard.username;
    console.log(instagramCard);
  })
  .catch(error => {
    console.error('Error fetching Twitter card data:', error);
  });



function changeMode(){
    if(modeLight.classList.contains('show')){
        modeLight.classList.remove('show')
        modeLight.classList.add('none')
        modeDark.classList.add('show')
        slider.style.backgroundColor = 'var(--LimeGreen)'
        bodyModeChange()

    } else if (modeDark.classList.contains('show')){
        modeDark.classList.remove('show')
        modeLight.classList.remove('none')
        modeLight.classList.add('show')
        slider.style.backgroundColor = '#ccc'
        bodyModeChange()
    }

}
switchButton.addEventListener('change', changeMode, bodyModeChange)


function bodyModeChange (){
    if(modeDark.classList.contains('show')){
        document.body.style.backgroundColor = 'var(--VeryDarkBlueBG)'
        darkCardMode()
        
    } else if (modeLight.classList.contains('show')){
        document.body.style.backgroundColor = 'var(--WhiteBG)'
        lightCardMode()
        
    }
}


function changeColors(selectors, colors) {
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        for(i=0; i<elements.length;i++){
      elements[i].style.backgroundColor = colors;
    }
    })
}

function changeTextColors(selectors, colors) {
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        for(i=0; i<elements.length;i++){
      elements[i].style.color = colors;
    }
    })
}
  
  function darkCardMode(){
    changeColors(['.card-inner','.card-inner-2'], ['var(--DarkDesaturtedBlueCardBG)'])
    changeTextColors(['.followers-number', '.title', '.page-update', '.attribution'],['var(--WhiteText)'])
}

function lightCardMode(){
    changeColors(['.card-inner','.card-inner-2'], ['var(--VeryPaleBlueTopBGPattern)'])
    changeTextColors(['.followers-number', '.title', '.page-update'],['var(--VeryDarkBlueText)'])
}

