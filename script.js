
const muttonHandiPhoto =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2025/10/4/2e94c4ea-9cde-4592-b8d3-aefbe2065ee2_06e40bae-fca1-4bb6-9e7f-d68baeea985a.jpg";

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
    description: "Authentic Hyderabadi dum biryani with fragrant basmati rice and tender bone-in mutton pieces.",
    arDescription: "برياني حيدر آبادي أصيل مع أرز بسمتي عطري وقطع لحم ضأن طرية بالعظم.",
    price: "SAR 38",
    image: muttonHandiPhoto
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
    image: "https://www.punjabijunctionva.com/images/menu/butter-chicken.png"
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
    description: "A generous family-size serving of authentic Hyderabadi mutton dum biryani.",
    arDescription: "وجبة عائلية سخية من برياني لحم الضأن الحيدر آبادي.",
    price: "SAR 59",
    image: muttonHandiPhoto
  }
];

// Menu display
const menuGrid = document.getElementById("menuGrid");
let currentLanguage = "en";

function renderMenu() {
  if (!menuGrid) {
    console.error("Menu container #menuGrid was not found. Check index.html.");
    return;
  }

  menuGrid.innerHTML = menuItems.map(item => `
    <article class="menu-card">
      <img
        src="${item.image}"
        alt="${item.name}"
        loading="lazy"
        onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=800&q=85';"
      >
      <div class="menu-card-body">
        <div class="menu-card-top">
          <h3>${currentLanguage === "en" ? item.name : item.ar}</h3>
          <span class="price">${item.price}</span>
        </div>
        <p>${currentLanguage === "en" ? item.description : item.arDescription}</p>
      </div>
    </article>
  `).join("");
}

renderMenu();

// English / Arabic language toggle
const languageToggle = document.getElementById("languageToggle");

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "ar" : "en";

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
      currentLanguage === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-en][data-ar]").forEach(element => {
      element.innerHTML = element.dataset[currentLanguage];
    });

    languageToggle.textContent =
      currentLanguage === "en" ? "العربية" : "English";

    renderMenu();
  });
}

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// WhatsApp link
const whatsappLink = document.getElementById("whatsappLink");
const whatsappNumber = "966500000000";

if (whatsappLink) {
  whatsappLink.href =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I would like to ask about your menu.")}`;
}
