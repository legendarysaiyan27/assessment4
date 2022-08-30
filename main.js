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
            const data = res.date;
            alert(data);
        });
};

const postMakefor = (e) => {
    e.preventDefault();
    const inputValue = formInput.value;
    axios.post("/api/makefor/", {inputValue}).then((res) => {
        res.data.forEach((element, index) => {
        let charCard = document.createElement("div");
        charCard.innerHTML = `<h3>${res.data}</h3>
        <button id=${index}>Delete</button>
        `;
        });
        section.appendChild(charCard);
    });
};


fortuneBtn.addEventListener("click", getFortune);
misfortuneBtn.addEventListener("click", getMisfortune);
form.addEventListener("submit", postMakefor)
