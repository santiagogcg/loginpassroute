//Usado?: 
const express = require('express');
//--- Explicación:

// -------------------------------------------------------------------------------------


//Usado?: 
const middlewares = require('./middlewares');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: 
const routes = require('./routes');
//--- Explicación:

// -------------------------------------------------------------------------------------
//Usado?: 
dotenv.config();
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: 
const app = express();
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: 
const PORT = 4000;
//--- Explicación:

// -----------------------






//Usado?:
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?:
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: 

// --------------------







//Usado?:
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
    res.send(`
      <h1>Ruta del Perfil (Sesión activa)</h1>
      <form method="post" action="/logout">
        <button type="submit">Log Out</button>
      </form>
    `);
  });
  //--- Explicación: 
  
  // ----------------------------------



//Usado?:
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
    res.send(`
      <h1>Ruta del Perfil</h1>
      <form method="post" action="/logout">
        <button type="submit">Log Out</button>
      </form>
    `);
  });
  //--- Explicación: 
  
  // -----------------------------



//Usado?:
app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error al cerrar sesión:', err);
      }
      res.redirect('/');
    });
  });
  //--- Explicación: 
  
  // --------------------------------





  //Usado?:
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
  });
  //--- Explicación: 
  
  // -----------------------------