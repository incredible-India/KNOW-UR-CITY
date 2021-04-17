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
        ShowError("Enter the valid pin code first","block");
    }
    else
    {
       fetch(`https://api.postalpincode.in/pincode/${Zip.value}`)

       .then(data =>{
           return data.json(); //convert in json type

       })

       .then(finalData =>{
         
        console.log(finalData);
            //first check zip is correct or not

            let i =0;
                document.getElementsByClassName('noOFCITY')[0].innerHTML = `<h1 style="text-align: center;"> ${finalData[0].Message} </h1>`


                    for(i in finalData[0].PostOffice)
                    {
                        document.getElementsByClassName('tableDATA')[0].innerHTML += `
                
                        <table class="table table-success table-striped">
                        <thead>
                            <tr>
                              <th scope="col">SI NO.</th>
                              <th scope="col">NAME</th>
                              <th scope="col">DISTRICT</th>
                              <th scope="col">STATE</th>
                              <th scope="col">REGION</th>
                              <th scope="col">BLOCK</th>
                              <th scope="col">DELIVERY</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">${++i}</th>
                              <td>${finalData[0].PostOffice[i]}</td>
                            
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td colspan="2">Larry the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                      </table>
                        
                        `
                    }
             

       })


    }


})

//to hide the alert box

Zip.addEventListener("click",()=>{

    ShowError("none","none")
})