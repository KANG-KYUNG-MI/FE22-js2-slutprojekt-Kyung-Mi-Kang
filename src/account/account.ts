import { messageType } from "../home/home";
import { userType } from "./index";

const allUserLS: string = localStorage.getItem('allUserInfo') as string
const idParams = new URLSearchParams(location.search)
console.log(allUserLS);

const isDataExits: string = localStorage.getItem('allUserInfo') as string
const allInfo: object = JSON.parse(isDataExits)
console.log(allInfo);

const newID: number = Object.values(allInfo).length
console.log(newID);

const address: any = Object.keys(allInfo);
console.log(address);

const addressInfo: any = address[newID - 1];
console.log(addressInfo);

let personalInfoLS: string = localStorage.getItem('accountInfo') as string;
let personalInfo: object = JSON.parse(personalInfoLS);
console.log(personalInfo);

const myPicContainer = document.getElementById('myPicContainer') as HTMLDivElement

const personalInfoContainer = document.getElementById('personalInfoContainer') as HTMLDivElement;
const container = document.getElementById('container') as HTMLDivElement;
const msgContainer = document.querySelector('.msg-container') as HTMLDivElement;
let userProfileInfo: userType
let posts

// displayUserInfo(personalInfo)
 displayUserInfo(allInfo)



function getPosts() {
  const url = `https://js2-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/posts.json`;

  fetch(url).then((response) => response.json()).then((data) => {
    console.warn(data)
    createHtmlString01(Object.values(data))
  })
}


 async function displayUserInfo(items: object): void {
  let id: string
  for (const value of idParams.values()) {
    console.log(value)
    id = value
  }

  async function getUserInfo() {
    const url = `https://js2-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`;

    const response = await fetch(url);
    // const items: Promise<userType> = await response.json();
    await response.json().then((items: userType) => {
      userProfileInfo = items;   // 
      container.innerHTML = createHtmlString(items)
    }); //good because its direcly after
    // userProfileInfo = items as userType;

  }

  await getUserInfo()
  getPosts()

  //<img src="${item.pic}" alt="", class="item_img" />
  // <p class="item_name">ID: ${item.id}</p>   
  //<p class="item_name">Password: ${item.password}</p>    

}


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
}

function createHtmlString01(items: Object) {
  // items.filter((item: any) => {
  //   //console.log(userProfileInfo.username)
  //   console.log(item)
  //   if (item.username === userProfileInfo.username) {
  //     let el = `<div> 
  //         <p class="item_name">MSG: ${item.msg}</p>   
  //       </div>`;
  //     msgContainer.innerHTML += el


  //   } else {
  //     let el = `<div> 
  //         <p class="item_name">MSG: </p>   
  //       </div>`;
  //     msgContainer.innerHTML += el

  //   }
  // })

  items.forEach( (item:messageType )=> {
    //console.log(userProfileInfo.username)
    console.log(item,userProfileInfo)
    if (item.username == userProfileInfo.username) {
      let el = `<div> 
          <p class="item_name">MSG: ${item.msg}</p>   
        </div>`;
      msgContainer.innerHTML += el
    } 
    //else {
    //   let el = `<div> 
    //       <p class="item_name">MSG: </p>   
    //     </div>`;
    //   msgContainer.innerHTML += el

    // }
  })
}

