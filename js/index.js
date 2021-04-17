let getALERT = document.getElementsByClassName('alert-danger')[0]; //this is alert box by default it is hide
let Zip = document.getElementsByClassName('pinCODE')[0]; //this is element of input box in which user will enter the zip code
let SearchBTN = document.getElementsByClassName('btn-warning')[0]; //search button


//function for the error box

function ShowError(message,styleType)
{
    
    getALERT.innerHTML = `${message}`;
getALERT.setAttribute('style',`display : ${styleType};`)


}
// first we will check internet connection 

if(!navigator.onLine)
{
       ShowError("Please Check Your  Internet Connection !!","block");
}



//now check the api

SearchBTN.addEventListener('click',()=>{

    if(!navigator.onLine)
   {
       ShowError("Please Check Your  Internet Connection !!","block");
   }


   if(Zip.value.length == 0)
    {
        ShowError("Enter the pin code first","block");
    }
    else
    {
console.log(Zip.value);

    }


})

//to hide the alert box

Zip.addEventListener("click",()=>{

    ShowError("none","none")
})