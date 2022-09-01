var sound;

function isActive(id, soundId, soundId2) {
  var imgId = id
  var element
  var closeBtn = document.getElementById('closeBtn')

  switch (imgId) {
    case 'room':
      element = document.getElementById(imgId)
      if (element.classList.contains('active')) {
        sound.pause()
        sound = document.getElementById(soundId2)
      } else {
        sound = document.getElementById(soundId)
      }
      sound.play()
      element.classList.add('active')
      closeBtn.classList.add('show')
      text = document.getElementById('someTest')
      text.style.display = "block"
      text.innerText = 'להגעה לצומת הראשית המשך ישר עד שתשמע הקלטה צומת ראשית'
      break
    case 'dog':
      element = document.getElementById(imgId)
      if (element.classList.contains('active')) {
        sound.pause()
        sound = document.getElementById(soundId2)
      } else {
        sound = document.getElementById(soundId)
      }
      sound.play()
      element.classList.add('active')
      closeBtn.classList.add('show')
      break
    case 'pond':
      element = document.getElementById(imgId)
      if (element.classList.contains('active')) {
        sound.pause()
        sound = document.getElementById(soundId2)
      } else {
        sound = document.getElementById(soundId)
      }
      sound.play()
      element.classList.add('active')
      closeBtn.classList.add('show')
      break
    case 'food':
      element = document.getElementById(imgId)
      if (element.classList.contains('active')) {
        sound.pause()
        sound = document.getElementById(soundId2)
      } else {
        sound = document.getElementById(soundId)
      }
      sound.play()
      element.classList.add('active')
      closeBtn.classList.add('show')
      break
  }
  document.querySelector('.boxes').classList.add('active')
}

function clearAll() {
  var closeBtn = document.getElementById('closeBtn')
  var room = document.getElementById('room')
  var dog = document.getElementById('dog')
  var pond = document.getElementById('pond')
  var food = document.getElementById('food')

  sound.pause()
  sound.currentTime = 0;
  closeBtn.classList.remove('show')
  room.classList.remove('active')
  dog.classList.remove('active')
  pond.classList.remove('active')
  food.classList.remove('active')

  document.querySelector('.boxes').classList.remove('active')
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