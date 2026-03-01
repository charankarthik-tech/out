// list of educational links
const links = [
    { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
    { name: "Khan Academy", url: "https://www.khanacademy.org/" },
    { name: "Coursera", url: "https://www.coursera.org/" },
    { name: "edX", url: "https://www.edx.org/" },
    { name: "MDN Web Docs", url: "https://developer.mozilla.org/" },
    { name: "W3Schools", url: "https://www.w3schools.com/" }
    // add more resources here
];

function renderLinks() {
    const list = document.getElementById('links-list');
    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.name;
        a.target = '_blank';
        li.appendChild(a);
        list.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', renderLinks);
