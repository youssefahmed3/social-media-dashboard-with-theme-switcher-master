const darkButton = document.querySelector('#checkbox');


darkButton.addEventListener('click',() => {

    if (!document.body.classList.contains('lightmode')) {
        document.body.classList.add('lightmode');
        
    }
    else {
        document.body.classList.remove('lightmode');
        
    }

})