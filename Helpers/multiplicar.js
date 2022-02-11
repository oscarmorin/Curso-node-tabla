const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta) => {

    try {   
            let salida = '';
            let consola = '';

            for (let i=0; i<=hasta; i++){
    
                salida +=`${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`;
                consola +=`${base} x ${i} = ${base * i}\n`;
            }
                
            

            if(listar === true ){
                console.log('================='.blue);
                console.log('Tabla del: '.underline.red, base);
                console.log('================='.blue);
                console.log(salida);
            }

            fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);
        
             return `tabla-${base}.txt`

    } catch (error) {
        throw error;
    }
            
        
    

};

module.exports = {
    crearArchivo
}