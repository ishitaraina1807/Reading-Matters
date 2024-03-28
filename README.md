<h1 align ="center"> Reading Matters - BookFinder For You</h1>

![Reading Matters](screenshots/homepage.png)

Welcome to Reading Matters, your ultimate tool for discovering your next literary adventure! 📚🔍

You can also check out the live demo of the website [here](https://searchbooks.vercel.app/).

## About the App

![Search Result](screenshots/searchresult.png)

## Key Features

- **Search Books**: Easily search for books using keywords, titles, authors, or ISBNs. The Google Books API ensures you get accurate and relevant results.

- **Book Details**: Get comprehensive information about a book, including its title, author, cover image, description, and more. Make informed decisions about your reading choices.

- **User-Friendly Interface**: The app features an intuitive and visually pleasing interface, designed with Tailwind CSS. Enjoy a smooth and engaging browsing experience.

- **Responsive Design**: Access the app from various devices, including desktops, tablets, and smartphones. The responsive design ensures a consistent experience across platforms.

## Technologies Used

- **React**: A popular JavaScript library for building user interfaces. It provides a dynamic and efficient way to create interactive components.

- **Tailwind CSS**: A utility-first CSS framework that makes styling and designing your app a breeze. Customize the app's appearance with ease.

- **Google Books API**: Utilize the power of Google's vast book database to retrieve accurate and up-to-date book information.

- **Firebase**: Google's platform for building web and mobile applications. We use Firebase Authentication for user management and Firestore for data storage.


## Installation

Clone the Repo

```bash
git clone <reponame>
```

### Rename the .env.example file to .env file in the root directory and add the values for the environment variables
```bash
VITE_GOOGLE_BOOK_API="YOUR_BOOK_API_URL"
VITE_FIREBASE_API_KEY="YOUR_FIREBASE_API_KEY"
VITE_FIREBASE_AUTH_DOMAIN="YOUR_FIREBASE_AUTH_DOMAIN"
VITE_FIREBASE_PROJECT_ID="YOUR_FIREBASE_PROJECT_ID"
VITE_FIREBASE_STORAGE_BUCKET="YOUR_FIREBASE_STORAGE_BUCKET"
VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_FIREBASE_MESSAGING_SENDER_ID"
VITE_FIREBASE_APP_ID="YOUR_FIREBASE_APP_ID"
VITE_FIREBASE_MEASUREMENT_ID="YOUR_FIREBASE_MEASUREMENT_ID"
```
### You can refer a tutorial on how to get the firebase credentials [here](https://www.youtube.com/watch?v=ZTHdCMj3jP8)
### A tutorial on how to obtain the google books api [here](https://www.youtube.com/watch?v=s_G5CnAu69M)

Installation of dependencies

```bash
npm i or npm install
```

Start Server

```bash
npm run dev
```

# Contributing Guidelines

Before you start contributing, please take a moment to read the following guidelines to ensure a smooth and effective contribution process.

## Table of Contents

1. [Getting Started](#getting-started)
2. [How Can I Contribute?](#how-can-i-contribute)
    - [Reporting Bugs](#reporting-bugs)
    - [Suggesting Enhancements](#suggesting-enhancements)
    - [Working on Issues](#working-on-issues)
    - [Submitting Pull Requests](#submitting-pull-requests)

## Getting Started

- Fork the repository on GitHub.
- Clone your forked repository locally: `git clone https://github.com/ishitaraina1807/Reading-Matters.git`
- Change your directory to the project: `cd <project name>`
- Install project dependencies: `npm install`
- Run in server: `npm run dev`

## How Can I Contribute?

### Reporting Bugs

If you find a bug, please ensure the bug was not already reported by searching on GitHub under [Issues](https://github.com/ishitaraina1807/Reading-Matters/issues). If you can't find an existing issue addressing the problem, please [open a new issue](https://github.com/ishitaraina1807/Reading-Matters/issues/new) and provide detailed information about the bug.

### Suggesting Enhancements

If you have an idea for an enhancement, we welcome your input. Before creating a new enhancement issue, please check the existing issues to see if your enhancement idea has already been discussed. If it hasn't, [create a new issue](https://github.com/ishitaraina1807/Reading-Matters/issues/new) and outline your enhancement proposal.

### Working on Issues

Feel free to pick any open issue from our [issue tracker](https://github.com/ishitaraina1807/Reading-Matters/issues) that you find interesting. Comment on the issue that you would like to work on it so that others are aware you are addressing it. If you need more context on a particular issue, please ask for clarification.

### Submitting Pull Requests

1. Fork the repository and create your branch from `main`: `git checkout -b your-branch-name`
2. Make your changes and test thoroughly.
3. Add, commit, and push your changes to your forked repository.
4. Create a pull request to the `main` branch of the original repository.
5. Clearly describe your changes and why you think they should be merged.
6. Be willing to make any requested changes or improvements.
Thank you for contributing! 🚀
# Happy reading with the Book Finder App! If you encounter any issues or have suggestions, feel free to open an issue or reach out to us. Enjoy exploring new literary worlds! 📖🌟
