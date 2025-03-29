# Vite jQuery Template

A modern multi-page web application template using Vite, jQuery, and Vitest for testing.

## Features

- Built with [Vite](https://vitejs.dev/) for fast development and optimized production builds
- [jQuery](https://jquery.com/) integration for DOM manipulation
- Multi-page application structure with HTML pages for different routes
- Testing with [Vitest](https://vitest.dev/) and test coverage reporting
- Proper module aliasing for clean imports

## Project Structure

```
vite-jquery-template/
├── src/                   # Source files
│   ├── index.html         # Home page
│   ├── assets/
│   │   ├── css/           # CSS styles
│   │   └── js/            # JavaScript modules
│   └── pages/             # Additional HTML pages
│       ├── about.html
│       └── contact.html
├── tests/                 # Test files
│   ├── setup.js           # Test setup configuration
│   └── unit/              # Unit tests
├── dist/                  # Build output (created when building)
├── node_modules/          # Dependencies
├── vite.config.js         # Vite configuration
├── vitest.config.js       # Vitest configuration
└── package.json           # Project metadata and scripts
```

## Getting Started

### Prerequisites

- Node.js (v18.x or later required for Vite 6)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd vite-jquery-template

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The development server will start at http://localhost:3000 with hot module replacement enabled.

### Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

The build output will be in the `dist` directory.

## Testing

```bash
# Run tests in watch mode
npm test

# Run tests with UI
npm run test:ui

# Run tests once
npm run test:run

# Generate test coverage report
npm run coverage
```

## License

This project is open source and available under the [MIT License](LICENSE).