const url1 = 'http://www.google.com.co/search?hl=es&q=';
const searchedTerm = document.querySelector('#search');
const url2 = '&btnG=Buscar&meta=';

function search() {
    window.location.href = url1+searchedTerm.value+url2;

}

function mesagge() {
    alert ('Este no lo programe. Haz click en el otro botón');
}