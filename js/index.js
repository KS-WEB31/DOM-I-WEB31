const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//My code

//Steps 1 & 2
//navbar
//select nav links
const navLinks = document.querySelectorAll('nav a');

//get keys from the nav object
const navKeys = Object.keys(siteContent.nav);
console.log(navKeys);

//give each nav link text content
navLinks.forEach((link, i) => {
  link.textContent = siteContent.nav[navKeys[i]];
  link.style.color = 'green';
});

//header
const headerText = document.querySelector('.cta-text h1');
headerText.textContent = siteContent.cta.h1;

const headerButton = document.querySelector('.cta-text button');
headerButton.textContent = siteContent.cta.button;

const headerImg = document.querySelector('#cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src']);

//main content
//select main-content h4s
const contentHeaders = document.querySelectorAll('.text-content h4');
contentHeaders[0].textContent = siteContent['main-content']['features-h4'];
contentHeaders[1].textContent = siteContent['main-content']['about-h4'];
contentHeaders[2].textContent = siteContent['main-content']['services-h4'];
contentHeaders[3].textContent = siteContent['main-content']['product-h4'];
contentHeaders[4].textContent = siteContent['main-content']['vision-h4'];

const contentParas = document.querySelectorAll('.text-content p');
contentParas[0].textContent = siteContent['main-content']['features-content'];
contentParas[1].textContent = siteContent['main-content']['about-content'];
contentParas[2].textContent = siteContent['main-content']['services-content'];
contentParas[3].textContent = siteContent['main-content']['product-content'];
contentParas[4].textContent = siteContent['main-content']['vision-content'];

const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//contact
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent.contact.address;
contactInfo[1].textContent = siteContent.contact.phone;
contactInfo[2].textContent = siteContent.contact.email;

//footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;

//Step 3
