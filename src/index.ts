export type userType = {
    address: string,
    username: string,
    password: string,
    pic: string
}

const logInBtn = document.getElementById('logInBtn') as HTMLButtonElement;
const userNameInput = document.getElementById('UserName') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
let users: any | object = [];

const allUserInfo: string = localStorage.getItem('allUserInfo') as string;
console.log(allUserInfo);

const allUserInfoList: object = JSON.parse(allUserInfo) as object
console.log(allUserInfoList);

let userAddress: object


async function getData() {
    const url = 'https://js2-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/users.json'
    const response = await fetch(url);
    const items = await response.json();
    users = items
    return items
}


getData().then((items) => {
    console.log(items);

    let userAddress = Object.keys(items)
    console.log(userAddress);
    return userAddress;

})
    .catch((error) => {console.log(error)
       // alert('User not found')
    }
    );

console.log('kyung@gmail.com'.split('@')[0])

logInBtn.addEventListener('click', (e) => {
    let username = userNameInput.value;
    let password = passwordInput.value;
    e.preventDefault();
    getData();
    setLoginUser(users)
    if(!Object.values(users).find((user) => username === user.username && password === user.password))   {
        alert('User not found')
    }

})

function setLoginUser(users) {

    let username = userNameInput.value;
    let password = passwordInput.value;
    let userAddress = Object.keys(users)

    Object.values(users).forEach((user, index) => {
        if (username === user.username && password === user.password) {
            window.location.href = './home/home.html';
            let newUser: userType = {

                password: user.password,
                username: user.username,
                pic: user.pic,
                address: userAddress[index]
            }
            let setPersonalInfo = localStorage.setItem('personalInfo', JSON.stringify(newUser))
            let personalInfo: string = JSON.parse(localStorage.getItem('personalInfo') as string);
            console.log(personalInfo);
        } 
    }
  )
    } 