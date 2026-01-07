let messageActive = false;

function message(input) {
  if (messageActive) return;
  
  messageActive = true;
  document.getElementById('messageBox').innerText = input;
  let time = 100;
  if (input.length <= 30) {
    time = 2000;
  } else if (input.length > 30 && input.length <= 50) {
    time = 3500;
  } else if (input.length > 50 && input.length <= 70) {
    time = 5500;
  } else {
    time = 8000;
  }
  
  document.getElementById('messageBox').classList.add('show');
  setTimeout(() => {
    document.getElementById('messageBox').classList.remove('show');
    messageActive = false;
  }, time)
}

function logger() {
  let value = document.getElementById('loginp').value;
  console.log(value || 'Irj be valamit :D');
  message(`Console logged: ${value || "nothing"}`);
}

function alerter() {
  let value = document.getElementById('alrtinp').value;
  alert(value || 'Irj be valamit :D');
  message(`Alert popped up that said: ${value || "nothing"}`);
}

function confirmer() {
  let value = document.getElementById('confinp').value;
  confirm(value || 'Irj be valamit :D');
  message(`Confirmation popped up that said: ${value || "nothing"}`);
}

function prompter() {
  let value = document.getElementById('prmtinp').value;
  let promptValue = prompt(value || 'Irj be valamit :D');
  message(`Prompt popped up that said: ${value || "nothing"} and than you said:${promptValue}`);
}

document.getElementById('timeinp').addEventListener('keyup', function (e) {
  console.log("Keyup")
  let time = document.getElementById('timeinp').value
  console.log(time)
  setInterval(function () {document.getElementById('ball').classList.toggle("right")},time)
});

function moveball() {
  console.log("in move ball")
  
  console.log(document.getElementById('ball').classList)
}

document.getElementById('secretInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    let value = document.getElementById('secretInput').value;
    console.log(value)
    document.getElementById('secretInput').value = ""
    document.getElementById('secretInput').blur()
  }
});