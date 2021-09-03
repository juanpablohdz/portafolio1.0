const grid = new Muuri('.grid', {

    layout: {

        rounding: false
    }



});

/*funcion  */
window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');

    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento) => {

        elemento.addEventListener('click', (evento) => {
            /*comportamiento determinado de la pagina */
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            evento.target.classList.add('activo');

            const categoria = evento.target.innerHTML.toLowerCase();
            /*filtrado por categoria ----->*/
            categoria === 'inicio' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);


        });
    });


    //agregar  listener
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach((elemento) => {



        elemento.addEventListener('click', () => {
            const ruta = elemento.getAttribute('src');
            const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

            overlay.classList.add('activo');
            document.querySelector('#overlay img').src = ruta;
            document.querySelector('#overlay .descripcion').innerHTML = descripcion;
        });
    });


    //event lisener boton cerrar
    document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
        overlay.classList.remove('activo');

    });

    //eventlistener del overlay
    overlay.addEventListener('click', (evento) => {

        //;

        evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';

    });



});
//BOTON DE NOCHE
const switchButton = document.getElementById('switch');
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active')
})