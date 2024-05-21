
let switchButton = document.getElementById('switch'); 
let modeLight = document.getElementById('light-button')
let modeDark = document.getElementById('dark-button')
const slider = document.getElementById('slider')
let wrapper = document.getElementsByClassName('card-wrapper')




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