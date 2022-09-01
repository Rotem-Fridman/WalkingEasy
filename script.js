const buttons = {
  "room": {
    sound1: "Sounds/MainJunction.mp3",
    sound2: "",
    text: "להגעה לצומת הראשית המשך ישר עד שתשמע הקלטה צומת ראשית",
  },
  "dog": {
    sound1: "Sounds/Dog_1.mp3",
    sound2: "Sounds/Dog_2.mp3",
    text: "להגעה לחצר ההרצה המשך ישר בדרך תשמע הכרזה צומת ראשית, תדע כי אתה בכיוון הנכון. תמשיך ישר עד שתגיע לבליטות בריצפה. בהגעה לבליטות היצמד לשמאל עד שתפגוש מעקה. היצמד למעקה ותלך בעקבותיו עד שתשמע הכרזה חצר הרצה",
  },
  "pond": {
    sound1: "Sounds/Pond_1.mp3",
    sound2: "Sounds/Pond_2.mp3",
    text: "להגעה לבריכת הדגים המשך ישר עד שתשמע הכרזה צומת ראשית. עבור את הצומת הראשית ומיד פנה ימינה והמשך ישר לבריכת הדגים עד שתשמע הכרזה בריכת דגים",
  },
  "enterance": {
    sound1: "Sounds/Junction_1.mp3",
    sound2: "Sounds/Junction_2.mp3",
    text: "להגעה לכניסת הולכי הרגל המשך ישר עד שתשמע הכרזה צומת ראשית. פנה שמאלה והמשך ללכת ישר עד שתשמע הכרזה כניסת הולכי רגל",
  },
}

let sound

function isActive(id, soundId, soundId2) {
  const imgId = id
  let element
  var closeBtn = document.getElementById('closeBtn')

  switch (imgId) {
    case 'room':
      element = document.getElementById(imgId)
      // if (element.classList.contains('active')) {
      //   sound.pause()
      //   sound = document.getElementById(soundId2)
      // } else {
      //   sound = document.getElementById(soundId)
      // }
      // sound.play()
      element.classList.add('active')
      closeBtn.classList.add('show')
      text = document.getElementById('someTest')
      text.style.display = "block"
      text.innerText = buttons[imgId].text;
      break
    case 'dog':
      element = document.getElementById(imgId)
      // if (element.classList.contains('active')) {
      //   sound.pause()
      //   sound = document.getElementById(soundId2)
      // } else {
      //   sound = document.getElementById(soundId)
      // }
      // sound.play()
      element.classList.add('active')
      closeBtn.classList.add('show')
      text = document.getElementById('someTest')
      text.style.display = "block"
      text.innerText = buttons[imgId].text;
      break
    case 'pond':
      element = document.getElementById(imgId)
      // if (element.classList.contains('active')) {
      //   sound.pause()
      //   sound = document.getElementById(soundId2)
      // } else {
      //   sound = document.getElementById(soundId)
      // }
      // sound.play()
      element.classList.add('active')
      closeBtn.classList.add('show')
      text = document.getElementById('someTest')
      text.style.display = "block"
      text.innerText = buttons[imgId].text;
      break
    case 'enterance':
      element = document.getElementById(imgId)
      // if (element.classList.contains('active')) {
      //   sound.pause()
      //   sound = document.getElementById(soundId2)
      // } else {
      //   sound = document.getElementById(soundId)
      // }
      // sound.play()
      element.classList.add('active')
      closeBtn.classList.add('show')
      text = document.getElementById('someTest')
      text.style.display = "block"
      text.innerText = buttons[imgId].text;
      break
  }
  document.querySelector('.boxes').classList.add('active')
}

function clearAll() {
  var closeBtn = document.getElementById('closeBtn')
  var room = document.getElementById('room')
  var dog = document.getElementById('dog')
  var pond = document.getElementById('pond')
  var enterance = document.getElementById('enterance')

  // sound.pause()
  // sound.currentTime = 0;
  closeBtn.classList.remove('show')
  room.classList.remove('active')
  dog.classList.remove('active')
  pond.classList.remove('active')
  enterance.classList.remove('active')

  document.querySelector('.boxes').classList.remove('active')
  text = document.getElementById('someTest')
  text.style.display = "none"
  text.innerText = "";
}

function toggleAccessMenu() {
  document.querySelector('.accessibility_menu').classList.toggle('show')
  document.querySelector('.blur_screen').classList.toggle('show')
}

function applyYellowColor() {
  document.body.classList.add('color_yellow')
}

function removeYellowColor() {
  document.body.classList.remove('color_yellow')
}

function applyFontSizeBig() {
  document.body.classList.remove('font_mid')
  document.body.classList.remove('font_small')
  document.body.classList.add('font_big')
  document.querySelector('.btn_acc_mid').classList.remove('selected')
  document.querySelector('.btn_acc_small').classList.remove('selected')
  document.querySelector('.btn_acc_big').classList.add('selected')
}

function applyFontSizeMid() {
  document.body.classList.remove('font_big')
  document.body.classList.remove('font_small')
  document.body.classList.add('font_mid')
  document.querySelector('.btn_acc_mid').classList.add('selected')
  document.querySelector('.btn_acc_small').classList.remove('selected')
  document.querySelector('.btn_acc_big').classList.remove('selected')
}

function applyFontSizeSmall() {
  document.body.classList.remove('font_big')
  document.body.classList.remove('font_mid')
  document.body.classList.add('font_small')
  document.querySelector('.btn_acc_mid').classList.remove('selected')
  document.querySelector('.btn_acc_small').classList.add('selected')
  document.querySelector('.btn_acc_big').classList.remove('selected')
}