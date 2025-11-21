/**
 * 
 */

const kinderen = document.querySelector("#kinderen")
const lijstGeschenken = document.querySelector("#geschenkenlijst")
const liKind = document.querySelector("#liKind")
const geschenkenDropown = document.querySelector("#geschenken")

fetch("https://o-apiandclient-render.onrender.com/kinderen")
  .then((info) => info.json())
  .then((data) => {
    // vanaf hier kan ik dingen doen met de data die ik kreeg
    console.log(data);
    
    data.forEach((kind) => {
      //console.log(product.title);
      const option = document.createElement("option");
      option.innerText = kind.voornaam 
      option.value = kind.id 
      kinderen.appendChild(option);
      console.log(option.value);
    });
    
  });


  fetch("https://o-apiandclient-render.onrender.com/geschenken")
  .then((info) => info.json())
  .then((data) => {
    // vanaf hier kan ik dingen doen met de data die ik kreeg
    console.log(data);
    
    data.forEach((geschenk) => {
      
      const option = document.createElement("option");
      option.innerText = geschenk.naam 
      option.value = geschenk.id 
      geschenkenDropown.appendChild(option);
      
    });
    
     kinderen.addEventListener("change",()=>{
        let gekozenKind = this.value
        let TeTonenGeschenk = ""
        data.forEach((geschenk) => {
            if (gekozenKind = geschenk.id){
                TeTonenGeschenk = geschenk.naam
            }
        liKind.append(TeTonenGeschenk)
        console.log(gekozenKind);
        
            
        });
        //  if (gekozenKind == geschenk.id){
        //       const geschenk = data.find((geschenk) => geschenk.id == geschenk.id)
        //      liKind.innerHTML  = geschenk.naam
        //      console.log(gekozenKind);
             
             
        //   }
         
     })
    
  });
  