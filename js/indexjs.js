// increaseHealth section start 
function heartNumber(){
   const healthBtn=  parseInt(document.getElementById('health-btn').innerText)
    const healthIncrizeNumber=1;
    const totalhealth=healthBtn+healthIncrizeNumber
    document.getElementById('health-btn').innerText=totalhealth; 
}

document.getElementById('nation-heart-btn').addEventListener('click',
    function (){
    heartNumber()
      
    }
)
document.getElementById('police-heart-btn').addEventListener('click',
    function (){
    heartNumber()
    }
)
document.getElementById('fire-heart-btn').addEventListener('click',
    function (){
    heartNumber()
    }
)
document.getElementById('ambulance-heart-btn').addEventListener('click',
    function (){
    heartNumber()

    }
)
document.getElementById('woman-heart-btn').addEventListener('click',
    function (){
    heartNumber()

    }
)
document.getElementById('gov-heart-btn').addEventListener('click',
    function (){
    heartNumber()

    }
)
document.getElementById('electricity-heart-btn').addEventListener('click',
    function (){
    heartNumber()

    }
)
document.getElementById('brac-heart-btn').addEventListener('click',
    function (){
    heartNumber()

    }
)
document.getElementById('rail-heart-btn').addEventListener('click',
    function (){
    heartNumber()

    }
)
// increaseHealth section end
 
// copyNumber section start 

function copyNumber(){
   const copyhBtn=  parseInt(document.getElementById('nav-copy-btn').innerText)
    const copyIncrizeNumber=1;
    const totalhealth=copyhBtn+copyIncrizeNumber
    document.getElementById('nav-copy-btn').innerText=totalhealth; 
}
function copyinnertext(id){
    const text=document.getElementById(id).innerText
        navigator.clipboard.writeText(text)
        .then(() => {
            alert('Your Number is copy : ' +  text)
        })
}

document.getElementById('copy-btn-national').addEventListener('click',
    function() {
        copyinnertext('copy-text-national');
        copyNumber();
    }
)
document.getElementById('copy-btn-police').addEventListener('click',
    function() {
        copyinnertext('copy-text-police');
        copyNumber();
    }
)
document.getElementById('copy-btn-fire').addEventListener('click',
    function() {
        copyinnertext('copy-text-fire');
        copyNumber();
    }
)
document.getElementById('copy-btn-ambulance').addEventListener('click',
    function() {
        copyinnertext('copy-text-ambulance');
        copyNumber();
    }
)
document.getElementById('copy-btn-woman').addEventListener('click',
    function() {
        copyinnertext('copy-text-woman');
        copyNumber();
    }
)
document.getElementById('copy-btn-gov').addEventListener('click',
    function() {
        copyinnertext('copy-text-gov');
        copyNumber();
    }
)
document.getElementById('copy-btn-electricity').addEventListener('click',
    function() {
        copyinnertext('copy-text-electricity');
        copyNumber();
    }
)
document.getElementById('copy-btn-brac').addEventListener('click',
    function() {
        copyinnertext('copy-text-brac');
        copyNumber();
    }
)
document.getElementById('copy-btn-rail').addEventListener('click',
    function() {
        copyinnertext('copy-text-rail');
        copyNumber();
    }
)
// copyNumber section end


// call section start
function creatInnertext(id){
    const number=document.getElementById(id);
    const numberInnertext=number.innerText;
    const numberInnertextPar=parseInt(numberInnertext);
    return numberInnertextPar;
}
function callingNameNumber(id1,id2){
    const textName=document.getElementById(id1).innerText
    const textNumber=document.getElementById(id2).innerText
    return {name:textName, callNumber:textNumber};
}
function coinCount(){
    const lostCoinNumber=20;
        const PresentCoin= creatInnertext('coin-btn');
        if(PresentCoin <20){
            alert("You don't have enough coins. A minimum of 20 coins is required to make a call");
            return false;
        }
        const remainingCoin=PresentCoin-lostCoinNumber;
        document.getElementById('coin-btn').innerText=remainingCoin;
        return true;
}
document.getElementById('call-btn-national').addEventListener('click',
    function (){
        if(!coinCount()){
            return;
        }
        const alertNameNumber=callingNameNumber('national','copy-text-national')
        // console.log(alertNameNumber)
        alert(`calling  ${alertNameNumber.name}  number   ${alertNameNumber.callNumber}`)
    }
)
document.getElementById('call-btn-police').addEventListener('click',
    function (){
        if(!coinCount()){
            return;
        }
        const alertNameNumber=callingNameNumber('police','copy-text-police')
        // console.log(alertNameNumber)
        alert(`calling  ${alertNameNumber.name}  number   ${alertNameNumber.callNumber}`)
    }
)
document.getElementById('call-btn-fire').addEventListener('click',
    function (){
        if(!coinCount()){
            return;
        }
        const alertNameNumber=callingNameNumber('fire','copy-text-fire')
        // console.log(alertNameNumber)
        alert(`calling  ${alertNameNumber.name}  number   ${alertNameNumber.callNumber}`)
    }
)
document.getElementById('call-btn-ambulance').addEventListener('click',
    function (){
        if(!coinCount()){
            return;
        }
        const alertNameNumber=callingNameNumber('ambulance','copy-text-ambulance')
        // console.log(alertNameNumber)
        alert(`calling  ${alertNameNumber.name}  number   ${alertNameNumber.callNumber}`)
    }
)
document.getElementById('call-btn-woman').addEventListener('click',
    function (){
        if(!coinCount()){
            return;
        }
        const alertNameNumber=callingNameNumber('woman','copy-text-woman')
        // console.log(alertNameNumber)
        alert(`calling  ${alertNameNumber.name}  number   ${alertNameNumber.callNumber}`)
    }
)
document.getElementById('call-btn-gov').addEventListener('click',
    function (){
        if(!coinCount()){
            return;
        }
        const alertNameNumber=callingNameNumber('anti','copy-text-gov')
        // console.log(alertNameNumber)
        alert(`calling  ${alertNameNumber.name}  number   ${alertNameNumber.callNumber}`)
    }
)
document.getElementById('call-btn-electricity').addEventListener('click',
    function (){
        if(!coinCount()){
            return;
        }
        const alertNameNumber=callingNameNumber('outage-1','copy-text-electricity')
        // console.log(alertNameNumber)
        alert(`calling  ${alertNameNumber.name}  number   ${alertNameNumber.callNumber}`)
    }
)
document.getElementById('call-btn-brac').addEventListener('click',
    function (){
        if(!coinCount()){
            return;
        }
        const alertNameNumber=callingNameNumber('brac','copy-text-brac')
        // console.log(alertNameNumber)
        alert(`calling  ${alertNameNumber.name}  number   ${alertNameNumber.callNumber}`)
    }
)
document.getElementById('call-btn-rail').addEventListener('click',
    function (){
        if(!coinCount()){
            return;
        }
        const alertNameNumber=callingNameNumber('rail','copy-text-rail')
        // console.log(alertNameNumber)
        alert(`calling  ${alertNameNumber.name}  number   ${alertNameNumber.callNumber}`)
    }
)

// call section end
