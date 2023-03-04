const name = document.getElementById("name");
const gender = document.getElementById("gender");
const age = document.getElementById("age");
const nac = document.getElementById("nac");
const email = document.getElementById("email");
const foto = document.getElementById("foto");
const loader = document.getElementById("loader");
const fetchActive = document.getElementById("fetch");
const infoContainer = document.getElementById("info")
const photoContainer = document.getElementById("photo")

const showLoader = ()=>{
  loader.classList.add("show")
  infoContainer.classList.add("hidden")
  photoContainer.classList.add("hidden")
}

const hiddenLoader = ()=>{
  loader.classList.remove("show")
  infoContainer.classList.remove("hidden")
  photoContainer.classList.remove("hidden")
}

fetchActive.addEventListener("click",()=> getUser())
const getUser = ()=>{
  showLoader()
  fetch("https://randomuser.me/api/?results=1")
  .then(response => response.json())
  .then(json => {
    exibir(json.results[0]);
    hiddenLoader()
  });
}

const exibir = (array)=>{
  for(let [key,value] of Object.entries(array)){
    console.log(key)
    console.log(value)
    switch (key){
      case "gender":
        switch (value){
          case "male":
            value = "Masculino"
            break
          case "female":
            value = "Feminino"
            break
          case undefined:
            break
        }
        gender.innerText = "";
        gender.innerText = `${value}`;
        break
      case "email":
        email.innerText = "";
        email.innerText = `${value}`;
        break
      case "name":
        let nameC;
        let nameT;
        let nameF;
        let nameL;
        for(let [name,pos] of Object.entries(value)){
          switch (name){
            case "title":
              nameT = pos;
              break
            case "first":
              nameF = pos;
              break
            case "last":
              nameL = pos;
              break
            case undefined:
              break
          }
        }
        nameC = `${nameT} ${nameF} ${nameL}`
        name.innerText = ``;
        name.innerText = `${nameC}`;
        break
      case "dob":
        age.innerText =``;
        age.innerText = `${value.age}`;
        break
      case "nat":
        nac.innerText =``;
        nac.innerText = `${value}`;
        break
      case "picture":
        let img = value.large;
        foto.src = `${img}`;
        break
      case undefined:
        break
    }
  }
}
getUser()


