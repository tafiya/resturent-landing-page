# Restaurant Landing Page

This project is a modern and fully responsive landing page for a restaurant, created using **React**, **Tailwind CSS**, **Daisy UI**, and **React Slick** for the carousel/slider functionality.

## 🖥️ Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs quickly.
- **Daisy UI**: A Tailwind CSS component library that offers pre-styled components, simplifying UI development.
- **React Slick**: A popular carousel component library for React, allowing you to create responsive sliders.

## 📸 Features

- **Responsive Design**: The layout is responsive, ensuring it looks great on desktop, tablet, and mobile devices.
- **Smooth Carousel**: Featured sections use a smooth, modern carousel powered by React Slick.
- **Customizable UI**: Tailwind CSS and Daisy UI make it easy to customize the look and feel of the page.
- **Modern Aesthetic**: Designed with a clean, professional aesthetic for a high-quality look.

## 🛠️ Installation and Setup

To get started with this project, follow these steps:

### Prerequisites

Ensure that you have the following installed:
- [Node.js](https://nodejs.org/) (with npm)

### Steps

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/restaurant-landing-page.git
    cd restaurant-landing-page
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Install `react-slick` and `slick-carousel` for carousel functionality**:

    ```bash
    npm install react-slick --save
    npm install slick-carousel --save
    ```

4. **Run the development server**:

    ```bash
    npm start
    ```

   The site should now be running at `http://localhost:3000`.

### Additional Setup for Carousel Styling

To ensure the carousel is styled correctly, add the following CSS imports in your main CSS file (e.g., `index.css`):

```css
@import "slick-carousel/slick/slick.css";
@import "slick-carousel/slick/slick-theme.css";
