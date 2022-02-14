//----------------ENTREGA DEL PROYECTO FINAL---------------

//JQuery Evento Ready
$(document).ready(function() {
    console.log('El DON esta listo');
});

const URLGET = "http://127.0.0.1:5501/tunning.json"
//-------------polestar-------------
$("#polestar01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafo").append(`
                    <p>${dato.polep}</p>
                `)
            }
        }
    });
});
$("#preciopolestar").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafo").append(`
                    <p>${dato.pole} ($ ${dato.polepre}) </p>
                `)
            }
        }
    });
});

$("#limpiar").click(() => $("p").html("") )

//-------------BMW------------------
$("#bmw01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafobmw").append(`
                    <p>${dato.bmwp}</p>
                `)
            }
        }
    });
});
$("#preciobmw").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafobmw").append(`
                    <p>${dato.bmw} ($ ${dato.bmwpre}) </p>
                `)
            }
        }
    });
});
$("#limpiarbmw").click(() => $("p").html("") )

//---------------MITSUBISHI-----------------
$("#mit01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafomit").append(`
                    <p>${dato.mitp}</p>
                `)
            }
        }
    });
});
$("#preciomit").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafomit").append(`
                    <p>${dato.mit} ($ ${dato.mitpre}) </p>
                `)
            }
        }
    });
});
$("#limpiarmit").click(() => $("p").html("") )

//-----------------NISSAN--------------------
$("#nis01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafonis").append(`
                    <p>${dato.nisp}</p>
                `)
            }
        }
    });
});
$("#precionis").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafonis").append(`
                    <p>${dato.nis} ($ ${dato.nispre}) </p>
                `)
            }
        }
    });
});
$("#limpiarnis").click(() => $("p").html("") )

//----------------TOYOTA-------------------
$("#toy01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafotoy").append(`
                    <p>${dato.toyp}</p>
                `)
            }
        }
    });
});
$("#preciotoy").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafotoy").append(`
                    <p>${dato.toy} ($ ${dato.toypre}) </p>
                `)
            }
        }
    });
});
$("#limpiartoy").click(() => $("p").html("") )

//----------------TOYOTA 86-------------------
$("#ocho01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoocho").append(`
                    <p>${dato.ochop}</p>
                `)
            }
        }
    });
});
$("#precioocho").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoocho").append(`
                    <p>${dato.ocho} ($ ${dato.ochopre}) </p>
                `)
            }
        }
    });
});
$("#limpiarocho").click(() => $("p").html("") )

//----------------HYUNDAI VELOSTER-------------------
$("#veloster01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoveloster").append(`
                    <p>${dato.velosterp}</p>
                `)
            }
        }
    });
});
$("#precioveloster").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoveloster").append(`
                    <p>${dato.veloster} ($ ${dato.velosterpre}) </p>
                `)
            }
        }
    });
});
$("#limpiarveloster").click(() => $("p").html("") )

//----------------MAZDA RX7-------------------
$("#mazda01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafomazda").append(`
                    <p>${dato.mazdap}</p>
                `)
            }
        }
    });
});
$("#preciomazda").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafomazda").append(`
                    <p>${dato.mazda} ($ ${dato.mazdapre}) </p>
                `)
            }
        }
    });
});
$("#limpiarmazda").click(() => $("p").html("") )

//----------------MITSUBISHI ECLIPSE-------------------
$("#eclipse01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoeclipse").append(`
                    <p>${dato.eclipsep}</p>
                `)
            }
        }
    });
});
$("#precioeclipse").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafoeclipse").append(`
                    <p>${dato.eclipse} ($ ${dato.eclipsepre}) </p>
                `)
            }
        }
    });
});
$("#limpiareclipse").click(() => $("p").html("") )

//----------------VW SIROCCO-------------------
$("#sirocco01").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafosirocco").append(`
                    <p>${dato.siroccop}</p>
                `)
            }
        }
    });
});
$("#preciosirocco").click(() => {
    $.get(URLGET, function(respuesta, estado) {
        if( estado == "success") {
            let misDatos = respuesta
            for(const dato of misDatos) {
                $("#parrafosirocco").append(`
                    <p>${dato.sirocco} ($ ${dato.siroccopre}) </p>
                `)
            }
        }
    });
});
$("#limpiarsirocco").click(() => $("p").html("") )

//SALUDO

$("#titulo").fadeIn("slow", () => {
    $("#titulo").fadeOut(10000);
})


const carrito = []

const productos = [ { Auto: 1, marca: "Polestar", precio: 150000, img: "https://preview.redd.it/6v4ytcziv3w31.jpg?width=640&crop=smart&auto=webp&s=50dde962758f1fb43eb984ff334f73c6731de97d"},
{ Auto: 2, marca: "BMW", precio: 15000, img: "https://i.ytimg.com/vi/LuOSGvpd9bQ/sddefault.jpg#404_is_fine"},
{ Auto: 3, marca: "MITSUBISHI", precio: 15000, img: "https://assets.puzzlefactory.pl/puzzle/302/858/original.jpg"},
{ Auto: 4, marca: "NISSAN", precio: 30000, img: "https://w0.peakpx.com/wallpaper/658/301/HD-wallpaper-gtr-34-skyline-car-fast-and-furious-gtr-34-paul-walker.jpg"},
{ Auto: 5, marca: "Toyota", precio: 30000, img: "https://i.pinimg.com/originals/68/1b/54/681b5411369353221a1109fbaff9237b.jpg"},
{ Auto: 6, marca: "Toyota 86", precio: 20000, img: "https://www.autonocion.com/wp-content/uploads/2018/11/Toyota-86-Rocket-Bunny-11-930x523.jpg"},
{ Auto: 7, marca: "Hyundai", precio: 25000, img: "https://i.ytimg.com/vi/pmABzToZWco/maxresdefault.jpg"},
{ Auto: 8, marca: "Mazda", precio: 16000, img: "https://www.tuning-light.net/wp-content/uploads/2020/05/rx7004.jpg"},
{ Auto: 9, marca: "Mitsubishi Eclipse", precio: 15000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHhFVMNexJumPcVHtjh3Ubq26PMN3oUFk5g&usqp=CAU"},
{ Auto: 10, marca: "VW Scirocco", precio: 20000, img: "https://i.pinimg.com/originals/52/3e/e7/523ee71d63a9d0bc44dc0b3846254342.jpg"},
];

document.getElementById("polestar")
    .addEventListener("click", () => agregarElemento(1) )

document.getElementById("bmw")
    .addEventListener("click", () => agregarElemento(2) )

document.getElementById("evo")
    .addEventListener("click", () => agregarElemento(3) )

document.getElementById("nissan")
    .addEventListener("click", () => agregarElemento(4) )

document.getElementById("supra")
    .addEventListener("click", () => agregarElemento(5) )

document.getElementById("ocho")
    .addEventListener("click", () => agregarElemento(6) )

document.getElementById("veloster")
    .addEventListener("click", () => agregarElemento(7) )

document.getElementById("mazda")
    .addEventListener("click", () => agregarElemento(8) )

document.getElementById("eclipse")
    .addEventListener("click", () => agregarElemento(9) )

document.getElementById("scirocco")
    .addEventListener("click", () => agregarElemento(10) )

function agregarElemento(productoID) {
    let producto = productos.find ((p => p.Auto == productoID))
    carrito.push(producto);

    mostrarCarrito();
}

function mostrarCarrito() {
    let contenedor = document.getElementById("carrito");
    let precioTotal = 0

    contenedor.innerHTML = "";
    htmlstring = "<ul>";
    for (const id in carrito) {
        let producto = carrito[id]
        htmlstring += `<li class="lijs"> <img src="${producto.img}" class= "imgjs"> ${producto.marca}, ${producto.precio}
        <button id="carrito_${id}" class="eliminar"> Eliminar </button>
        </li>`
        precioTotal += producto.precio;
    }
    htmlstring +="</ul>";

    contenedor.innerHTML = htmlstring;

    let contenedorPrecio = document.getElementById("precio");
    contenedorPrecio.innerHTML = `<h1 class="h1js">TOTAL: $${precioTotal}</h1>`;

    loadEliminar();
}

function loadEliminar() {
    let botones  = document.getElementsByClassName("eliminar");
    for(const boton of botones) {
        boton.onclick = () => {
            let id = boton.getAttribute("id");
            idNumber = id.split("_")[1]
            carrito.splice(idNumber, 1)

            mostrarCarrito()
        }
    }
}
