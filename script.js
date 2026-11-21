
const menuItems = [
 {
  name: "Chicken Dum Biryani",
  ar: "برياني دجاج دم",
  description: "Aromatic basmati rice layered with tender chicken and a delicious chicken leg piece.",
  arDescription: "أرز بسمتي عطري مع دجاج طري وقطعة فخذ دجاج شهية.",
  price: "SAR 28",
  image: "https://images.squarespace-cdn.com/content/v1/6a3aa47eff561a164d0c97db/bf32e348-2752-4b8c-b43a-113760977949/Dum.png"
 },
 {
  name: "Mutton Dum Biryani",
  ar: "برياني لحم الضأن",
  description: "Authentic Hyderabadi dum biryani with tender, bone-in mutton pieces.",
  arDescription: "برياني حيدر آبادي أصيل مع قطع لحم ضأن طرية بالعظم.",
  price: "SAR 38",
  image: "https://www.emfaaz.com/images/mutton-chop-biryani-5.png"
 },
 {
  name: "Mutton Khorma",
  ar: "كورما لحم الضأن",
  description: "Rich and flavourful mutton curry prepared with traditional spices.",
  arDescription: "كاري لحم ضأن غني بالنكهة ومحضر بالتوابل التقليدية.",
  price: "SAR 22",
  image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Ch_960%2Cw_960/InstamartAssets/mutton_korma.webp"
 },
 {
  name: "Butter Chicken",
  ar: "دجاج بالزبدة",
  description: "Tender chicken pieces in a rich, creamy tomato and butter gravy.",
  arDescription: "قطع دجاج طرية في صلصة الطماطم والزبدة الكريمية الغنية.",
  price: "SAR 24",
  image: "https://www.skipthedishes.com/_next/image?q=75&url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Flarge-33279c1cf373505456a4.jpg&w=3840"
 },
 {
  name: "Seekh Kebab",
  ar: "كباب سيخ",
  description: "Juicy kebabs grilled with a fragrant spice blend.",
  arDescription: "كباب طري مشوي بمزيج من التوابل العطرية.",
  price: "SAR 26",
  image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=85"
 },
 {
  name: "Mutton Biryani Family Pack",
  ar: "وجبة برياني لحم عائلية",
  description: "A generous family-size serving of delicious Hyderabadi mutton biryani.",
  arDescription: "وجبة عائلية سخية من برياني لحم الضأن الحيدر آبادي الشهي.",
  price: "SAR 59",
  image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=85"
 }
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

const whatsappNumber = "966500000000";

document.getElementById("whatsappLink").href =
 `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I would like to ask about your menu.")}`;
