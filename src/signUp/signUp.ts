type userType={
  id: number,
  username: string,
  password: string,
  pic: string
}

async function showItems() {
   
    const url =`https://js2-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/users.json`
    const response = await fetch(url);
    const items = await response.json();
    console.log(items);
  
    return items;
  }

  showItems()
    .then((data) => {
      console.log(data);
      localStorage.setItem('allUserInfo', JSON.stringify(data));
      
    })
    .catch((error) => console.log(error));

const isDataExits: string = localStorage.getItem('allUserInfo') as string;
  
  const allInfo: object = JSON.parse(isDataExits);
 // console.log(allInfo);
  
  let  id:number = Object.values(allInfo).length;
  console.log(id);
  
  const form = document.getElementById('form') ! as HTMLFormElement;
  let enterPassword = document.getElementById('enterPassword')! as HTMLInputElement;
  let enterName = document.getElementById('enterName')! as HTMLInputElement;
  let enterPicture = document.getElementById('enterPicture')! as HTMLInputElement;
  
  let insertBtn = document.getElementById('insert')! as HTMLButtonElement;
  let signUpBtn = document.getElementById('ConfirmSignUp')! as HTMLButtonElement;
  
  let newUser: userType = {
    id: 0,
    username: '',
    password: '',
    pic: '',
  };
  
  newUser.pic = document.querySelectorAll('[name="pic"] option')[1].value;

  async function postItem(newUser: object) {
    const url = `https://js2-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/users.json`;
    const init = {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-type': 'application/json; charset=UFT-8',
      },
    };
  
    try {
      const response = await fetch(url, init);
      const data = await response.json();
      console.log(newUser);
  
      let setPersonalInfo = localStorage.setItem('personalInfo', JSON.stringify(newUser))

      let personalInfo: string  = JSON.parse(localStorage.getItem('personalInfo') as string);
      console.log(setPersonalInfo,personalInfo);
      alert('You have successfully registered');
  
    } catch (error) {
      console.log(error);
    }
  }
  
  
  enterName.addEventListener('change', (e) => {
    newUser.username = (e.target as HTMLInputElement).value;
    console.log(e.target);
    console.log(newUser); 
    console.log(newUser.username);
    
  });
  
  enterPassword.addEventListener('change', (e) => {
    newUser.password = (e.target as HTMLInputElement).value;
    console.log(newUser.password);
  });
  
  
  enterPicture.addEventListener('change', (e) => {
    newUser.pic = (e.target as HTMLSelectElement).value;
    console.log(newUser.pic);
  });
  
  insertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(enterPicture.value === '') return alert('Please insert picture');
    newUser.pic = enterPicture.value;

    newUser.id = id;
    postItem(newUser);
    showItems();
    
    setTimeout(function(){

      window.location.reload()
    }, 3000)
  
    enterPassword.value = '';
    enterName.value = '';
    enterPicture.value = '';

  });
  
  
  
  
  



