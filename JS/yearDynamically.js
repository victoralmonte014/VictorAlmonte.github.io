let year = document.getElementById("copyright");
let currentYear = new Date().getFullYear();
let copyRight = `Copyright © ${currentYear} Victor Almonte. All rights reserved.`;
year.innerHTML = copyRight;
