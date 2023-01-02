let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg");
let posts = document.getElementById("posts")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log('Button clicked');
    formValidation();
})

let formValidation = ()=>{
    if(input.value === ""){
    msg.innerHTML = "Post can not be blank" ;
    console.log("failure")
    }
    else{
    console.log("Success")
    msg.innerHTML = "";
    acceptData();
    }
}

let data = {

};

let acceptData = ()=>{
    data['text'] = input.value;
    console.log(data);
    createPost();
}


let createPost = ()=> {
    posts.innerHTML += `
    <div>
            <p>${data.text}</p>
            <span class="options">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-sharp fa-solid fa-trash"></i>
            </span>
         </div>
    ` ;
    input.value = '';
}