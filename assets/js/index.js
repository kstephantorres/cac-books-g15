document.getElementById('formBuscar').addEventListener('submit',(e)=>{
    e.preventDefault()
    buscarLibros()
})
const  buscarLibros =()=> {

    const query = document.getElementById('inputBuscar').value;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&langRestrict=es`)
        .then(response => response.json())
        .then(data => {
            mostrarResultados(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const mostrarResultados= (data) => {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (data.items) {
        data.items.forEach(item => {
            const libro = item.volumeInfo;
            let imageUrl = '';
            if (libro.imageLinks) {
                imageUrl = libro.imageLinks.extraLarge || libro.imageLinks.large || libro.imageLinks.medium || libro.imageLinks.small || libro.imageLinks.thumbnail;
            }
            const libroElement = document.createElement('div');
            libroElement.className+="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
            libroElement.innerHTML=`
                <div class="card">
                    <div class="card__side card__side--front-1">
                        ${libro.imageLinks ? `<img src="${libro.imageLinks.thumbnail}" alt="Portada de ${libro.title}">` : 'No hay imagen disponible'}
                    </div>
                    <div class="card__side card__side--back card__side--back-1">
                        <div class="text">
                            <a href="detalle.html">
                                <h4>${libro.title}</h4>
                                <p class="titulo">
                                    ${libro.description ? libro.description : 'No disponible'}
                                </p>
                            </a>
                        </div>     
                    </div>
                </div> 
            `
            resultsDiv.appendChild(libroElement);
        });
    } else {
        resultsDiv.innerHTML = '<p>No se encontraron resultados</p>';
    }
}
/*
<div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div class="card">
                <div class="card__side card__side--front-1">
    
                  <img src="./assets/img/portada-libro-01.webp" alt="Libre como el viento" loading="lazy">
    
                </div>
                <div class="card__side card__side--back card__side--back-1">
                  <div class="text">
                    <a href="detalle.html">
                      <h4>«Libre como el viento»</h4>
                      <p class="titulo">
                        Lady Johanna McRae, hija de lady Megan y el laird Duncan McRae, es una joven intrépida que, junto
                        con su hermana Amanda, trae a su padre de cabeza. <br>
                        Si algo le gusta a Johanna es disfrutar de su libertad ayudando a quien puede y, en especial, retar
                        a todo aquel que se enfrente a ella.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
*/