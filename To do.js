//alustetaan muuttujia
const inputbox = document.getElementById("myInput");
const listcontainer = document.getElementById("lista")  
//funktio lisää napille
function addTask(){
const task = inputbox.value.trim();
//tekstikentän validointi
if (task === ''){
    alert("You must write something!")
return};

if (task.length > 20) {
    alert("The task must be less than 20 characters!");
    return;
  }
//lisätään inputin tieto localstorageen
localStorage.setItem("myInput", task);
//luodaan innerhtml avulla lista johon tehtävät sijoitetaan sekä deletenappi
const li = document.createElement("li");
li.innerHTML = `
<label>
<span>${task}</span>
</label>
<button class= "delete-btn">Delete</button>`;    
//lisätään li elementtiin inputin sisältö
listcontainer.appendChild(li);
inputbox.value = "";
//alustetaan deletenapin muuttuja
const deletenappi = li.querySelector(".delete-btn");
//lisätään napille kuuntelija joka varmistaa haluatko poistaa tehtävän ja sitten poistaa sen
deletenappi.addEventListener("click", function(){
    if(confirm("Haluatko poistaa tämän rivin?")){
        li.remove();
    }
});
};
//alustetaan muuttuja tehtävän tehdyksi merkitsemistä varten
var list = document.querySelector('ul');
//lisätään listaan kuuntelija joka merkitsee tehtävän "checked" klikatessa sitä
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI' || ev.target.closest('li')) {
    const li = ev.target.closest('li');
    li.classList.toggle('checked');
  }

}, false);

