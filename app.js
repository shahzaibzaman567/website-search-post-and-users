let posts = []
let users = []

 fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json())
  .then(userpost =>{
    posts=userpost
    console.log(userpost)
    })
  .catch((error) => console.log(error));

 fetch('https://jsonplaceholder.typicode.com/users').
  then((res) => res.json())
  .then(userdata => {
    users=userdata
    console.log(userdata)
  })
  .catch((error) => console.log(error));




let form = document.querySelector("form")
let div1 = document.querySelector(".div1")
let div2 = document.querySelector(".div2")
let input = document.getElementById("input")
form.addEventListener("submit", (event) => {
  event.preventDefault()
    UId = parseInt(input.value.trim())
  if (isNaN(UId)) {
    div1.innerHTML = `<div class="card">   Not Found  <div>`;
    return;
  }

  const selecteduser = users.find((u) => u.id === UId);
  if (selecteduser) {
    div1.innerHTML = `<div class="card p-3">${selecteduser.name} <br> ${selecteduser.email}</div>`
  } else {
    div1.innerHTML = `<div class="card p-3">not found</div>`

  }
  div2.innerHTML = ""
})

let btn = document.querySelector("#p-btn")
btn.addEventListener("click",()=>{
  UId = parseInt(input.value.trim())

  const userPosts = posts.filter((p) => p.userId === UId);

  if (userPosts.length > 0) {
    div2.innerHTML = userPosts.map(p =>
        `<div class="card p-3">
        <h3>${p.title}</h3>
        <p>${p.body}</p>
      </div>`).join(" ");
  } else {
    div2.innerHTML = `<div class="card">Please enter a valid user ID</div>`;
  }
})



















