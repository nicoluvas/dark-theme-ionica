/*const anuncio = document.getElementById(".EiQDe");
anuncio.remove();*/

const pathName = window.location.pathname;
if (pathName.startsWith('/ionica-platform-fe')) {
    const anuncio = document.getElementsByClassName('sc-DJfgX')[0];
    anuncio.parentNode.removeChild(anuncio);
}


