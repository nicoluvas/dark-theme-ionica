/*const pathName = window.location.pathname;
if (pathName.startsWith('/ionica-platform-fe')) {
    const anuncio = document.getElementsByClassName('sc-licaXj')[0];
    anuncio.parentNode.removeChild(anuncio);
}*/

const anuncio = '.sc-licaXj.gZxcXm';
console.log(anuncio);
document.querySelectorAll(anuncio).forEach((element) => element.remove());
