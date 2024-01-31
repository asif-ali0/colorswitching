// alert('how r u')
// let elements = document.getElementsByClassName('container').childNodes
// elements.classList.add('box')
// console.log('elements')
// let asif = document.querySelector('#container').childNodes;
// alert(asif)
let list = [1,2,3]
let body = document.querySelector('body')


let box_1 = document.querySelector('.box_1')
let box_2 = document.querySelector('.box_2')
let box_3 = document.querySelector('.box_3')
let innerHtml = document.querySelectorAll('.box')
innerHtml.innerHTML = 'clicK oN mE'
box_1.innerHTML = 'Click on Me'
box_2.innerHTML = 'Click on Me'
box_3.innerHTML = 'Click on Me'


box_1.addEventListener('click',function(){
    // generateRandomHexColor()
    // generateRandomHexColor()
    let random = Math.floor(Math.random()*3)
    let data = list[random]
    let choose = `box_${data}`
    let find_color = window.getComputedStyle(box_1)
    let backgroundcolor = find_color.backgroundColor;

    let color = generateRandomHexColor()
    // let color_names = colornames[color]
    // alert(color_names)

    box_3.style.backgroundColor = color
    body.style.backgroundColor = backgroundcolor


})
box_2.addEventListener('click',function(){
    // box_2.style.backgroundColor = 'cyan'
    // let random = Math.floor(Math.random()*4);
    let random = Math.floor(Math.random()*3)
    let data = list[random]
    let choose = `box_${data}`
    let find_color = window.getComputedStyle(box_2)
    let backgroundcolor = find_color.backgroundColor;

    // box_1.style.backgroundColor = generateRandomHexColor()
    let color = generateRandomHexColor()
    box_1.style.backgroundColor = color;
    body.style.backgroundColor = backgroundcolor;



    // box_1.style.backgroundColor = generateRandomHexColor()

    
})
box_3.addEventListener('click',function(){
    // box_3.style.backgroundColor = 'pink'
    // let random = Math.floor(Math.random()*4);
    let random = Math.floor(Math.random()*3)
    let data = list[random]
    let choose = `box_${data}`
    let find_color = window.getComputedStyle(box_3)
    let backgroundcolor = find_color.backgroundColor;
    // box_2.style.backgroundColor = generateRandomHexColor()
    let color = generateRandomHexColor()
    box_2.style.backgroundColor = color
    body.style.backgroundColor = backgroundcolor;



    // box_2.style.backgroundColor = generateRandomHexColor()

    
})
function generateRandomHexColor() {
    // Generate random values for red, green, and blue components
    let red = Math.floor(Math.random() * 256); // Random value between 0 and 255
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    // Convert RGB values to hexadecimal and create a color string
    let randomColor = `rgb(${red}, ${green}, ${blue})`;

    return randomColor;
}

// Example usage:
let generatedHexColor = generateRandomHexColor();
console.log(generatedHexColor); // Output the generated color


