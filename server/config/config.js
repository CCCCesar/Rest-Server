//=========================================
//Puerto
//=========================================
process.env.PORT = process.env.PORT || 3000;


//=========================================
//Entorno
//=========================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//=========================================
//Base de Datos
//=========================================
let urlDB;
if(process.env.NODE_ENV === 'dev'){
    urlDB ='mongodb://localhost:27017/coffee'
}else{
    urlDB = process.env.MOMGO_URI;
}
process.env.URLDB = urlDB;
