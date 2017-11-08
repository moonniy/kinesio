var riot = require('riot');

var hero = require('./components/hero.tag');
var navbar = require('./components/navbar.tag');
var contact = require("./components/contact.tag");
var info = require('./components/info.tag');
var items = require('./components/items.tag');
var footer = require('./components/footer.tag');

riot.mount('navbar', { 
    items: [
        {title: "Inicio", url: "#inicio", class: "active"}, 
        {title: "¿Qué es?", url: "#about"}, 
	{title: "Técnicas terapéuticas", url:"#items"},
        {title: "Contacto", url: "#contact"}]
    });

riot.mount('contact', { 
    title: "Contacto", 
    name: "LTF. Manuel Gordian Sánchez", 
    tel: "(222)2710340", 
    phone: "2221581669",
    direccion: "Calle 4 poniente 705, San Miguel, 72990, Amozoc de Mota, Puebla.",
    horario1: "Lunes a Viernes 10:00 a.m. a 18:00 p.m.",
    horario2: "Sabados 10:00 a.m. a 14:00 p.m."});
    
riot.mount('hero', {
    title:"Fisiobalance", 
    description:"Terapia física y rehabilitación"
});
        

    
riot.mount('footer');

riot.mount('info', { 
    title: "¿Qué es?", 
    description: "La fisioterapia es una disciplina de la salud que previene, cura y trata enfermedades así como sus síntomas, a través del ejercicio terapéutico. Algunas tareas que se realizan son los masajes, estiramientos y ejercicios físicos, también se utilizan otros agentes físicos con el uso de la tecnología."
});


riot.mount('items', { 
    title: "Técnicas terapéuticas",
      items: [
        {
            title: "Masoterapia", 
            description: "Terapia basada en la aplicación de las manos por medio de técnicas de rehabilitación, digitopuntura o digitopresión, masaje profundo, manipulaciones movilizaciones articulares, estiramientos y tracciones. Se deberá evitar su aplicación en pacientes con fracturas, artritis reumatoide, osteoporosis, entre otras.", 
            thumb: "static/img/masoterapia.png"
            
        },
        {
            title: "Electroterapia", 
            description: "Es la aplicación de la electricidad mediante electrodos, y cabezales,  devera evitrse sus aplicacion en pacientes que presenten infecciones o inflamaciones de la piel, cardiopatías y en mujeres embarazadas.",
            thumb: "static/img/electroterapia.png"
        },
        {
            title: "Termoterapia", 
            description: "En la aplicación de termoterapia se debe un calor intenso, pero siempre agradable, y efecto relajante que  se mantiene durante toda la aplicación, que generalmente varia entre 10-30 minutos, aunque esto depende de la técnica que se utilice. Se aplica por ejemplo en las cervicales o la espalda. ", 
            thumb: "static/img/termoterapia.png"
        },
        {
            title: "Crioterapia", 
            description: "Basada en la aplicación del frio sobre el organismo. Esta técnica  se aplica de 10 a 15 minutos, no se debe usar como medida terapéutica en pacientes con enfermedades cardíacas y problemas vasculares, diabetes, alteraciones sensoriales, síndrome de Raynaud, urticaria, alergia o hipersensibilidad al frio y enfermedades renales o viscerales.", 
            thumb: "static/img/crioterapia.png"
        },
        {
            title: "Ultrasonoterapia", 
            description: "Terapia a través de sonidos  “ondas mecánicas”, se utiliza como tratamiento de dolores profundos en cuello o espalda, lesiones de tendones y ligamentos,  espasmos o contracturas musculares, los problemas articulares y enfermedades relacionadas con la columna vertebral, aumenta el metabolismo, disminuye dolor relaja y ayuda a la cicatrización. ", 
            thumb: "static/img/ultrasonoterapia.png"
        },
        {
            title: "Hidroterapia", 
            description: "Es la utilización terapéutica del agua y se aplica en diversos escenarios como  balnearios, saunas, piscinas termales, duchas, chorros de agua y tinas de remolino con características específicas. Sirve para los tratamientos de varias enfermedades, ayuda al equilibrio eliminando la gravedad en el caso de las piscinas y fortalece la musculatura, debido a que el agua es mas pesada que el aire, ayuda a reducir lesiones y trastornos, dismunuye el estrés y la ansiedad, estimula el sistema inmunitario, produce alivio muscular en contracturas, lumbalgias  y tendinitis. ", 
            thumb: "static/img/hidroterapia.png"
        }]
      });
