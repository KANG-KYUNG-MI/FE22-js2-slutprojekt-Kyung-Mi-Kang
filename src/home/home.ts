export type messageType = {
  pic: string,
  username: string,
  createdAt: string,
  msg: string
}

const containers = document.querySelector('.containers')! as HTMLDivElement;
const container = document.querySelector('.container')! as HTMLDivElement;
const inputName = document.querySelector('#inputName')! as HTMLInputElement;
const submitBtn = document.querySelector('#btn')! as HTMLButtonElement;
console.log(container);


const personalInfo: string = localStorage.getItem('personalInfo') as string;
const item = document.querySelectorAll('.item')! as NodeListOf<HTMLButtonElement>


let data: any
async function showItems() {
  const url = `https://js2-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/users/.json`;

  const response = await fetch(url);
  const items = await response.json();
  data = items
  console.log(items);
  return items;
}
showItems()
  .then((items: object) => {
    console.log(items);
    displayItems(items);

    localStorage.setItem('allUserInfo', JSON.stringify(items));
  })
  .catch((error) => console.log(error));


function displayItems(items: object) {
  console.log(items);
  container.innerHTML = Object.values(items)
    .map((item, idx) => createHtmlString(item, idx))
    .join('');

  const btns = document.querySelectorAll('.goToPersnalInfo') as NodeListOf<HTMLButtonElement>

  btns.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(idx);

      console.log(Object.keys(data)[idx]);
      let address = Object.keys(data)[idx]
      console.log(e.target);
      let user = Object.values(data)[idx];

      window.location.href = `../account/index.html?id=${Object.keys(data)[idx]}`;

    })
  })

  function createHtmlString(individualUser: any, idx: number) {

    let parcedMyUser = JSON.parse(personalInfo)
    let parcedAllUsers = JSON.parse(localStorage.getItem('allUserInfo') as string)

    console.log(individualUser);
    let domObject: string;
    if (individualUser.pic == "Brown.jpg")
      domObject = `<img src="${new URL("../media/Brown.jpg", import.meta.url).toString()}" alt="pfp">`
    else if (individualUser.pic == "Choco.jpg")
      domObject = `<img src="${new URL("../media/Choco.jpg", import.meta.url).toString()}" alt="pfp">`
    else if (individualUser.pic == "ConMuzi.jpg")
      domObject = `<img src="${new URL("../media/ConMuzi.jpg", import.meta.url).toString()}" alt="pfp">`
    else if (individualUser.pic == "Selly.jpg")
      domObject = `<img src="${new URL("../media/Selly.jpg", import.meta.url).toString()}" alt="pfp">`


    return `
      <div class="item ${parcedMyUser.username === individualUser.username ? 'myUser' : ''}">
        ${domObject}
        <span class="item_name">${individualUser.username.split('@')[0]}</span>         
        <button username ="${individualUser.username}" pic=${individualUser.pic}  class='goToPersnalInfo'>Click to watch more</button>
      </div>
    `;
  }
}


//status updating---------------------------------------------

let post: messageType;
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const parcedUser: messageType = JSON.parse(localStorage.getItem('personalInfo') as string)
  console.log("user", parcedUser);

  post = {
    username: parcedUser.username,
    pic: parcedUser.pic,
    createdAt: new Date().toISOString(),
    msg: inputName.value
  }
  console.log("user", post);
  postItem(post, true);
})


async function postItem(post: messageType, reload: boolean): Promise<viod> {
  const url = `https://js2-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/posts/.json`;
  const init = {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UFT-8',
    },
  };

  try {
    const response = await fetch(url, init);
    const data = await response.json();
    console.log(post);


    let accountInfo = localStorage.setItem('accountlInfo', JSON.stringify(post))
    let accountPersonalInfo: object = JSON.parse(localStorage.getItem('accountInfo')) as object
    console.log(accountPersonalInfo);


    alert('You have successfully registered');
    if (reload) location.reload();
  } catch (error) {
    console.log(error);
  }
}

// //--------------------------------------------------------------
async function showStatus() {
  const url = `https://js2-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/posts/.json`;
  const response = await fetch(url);
  const items = await response.json();
  //data = items
  console.log(items);
  return items;
}

showStatus()
  .then((items: messageType) => {
    console.log(Object.values(items))
    const messageList = Object.values(items)
    for (let i: number = 0; i < messageList.length; i++) {

      let domObject: string;
      if (messageList[i].pic == "Brown.jpg")
        domObject = `${new URL("../media/Brown.jpg", import.meta.url).toString()}`
      else if (messageList[i].pic == "Choco.jpg")
        domObject = `${new URL("../media/Choco.jpg", import.meta.url).toString()}`
      else if (messageList[i].pic == "ConMuzi.jpg")
        domObject = `${new URL("../media/ConMuzi.jpg", import.meta.url).toString()}`
      else if (messageList[i].pic == "Selly.jpg")
        domObject = `${new URL("../media/Selly.jpg", import.meta.url).toString()}`

      const itemsStatus = document.querySelector('.itemsStatus');

      const imgStatus = document.createElement('img') as HTMLImageElement;
      imgStatus.src = domObject;
      const divStatus = document.createElement('div') as HTMLDivElement;
      divStatus.append(imgStatus);

      console.log(messageList[i].msg);

      (itemsStatus as HTMLDivElement).append(divStatus);
      const p = document.createElement('p');
      p.innerText = messageList[i].msg;
      divStatus.appendChild(p);

    }
  })
  .catch((error) => console.log(error));


