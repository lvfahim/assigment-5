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
// copyNumber section end
