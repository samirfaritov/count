const box = document.querySelector('.box')
const box2 = document.querySelector('.box2')
const count = document.querySelector('.count')
const plyus = document.querySelector('.plyus')
const minus = document.querySelector('.minus')
const count2 = document.querySelector('.count2')
const plyus2 = document.querySelector('.plyus2')
const minus2 = document.querySelector('.minus2')
const count3 = document.querySelector('.count3')
const plyus3 = document.querySelector('.plyus3')
const minus3 = document.querySelector('.minus3')
const count4 = document.querySelector('.count4')
const plyus4 = document.querySelector('.plyus4')
const minus4 = document.querySelector('.minus4')
const count11 = document.querySelectorAll('.count11')

for (let i = 0; i < count11.length; i++) {
    box2.addEventListener('click', () => {
        count11[i].innerHTML++
    })
    box.addEventListener('click', () => {
        count11[i].innerHTML--
        if (count11[i].innerHTML < 0) {
            count11[i].innerHTML = '0'
        } 
    })
}

plyus.addEventListener('click', () => {
    count.innerHTML++
})
minus.addEventListener('click', () => {
    count.innerHTML--
    if (count.innerHTML < 0) {
        count.innerHTML = '0'
    } 
})
plyus2.addEventListener('click', () => {
    count2.innerHTML++
})
minus2.addEventListener('click', () => {
    count2.innerHTML--
    if (count2.innerHTML < 0) {
        count2.innerHTML = '0'
    } 
})
plyus3.addEventListener('click', () => {
    count3.innerHTML++
})
minus3.addEventListener('click', () => {
    count3.innerHTML--
    if (count3.innerHTML < 0) {
        count3.innerHTML = '0'
    } 
})
plyus4.addEventListener('click', () => {
    count4.innerHTML++
})
minus4.addEventListener('click', () => {
    count4.innerHTML--
    if (count4.innerHTML < 0) {
        count4.innerHTML = '0'
    } 
})