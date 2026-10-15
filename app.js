const cars = [
  {
    id: "volvo-xc40",
    make: "Volvo",
    model: "XC40",
    name: "Volvo XC40 1.5 T5 Recharge PHEV",
    year: 2022,
    price: 26495,
    monthly: 389,
    mileage: 18620,
    fuel: "Plug-in hybrid",
    transmission: "Automatic",
    body: "SUV",
    location: "Bristol",
    postcode: "BS1",
    distance: "4 miles away",
    dealer: "Bristol Motor House",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Volvo_XC40_1X7A6310.jpg/960px-Volvo_XC40_1X7A6310.jpg",
    photoCredit: "Alexander Migl · CC BY-SA 4.0",
    photoUrl: "https://commons.wikimedia.org/wiki/File:Volvo_XC40_1X7A6310.jpg",
    label: "Great price",
    type: "car",
  },
  {
    id: "bmw-3-series",
    make: "BMW",
    model: "3 Series",
    name: "BMW 3 Series 2.0 320d M Sport",
    year: 2021,
    price: 22995,
    monthly: 337,
    mileage: 29410,
    fuel: "Diesel",
    transmission: "Automatic",
    body: "Saloon",
    location: "Bath",
    postcode: "BA2",
    distance: "8 miles away",
    dealer: "Cotswold Cars",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/BMW_3_SERIES_SEDAN_%28G20%29_China.jpg/960px-BMW_3_SERIES_SEDAN_%28G20%29_China.jpg",
    photoCredit: "Dinkun Chen · CC BY-SA 4.0",
    photoUrl: "https://commons.wikimedia.org/wiki/File:BMW_3_SERIES_SEDAN_(G20)_China.jpg",
    label: "Low mileage",
    type: "car",
  },
  {
    id: "kia-sportage",
    make: "Kia",
    model: "Sportage",
    name: "Kia Sportage 1.6 T-GDi 3",
    year: 2023,
    price: 23950,
    monthly: 352,
    mileage: 12400,
    fuel: "Petrol",
    transmission: "Manual",
    body: "SUV",
    location: "Cardiff",
    postcode: "CF10",
    distance: "22 miles away",
    dealer: "Capital City Motors",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/2023_Kia_Sportage_%28NQ5%29_in_White%2C_front_left.jpg/960px-2023_Kia_Sportage_%28NQ5%29_in_White%2C_front_left.jpg",
    photoCredit: "Benespit · CC BY-SA 4.0",
    photoUrl: "https://commons.wikimedia.org/wiki/File:2023_Kia_Sportage_(NQ5)_in_White,_front_left.jpg",
    label: "Nearly new",
    type: "car",
  },
  {
    id: "volkswagen-golf",
    make: "Volkswagen",
    model: "Golf",
    name: "Volkswagen Golf 1.5 eTSI Life",
    year: 2022,
    price: 18750,
    monthly: 275,
    mileage: 21800,
    fuel: "Petrol hybrid",
    transmission: "Automatic",
    body: "Hatchback",
    location: "Swindon",
    postcode: "SN1",
    distance: "26 miles away",
    dealer: "Thames Valley Auto",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/VOLKSWAGEN_GOLF_%28Mk8_CD1%29_China_%288%29.jpg/960px-VOLKSWAGEN_GOLF_%28Mk8_CD1%29_China_%288%29.jpg",
    photoCredit: "Dinkun Chen · CC BY-SA 4.0",
    photoUrl: "https://commons.wikimedia.org/wiki/File:VOLKSWAGEN_GOLF_(Mk8_CD1)_China_(8).jpg",
    label: "Great price",
    type: "car",
  },
  {
    id: "ford-kuga",
    make: "Ford",
    model: "Kuga",
    name: "Ford Kuga 2.5 Duratec ST-Line Edition",
    year: 2021,
    price: 17995,
    monthly: 264,
    mileage: 33750,
    fuel: "Hybrid",
    transmission: "Automatic",
    body: "SUV",
    location: "Gloucester",
    postcode: "GL1",
    distance: "31 miles away",
    dealer: "Elmbridge Automotive",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/2021_Ford_Kuga_ST-Line_Edition.jpg/960px-2021_Ford_Kuga_ST-Line_Edition.jpg",
    photoCredit: "Vauxford · CC BY-SA 4.0",
    photoUrl: "https://commons.wikimedia.org/wiki/File:2021_Ford_Kuga_ST-Line_Edition.jpg",
    label: "Popular choice",
    type: "car",
  },
  {
    id: "audi-a3",
    make: "Audi",
    model: "A3",
    name: "Audi A3 1.5 TFSI Sport",
    year: 2020,
    price: 16495,
    monthly: 242,
    mileage: 31200,
    fuel: "Petrol",
    transmission: "Manual",
    body: "Hatchback",
    location: "Newport",
    postcode: "NP20",
    distance: "36 miles away",
    dealer: "Westway Cars",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/2024_Audi_A3_8Y_Sedan_IMG_1019.jpg/960px-2024_Audi_A3_8Y_Sedan_IMG_1019.jpg",
    photoCredit: "Alexander-93 · CC BY-SA 4.0",
    photoUrl: "https://commons.wikimedia.org/wiki/File:2024_Audi_A3_8Y_Sedan_IMG_1019.jpg",
    label: "Great price",
    type: "car",
  },
  {
    id: "mercedes-sprinter",
    make: "Mercedes-Benz",
    model: "Sprinter",
    name: "Mercedes-Benz Sprinter 2.0 314 CDI",
    year: 2022,
    price: 26995,
    monthly: 396,
    mileage: 22100,
    fuel: "Diesel",
    transmission: "Manual",
    body: "Van",
    location: "Bristol",
    postcode: "BS1",
    distance: "5 miles away",
    dealer: "Bristol Motor House",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/20_Mercedes-Benz_Sprinter_2500.jpg/960px-20_Mercedes-Benz_Sprinter_2500.jpg",
    photoCredit: "HJUdall · CC0",
    photoUrl: "https://commons.wikimedia.org/wiki/File:20_Mercedes-Benz_Sprinter_2500.jpg",
    label: "Low mileage",
    type: "van",
  },
  {
    id: "ford-transit",
    make: "Ford",
    model: "Transit Custom",
    name: "Ford Transit Custom 2.0 300 EcoBlue",
    year: 2021,
    price: 21995,
    monthly: 323,
    mileage: 28700,
    fuel: "Diesel",
    transmission: "Manual",
    body: "Van",
    location: "Bath",
    postcode: "BA2",
    distance: "11 miles away",
    dealer: "Cotswold Cars",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/2021_Ford_Transit_Custom_Limited_300.jpg/960px-2021_Ford_Transit_Custom_Limited_300.jpg",
    photoCredit: "Calreyn88 · CC BY-SA 4.0",
    photoUrl: "https://commons.wikimedia.org/wiki/File:2021_Ford_Transit_Custom_Limited_300.jpg",
    label: "Great price",
    type: "van",
  },
];

const additionalCars = [
  {
    baseId: "volvo-xc40", id: "volvo-xc40-core", name: "Volvo XC40 2.0 B3P Core",
    year: 2023, price: 27995, monthly: 411, mileage: 14200, fuel: "Petrol hybrid",
    transmission: "Automatic", location: "Reading", postcode: "RG1", distance: "42 miles away",
    dealer: "Riverside Volvo Centre", label: "Low mileage",
  },
  {
    baseId: "volvo-xc40", id: "volvo-xc40-recharge", name: "Volvo XC40 1.5 T5 Recharge Inscription",
    year: 2021, price: 23450, monthly: 344, mileage: 28100, fuel: "Plug-in hybrid",
    transmission: "Automatic", location: "Exeter", postcode: "EX1", distance: "58 miles away",
    dealer: "West Country Cars", label: "Great price",
  },
  {
    baseId: "bmw-3-series", id: "bmw-320i-m-sport", name: "BMW 3 Series 2.0 320i M Sport",
    year: 2022, price: 25995, monthly: 382, mileage: 20750, fuel: "Petrol",
    transmission: "Automatic", location: "Cheltenham", postcode: "GL50", distance: "39 miles away",
    dealer: "Prestige Motor Group", label: "Popular choice",
  },
  {
    baseId: "bmw-3-series", id: "bmw-330e-sport", name: "BMW 3 Series 2.0 330e Sport",
    year: 2020, price: 19995, monthly: 294, mileage: 38600, fuel: "Plug-in hybrid",
    transmission: "Automatic", location: "Newbury", postcode: "RG14", distance: "50 miles away",
    dealer: "Thames Valley BMW", label: "Great price",
  },
  {
    baseId: "kia-sportage", id: "kia-sportage-gt-line", name: "Kia Sportage 1.6 T-GDi GT-Line",
    year: 2022, price: 21995, monthly: 323, mileage: 24100, fuel: "Petrol",
    transmission: "Automatic", location: "Swansea", postcode: "SA1", distance: "43 miles away",
    dealer: "Bay View Kia", label: "Great price",
  },
  {
    baseId: "kia-sportage", id: "kia-sportage-hybrid", name: "Kia Sportage 1.6 T-GDi HEV 3",
    year: 2024, price: 28995, monthly: 426, mileage: 8100, fuel: "Hybrid",
    transmission: "Automatic", location: "Oxford", postcode: "OX1", distance: "60 miles away",
    dealer: "Oxford Motor Centre", label: "Nearly new",
  },
  {
    baseId: "volkswagen-golf", id: "volkswagen-golf-style", name: "Volkswagen Golf 1.5 TSI Style",
    year: 2021, price: 16995, monthly: 250, mileage: 29900, fuel: "Petrol",
    transmission: "Manual", location: "Worcester", postcode: "WR1", distance: "47 miles away",
    dealer: "Worcestershire Autohaus", label: "Great price",
  },
  {
    baseId: "volkswagen-golf", id: "volkswagen-golf-r-line", name: "Volkswagen Golf 1.5 eTSI R-Line",
    year: 2023, price: 22995, monthly: 338, mileage: 15300, fuel: "Petrol hybrid",
    transmission: "Automatic", location: "Taunton", postcode: "TA1", distance: "48 miles away",
    dealer: "Somerset Volkswagen", label: "Low mileage",
  },
  {
    baseId: "ford-kuga", id: "ford-kuga-titanium", name: "Ford Kuga 1.5 EcoBoost Titanium",
    year: 2020, price: 14995, monthly: 220, mileage: 41900, fuel: "Petrol",
    transmission: "Manual", location: "Hereford", postcode: "HR1", distance: "35 miles away",
    dealer: "Hereford Car Company", label: "Great price",
  },
  {
    baseId: "ford-kuga", id: "ford-kuga-phev", name: "Ford Kuga 2.5 Duratec PHEV ST-Line",
    year: 2022, price: 22495, monthly: 330, mileage: 19600, fuel: "Plug-in hybrid",
    transmission: "Automatic", location: "Bournemouth", postcode: "BH1", distance: "70 miles away",
    dealer: "Coastline Motors", label: "Popular choice",
  },
  {
    baseId: "audi-a3", id: "audi-a3-s-line", name: "Audi A3 1.5 TFSI S line",
    year: 2022, price: 21995, monthly: 323, mileage: 18400, fuel: "Petrol",
    transmission: "Automatic", location: "Gloucester", postcode: "GL1", distance: "31 miles away",
    dealer: "Elmbridge Automotive", label: "Low mileage",
  },
  {
    baseId: "audi-a3", id: "audi-a3-sportback", name: "Audi A3 1.0 TFSI Sportback Sport",
    year: 2021, price: 17995, monthly: 264, mileage: 26700, fuel: "Petrol",
    transmission: "Manual", location: "Weston-super-Mare", postcode: "BS23", distance: "20 miles away",
    dealer: "Seaview Audi Centre", label: "Great price",
  },
].map(({ baseId, ...listing }) => ({
  ...cars.find((car) => car.id === baseId),
  ...listing,
}));

cars.splice(6, 0, ...additionalCars);

const grid = document.querySelector("#listing-grid");
const summary = document.querySelector("#results-summary");
const emptyState = document.querySelector("#empty-state");
const savedCount = document.querySelector("#saved-count");
const showSavedButton = document.querySelector("#show-saved");
const form = document.querySelector("#search-form");
const vehicleDialog = document.querySelector("#vehicle-dialog");
const detailContent = document.querySelector("#vehicle-detail-content");
const state = {
  type: "car",
  quickFilter: "all",
  savedOnly: false,
  filters: { make: "", model: "", maxPrice: "", location: "", usedOnly: true },
};
const savedCars = new Set();
let visibleLimit = 6;

const pounds = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

function matchesQuickFilter(car) {
  switch (state.quickFilter) {
    case "suv":
      return car.body === "SUV";
    case "automatic":
      return car.transmission === "Automatic";
    case "hybrid":
      return /hybrid|electric/i.test(car.fuel);
    case "under15":
      return car.price < 15000;
    default:
      return true;
  }
}

function getFilteredCars() {
  const location = state.filters.location.trim().toLowerCase();
  const results = cars.filter((car) => {
    if (car.type !== state.type) return false;
    if (state.filters.make && car.make !== state.filters.make) return false;
    if (state.filters.model && car.model !== state.filters.model) return false;
    if (state.filters.maxPrice && car.price > Number(state.filters.maxPrice)) return false;
    if (location && !`${car.location} ${car.postcode}`.toLowerCase().includes(location)) return false;
    if (state.savedOnly && !savedCars.has(car.id)) return false;
    return matchesQuickFilter(car);
  });

  const sortBy = document.querySelector("#sort-by").value;
  if (sortBy === "price-asc") results.sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") results.sort((a, b) => b.price - a.price);
  if (sortBy === "mileage-asc") results.sort((a, b) => a.mileage - b.mileage);
  if (sortBy === "year-desc") results.sort((a, b) => b.year - a.year);
  return results;
}

function carCard(car) {
  const isSaved = savedCars.has(car.id);
  const formattedMileage = new Intl.NumberFormat("en-GB").format(car.mileage);
  return `
    <article class="car-card" role="group" tabindex="0" aria-label="View details for ${car.name}" aria-haspopup="dialog" data-vehicle="${car.id}">
      <div class="car-photo">
        <img src="${car.image}" alt="${car.year} ${car.make} ${car.model}" loading="lazy" />
        <span class="photo-label">${car.label}</span>
        <a class="photo-credit" href="${car.photoUrl}" target="_blank" rel="noopener noreferrer">Photo: ${car.photoCredit}</a>
        <button class="favorite-button" type="button" data-save="${car.id}" aria-label="${isSaved ? "Remove" : "Save"} ${car.make} ${car.model}" aria-pressed="${isSaved}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 8.8c0 4.1-8.4 10-8.4 10s-8.4-5.9-8.4-10a4.5 4.5 0 0 1 8.4-2.2 4.5 4.5 0 0 1 8.4 2.2Z" /></svg>
        </button>
      </div>
      <div class="car-info">
        <div class="car-eyebrow">${car.year} <span class="dealer-check"><span aria-hidden="true">✓</span> VERIFIED DEALER</span></div>
        <h3>${car.name}</h3>
        <div class="car-specs"><span>${formattedMileage} miles</span><span>${car.fuel}</span><span>${car.transmission}</span></div>
        <div class="car-bottom">
          <div><div class="car-price">${pounds.format(car.price)}</div><div class="monthly-price">From ${pounds.format(car.monthly)} / month*</div></div>
          <div class="dealer-distance"><strong>${car.location}</strong>${car.distance}</div>
        </div>
      </div>
    </article>
  `;
}

function showVehicleDetails(car) {
  const formattedMileage = new Intl.NumberFormat("en-GB").format(car.mileage);
  detailContent.innerHTML = `
    <div class="detail-photo-wrap">
      <img class="detail-photo" src="${car.image}" alt="${car.year} ${car.make} ${car.model}" />
      <a class="detail-photo-credit" href="${car.photoUrl}" target="_blank" rel="noopener noreferrer">Photo: ${car.photoCredit}</a>
    </div>
    <div class="detail-body">
      <span class="section-kicker">${car.year} · ${car.body} · ${car.label}</span>
      <h2 id="vehicle-dialog-title">${car.name}</h2>
      <p class="detail-location">${car.dealer} · ${car.location} (${car.postcode})</p>
      <div class="detail-price">${pounds.format(car.price)} <span>From ${pounds.format(car.monthly)} / month*</span></div>
      <dl class="detail-specs">
        <div><dt>Mileage</dt><dd>${formattedMileage} miles</dd></div>
        <div><dt>Fuel type</dt><dd>${car.fuel}</dd></div>
        <div><dt>Transmission</dt><dd>${car.transmission}</dd></div>
        <div><dt>Body style</dt><dd>${car.body}</dd></div>
        <div><dt>Registration year</dt><dd>${car.year}</dd></div>
        <div><dt>Dealer location</dt><dd>${car.location} ${car.postcode}</dd></div>
      </dl>
      <p class="detail-disclaimer">Sample listing for demonstration. Price and monthly payment are illustrative only; confirm vehicle details and finance terms with the dealer.</p>
      <div class="detail-actions">
        <button class="search-button detail-save" type="button" data-detail-save="${car.id}">${savedCars.has(car.id) ? "Remove from saved cars" : "Save this car"}</button>
        <a class="button-secondary" href="mailto:hello@motorly.example?subject=${encodeURIComponent(`Enquiry about ${car.name}`)}">Enquire with dealer <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  `;
  vehicleDialog.showModal();
}

function render() {
  const results = getFilteredCars();
  const visibleCars = results.slice(0, visibleLimit);
  grid.innerHTML = visibleCars.map(carCard).join("");
  grid.hidden = visibleCars.length === 0;
  emptyState.hidden = visibleCars.length !== 0;
  document.querySelector("#showing-count").textContent = String(visibleCars.length);
  document.querySelector("#total-count").textContent = String(results.length);
  document.querySelector("#all-count").textContent = String(cars.filter((car) => car.type === state.type).length).padStart(2, "0");
  document.querySelector("#load-more").hidden = results.length <= visibleLimit;
  showSavedButton.setAttribute("aria-pressed", String(state.savedOnly));

  if (state.savedOnly) {
    summary.textContent = "Your saved vehicles, ready when you are.";
  } else if (state.filters.make || state.filters.model || state.filters.maxPrice || state.filters.location) {
    summary.textContent = `${results.length} ${state.type === "van" ? "vans" : "cars"} matching your search.`;
  } else {
    summary.textContent = "A few favourites to get you started.";
  }
  document.querySelector("#vehicle-heading").textContent = `${state.type === "van" ? "Vans" : "Cars"} worth a closer look`;
  document.querySelector("#all-label").textContent = `All ${state.type === "van" ? "vans" : "cars"}`;

  savedCount.textContent = String(savedCars.size);
  savedCount.setAttribute("aria-label", `${savedCars.size} saved ${savedCars.size === 1 ? "vehicle" : "vehicles"}`);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  state.filters = {
    make: document.querySelector("#make").value,
    model: document.querySelector("#model").value,
    maxPrice: document.querySelector("#max-price").value,
    location: document.querySelector("#location").value,
    usedOnly: document.querySelector("#used-only").checked,
  };
  state.savedOnly = false;
  visibleLimit = 6;
  render();
  document.querySelector("#results").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".vehicle-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    state.type = tab.dataset.type;
    state.savedOnly = false;
    visibleLimit = 6;
    document.querySelectorAll(".vehicle-tab").forEach((item) => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    document.querySelector(".search-button span").textContent = `Search ${state.type === "van" ? "vans" : "cars"}`;
    render();
  });
});

document.querySelectorAll(".filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    state.quickFilter = chip.dataset.filter;
    state.savedOnly = false;
    visibleLimit = 6;
    document.querySelectorAll(".filter-chip").forEach((item) => item.classList.toggle("active", item === chip));
    render();
  });
});

grid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-vehicle]");
  if (card && !event.target.closest("button, a")) {
    const car = cars.find((item) => item.id === card.dataset.vehicle);
    if (car) showVehicleDetails(car);
    return;
  }
  const button = event.target.closest("[data-save]");
  if (!button) return;
  const id = button.dataset.save;
  if (savedCars.has(id)) savedCars.delete(id);
  else savedCars.add(id);
  render();
});

grid.addEventListener("keydown", (event) => {
  if (!event.target.matches("[data-vehicle]") || !["Enter", " "].includes(event.key)) return;
  event.preventDefault();
  const car = cars.find((item) => item.id === event.target.dataset.vehicle);
  if (car) showVehicleDetails(car);
});

detailContent.addEventListener("click", (event) => {
  const button = event.target.closest("[data-detail-save]");
  if (!button) return;
  const id = button.dataset.detailSave;
  if (savedCars.has(id)) savedCars.delete(id);
  else savedCars.add(id);
  button.textContent = savedCars.has(id) ? "Remove from saved cars" : "Save this car";
  render();
});

vehicleDialog.addEventListener("click", (event) => {
  if (event.target === vehicleDialog) vehicleDialog.close();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && vehicleDialog.open) vehicleDialog.close();
});

document.querySelector("#close-vehicle-dialog").addEventListener("click", () => vehicleDialog.close());

showSavedButton.addEventListener("click", () => {
  state.savedOnly = !state.savedOnly;
  visibleLimit = 6;
  render();
  document.querySelector("#results").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#sort-by").addEventListener("change", render);
document.querySelector("#load-more").addEventListener("click", () => {
  visibleLimit += 6;
  render();
});
document.querySelector("#clear-filters").addEventListener("click", () => {
  form.reset();
  state.filters = { make: "", model: "", maxPrice: "", location: "", usedOnly: true };
  state.quickFilter = "all";
  state.savedOnly = false;
  visibleLimit = 6;
  document.querySelectorAll(".filter-chip").forEach((item) => item.classList.toggle("active", item.dataset.filter === "all"));
  render();
});
document.querySelector("#menu-toggle").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const isOpen = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!isOpen));
  document.querySelector(".main-nav").classList.toggle("open", !isOpen);
});

render();
