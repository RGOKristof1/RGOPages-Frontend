let hintOpen = JSON.parse(localStorage.getItem("hintStatus")) || "open" ;
if (hintOpen === "open") {
    document.getElementById("hintBtn").innerHTML = "Segítség Bezár";
    document.getElementById("header").innerHTML = 
    "<h1>1 = 10ft , 2 = 20ft , 3 = 5ft</h1><h1>q = 100ft , w = 200ft , e = 50ft</h1><h1>r = reset , backspace = delete</h1>";
    document.getElementById("hintBtn").className = 'nyitva';
  }else{
    document.getElementById("hintBtn").innerHTML = "Segítség Kinyit";
    document.getElementById("hintBtn").className = 'zarva';
  };
function x() {
  let hintOpen = JSON.parse(localStorage.getItem("hintStatus")) || "open" ;

  if (hintOpen === "open") {
    document.getElementById("header").innerHTML = "";
    document.getElementById("hintBtn").innerHTML = "Segítség Kinyit";
    document.getElementById("hintBtn").className = 'zarva';
    hintOpen = "closed";
  } else {
    document.getElementById("header").innerHTML = 
    "<h1>1 = 10ft , 2 = 20ft , 3 = 5ft</h1><h1>q = 100ft , w = 200ft , e = 50ft</h1>";
    document.getElementById("hintBtn").innerHTML = "Segítség Bezár";
    document.getElementById("hintBtn").className = 'nyitva';
    hintOpen = "open";
  }

  localStorage.setItem("hintStatus",JSON.stringify(hintOpen))
}

let penz = JSON.parse(localStorage.getItem("penz")) || 0;
document.querySelector('.js-osszeg').innerHTML =  penz+'ft' 

let mem = JSON.parse(localStorage.getItem("mem")) || [];
document.addEventListener('keydown', (event)=> {
    keyDown(event.key)
});
function keyDown(key) {
  if (key === '1') {
    mem.push(10)
  } else if (key === '2') {
    mem.push(20)
  } else if (key === '3') {
    mem.push(5)
  } else if (key === 'q') {
    mem.push(100)
  } else if (key === 'w') {
    mem.push(200)
  } else if (key === 'e') {
    mem.push(50)
  } else if (key === 'Backspace') {
    deleteLast()
  } else if (key === 'ji') {
    deleteLast()
  } else if (key === 'r') {
    reset()
  }
  localStorage.setItem("mem",JSON.stringify(mem))
  console.log(mem.length)
  mem = JSON.parse(localStorage.getItem("mem"))
  if (mem.length === 0) {
    document.querySelector('.js-osszeg').innerHTML = '0ft'
    localStorage.setItem("penz",JSON.stringify(0))
  } else {
    let i = 0
    let osszeg = 0

    while (i < mem.length) {
    osszeg += mem[i]
    i++
  }
  document.querySelector('.js-osszeg').innerHTML = osszeg+'ft'
  localStorage.setItem("penz",JSON.stringify(osszeg))
  }
  
  
}

function reset() {
  mem = []
  document.querySelector('.js-osszeg').innerHTML = '0ft'
  localStorage.setItem("penz",JSON.stringify(0))
}
function deleteLast() {
  mem.splice(mem.length-1,1)
}