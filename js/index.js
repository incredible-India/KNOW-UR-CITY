let getALERT = document.getElementsByClassName('alert-danger')[0]; //this is alert box by default it is hide
let Zip = document.getElementsByClassName('pinCODE')[0]; //this is element of input box in which user will enter the zip code
let SearchBTN = document.getElementsByClassName('btn-warning')[0]; //search button

let colorARRAY = ['warning','danger','success','info','light','primary','secondary']

//function for the error box

function ShowError(message,styleType)
{
    
    getALERT.innerHTML = `${message}`;
getALERT.setAttribute('style',`display : ${styleType};`)


}



//hide the loader once image is loaded

function removeIT()
{
  document.getElementsByClassName('loading')[0].style.display = "none";
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
       return;
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
         
        // console.log(finalData);
            //first check zip is correct or not

            let i =0;

               
                document.getElementsByClassName('noOFCITY')[0].innerHTML = `<h1 style="text-align: center;" class="display-6"> ${finalData[0].Message} </h1>`
                document.getElementsByClassName('noOFCITY')[0].focus();
                document.getElementsByClassName('tableDATA')[0].innerHTML = ""
              
             
                let y = 0; //for the color

                    for(i in finalData[0].PostOffice)
                    {
                        document.getElementsByClassName('tableDATA')[0].innerHTML += `
                
                        <table class="table table-${colorARRAY[y]} table-striped" autofocus ">
                        <thead>
                            <tr>
                              <th scope="col">SI NO.</th>
                              <th scope="col">NAME</th>
                              <th scope="col">DISTRICT</th>
                              <th scope="col">STATE</th>
                              <th scope="col">REGION</th>
                              <th scope="col">BLOCK</th>
                              <th scope="col">CIRCLE</th>
                              <th scope="col">DELIVERY</th>
                              <th scope="col">DIVISION</th>
                              <th scope="col">BRANCH TYPE</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">${Number(i)+1 }</th>
                              <td>${finalData[0].PostOffice[i].Name}</td>
                              <td>${finalData[0].PostOffice[i].District}</td>
                              <td>${finalData[0].PostOffice[i].State}</td>
                              <td>${finalData[0].PostOffice[i].Region}</td>
                              <td>${finalData[0].PostOffice[i].Block}</td>
                              <td>${finalData[0].PostOffice[i].Circle}</td>
                              <td>${finalData[0].PostOffice[i].DeliveryStatus}</td>
                              <td>${finalData[0].PostOffice[i].Division}</td>
                              <td>${finalData[0].PostOffice[i].BranchType}</td>
                            </tr>
                      
                       
                          </tbody>
                      </table>

                        
                        `
                        y++;
                        if(y == 6)
                        {
                          y=0;
                        }
                    }
             

       })


    }


})

//to hide the alert box

Zip.addEventListener("click",()=>{

    ShowError("none","none")
})




