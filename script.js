const buttons = {
  "room": {
    sound1: "Sounds/MainJunction.mp3",
    sound2: "",
    text: "להגעה לצומת הראשית המשך ישר עד שתשמע הקלטה צומת ראשית",
    header: "צומת ראשית",
  },
  "dog": {
    sound1: "Sounds/Dog_1.mp3",
    sound2: "Sounds/Dog_2.mp3",
    text: "להגעה לחצר ההרצה המשך ישר בדרך תשמע הכרזה צומת ראשית, תדע כי אתה בכיוון הנכון. תמשיך ישר עד שתגיע לבליטות בריצפה. בהגעה לבליטות היצמד לשמאל עד שתפגוש מעקה. היצמד למעקה ותלך בעקבותיו עד שתשמע הכרזה חצר הרצה",
    header: "חצר הרצה",
  },
  "pond": {
    sound1: "Sounds/Pond_1.mp3",
    sound2: "Sounds/Pond_2.mp3",
    text: "להגעה לבריכת הדגים המשך ישר עד שתשמע הכרזה צומת ראשית. עבור את הצומת הראשית ומיד פנה ימינה והמשך ישר לבריכת הדגים עד שתשמע הכרזה בריכת דגים",
    header: "בריכת דגים"
  },
  "enterance": {
    sound1: "Sounds/Junction_1.mp3",
    sound2: "Sounds/Junction_2.mp3",
    text: "להגעה לכניסת הולכי הרגל המשך ישר עד שתשמע הכרזה צומת ראשית. פנה שמאלה והמשך ללכת ישר עד שתשמע הכרזה כניסת הולכי רגל",
    header: "כניסה להולכי רגל"
  },
}

let audioOption = false;

const sound = document.getElementById("sound")
const audioPanel = document.querySelector(".audio_panel")

function isActive(id) {
  const imgId = id
  let element
  var closeBtn = document.getElementById('closeBtn')

  element = document.getElementById(imgId)
  if (audioOption) {
    console.log('audioOption is on')
    if (element.classList.contains('active')) {
      console.log('element is active')
      sound.pause()
      if (buttons[imgId].sound2) {
        sound.src = buttons[imgId].sound2
      }
    } else {
      console.log('element is not active')
      if (buttons[imgId].sound1) {
        sound.src = buttons[imgId].sound1
      }
    }
    sound.play()
    audioPanel.classList.add('show_flex')
    element.setAttribute('aria-label', '')
  } else {    
    text = document.getElementById('accessability_text')
    text.style.display = "block"
    text.innerText = buttons[imgId].text;
    element.setAttribute('aria-label', buttons[imgId].text)
  }

  element.classList.add('active')
  closeBtn.classList.add('show')
  
  document.querySelector('.boxes').classList.add('active')
}

function clearAll() {
  var closeBtn = document.getElementById('closeBtn')
  var room = document.getElementById('room')
  var dog = document.getElementById('dog')
  var pond = document.getElementById('pond')
  var enterance = document.getElementById('enterance')

  closeBtn.classList.remove('show')
  room.classList.remove('active')
  dog.classList.remove('active')
  pond.classList.remove('active')
  enterance.classList.remove('active')

  if (audioOption) {
    sound.pause()
    sound.currentTime = 0;
    audioPanel.classList.remove('show_flex')
    document.querySelector(".play").classList.remove('show_flex')
    document.querySelector(".pause").classList.add('show_flex')
  }

  room.setAttribute('aria-label', buttons["room"].header)
  dog.setAttribute('aria-label', buttons["dog"].header)
  pond.setAttribute('aria-label', buttons["pond"].header)
  enterance.setAttribute('aria-label', buttons["enterance"].header)

  document.querySelector('.boxes').classList.remove('active')
  text = document.getElementById('accessability_text')
  text.style.display = "none"
  text.innerText = "";
}

function toggleSettingsMenu() {
  document.querySelector('.settings_menu').classList.toggle('show')
  document.querySelector('.settings .blur_screen').classList.toggle('show')
}

function toggleInfoMenu() {
  document.querySelector('.info_menu').classList.toggle('show')
  document.querySelector('.info .blur_screen').classList.toggle('show')
}

function switchToScreenReader() {
  audioOption = false
  document.querySelector("#screen_reader_btn").classList.add('selected')
  document.querySelector("#recordings_btn").classList.remove('selected')
}

function switchToRecordings() {
  audioOption = true
  document.querySelector("#screen_reader_btn").classList.remove('selected')
  document.querySelector("#recordings_btn").classList.add('selected')
}

function pause() {
  sound.pause()
  document.querySelector(".play").classList.add('show_flex')
  document.querySelector(".pause").classList.remove('show_flex')
}

function play() {
  sound.play()
  document.querySelector(".play").classList.remove('show_flex')
  document.querySelector(".pause").classList.add('show_flex')
}

function replay() {
  sound.currentTime = 0;
}