const birthDate = document.querySelector("#date-input");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#btn-check");
const output = document.querySelector(".output");


function checkBirthdayIsLucky(){

    const dob =  birthDate.value.replaceAll("-","");
    const sum = evaluateDOB(dob)
    if(sum && Number(luckyNumber.value) >= 0 ){
        checklucky(sum);
    }else{
        output.innerText = "Please enter correct values in both the fields";
    }

    
}

function evaluateDOB(dob){
    let sum = 0;

    for (let i =0; i < dob.length; i++){
        var num = Number(dob[i]);
        sum = num+sum;
    }
    return sum;
}

function checklucky(sum){
    if(sum%luckyNumber.value === 0){
        window.confettiful = new Confettiful(document.querySelector(".container"));
        output.innerText = "Lucky"
    }else{
        output.innerText = "Not lucky enough"
    }
    
}

checkBtn.addEventListener('click', checkBirthdayIsLucky)




// Reference: https://www.w3schools.com/howto/howto_css_modals.asp

// Get the modal
var modal = document.querySelector(".modal-content")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



//Reference: https://codepen.io/websplash/pen/OJmjYVo
const Confettiful = function (el) {
    this.el = el;
    this.containerEl = null;
  
    this.confettiFrequency = 3;
    this.confettiColors = ["#fce18a", "#ff726d", "#b48def", "#f4306d"];
    this.confettiAnimations = ["slow", "medium", "fast"];
  
    this._setupElements();
    this._renderConfetti();
  };
  
  Confettiful.prototype._setupElements = function () {
    const containerEl = document.createElement("div");
    const elPosition = this.el.style.position;
  
    if (elPosition !== "relative" || elPosition !== "absolute") {
      this.el.style.position = "relative";
    }
  
    containerEl.classList.add("confetti-container");
  
    this.el.appendChild(containerEl);
  
    this.containerEl = containerEl;
  };
  
  Confettiful.prototype._renderConfetti = function () {
    this.confettiInterval = setInterval(() => {
      const confettiEl = document.createElement("div");
      const confettiSize = Math.floor(Math.random() * 3) + 7 + "px";
      const confettiBackground = this.confettiColors[
        Math.floor(Math.random() * this.confettiColors.length)
      ];
      const confettiLeft = Math.floor(Math.random() * this.el.offsetWidth) + "px";
      const confettiAnimation = this.confettiAnimations[
        Math.floor(Math.random() * this.confettiAnimations.length)
      ];
  
      confettiEl.classList.add(
        "confetti",
        "confetti--animation-" + confettiAnimation
      );
      confettiEl.style.left = confettiLeft;
      confettiEl.style.width = confettiSize;
      confettiEl.style.height = confettiSize;
      confettiEl.style.backgroundColor = confettiBackground;
  
      confettiEl.removeTimeout = setTimeout(function () {
        confettiEl.parentNode.removeChild(confettiEl);
      }, 3000);
  
      this.containerEl.appendChild(confettiEl);
    }, 25);
  };
  
  


