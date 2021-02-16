let imageNumber = 10
let urlList;
let navigator = document.getElementById("navigator");
let imageBox = document.getElementById("imageBox");

async function generateUrl(){
    return await fetch("https://picsum.photos/v2/list?page=3&limit=10")
}

generateUrl().then((response)=>{
    response.json().then((list)=>{
        urlList = list
        console.log(urlList)
        makeNavigator();
        makeImage()
    })
})

function makeNavigator(){
    let output = ''
    for (let i = 0; i < imageNumber; i++) {
        output += `<a class="w-32 h-16 text-gray-700 bg-white flex justify-center items-center mx-1" href="#img-${i}"><img src="https://picsum.photos/id/${urlList[i].id}/1400/800" alt="" class="h-full w-full rounded"></a>`
    }
    navigator.innerHTML = output;
}

function makeImage(){
    let output = ''
    for (let i = 0; i < imageNumber; i++) {
        output += `<div class="snap-start w-full h-full flex items-center justify-center flex-shrink-0 bg-gray-100 px-10" id="img-${i}">
        <img src="https://picsum.photos/id/${urlList[i].id}/1400/800" alt="" class="rounded-xl h-full w-full">
      </div>`
    }
    imageBox.innerHTML = output
}