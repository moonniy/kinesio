var riot = require('riot');

var hero = require('./components/hero.tag');
var navbar = require('./components/navbar.tag');
var contact = require("./components/contact.tag");
var info = require('./components/info.tag');
var items = require('./components/items.tag');
var footer = require('./components/footer.tag');

riot.mount('navbar', { 
    items: [
        {title: "Home", url: "#", class: "active"}, 
        {title: "Profile", url: "#"}, 
        {title: "Contact", url: "#"}]
    });

riot.mount('contact', { 
    title: "Contacto", 
    name: "LTF. Manuel Gordian", 
    tel: "(222)2710340", 
    phone: "2221581669" });
    
riot.mount('hero', {
    title:"Short description of Product", 
    description:"Chocolate cake fruitcake sweet gingerbread."
});
        

    
riot.mount('footer');

riot.mount('info', { 
    title: "¿Qué es?", 
    description: "La fisioterapia es una disciplina de la salud que consiste en curar, prevenir, tratar enfermedades y síntomas, tanto agudas como crónicas, a través del ejercicio terapéutico, técnicas de masaje y otros elementos. Se puede intervenir en procesos patológicos dentro de especialidades médicas como alternativas de prevención y curación.La principal herramienta empleada en esta disciplina es la mano, y alguna de las tareas que se realizan son los masajes, estiramientos y otros ejercicios físicos que tienen el propósito de corregir la postura, mejorar el control motor, etc. Aunque la fisioterapia también confía en otros elementos y tecnología para el óptimo estado general de la salud."
});


riot.mount('items', { 
    title: "Algunas de las técnicas terapéuticas que se realizan son: ",
      items: [
        {
            title: "Masoterapia", 
            description: "Terapia basada en la aplicación de las manos por medio de técnicas de rehabilitación, digitopuntura o digitopresión, masaje profundo, manipulaciones movilizaciones articulares, estiramientos y tracciones. Se deberá evitar su aplicación en pacientes con fracturas, artritis reumatoide, osteoporosis, entre otras.", 
            thumb: "https://s-media-cache-ak0.pinimg.com/736x/61/22/cb/6122cb371a319afa82c5d4e8077ebbdc.jpg"
            
        },
        {
            title: "Electroterapia", 
            description: "Es la aplicación de la electricidad mediante electrodos, y cabezales,  devera evitrse sus aplicacion en pacientes que presenten infecciones o inflamaciones de la piel, cardiopatías y en mujeres embarazadas.",
            thumb: "https://s-media-cache-ak0.pinimg.com/736x/61/22/cb/6122cb371a319afa82c5d4e8077ebbdc.jpg"
        },
        {
            title: "Termoterapia", 
            description: "En la aplicación de termoterapia se debe un calor intenso, pero siempre agradable, y efecto relajante que  se mantiene durante toda la aplicación, que generalmente varia entre 10-30 minutos, aunque esto depende de la técnica que se utilice. Se aplica por ejemplo en las cervicales o la espalda. ", 
            thumb: "https://s-media-cache-ak0.pinimg.com/736x/61/22/cb/6122cb371a319afa82c5d4e8077ebbdc.jpg"
        },
        {
            title: "Crioterapia", 
            description: "Basada en la aplicación del frio sobre el organismo. Esta técnica  se aplica de 10 a 15 minutos, no se debe usar como medida terapéutica en pacientes con enfermedades cardíacas y problemas vasculares, diabetes, alteraciones sensoriales, síndrome de Raynaud, urticaria, alergia o hipersensibilidad al frio y enfermedades renales o viscerales.", 
            thumb: "https://s-media-cache-ak0.pinimg.com/736x/61/22/cb/6122cb371a319afa82c5d4e8077ebbdc.jpg"
        },
        {
            title: "Ultrasonoterapia", 
            description: "Terapia a través de sonidos  “ondas mecánicas”, se utiliza como tratamiento de dolores profundos en cuello o espalda, lesiones de tendones y ligamentos,  espasmos o contracturas musculares, los problemas articulares y enfermedades relacionadas con la columna vertebral, aumenta el metabolismo, disminuye dolor relaja y ayuda a la cicatrización. ", 
            thumb: "https://s-media-cache-ak0.pinimg.com/736x/61/22/cb/6122cb371a319afa82c5d4e8077ebbdc.jpg"
        },
        {
            title: "Hidroterapia", 
            description: "Es la utilización terapéutica del agua y se aplica en diversos escenarios como  balnearios, saunas, piscinas termales, duchas, chorros de agua y tinas de remolino con características específicas. Sirve para los tratamientos de varias enfermedades, ayuda al equilibrio eliminando la gravedad en el caso de las piscinas y fortalece la musculatura, debido a que el agua es mas pesada que el aire, ayuda a reducir lesiones y trastornos, dismunuye el estrés y la ansiedad, estimula el sistema inmunitario, produce alivio muscular en contracturas, lumbalgias  y tendinitis. ", 
            thumb: "https://s-media-cache-ak0.pinimg.com/736x/61/22/cb/6122cb371a319afa82c5d4e8077ebbdc.jpg"
        }]
      });