# CleverTap Web_Sdk Integration

This project is a web application built with HTML and Tailwind CSS, integrated with CleverTap for user engagement and analytics.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed a recent version of Node.js and npm.
- You have a text editor like VS Code installed.
- You have a basic understanding of HTML and CSS.

## Setup and Installation

Follow these steps to get your development environment set up:

1. Clone the repository: `git clone https://github.com/Ciriously/CleverTap_Test_WebSDK`
2. Navigate into the project directory: `cd CleverTap_Test_WebSDK`
3. Install the dependencies: `npm install`
4. Install Tailwind CSS via npm: `npm install tailwindcss`
5. Build your CSS: `tailwindcss -i ./src/input.css -o ./public/styles.css --watch`

## Running the Project

1. Open the project in your text editor.
2. Open the `index.html` file in your browser to view the website(live server extension on VsCode).

## Building the CSS

Whenever you make changes to your Tailwind CSS file, you need to build it again using the following command:

```bash
npx tailwindcss build src/tailwind.css -o dist/tailwind.css
```

You can also use the npm run build script to watch for changes in your CSS file and automatically rebuild your CSS:

```bash
npm run build
```

## Documentation

For more detailed information about the project, refer to the following documents:

- [Documentation](./CleverTap%20Assingment%20WebSdk%20-%20Aditya_Mishra.pdf)
- [CleverTap Documentation](https://developer.clevertap.com/docs/getting-started)
