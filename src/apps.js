const scrollButton = $('#scrollbutton')
const navlist = $('#navlist')

function toggleButton (){
    navlist.toggle('show')

}

scrollButton.on('click', toggleButton)