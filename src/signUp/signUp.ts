<<<<<<< HEAD
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
  
  // let goToSecond = document.querySelector('.goToMyAccount') as HTMLDivElement;;
  // //const logo = document.querySelector('.logo');
  
  // goToSecond.addEventListener('click', (e) => {
  //   e.preventDefault();
    
  //   location.assign('../myAccount/myAccount.html');
  // });
  
  
  
  
  







  // enterName.addEventListener('change', (e) => {
  //   newUser.name = e.target.value;
  //   console.log(newUser.name);
  // });
  
  // enterPassword.addEventListener('change', (e) => {
  //   newUser.password = e.target.value;
  //   console.log(newUser.password);
  // });
  
  // enterPicture.addEventListener('change', (e) => {
  //   newUser.pic = e.target.value;
  //   console.log(newUser.pic);
  // });
  
  // insertBtn.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   console.log(newUser);
  //   putData(newUser, newIndex);
  //   showItems()
  
  //   enterName.value = '';
  //   enterPassword.value = '';
  //   enterPicture.value = '';
  // });
  
  // async function putData(newUser, newIndex) {
  //   const url = `https://js2-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/${newIndex}.json`;
  
  //   const init = {
  //     method: 'PUT',
  //     body: JSON.stringify(newUser),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   };
  
  //   const response = await fetch(url, init);
  //   const data = await response.json();
  //   showItems()
  // }
  
  // function putItemsIntoLocalstorage(items) {
  //   localStorage.setItem('personalInfo', JSON.stringify(items));
  
  //   // if (!localStorage.getItem('personalInfo')) {
  //   //   localStorage.setItem('personalInfo', '[]');
  //   // }
  // }
  
  // signUpBtn.addEventListener('click',(e)=>{
  //   e.preventDefault();
  //   onButtonClick();
  // })
  
  // function onButtonClick(event, productsIndex) {
  //   playAnime()
  //   console.log(productsIndex);
  //   console.log(productsIndex.id);
  
  //   const productId = productsIndex.id;
  //   addItemToCart(productId);
  // }
  
  // // Adding the product in the cart
  // function addItemToCart(productId) {
  //   let product = products.find(function (product) {
  //     return product.id == productId;
  //   });
  
  //   if (cart.length == 0) {
  //     cart.push(product);
  //   } else {
  //     let res = cart.find((element) => element.id == productId);
  
  //     if (res === undefined) {
  //       cart.push(product);
  //     }
  //   }
  //   console.log(cart);
  //   localStorage.setItem('cart', JSON.stringify(cart));
  
  //   const cartQuantity = document.querySelector('.cart-qty');
  //   cartQuantity.innerText = cart.length;
  // }
=======
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
  
  // let goToSecond = document.querySelector('.goToMyAccount') as HTMLDivElement;;
  // //const logo = document.querySelector('.logo');
  
  // goToSecond.addEventListener('click', (e) => {
  //   e.preventDefault();
    
  //   location.assign('../myAccount/myAccount.html');
  // });
  
  
  
  
  







  // enterName.addEventListener('change', (e) => {
  //   newUser.name = e.target.value;
  //   console.log(newUser.name);
  // });
  
  // enterPassword.addEventListener('change', (e) => {
  //   newUser.password = e.target.value;
  //   console.log(newUser.password);
  // });
  
  // enterPicture.addEventListener('change', (e) => {
  //   newUser.pic = e.target.value;
  //   console.log(newUser.pic);
  // });
  
  // insertBtn.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   console.log(newUser);
  //   putData(newUser, newIndex);
  //   showItems()
  
  //   enterName.value = '';
  //   enterPassword.value = '';
  //   enterPicture.value = '';
  // });
  
  // async function putData(newUser, newIndex) {
  //   const url = `https://js2-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/${newIndex}.json`;
  
  //   const init = {
  //     method: 'PUT',
  //     body: JSON.stringify(newUser),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   };
  
  //   const response = await fetch(url, init);
  //   const data = await response.json();
  //   showItems()
  // }
  
  // function putItemsIntoLocalstorage(items) {
  //   localStorage.setItem('personalInfo', JSON.stringify(items));
  
  //   // if (!localStorage.getItem('personalInfo')) {
  //   //   localStorage.setItem('personalInfo', '[]');
  //   // }
  // }
  
  // signUpBtn.addEventListener('click',(e)=>{
  //   e.preventDefault();
  //   onButtonClick();
  // })
  
  // function onButtonClick(event, productsIndex) {
  //   playAnime()
  //   console.log(productsIndex);
  //   console.log(productsIndex.id);
  
  //   const productId = productsIndex.id;
  //   addItemToCart(productId);
  // }
  
  // // Adding the product in the cart
  // function addItemToCart(productId) {
  //   let product = products.find(function (product) {
  //     return product.id == productId;
  //   });
  
  //   if (cart.length == 0) {
  //     cart.push(product);
  //   } else {
  //     let res = cart.find((element) => element.id == productId);
  
  //     if (res === undefined) {
  //       cart.push(product);
  //     }
  //   }
  //   console.log(cart);
  //   localStorage.setItem('cart', JSON.stringify(cart));
  
  //   const cartQuantity = document.querySelector('.cart-qty');
  //   cartQuantity.innerText = cart.length;
  // }
>>>>>>> master
  