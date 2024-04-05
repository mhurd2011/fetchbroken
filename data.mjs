// Main File for Classes and Functions and vars
let body = document.querySelector(".dashboard");

class Employee {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

export default class DataHandler {
  static getName(user) {
    console.log(`Good Evening Welcome to TechBiz. My name is ${user.name}`);
  }
  
  static getEmail(user) {
    console.log(`At TechBiz my Official email is ${user.name} ${user.email} `);
  }
  
  static getPhone(user) {
    console.log(`I can be Contacted at ${user.phone}`);
  }
  
  static postUser(user) {
    let empContainer = document.createElement('div')
    empContainer.setAttribute('class', 'container')
    // -------parentContainer
    let nameHolder = document.createElement('div')
    nameHolder.setAttribute('class',"namer")
    nameHolder.innerHTML = user.name
    // email
    let emailHolder = document.createElement('div')
    emailHolder.setAttribute('class',"emailer")
    emailHolder.innerHTML = user.email
    // phone
    let phoneHolder = document.createElement('div')
    phoneHolder.setAttribute('class',"caller")
    phoneHolder.innerHTML = user.phone
    empContainer.append(nameHolder)
    empContainer.append(emailHolder)
    empContainer.append(phoneHolder)
    body.append(empContainer)
    console.log(user)
  }

  static async fetchMe() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        json.forEach((element) => {
          let user = new Employee(element.name, element.email, element.phone);      
          console.log(user)
          this.postUser(user)
        });
      });
  }

  static async getPhotos() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        let body = document.querySelector('body')
        console.log(json[0].thumbnailUrl)
        let image = document.createElement('img')
        image.setAttribute('src', json[0].thumbnailUrl)
        body.append(image)
      });
  }

  static async grabSprints() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        json.forEach((element,index) => {
          let sprinna = document.querySelector(".sprintContainer");
          let newTodo = document.createElement("div");
          newTodo.setAttribute("class", "todo");
          newTodo.innerHTML = `${index + 1}: ${element.title}`;
          sprinna.append(newTodo);
        });
      });
  }
}
//------------