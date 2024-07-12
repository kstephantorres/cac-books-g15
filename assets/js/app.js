
const forms = document.querySelectorAll('.needs-validation')


Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
})

document.getElementById('nuevo-libro')?.addEventListener('submit', function (event) {
    if (document.getElementById('nuevo-libro').checkValidity()) {

        event.preventDefault()
        event.stopPropagation()

        var oMyBlob = new Blob(document.getElementById('imagen'), { type: "image/png, image/jpeg" })

        let data = {
            titulo: document.getElementById('titulo').value,
            autor: document.getElementById('autor').value,
            genero: document.getElementById('genero').value,
            editorial: document.getElementById('editorial').value,
            imagen: document.getElementById('imagen'),
            descripcion: document.getElementById('descripcion').value,
        }
        console.log(oMyBlob);
        console.log(JSON.stringify(data));

        fetch('http://localhost:8080/books/libros', {
            method: "POST",

            body: JSON.stringify(data),


        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Formulario enviado exitosamente');
                window.location.href = 'index.html';

            })
            .catch((error) => {
                console.table('Error:', error);
                console.error('Hubo un error al enviar el formulario');
            });
    };

});
// fetch('https://books-api-production.up.railway.app/api/books')
//     .then(response => response.json())
//     .then(data => {

//         let container = document.getElementById("proximamente");

//         data.forEach(element => {
//             container.appendChild(generarHTML(element.titulo, element.imagen));
//         });

//         const loading = document.getElementById("loader");
//         loading.classList.add("d-none");
//     });


function generarHTML(titulo, imagen) {

    let el = document.createElement("div");
    el.classList.add("col-12", "col-md-6", "col-lg-4", "d-flex", "justify-content-center");

    let div = document.createElement("div");
    div.classList.add("card_prox");

    let h2 = document.createElement("h2");
    h2.classList.add("text-center");
    h2.textContent = titulo;

    let div2 = document.createElement("div");
    div2.classList.add("card_prox__side", "card_prox__side--front-1");

    let img = document.createElement("img");
    img.src = imagen;
    img.alt = titulo;
    img.loader = "lazy";


    div2.append(img);
    div.append(div2);
    div.append(h2);

    el.append(div);

    return el;

}

document.getElementById('volver').addEventListener('click', function () {
    window.location.href = 'index.html';
})