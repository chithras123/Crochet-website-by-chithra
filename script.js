/* =========================================================
   SHOP SETTINGS — edit these to update the whole website
   ========================================================= */
const SHOP_NAME = "Tamaraa";
const WHATSAPP_NUMBER = "917777770021"; // country code + number, no "+" or spaces
const INSTAGRAM_URL = "https://instagram.com/tamaraa";

/* =========================================================
   PRODUCTS
   To add a real photo: put the file in the "images" folder and
   set image: "images/your-photo.jpg". Leave image empty ("")
   to show a pretty placeholder.
   featured: true  → also shows on the Home page.
   Products with no photo (image: "") are hidden, and so are categories
   with no photos yet — add a photo and they show up automatically.
   sample: true    → shows a "Sample photo" tag (example photo, not my own
                     piece yet). Remove it once you use your own photo.
   ========================================================= */
const CATEGORIES = [
  { id: "hair", name: "Hair Accessories", emoji: "🎀",
    subs: ["Scrunchies", "Headbands", "Bows", "Clips", "Gajra", "Flowers"] },
  { id: "baby", name: "Baby Collection", emoji: "👶",
    subs: ["Baby Frocks", "Newborn Shoes"] },
  { id: "blankets", name: "Blankets", emoji: "🛏️", subs: [] },
  { id: "decor", name: "Home Decor", emoji: "🏡", subs: [] },
];

const PRODUCTS = [
  // Hair Accessories
  { name: "Scrunchie Trio – Black, Peach & Maroon", price: 249, category: "hair", sub: "Scrunchies", image: "images/scrunchie-trio-black-peach-maroon.jpg", featured: true },
  { name: "Peach Ruffle Scrunchie", price: 99, category: "hair", sub: "Scrunchies", image: "images/scrunchie-peach.jpg", featured: true },
  { name: "Lavender Ruffle Scrunchie", price: 99, category: "hair", sub: "Scrunchies", image: "images/scrunchie-lavender.jpg", featured: true },
  { name: "Rose Pink Ruffle Scrunchie", price: 99, category: "hair", sub: "Scrunchies", image: "images/scrunchie-rose-pink.jpg" },
  { name: "Bubblegum Pink Ruffle Scrunchie", price: 99, category: "hair", sub: "Scrunchies", image: "images/scrunchie-bubblegum-pink.jpg" },
  { name: "Coral Red Ruffle Scrunchie", price: 99, category: "hair", sub: "Scrunchies", image: "images/scrunchie-coral-red.jpg" },
  { name: "Scrunchie Duo – Peach & Purple", price: 179, category: "hair", sub: "Scrunchies", image: "images/scrunchie-duo-peach-purple.jpg" },
  { name: "Scrunchie Duo – Rose & Peach", price: 179, category: "hair", sub: "Scrunchies", image: "images/scrunchie-duo-rose-peach.jpg" },
  { name: "Sage Knot Headband", price: 299, category: "hair", sub: "Headbands", image: "images/headband-sage-knot.jpg", sample: true, featured: true },
  { name: "Mint Lace Headband", price: 279, category: "hair", sub: "Headbands", image: "images/headband-mint-lace.jpg", sample: true },
  { name: "Navy Shell Headband", price: 279, category: "hair", sub: "Headbands", image: "images/headband-navy-shell.jpg", sample: true },
  { name: "Green Shell Headband", price: 279, category: "hair", sub: "Headbands", image: "images/headband-green-shell.jpg", sample: true },
  { name: "Red Pearl Bow", price: 179, category: "hair", sub: "Bows", image: "images/bow-red-pearl.jpg", sample: true, featured: true },
  { name: "Coral Long-Tail Bow", price: 199, category: "hair", sub: "Bows", image: "images/bow-coral-long-tail.jpg", sample: true },
  { name: "Maroon Lace Bow", price: 179, category: "hair", sub: "Bows", image: "images/bow-maroon-lace.jpg", sample: true },
  { name: "Lavender Lace Bow", price: 199, category: "hair", sub: "Bows", image: "images/bow-lavender-lace.jpg", sample: true },
  { name: "Pastel Rainbow Bow", price: 199, category: "hair", sub: "Bows", image: "images/bow-pastel-rainbow.jpg", sample: true },
  { name: "Red Cherry Bow", price: 229, category: "hair", sub: "Bows", image: "images/bow-red-cherry.jpg", sample: true, featured: true },
  { name: "Pink Polka Dot Bow Clip", price: 149, category: "hair", sub: "Clips", image: "images/clip-pink-polka-bow.jpg", sample: true, featured: true },
  { name: "Denim Blue Bow Clip", price: 149, category: "hair", sub: "Clips", image: "images/clip-denim-blue-bow.jpg", sample: true },
  { name: "Mini Bow Clip & Band Set", price: 349, category: "hair", sub: "Clips", image: "images/clip-mini-bow-set.jpg", sample: true },
  { name: "Jasmine Crochet Gajra", price: 349, category: "hair", sub: "Gajra", image: "" },
  { name: "Rose & Jasmine Gajra", price: 399, category: "hair", sub: "Gajra", image: "" },
  { name: "Red Rose Hair Ties (pair)", price: 199, category: "hair", sub: "Flowers", image: "images/flower-red-rose-hair-ties.jpg", sample: true },
  { name: "Flower Garden Headband", price: 449, category: "hair", sub: "Flowers", image: "images/flower-garden-headband.jpg", sample: true, featured: true },

  // Baby Collection
  { name: "Peach Blossom Baby Frock", price: 899, category: "baby", sub: "Baby Frocks", image: "", featured: true },
  { name: "Mint Dream Baby Frock", price: 849, category: "baby", sub: "Baby Frocks", image: "" },
  { name: "Newborn Booties – Baby Pink", price: 399, category: "baby", sub: "Newborn Shoes", image: "", featured: true },
  { name: "Mary-Jane Baby Shoes", price: 449, category: "baby", sub: "Newborn Shoes", image: "" },

  // Blankets
  { name: "Cloud Soft Baby Blanket", price: 1499, category: "blankets", image: "", featured: true },
  { name: "Granny Square Throw", price: 2499, category: "blankets", image: "" },
  { name: "Rainbow Stripe Blanket", price: 1999, category: "blankets", image: "" },

  // Home Decor
  { name: "Boho Coaster Set (4 pcs)", price: 299, category: "decor", image: "" },
  { name: "Mini Plant Hanger", price: 399, category: "decor", image: "", featured: true },
  { name: "Heart Wall Hanging", price: 349, category: "decor", image: "" },
  { name: "Crochet Basket", price: 599, category: "decor", image: "" },
];

/* =========================================================
   Helpers
   ========================================================= */
const PASTELS = [
  ["#fde2e4", "#fad2e1"], ["#e2ece9", "#cde7dd"], ["#e8e1f5", "#d7cdee"],
  ["#fff1d6", "#ffe3b3"], ["#dbeafe", "#cfe0f7"], ["#fce7f3", "#f9d4e8"],
];
const SHOP_PRODUCTS = PRODUCTS.map((p, i) => ({ p, i })).filter(({ p }) => p.image);
const SHOP_CATEGORIES = CATEGORIES
  .filter(c => SHOP_PRODUCTS.some(({ p }) => p.category === c.id))
  .map(c => ({ ...c, subs: c.subs.filter(s => SHOP_PRODUCTS.some(({ p }) => p.sub === s)) }));
const CATEGORY_EMOJI = Object.fromEntries(CATEGORIES.map(c => [c.id, c.emoji]));

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[ch]));
}

// Soft pastel SVG used until real photos are added
function placeholderImage(label, emoji, index) {
  const [c1, c2] = PASTELS[index % PASTELS.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="600" height="600" fill="url(#g)"/>
    <circle cx="300" cy="270" r="120" fill="#ffffff" opacity="0.55"/>
    <text x="300" y="315" font-size="130" text-anchor="middle">${emoji}</text>
    <text x="300" y="470" font-family="sans-serif" font-size="30" fill="#8a6f7c" text-anchor="middle">${escapeHtml(label)}</text>
    <text x="300" y="512" font-family="sans-serif" font-size="20" fill="#b49aa6" text-anchor="middle">photo coming soon</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function formatPrice(n) {
  return "₹" + n.toLocaleString("en-IN");
}

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function productCard(p, index) {
  const label = p.sub || CATEGORIES.find(c => c.id === p.category).name;
  const placeholder = placeholderImage(label, CATEGORY_EMOJI[p.category], index);
  const src = p.image || placeholder;
  const msg = `Hi ${SHOP_NAME}! I'd like to order: ${p.name} (${formatPrice(p.price)}). Is it available?`;
  return `
    <article class="product-card">
      <div class="product-img">
        <img src="${src}" alt="${escapeHtml(p.name)}" loading="lazy"
             onerror="this.onerror=null;this.src='${placeholder}'" />
        <span class="tag">${escapeHtml(label)}</span>
        ${p.sample ? `<span class="tag tag-sample">Sample photo</span>` : ""}
      </div>
      <div class="product-info">
        <h3>${escapeHtml(p.name)}</h3>
        <p class="price">${formatPrice(p.price)}</p>
        <a class="btn btn-whatsapp" href="${whatsappLink(msg)}" target="_blank" rel="noopener">
          💬 Order on WhatsApp
        </a>
      </div>
    </article>`;
}

/* =========================================================
   Rendering
   ========================================================= */
const state = { category: "all", sub: "all" };

function renderFeatured() {
  const grid = document.getElementById("featured-grid");
  grid.innerHTML = SHOP_PRODUCTS
    .filter(({ p }) => p.featured)
    .map(({ p, i }) => productCard(p, i))
    .join("");
}

function renderCategoryFilters() {
  const wrap = document.getElementById("category-filters");
  const items = [{ id: "all", name: "All", emoji: "✨" }, ...SHOP_CATEGORIES];
  wrap.innerHTML = items.map(c => `
    <button class="chip ${state.category === c.id ? "active" : ""}" data-cat="${c.id}" role="tab"
            aria-selected="${state.category === c.id}">
      ${c.emoji} ${escapeHtml(c.name)}
    </button>`).join("");
}

function renderSubFilters() {
  const wrap = document.getElementById("sub-filters");
  const cat = SHOP_CATEGORIES.find(c => c.id === state.category);
  if (!cat || cat.subs.length === 0) {
    wrap.innerHTML = "";
    wrap.hidden = true;
    return;
  }
  wrap.hidden = false;
  wrap.innerHTML = ["all", ...cat.subs].map(s => `
    <button class="chip chip-small ${state.sub === s ? "active" : ""}" data-sub="${escapeHtml(s)}">
      ${s === "all" ? "All " + escapeHtml(cat.name) : escapeHtml(s)}
    </button>`).join("");
}

function renderShop() {
  const grid = document.getElementById("shop-grid");
  const list = SHOP_PRODUCTS
    .filter(({ p }) => state.category === "all" || p.category === state.category)
    .filter(({ p }) => state.sub === "all" || p.sub === state.sub);

  grid.innerHTML = list.length
    ? list.map(({ p, i }) => productCard(p, i)).join("")
    : `<p class="empty">New pieces coming soon! 🧶</p>`;
}

function renderAll() {
  renderCategoryFilters();
  renderSubFilters();
  renderShop();
}

/* =========================================================
   Init
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  // Shop name, links, year
  document.querySelectorAll("[data-shop-name]").forEach(el => (el.textContent = SHOP_NAME));
  document.title = `${SHOP_NAME} · Handmade Crochet`;
  document.querySelectorAll("[data-instagram]").forEach(el => (el.href = INSTAGRAM_URL));
  document.querySelectorAll("[data-whatsapp-general]").forEach(el => {
    el.href = whatsappLink(`Hi ${SHOP_NAME}! I'd love to know more about your crochet products.`);
  });
  document.getElementById("year").textContent = new Date().getFullYear();

  // About photo fallback
  const aboutImg = document.querySelector('[data-fallback="about"]');
  aboutImg.onerror = () => {
    aboutImg.onerror = null;
    aboutImg.src = placeholderImage("Handmade with love", "🧶", 5);
  };
  if (aboutImg.complete && aboutImg.naturalWidth === 0) aboutImg.onerror();

  renderFeatured();
  renderAll();

  // Filter clicks
  document.getElementById("category-filters").addEventListener("click", e => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    state.category = btn.dataset.cat;
    state.sub = "all";
    renderAll();
  });
  document.getElementById("sub-filters").addEventListener("click", e => {
    const btn = e.target.closest("[data-sub]");
    if (!btn) return;
    state.sub = btn.dataset.sub;
    renderSubFilters();
    renderShop();
  });

  // Mobile menu
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", e => {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // Contact form → WhatsApp
  document.getElementById("contact-form").addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(e.target);
    const msg = `Hi ${SHOP_NAME}! This is ${data.get("name")}.\n\n${data.get("message")}`;
    window.open(whatsappLink(msg), "_blank", "noopener");
  });
});
