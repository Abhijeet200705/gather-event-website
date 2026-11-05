# Gather — Event discovery & registration

A responsive event discovery website built with semantic HTML5, CSS3, and vanilla JavaScript. Browse a curated selection of local events, search by title or venue, filter by category, save favorites, and register for an event.

## Features

- Responsive layouts for mobile, tablet, and desktop
- Event cards with dates, categories, venues, descriptions, and imagery
- Search across event names, categories, venues, and descriptions
- Category filters with accessible active states
- Event detail dialogs and direct registration
- Form validation for name, email, optional phone number, and event selection
- Registration confirmation and browser-local registration storage
- Save-event buttons backed by local storage
- Persistent light/dark theme toggle
- Countdown to the next upcoming event
- Reduced-motion support and keyboard shortcut (`/`) to focus event search

## Project structure

```text
gather/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── README.md
```

## Run locally

No build step, framework, or package installation is required.

1. Download or clone this repository.
2. Open `index.html` in a browser, or serve the project folder with a local static server.
3. Use the event cards to view event details and register.

Registrations, saved events, and the chosen theme are stored in the browser's local storage on the current device. This demo does not send data to a server.

## Customize

- Edit the `events` array in `js/app.js` to add or change event information.
- Update the CSS custom properties at the top of `css/style.css` to change the colors and theme.
- Event photos are loaded from Unsplash; replace the image URLs with your own images if desired.

## Deploy

This is a static website. To deploy with GitHub Pages:

1. Push the project to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Select **Deploy from a branch**, choose your main branch and the root folder, then save.
4. Wait for the deployment to finish and copy the website URL shown in Pages settings.

You can also import the repository into Netlify or Vercel. Use the project root as the site directory; no build command is needed.
