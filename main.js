const fortuneBtn = document.getElementById("fortuneButton");
const misfortuneBtn = document.getElementById("misfortuneButton");
const form = document.getElementById("form");
const formInput = document.getElementById("form-input");
const section = document.getElementById("section");

const getFortune = () => {
    axios.get("/api/fortune/").then((res) => {
            const data = res.data;
            alert(data);
    });
};

const getMisfortune =() => {
    axios.get("/api/misfortune/").then((res) => {
            const data = res.data;
            alert(data);
        });
};


const postMakefor = (e) => {
     e.preventDefault();
    const inputValue = formInput.value
    console.log(`form input ${inputValue}`)
    axios.post("/api/makefor/", {inputValue})
    .then((res) => { 
        section.innerHTML = ""
      res.data.forEach((element, index) => {
       let charCard = document.createElement("div");
       charCard.innerHTML = `<h3>${element}</h3><button
         id='${index}_button'>Delete</button>
        `;
        charCard.id = index
        section.appendChild(charCard);
        const button = document.getElementById(index);
        //console.log(button);
        button.addEventListener("click", () => {
            axios.delete(`/api/deleteMakefor/${index}`)
            .then((res) => {
              const element = document.getElementById(index);
              element.remove();
           })
        })
      })
    })
}
    


fortuneBtn.addEventListener("click", getFortune);
misfortuneBtn.addEventListener("click", getMisfortune);
form.addEventListener("submit", postMakefor);

