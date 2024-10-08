// let url2 = "https://dog.ceo/api/breeds/image/random";
// let url = "https://catfact.ninja/fact";
let uni = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");


btn.addEventListener("click", async() => {
    let country = document.querySelector("input").value;

    let colArr = await getColleges(country);
    console.log(colArr);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr){
        console.log(col.name);

    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
    }
}


async function getColleges(country) {
  try {
    let res = await axios.get(uni + country);
    return res.data;
  } catch(e) {
    console.log("There is an error -", e);
    return [];
  }
} 

// let button = document.querySelector("button");
// button.addEventListener("click",async ()=> {
//     let link = await getImage();
//     // console.log(result);
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
// });

// async function getImage() {
//   try {
//     let res = await axios.get(url2);
//     return res.data.message;
//   } catch(e) {
//     console.log("error -", e);
//     return "No image found";
//   }
// } 


// async function getFacts() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);
//   } catch(e) {
//     console.log("error -", e);
//   }

//   console.log("bye");
// } 

