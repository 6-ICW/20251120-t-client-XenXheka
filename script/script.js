/**
 *
 */

const kinderen = document.querySelector("#kinderen");
const lijstGeschenken = document.querySelector("#geschenkenlijst");

// Waarom link je aan een li?
const liKind = document.querySelector("#liKind");
const geschenkenDropown = document.querySelector("#geschenken");

// maak gebruik van functions om zaken de schrijven die je herhaalt.

fetch("https://o-apiandclient-render.onrender.com/kinderen")
  .then((info) => info.json())
  .then((data) => {
    // vanaf hier kan ik dingen doen met de data die ik kreeg
    console.log(data);

    data.forEach((kind) => {
      //console.log(product.title);
      const option = document.createElement("option");
      // Hier had ik toch graag voornaam / familinaam gezien
      option.innerText = kind.voornaam;
      option.value = kind.id;
      kinderen.appendChild(option);
      console.log(option.value);
    });
  });

fetch("https://o-apiandclient-render.onrender.com/geschenken")
  .then((info) => info.json())
  // Het gebruik van de variabele data is hier niet goed.
  .then((data) => {
    // vanaf hier kan ik dingen doen met de data die ik kreeg
    console.log(data);

    data.forEach((geschenk) => {
      const option = document.createElement("option");
      option.innerText = geschenk.naam;
      option.value = geschenk.id;
      geschenkenDropown.appendChild(option);
    });

    // Waarom een addEvent in de fetch?
    // Dit staat hier niet echt goed.
    kinderen.addEventListener("change", () => {
      // Het gebruik van 'this' in een arrow function is niet aangewezen.
      // this --> een verwijzing naar 'window' en niet naar het object die
      // het aanroept.
      // mocht je gebruik gemaakt hebben van function() {} ipv ()=>{} dan
      // kan dit wel werken.

      let gekozenKind = this.value;
      let TeTonenGeschenk = "";

      // Wat je hier wil doen is door de array va geschenken lopen.
      // Als je kijkt naar wat je terugkrijgt van een fetch op 1 kind
      // dan merk je dat dit eigenlijk overbodig is.
      data.forEach((geschenk) => {
        if ((gekozenKind = geschenk.id)) {
          TeTonenGeschenk = geschenk.naam;
        }
        // li is een onderdeel van een ul ..
        // ik denk dat je hier wat in de war bent.
        liKind.append(TeTonenGeschenk);
        console.log(gekozenKind);
      });
      //  if (gekozenKind == geschenk.id){
      //       const geschenk = data.find((geschenk) => geschenk.id == geschenk.id)
      //      liKind.innerHTML  = geschenk.naam
      //      console.log(gekozenKind);

      //   }
    });
  });
