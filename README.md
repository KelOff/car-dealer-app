# Car Dealer App

This is a **Car Dealer App** built with [Next.js](https://nextjs.org/) that allows users to filter vehicles by type and model year and view the filtered results on a separate page. The app uses Tailwind CSS for styling and incorporates modern features like React Suspense for data fetching and loading state handling.

## Features

- **Filter vehicles** by make and model year
- **Dynamic result pages** based on selected make and model year
- **Static page generation** for fast loading using `getStaticProps`
- **Error handling** for data fetching issues
- **Tailwind CSS** for responsive and modern UI design
- **React Suspense** for managing data fetching and loading states

## Getting Started

### Prerequisites

Ensure you have the following installed on your system: - [Node.js](https://nodejs.org/) v14 or higher - [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) as your package manager

### Installation

1. Clone the repository:

   `bash`

   - git clone https://github.com/your-username/car-dealer-app.git
   - cd car-dealer-app

## Running the Development Server

1. Start the development server:
   npm run dev

# or

    yarn dev

2. Open http://localhost:3000 with your browser to view the app.

## Building the Application

- To create an optimized production build:
  npm run build

- To run the production server:
  npm start

## Running ESLint and Prettier

- To maintain code quality and formatting consistency, ESLint and Prettier are set up in the project. - Linting
  npm run lint - Formatting:
  npm run format

## Environment Variables

- To handle API requests, create a .env.local file in the root directory with the following environment variable:

  NEXT_PUBLIC_VPIC_API_BASE_URL=https://vpic.nhtsa.dot.gov/api/vehicles

- The app fetches vehicle data using the Vehicle API.

## Project Structure

- /src/app - Main application files.
  -- page.js - Home page for the vehicle filter.
  -- layout.js - Defines the layout of the app.
- /src/styles/globals.css - Tailwind CSS and global styles.
- /src/components - Reusable components like the vehicle filter.

#### Additional Information

This project uses:

    - Next.js for server-side rendering and static site generation
    - Tailwind CSS for UI styling
    - React Suspense for data fetching
    - VPIC API for fetching vehicle data based on type and year

#### Learn More

- Next.js Documentation - Learn about Next.js features and API.
- Tailwind CSS Documentation - Learn how to use Tailwind CSS.
