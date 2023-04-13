
let personalInfoLS: string = localStorage.getItem('personalInfo') as string;
let personalInfo: object = JSON.parse(personalInfoLS);
console.log(personalInfo);

let myPicture: string = personalInfo.pic;
let personalInfoAddress: string = personalInfo.address as string;

const myPicContainer = document.getElementById('myPicContainer') as HTMLDivElement
const personalInfoContainer = document.getElementById('personalInfoContainer') as HTMLDivElement;
const container = document.getElementById('container') as HTMLDivElement;

displayItems(personalInfo)
function displayItems(items: object): any {

  container.innerHTML = createHtmlString(items)

  function createHtmlString(item: any) {
    let domObject: string;
    if (item.pic == "Brown.jpg")
      domObject = `<img src="${new URL("../media/Brown.jpg", import.meta.url).toString()}" alt="pfp">`
    else if (item.pic == "Choco.jpg")
      domObject = `<img src="${new URL("../media/Choco.jpg", import.meta.url).toString()}" alt="pfp">`
    else if (item.pic == "ConMuzi.jpg")
    domObject = `<img src="${new URL("../media/ConMuzi.jpg", import.meta.url).toString()}" alt="pfp">` 
      else 
      domObject = `<img src="${new URL("../media/Selly.jpg", import.meta.url).toString()}" alt="pfp">`

    return domObject + `
    <div class="item"> 
      
        <p class="item_name">Name: ${item.username.split('@')[0]}</p>     
    </div>
        `;
    //<img src="${item.pic}" alt="", class="item_img" />
   // <p class="item_id">ID: ${item.id}</p>   
   //<p class="item_password">Password: ${item.password}</p>    
  }
}

const deleteBtn = document.getElementById('deleteBtn') as HTMLButtonElement

async function deleteData(Address:string) {
  const response = await fetch(
    `https://js2-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/users/${Address}.json`,
    {
      method: 'DELETE',
    }
  );

  return response;
}

deleteBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(personalInfoAddress);
  deleteData(personalInfoAddress);
  localStorage.clear();
  displayItems1()
deleteBtn.style.display = "none";
  container.innerHTML="";

});


function displayItems1(){
const img = document.createElement('img') as HTMLImageElement;
const imgUrl = new URL(`../media/Bye.png`, import.meta.url);
img.src = imgUrl.toString()
myPicContainer.appendChild(img);
}

const password = document.getElementById('password');
const userName = document.getElementById('name');
const pic = document.getElementById('pic');
const updateBtn = document.getElementById('updateBtn');

let newName;
userName.addEventListener('change', (e) => {
  e.preventDefault();
  newName = e.target.value;
});

let newPassword;
password.addEventListener('change', (e) => {
  e.preventDefault();
  newPassword = e.target.value;
  console.log(newPassword);
});

let newPic = document.querySelectorAll('[name="pic"] option')[1].value;
pic.addEventListener('change', (e) => {
  e.preventDefault();
  newPic = e.target.value;
  
});

updateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  patchName(newName, newPassword, newPic);

  userName.value = '';
  password.value = '';
  pic.value = '';


});


async function patchName(newName, newPassword, newPic) {

const url = `https://js2-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/users/${personalInfoAddress}.json`;

  const init = {
    method: 'PATCH',
    body: JSON.stringify({username: newName, password: newPassword, pic: newPic }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  // const response = await fetch(url, init);
  // const id = await response.json();
  // console.log(id);

  try {
    const response = await fetch(url, init);
    const data = await response.json();
    console.log(data);
    localStorage.setItem('personalInfo', JSON.stringify(data))

    alert('You have successfully registered');
    window.location.reload()
    newPic = data.newPic;


  } catch (error) {
    console.log(error);
  }
}
