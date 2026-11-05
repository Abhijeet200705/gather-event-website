# Gather — Find your people, find your plans

**Gather** is an event discovery and registration website I made for my web-design assignment. The idea is to make it easier to find something fun to do, whether that means going to a live music night, sharing a meal, visiting an art studio, or getting outside.

The site is built with HTML, CSS, and JavaScript. You can browse events, narrow them down by category or search, read more about an event, and save a spot using the registration form. It also adapts to smaller screens, so the main features work on phones as well as computers.

## Links

- **Live website:** https://abhijeet200705.github.io/gather-event-website/
- **GitHub repository:** https://github.com/Abhijeet200705/gather-event-website

## What you can do on the site

- Browse nine sample events, including music, food and drink, arts and culture, and outdoor activities.
- Search by event name, category, venue, or a word in the event description.
- Select a category to show only events of that type. Choose **All events** to clear the category filter.
- Select **Details** on an event card to see its full description, date, and venue.
- Save or unsave events by selecting the heart on a card.
- Register by entering a name and email address, choosing an event, and optionally adding a phone number.
- Switch between light and dark themes. The website remembers the selected theme in that browser.
- See a countdown to the next event on the homepage.

The `/` key is also a shortcut for focusing the event search box. Press it when you are not typing in another field.

## Registration and saved data

The registration form checks that a name has at least two characters and that the email address is valid. A phone number is optional; if provided, it must have a valid format. The form shows an error next to an invalid field and only displays the confirmation after all required information has been accepted.

This project is a front-end demonstration, not a connected booking service. Successful registrations, saved events, and the theme preference are kept in the browser's local storage on the device used to submit the form. They are **not sent to a server**, and will not automatically appear on another device. Avoid entering sensitive personal information.

## How the project is organized

```text
gather-event-website/
├── index.html       # Page content, navigation, event area, and dialogs
├── css/
│   └── style.css    # Layout, colors, responsive styles, and animations
├── js/
│   └── app.js       # Sample event data, search, filters, forms, and storage
├── README.md        # Project information and setup instructions
└── .gitignore       # Files Git should ignore
```

### A little more about the code

- **`index.html`** provides the page structure and accessible labels. Event cards are filled in by JavaScript, and the event details and registration forms open in dialogs.
- **`css/style.css`** contains the visual design, including the responsive layouts, reusable buttons, event cards, and light and dark color palettes. It also respects the device's reduced-motion preference.
- **`js/app.js`** contains the sample event list and the behavior behind event search, category filters, saved events, the countdown, theme switching, and registration validation.

The event photos are loaded from Unsplash, and the page uses Google Fonts when an internet connection is available. Replace these URLs with your own assets if you want to make the site independent of those services.

## Run it on your computer

There is no build step, framework, or dependency installation.

1. Download the project from GitHub using **Code → Download ZIP**, then extract it. Or clone it from a terminal:

   ```bash
   git clone https://github.com/Abhijeet200705/gather-event-website.git
   ```

2. Open the project folder and open `index.html` in a browser.
3. Try the search, category buttons, event details, theme toggle, and registration form.

If you are working in VS Code, you can also open the folder there and use a local preview extension. A simple static server is optional; the project does not need a server or build command.
