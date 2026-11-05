"use strict";

const events = [
  {
    id: "midnight-garden",
    title: "Midnight in the Garden",
    category: "Music",
    date: "2027-01-16T19:00:00",
    dateLabel: "SAT, JAN 16 · 7:00 PM",
    venue: "The Glasshouse, Brooklyn",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Crowd at an atmospheric live music show",
    description: "An open-air evening of live music, local DJs, and golden-hour energy under the city lights.",
    details: "When the sun dips, the garden comes alive. Meet us under the lights for a feel-good lineup of local artists, thoughtfully mixed drinks, and plenty of room to dance like nobody's keeping score. Bring your friends, or make a few new ones."
  },
  {
    id: "slow-sunday-supper",
    title: "The Slow Sunday Supper",
    category: "Food & Drink",
    date: "2027-01-23T17:30:00",
    dateLabel: "SAT, JAN 23 · 5:30 PM",
    venue: "Little Fern Kitchen, Brooklyn",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A warmly lit table set for a shared dinner",
    description: "A long-table dinner with seasonal plates, good wine, and the kind of conversation that lingers.",
    details: "Pull up a chair for a relaxed, family-style dinner celebrating ingredients from just around the corner. Chef Marlow is cooking a seasonal, four-course menu, with thoughtfully paired natural wines and non-alcoholic pours. Come hungry; leave with new favorite people."
  },
  {
    id: "color-in-the-city",
    title: "Color in the City",
    category: "Arts & Culture",
    date: "2027-01-30T11:00:00",
    dateLabel: "SAT, JAN 30 · 11:00 AM",
    venue: "Morrow Studio, Manhattan",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Paintbrushes and colorful paint at an artist's studio",
    description: "A hands-on art afternoon with local makers, fresh ideas, and absolutely no wrong answers.",
    details: "A little paint, a lot of color, and no pressure to be “good at art.” Local artists will guide you through playful, hands-on stations in a light-filled studio. All materials are included, and you'll head home with something you made yourself."
  },
  {
    id: "wildflower-walk",
    title: "The Wildflower Walk",
    category: "Outdoors",
    date: "2027-02-06T09:00:00",
    dateLabel: "SAT, FEB 6 · 9:00 AM",
    venue: "Prospect Park, Brooklyn",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Sunrise spilling over a green meadow",
    description: "A slow morning stroll to spot the little things, breathe deep, and reset your week.",
    details: "Trade your screen for a little green. Local naturalist Jo will lead an easy-paced wander through the park's quieter paths, pointing out seasonal blooms and small wonders along the way. We'll wrap up with coffee and pastries from a neighborhood favorite."
  },
  {
    id: "vinyl-after-hours",
    title: "Vinyl After Hours",
    category: "Music",
    date: "2027-02-13T20:00:00",
    dateLabel: "SAT, FEB 13 · 8:00 PM",
    venue: "Needle & Groove, Queens",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A packed dance floor under colorful lights",
    description: "A no-phones-needed dance party with crate-digging DJs and all your favorite old sounds.",
    details: "A small room, a seriously good sound system, and DJs who know how to pick the next track. Vinyl After Hours is a joyful, phones-down dance party where disco, soul, and a few unexpected favorites play until late. Your only job: show up and have fun."
  },
  {
    id: "market-table",
    title: "Market Table: Summer Edition",
    category: "Food & Drink",
    date: "2027-02-20T10:00:00",
    dateLabel: "SAT, FEB 20 · 10:00 AM",
    venue: "Riverside Market, Manhattan",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Fresh colorful produce at a neighborhood market",
    description: "Meet the growers, taste the good stuff, and make a morning of your local market.",
    details: "Your favorite neighborhood market, with a little extra magic. Meet the farmers and makers behind the produce, sample something delicious at every turn, and pick up a recipe card from a local chef. Come by anytime; stay as long as you like."
  },
  {
    id: "open-studio-night",
    title: "Open Studio, Open Doors",
    category: "Arts & Culture",
    date: "2027-02-27T18:00:00",
    dateLabel: "SAT, FEB 27 · 6:00 PM",
    venue: "The Yard Studios, Brooklyn",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85",
    imageAlt: "An immersive art installation lit in vivid colors",
    description: "A behind-the-scenes look at the studios and curious minds making things around the corner.",
    details: "Step inside a dozen working studios for an evening of art, ideas, and unexpected conversations. Meet the artists where they make their work, see works-in-progress, and catch a few live demonstrations. Wander at your own pace; the doors are open."
  },
  {
    id: "sunset-on-the-water",
    title: "Sunset on the Water",
    category: "Outdoors",
    date: "2027-03-06T18:30:00",
    dateLabel: "SAT, MAR 6 · 6:30 PM",
    venue: "Pier 6, Brooklyn Bridge Park",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Golden-hour light on calm water",
    description: "An easygoing evening by the water with picnic blankets, a soft playlist, and a sky show.",
    details: "Bring a blanket, something to sip, and absolutely no agenda. We'll gather at the water's edge for the last light of the day, a mellow playlist, and a shared picnic spread from neighborhood bakeries. Stay for five minutes or the whole sunset."
  },
  {
    id: "neighborhood-jam",
    title: "The Neighborhood Jam",
    category: "Music",
    date: "2027-03-13T16:00:00",
    dateLabel: "SAT, MAR 13 · 4:00 PM",
    venue: "The Courtyard, Queens",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=85",
    imageAlt: "People enjoying an outdoor concert together",
    description: "An all-afternoon block-party kind of thing with local bands, food trucks, and room to roam.",
    details: "Good tunes, cold drinks, and the kind of afternoon you wish would last a little longer. We're bringing together local bands, neighborhood food trucks, and plenty of space to dance, sit, snack, and make a day of it. All ages are welcome."
  }
];

const eventGrid = document.querySelector("#event-grid");
const searchInput = document.querySelector("#event-search");
const emptyState = document.querySelector("#empty-state");
const resultLabel = document.querySelector("#results-label");
const eventDialog = document.querySelector("#event-dialog");
const eventDialogContent = document.querySelector("#event-dialog-content");
const registerDialog = document.querySelector("#register-dialog");
const registerForm = document.querySelector("#register-form");
const eventSelect = document.querySelector("#register-event");
const confirmationState = document.querySelector("#confirmation-state");
const themeToggle = document.querySelector(".theme-toggle");
let activeCategory = "All";

function formatLongDate(dateValue) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(dateValue));
}

function getVisibleEvents() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  return events.filter((event) => {
    const categoryMatches = activeCategory === "All" || event.category === activeCategory;
    const searchableText = `${event.title} ${event.category} ${event.venue} ${event.description}`.toLocaleLowerCase();
    return categoryMatches && searchableText.includes(query);
  });
}

function createEventCard(event) {
  const savedEvents = getSavedEvents();
  const card = document.createElement("article");
  card.className = "event-card";
  card.innerHTML = `
    <div class="card-image-wrap">
      <img class="card-image" src="${event.image}" alt="${event.imageAlt}" loading="lazy" />
      <span class="card-category">${event.category}</span>
      <button class="card-save${savedEvents.includes(event.id) ? " is-saved" : ""}" type="button" data-save="${event.id}" aria-label="${savedEvents.includes(event.id) ? "Remove " + event.title + " from saved events" : "Save " + event.title}" aria-pressed="${savedEvents.includes(event.id)}">♥</button>
    </div>
    <div class="card-body">
      <p class="card-date"><svg class="icon" aria-hidden="true"><use href="#icon-calendar"></use></svg>${event.dateLabel}</p>
      <h3 class="card-title">${event.title}</h3>
      <p class="card-description">${event.description}</p>
      <div class="card-meta">
        <span class="card-venue"><svg class="icon" aria-hidden="true"><use href="#icon-pin"></use></svg><span>${event.venue}</span></span>
        <button class="card-details" type="button" data-details="${event.id}">Details <svg class="icon" aria-hidden="true"><use href="#icon-arrow"></use></svg></button>
      </div>
    </div>
  `;
  return card;
}

function renderEvents() {
  const visibleEvents = getVisibleEvents();
  eventGrid.replaceChildren(...visibleEvents.map(createEventCard));
  emptyState.hidden = visibleEvents.length > 0;
  eventGrid.hidden = visibleEvents.length === 0;
  resultLabel.textContent = `SHOWING ${visibleEvents.length} ${visibleEvents.length === 1 ? "EVENT" : "EVENTS"}`;
  document.querySelector("#event-count").textContent = String(events.length).padStart(2, "0");
}

function showEventDetails(eventId) {
  const event = events.find((item) => item.id === eventId);
  if (!event) return;
  eventDialogContent.innerHTML = `
    <img class="detail-image" src="${event.image}" alt="${event.imageAlt}" />
    <div class="detail-body">
      <span class="detail-category">${event.category}</span>
      <h2 id="dialog-title">${event.title}</h2>
      <div class="detail-info">
        <span><svg class="icon" aria-hidden="true"><use href="#icon-calendar"></use></svg>${formatLongDate(event.date)}</span>
        <span><svg class="icon" aria-hidden="true"><use href="#icon-pin"></use></svg>${event.venue}</span>
      </div>
      <p class="detail-description">${event.details}</p>
      <button class="button button-dark detail-register" type="button" data-register="${event.id}">Save your spot <svg class="icon" aria-hidden="true"><use href="#icon-arrow"></use></svg></button>
    </div>
  `;
  eventDialog.showModal();
}

function getSavedEvents() {
  try {
    const saved = JSON.parse(localStorage.getItem("gather-saved-events") || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    console.error("Could not read saved events from local storage.", error);
    return [];
  }
}

function toggleSavedEvent(eventId) {
  const saved = getSavedEvents();
  const updated = saved.includes(eventId) ? saved.filter((id) => id !== eventId) : [...saved, eventId];
  try {
    localStorage.setItem("gather-saved-events", JSON.stringify(updated));
  } catch (error) {
    console.error("Could not save event to local storage.", error);
  }
  renderEvents();
}

function openRegistration(eventId) {
  eventDialog.close();
  eventSelect.value = eventId || "";
  registerForm.hidden = false;
  confirmationState.hidden = true;
  registerDialog.showModal();
}

function clearFieldErrors() {
  for (const field of ["name", "email", "phone"]) {
    document.querySelector(`#${field}-error`).textContent = "";
    document.querySelector(`#register-${field}`).removeAttribute("aria-invalid");
  }
}

function showFieldError(field, message) {
  document.querySelector(`#${field}-error`).textContent = message;
  document.querySelector(`#register-${field}`).setAttribute("aria-invalid", "true");
}

function validateRegistration(formData) {
  clearFieldErrors();
  let valid = true;
  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const phone = formData.get("phone").trim();

  if (name.length < 2) {
    showFieldError("name", "Please enter your name (at least 2 characters).");
    valid = false;
  }
  if (!registerForm.elements.email.validity.valid || email.length === 0) {
    showFieldError("email", "Enter a valid email address.");
    valid = false;
  }
  if (phone && !/^[+]?[\d\s().-]{7,20}$/.test(phone)) {
    showFieldError("phone", "Enter a valid phone number, or leave this blank.");
    valid = false;
  }
  if (!formData.get("event")) {
    eventSelect.setAttribute("aria-invalid", "true");
    valid = false;
  } else {
    eventSelect.removeAttribute("aria-invalid");
  }
  return valid;
}

function updateCountdown() {
  const now = new Date();
  const nextEvent = events.find((event) => new Date(event.date) > now);
  const countdown = document.querySelector("#countdown");
  if (!nextEvent) {
    countdown.textContent = "More soon";
    return;
  }
  const remaining = new Date(nextEvent.date).getTime() - now.getTime();
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  countdown.textContent = days > 0 ? `${days} days, ${hours}h` : `${hours} hours`;
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
  themeToggle.querySelector("use").setAttribute("href", isDark ? "#icon-sun" : "#icon-moon");
  try {
    localStorage.setItem("gather-theme", theme);
  } catch (error) {
    console.error("Could not save theme preference.", error);
  }
}

for (const event of events) {
  const option = document.createElement("option");
  option.value = event.id;
  option.textContent = `${event.title} — ${event.dateLabel}`;
  eventSelect.append(option);
}
eventSelect.insertAdjacentHTML("afterbegin", '<option value="">Choose an event</option>');
renderEvents();
updateCountdown();
window.setInterval(updateCountdown, 60_000);

try {
  const savedTheme = localStorage.getItem("gather-theme");
  if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);
} catch (error) {
  console.error("Could not read theme preference.", error);
}

document.querySelectorAll(".category-chip").forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    document.querySelectorAll(".category-chip").forEach((chip) => {
      const isActive = chip === button;
      chip.classList.toggle("is-active", isActive);
      chip.setAttribute("aria-pressed", String(isActive));
    });
    renderEvents();
  });
});

searchInput.addEventListener("input", renderEvents);
document.querySelector(".reset-filters").addEventListener("click", () => {
  activeCategory = "All";
  searchInput.value = "";
  document.querySelectorAll(".category-chip").forEach((chip) => {
    const isActive = chip.dataset.category === "All";
    chip.classList.toggle("is-active", isActive);
    chip.setAttribute("aria-pressed", String(isActive));
  });
  renderEvents();
});

eventGrid.addEventListener("click", (event) => {
  const detailsButton = event.target.closest("[data-details]");
  const saveButton = event.target.closest("[data-save]");
  if (detailsButton) showEventDetails(detailsButton.dataset.details);
  if (saveButton) toggleSavedEvent(saveButton.dataset.save);
});

eventDialogContent.addEventListener("click", (event) => {
  const registerButton = event.target.closest("[data-register]");
  if (registerButton) openRegistration(registerButton.dataset.register);
});

document.querySelectorAll(".dialog-close").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});
for (const dialog of [eventDialog, registerDialog]) {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

themeToggle.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(registerForm);
  if (!validateRegistration(formData)) return;

  const registration = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    name: formData.get("name").trim(),
    email: formData.get("email").trim(),
    phone: formData.get("phone").trim(),
    eventId: formData.get("event"),
    registeredAt: new Date().toISOString()
  };
  try {
    const registrations = JSON.parse(localStorage.getItem("gather-registrations") || "[]");
    localStorage.setItem("gather-registrations", JSON.stringify([...registrations, registration]));
  } catch (error) {
    console.error("Could not save registration to local storage.", error);
    showFieldError("email", "We couldn't save your registration. Please check your browser storage and try again.");
    return;
  }

  const selectedEvent = events.find((item) => item.id === registration.eventId);
  document.querySelector("#confirmation-message").textContent =
    `Thanks, ${registration.name}! Your spot for ${selectedEvent.title} is saved. We can't wait to see you there.`;
  registerForm.hidden = true;
  confirmationState.hidden = false;
});

document.querySelector(".confirmation-close").addEventListener("click", () => registerDialog.close());
registerDialog.addEventListener("close", () => {
  registerForm.reset();
  clearFieldErrors();
  eventSelect.removeAttribute("aria-invalid");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});

const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
  document.querySelector(".nav-links").classList.toggle("is-open", !isOpen);
});
document.querySelectorAll(".nav-links .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    document.querySelector(".nav-links").classList.remove("is-open");
  });
});
