let getALERT = document.getElementsByClassName('alert-danger')[0]; //this is alert box by default it is hide
let Zip = document.getElementsByClassName('pinCODE')[0]; //this is element of input box in which user will enter the zip code
let SearchBTN = document.getElementsByClassName('btn-warning')[0]; //search button



// first we will check internet connection 

if(!navigator.onLine)
{
        getALERT.innerHTML ="Please connect to the internet"
        getALERT.setAttribute('style',"display : block;")
}