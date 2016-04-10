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
    description: "Cheesecake liquorice carrot cake gummi bears jelly-o powder "
});


riot.mount('items', { 
    title: "Agentes físicos",
      items: [
        {
            title: "Calor", 
            description: "Jelly-o marshmallow tootsie roll. Fruitcake macaroon I love gummies cake liquorice. Ice cream croissant liquorice marzipan bear claw pie jelly beans pie tootsie roll. Gummi bears I love chocolate cake ice cream fruitcake.", thumb: "https://s-media-cache-ak0.pinimg.com/736x/61/22/cb/6122cb371a319afa82c5d4e8077ebbdc.jpg"
            
        },
        {
            title: "Frio", 
            description: "I love lemon drops marzipan chocolate bar fruitcake I love macaroon. Candy candy cotton candy. Oat cake cupcake oat cake donut.Toffee chocolate bonbon cake jelly bear claw. Lollipop tart gummi bears chocolate tart liquorice apple pie. Chupa chups toffee soufflé halvah. Biscuit gummies dessert tiramisu icing pastry. Pie gingerbread I love cake."
        },
        {
            title: "Luz", 
            description: "Toffee chocolate bonbon cake jelly bear claw. Lollipop tart gummi bears chocolate tart liquorice apple pie. Chupa chups toffee soufflé halvah. Biscuit gummies dessert tiramisu icing pastry. Pie gingerbread I love cake. Tart danish topping soufflé ice cream chocolate bar. Cotton candy caramels I love cookie pie chupa chups tiramisu.", 
            thumb: "https://s-media-cache-ak0.pinimg.com/736x/61/22/cb/6122cb371a319afa82c5d4e8077ebbdc.jpg"
        },
        {
            title: "Agua", 
            description: "Pie gingerbread I love cake. Toffee chocolate bonbon cake jelly bear claw. Lollipop tart gummi tiramisu icing pastry. Tart danish topping soufflé ice cream chocolate bar. Cotton candy caramels I love cookie pie chupa chups tiramisu bears chocolate tart liquorice apple pie. Chupa chups toffee soufflé halvah. Biscuit gummies dessert.", 
            thumb: "https://s-media-cache-ak0.pinimg.com/736x/61/22/cb/6122cb371a319afa82c5d4e8077ebbdc.jpg"
        },
        {
            title: "Electricidad", 
            description: "Toffee chocolate bonbon cake jelly bear claw. Lollipop tart gummi bears chocolate tart liquorice apple pie. Chupa chups toffee soufflé halvah. Biscuit gummies dessert tiramisu icing pastry. Pie gingerbread I love cake. Tart danish topping soufflé ice cream chocolate bar. Cotton candy caramels I love cookie pie chupa chups tiramisu.", 
            thumb: "https://s-media-cache-ak0.pinimg.com/736x/61/22/cb/6122cb371a319afa82c5d4e8077ebbdc.jpg"
        },
        {
            title: "Masaje", 
            description: "Tart danish topping soufflé ice cream chocolate bar. Cotton candy caramels I love cookie pie chupa chups tiramisu. Toffee chocolate bonbon cake jelly bear claw. Lollipop tart gummi bears chocolate tart liquorice apple pie. Chupa chups toffee soufflé halvah. Biscuit gummies dessert tiramisu icing pastry. Pie gingerbread I love cake.", 
            thumb: "https://s-media-cache-ak0.pinimg.com/736x/61/22/cb/6122cb371a319afa82c5d4e8077ebbdc.jpg"
        }]
      });