
const menuItems = [
 {name:"Chicken Dum Biryani",ar:"برياني دجاج دم",description:"Aromatic basmati rice layered with tender chicken and signature spices.",arDescription:"أرز بسمتي عطري مع دجاج طري وتوابل مميزة.",price:"SAR 28",image:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=85"},
 {name:"Mutton Dum Biryani",ar:"برياني لحم ضأن دم",description:"A rich, slow-cooked classic inspired by Hyderabad.",arDescription:"طبق غني مطهو ببطء ومستوحى من حيدر آباد.",price:"SAR 38",image:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=85"},
 {name:"Veg Dum Biryani",ar:"برياني خضار دم",description:"Fragrant rice with seasonal vegetables and warming spices.",arDescription:"أرز عطري مع خضروات موسمية وتوابل دافئة.",price:"SAR 22",image:"https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=85"},
 {name:"Chicken 65",ar:"دجاج ٦٥",description:"Crispy, spicy chicken bites — a much-loved favourite.",arDescription:"قطع دجاج مقرمشة وحارة، من الأطباق المحبوبة.",price:"SAR 24",image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=85"},
 {name:"Seekh Kebab",ar:"كباب سيخ",description:"Juicy kebabs grilled with a fragrant spice blend.",arDescription:"كباب طري مشوي بمزيج من التوابل العطرية.",price:"SAR 26",image:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=85"},
 {name:"Family Biryani",ar:"برياني عائلي",description:"A generous sharing portion for a table full of loved ones.",arDescription:"وجبة مشاركة سخية تجمع العائلة والأصدقاء.",price:"SAR 89",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=85"}
];

const grid = document.getElementById("menuGrid");
let language = "en";

function renderMenu() {
 grid.innerHTML = menuItems.map(item => `
  <article class="menu-card">
   <img src="${item.image}" alt="${item.name}" loading="lazy">
   <div class="menu-card-body">
    <div class="menu-card-top">
     <h3>${language === "en" ? item.name : item.ar}</h3>
     <span class="price">${item.price}</span>
    </div>
    <p>${language === "en" ? item.description : item.arDescription}</p>
   </div>
  </article>
 `).join("");
}

renderMenu();

document.getElementById("languageToggle").addEventListener("click", () => {
 language = language === "en" ? "ar" : "en";
 document.documentElement.lang = language;
 document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

 document.querySelectorAll("[data-en][data-ar]").forEach(el => {
  el.innerHTML = el.dataset[language];
 });

 document.getElementById("languageToggle").textContent =
  language === "en" ? "العربية" : "English";

 renderMenu();
});

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

toggle.addEventListener("click", () => {
 const open = nav.classList.toggle("open");
 toggle.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach(a => {
 a.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

// Replace with the restaurant's real WhatsApp number before publishing.
const whatsappNumber = "966500000000";

document.getElementById("whatsappLink").href =
 `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I would like to ask about your menu.")}`;
