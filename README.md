# Hyacinth Attendance System

A web application for managing attendance tracking.

## Development Setup

### Prerequisites
- Node.js (v18+)
- npm
- Firebase CLI (`npm install -g firebase-tools`)

### Installation
1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

#### Development with Production Firebase
To run the development server with production Firebase:
```
npm run dev
```

#### Development with Firebase Emulators
To run with local Firebase emulators:
1. Start the emulators and development server:
   ```
   npm run dev:full
   ```
2. Or start them separately:
   ```
   npm run dev:emulator  # In one terminal
   npm run dev           # In another terminal
   ```

### Building and Deploying

#### Build for Production
```
npm run build:prod
```

#### Deploy to Firebase
```
npm run deploy
```
Or manually:
```
npm run build:prod
firebase deploy
```

## Environment Configuration

The application uses different environment configurations:

- `.env.development` - Used during local development
- `.env.production` - Used for production builds

## Troubleshooting

### Development vs Production Discrepancies

If you notice differences between your development environment and production:

1. Make sure you're using the correct environment:
   - For testing with production data: `npm run dev`
   - For testing with emulators: `npm run dev:full`

2. Ensure your latest changes are deployed:
   - Run `npm run deploy` to build and deploy your latest changes

3. Check the browser console for any connection errors to Firebase services

4. Clear your browser cache if you suspect cached resources are causing issues
