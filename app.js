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
        output.innerText = "Lucky"
    }else{
        output.innerText = "Not lucky enough"
    }
    
}





checkBtn.addEventListener('click', checkBirthdayIsLucky)