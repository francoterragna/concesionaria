let autos = require("./autos");
let compradores = require("./compradores");

let concesionaria = {
   autos: autos,
 
   buscarAuto: function(patente){
       let car = autos.filter(function(auto){
           if ( patente == auto.patente){
            return auto;
           }
           else{
               return null;
           }
        })
        return car;
    },

   venderAuto: function (patente){
        let vendidos = [];
            this.buscarAuto(patente).filter(function(auto){
                if (auto.patente == patente){
                    auto.vendido = true;
                    vendidos.push(auto);
            }
   })
            return vendidos;
},
    autosParaLaVenta: function (){
        let disponibles = [];
        autos.filter(function(auto){
            if (auto.vendido == false){
                disponibles.push(auto);
            };
            
});
        return disponibles;
    },
    autosNuevos: function (){
        let nuevos = [];
        this.autosParaLaVenta().filter(function(auto){
            if (auto.km < 100){
                nuevos.push(auto);
            };
        
        });
        console.log(nuevos);
    },
    listaDeVentas: function(){
        let listaDeGanancia = [];
        this.autos.filter(function(auto){
            if (auto.vendido == true){
                listaDeGanancia.push(auto.precio);
            }
        });
            return listaDeGanancia;
    },
    totalDeVentas: function(){
        let total = 0;
        if (this.listaDeVentas().length > 0){
        let suma = this.listaDeVentas().reduce(function(acum,num){
            total = acum + num;
            return total;
        });
        return suma;
    }
    else {
        return total;
    }
    },
    puedeComprar: function (auto, persona){
        if (auto.precio <= persona.capacidadDePagoTotal && auto.precio/auto.cuotas < persona.capacidadDePagoEnCuotas ){
            return true;
        }
        else{
            return false
        }
    },
    autosQuePuedeComprar: function(persona){
        let enVenta = this.autosParaLaVenta();
        let autosAccesibles = [];   
        enVenta.filter(function(auto){
            if (concesionaria.puedeComprar(auto, persona) == true){
                autosAccesibles.push(auto);
            };
        });
        return autosAccesibles;
    }
};
 
console.log(concesionaria.buscarAuto('APL123'));


//let accion = process.argv[2];
//let patente = process.argv[3];
//switch (accion){
//    case "buscar auto":
//        console.log(concesionaria.buscarAuto(patente));
//        break;
//    case "vender auto":
//        concesionaria.venderAuto(patente);
//        break;
//    case "autos para la venta":
//        console.log(concesionaria.autosParaLaVenta());
//    case "autos":
//        console.log(concesionaria.autos);
//        break;
//    case "autos nuevos": 
//        console.log(concesionaria.autosNuevos());
//};