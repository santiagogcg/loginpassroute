
//Usado?: 
const session = require('express-session');
//--- Explicación:

// ----------------------


//Usado?: 
const bodyParser = require('body-parser');
//--- Explicación:

// -------------------------


//Usado?: 
const dotenv = require('dotenv');
//--- Explicación:

// ------------------------






//Usado?:
const validarPalabraMiddleware = (req, res, next) => {
    const palabraCorrecta = process.env.PALABRA_SECRETA || '';
  
    if (req.body.palabra === palabraCorrecta) {
      req.session.palabraSecreta = req.body.palabra;
      next();
    } else {
      res.redirect('/?error=1');
    }
  };
  //--- Explicación: 
  
  
  // -------------------------------------------------------------------------------------

  
  const verificarSesionMiddleware = (req, res, next) => {
    if (req.session.palabraSecreta) {
      next();
    } else {
      res.redirect('/?error=2');
    }
  };
  //--- Explicación: 
  
  // --------------------------------

  const setupAPP = (app) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session({
      secret: 'secretoSuperSecreto',
      resave: false,
      saveUninitialized: true,
    }));
  };
  




  //Usado?:
module.exports = {
    validarPalabraMiddleware,
    verificarSesionMiddleware,
    setupAPP,
  };
  //--- Explicación:
  
  // -------------------------------------------------------------------------------------
  