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

// Nav Bar Items
let navigation = document.querySelectorAll('nav a')
for (let i=0; i<navigation.length; i++){
  navigation[i].textContent = siteContent['nav'][`nav-item-${i + 1}`];
  navigation[i].style.color = 'green';
};

let navBar = document.querySelector('nav');
let firstItem = document.createElement('a');
let lastItem = document.createElement('a');

firstItem.href = '#';
firstItem.textContent = 'First';
firstItem.style.color = 'green';

lastItem.href = '#';
lastItem.textContent = 'Last';
lastItem.style.color = 'green';

navBar.prepend(firstItem);
navBar.append(lastItem);


// CTA Content
let ctaContent = document.querySelector('.cta-text h1')
ctaContent.textContent = siteContent['cta']['h1'];

let btn = document.querySelector('.cta-text button')
btn.textContent = siteContent['cta']['button'];

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

// Top Content
let topContent1 = document.querySelectorAll('.text-content h4')
topContent1[0].textContent = siteContent['main-content']['features-h4']

let topContent2 = document.querySelectorAll('.text-content p')
topContent2[0].textContent = siteContent['main-content']['features-content']

let topContent3 = document.querySelectorAll('.text-content h4')
topContent3[1].textContent = siteContent['main-content']['about-h4']

let topContent4 = document.querySelectorAll('.text-content p')
topContent4[1].textContent = siteContent['main-content']['about-content']

// Middle Img
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Bottom Content
let bottomContent1 = document.querySelectorAll('.bottom-content .text-content h4')
bottomContent1[0].textContent = siteContent['main-content']['services-h4']

let bottomContent2 = document.querySelectorAll('.bottom-content .text-content p')
bottomContent2[0].textContent = siteContent['main-content']['services-content']

let bottomContent3 = document.querySelectorAll('.bottom-content .text-content h4')
bottomContent3[1].textContent = siteContent['main-content']['product-h4']

let bottomContent4 = document.querySelectorAll('.bottom-content .text-content p')
bottomContent4[1].textContent = siteContent['main-content']['product-content']

let bottomContent5 = document.querySelectorAll('.bottom-content .text-content h4')
bottomContent5[2].textContent = siteContent['main-content']['vision-h4']

let bottomContent6 = document.querySelectorAll('.bottom-content .text-content p')
bottomContent6[2].textContent = siteContent['main-content']['vision-content']

// Contact
let contact = document.querySelectorAll('.contact h4')
contact[0].textContent = siteContent['contact']['contact-h4']

let contactUs = document.querySelectorAll('.contact p')
contactUs[0].textContent = siteContent['contact']['address']
contactUs[1].textContent = siteContent['contact']['phone']
contactUs[2].textContent = siteContent['contact']['email']

// Footer
let footerContent = document.querySelector('footer')
footerContent.textContent = siteContent['footer']['copyright']