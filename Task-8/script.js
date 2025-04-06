
const routes = {
    404:{
        template: "404.html",
        title: "404 not found",
        description:"error page not found",
    },  
    "/": {
        template: "home.html",
        title: "Home",
        description: "This is the home page",
    },
    about: {
        template: "about.html",
        title: "About Us",
        description: "This is the about page",
    },
    contact: {  
        template: "contact.html",
        title: "Contact Us",
        description: "This is the contact page",
    },
    pages: {
        template: "pages.html",
        title: "Pages",
        description: "This is the pages section",
    },
};

const locationHandler = async () => {
    // get the url path, replace hash with empty string
    var location = window.location.hash.replace("#", "");
    // if the path length is 0, set it to primary page route
    if (location.length == 0) {
        location = "/";
        // console.log('here')
    }
    // get the route object from the routes object
    const route = routes[location] || routes["404"];
    // get the html from the template
    const html = await fetch(route.template).then((response) => response.text());
    // console.log(html)
    // set the content of the content div to the html
    document.getElementById("content").innerHTML = html;
    // set the title of the document to the title of the route
    document.title = route.title;
};



window.addEventListener("hashchange", locationHandler);
locationHandler();