

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
}
