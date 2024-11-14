# AyatAlHaqq - Verses of Truth

**AyatAlHaqq** is a web application that allows users to read and listen to Quranic verses. It is designed to provide an intuitive and responsive user experience, making it accessible on both mobile and desktop devices. This app is built using **React.js** and **Tailwind CSS**, and it utilizes the [Quran.com API](https://api-docs.quran.com/docs/category/quran.com-api) to fetch Quranic audio, text, and other related data.

## Live Demo

Check out the live version of the app deployed on Vercel: [AyatAlHaqq on Vercel](https://ayat-al-haqq.vercel.app/)

## Features

- **Home Page**:

  - Users start on the home page, where they see two main options: **Read** or **Listen** to the Quran.
  - Displays a highlighted Surah of the day, allowing users quick access to a selected Surah.

- **Surah Navigation**:

  - A sidebar containing all 114 Surahs is accessible through a burger icon in the header.
  - Users can select any Surah from the sidebar, and it will load in the main section.

- **Read/Listen Options**:

  - Each Surah page offers two buttons allowing users to switch between reading and listening to the Surah.

- **Theming**:

  - A theme switcher in the header lets users toggle between **Dark Mode** and **Light Mode** to suit their preferences.

- **Logo and Navigation**:

  - Clicking the logo in the header redirects users back to the home page.
  - The header also includes a search icon (currently inactive), which could be implemented to enhance usability.

- **Responsive Design**:
  - The app is fully responsive and can be used seamlessly on both mobile devices and desktops.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AyKrimino/AyatAlHaqq-Verses-of-Truth.git
   ```
2. **Navigate into the project directory**:
   ```bash
   cd AyatAlHaqq-Verses-of-Truth
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **start the development server**:
   ```bash
   npm run dev
   ```

This will start the app on a local development server, typically accessible at http://localhost:3000.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **API**: [Quran.com API](https://api-docs.quran.com/docs/category/quran.com-api)
- **Hosting**: Vercel

## Project Structure

```bash
.
├── App.jsx
├── assets
│   ├── fonts
│   │   ├── p7.woff
│   │   ├── sura_names.woff2
│   │   └── UthmanicHafs1Ver18.woff2
│   └── images
│       └── logo.png
├── components
│   ├── Header.jsx
│   ├── ListenSurah.jsx
│   ├── QuranAccessOptions.jsx
│   ├── ReadSurah.jsx
│   ├── Sidebar.jsx
│   ├── SurahHeader.jsx
│   ├── SurahItem.jsx
│   ├── SurahNavigationButtons.jsx
│   ├── TodaysSurah.jsx
│   ├── Verse.jsx
│   ├── VerseNumber.jsx
│   └── Welcome.jsx
├── context
│   ├── ChaptersListContext.jsx
│   ├── SurahContext.jsx
│   └── ThemeContext.jsx
├── index.css
├── layouts
│   └── MainLayout.jsx
├── main.jsx
├── pages
│   ├── HomePage.jsx
│   └── SurahPage.jsx
└── services
    ├── ChapterService.jsx
    └── GlobalAPI.jsx
```

## API Usage

This project leverages the [Quran.com API](https://api-docs.quran.com/docs/category/quran.com-api) to retrieve audio, text, and metadata related to Quranic chapters and verses.

## Improvements and Contributions

### Needed Improvements

- **Font Quality**: Current fonts for Quranic verses could be enhanced to better suit the content. If you know of a suitable Arabic font, please consider contributing!
- **Search Functionality**: The search feature is currently inactive. Contributions to implement this feature are welcome.

### Contributing

Contributions are welcome! If you'd like to improve the app or add a new feature, feel free to fork the repository and submit a pull request.

1. Fork the repo and clone it locally.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add feature'`.
4. Push your branch: `git push origin feature-name`.
5. Submit a pull request.

## Usage

The URL structure for accessing specific Surahs follows the format:

```bash
/surah/<surah-id>/
```

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Happy Coding!
