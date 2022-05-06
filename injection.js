/*const anuncio = document.getElementById(".EiQDe");
anuncio.remove();*/

function removeElementsByClass(className) {
    const elements = document.getElementsByClassName('.EiQDe');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

