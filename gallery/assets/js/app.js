let imageNumber = parseInt(innerWidth/120)-3
let urlList = generateUrl()
let navigator = document.getElementById("navigator");
let imageBox = document.getElementById("imageBox");
makeNavigator();
makeImage()

function generateUrl(){
    let urlList = []
    for (let i = 0; i < imageNumber; i++) {
        urlList.push(`https://picsum.photos/id/${Math.floor(Math.random() * (1083 - 0) ) + 0}/1400/800`);
    }
    return urlList
}

function makeNavigator(){
    let output = ''
    for (let i = 0; i < urlList.length; i++) {
        output += `<a class="w-32 h-16 text-gray-700 bg-white flex justify-center items-center mx-1" href="#img-${i}"><img src="${urlList[i]}" alt="" class="h-full w-full rounded"></a>`
    }
    navigator.innerHTML = output;
}

function makeImage(){
    let output = ''
    for (let i = 0; i < urlList.length; i++) {
        output += `<div class="snap-start w-full h-full flex items-center justify-center flex-shrink-0 bg-gray-100 px-10" id="img-${i}">
        <img src="${urlList[i]}" alt="" class="rounded-xl h-full w-full">
      </div>`
    }
    imageBox.innerHTML = output
}