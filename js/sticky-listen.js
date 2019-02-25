var nav = document.getElementsByTagName('nav')[0]
var sticky = false

function checkStickiness() {
    sticky = nav.getBoundingClientRect().y == 0
    if (sticky) {
        nav.classList.add('stuck')
    } else {
        nav.classList.remove('stuck')
    }
}

document.onload = function() {
    checkStickiness()
}

document.body.onscroll = function() {
    checkStickiness()
}