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

## AWS S3 + Lambda Media Uploads

This project integrates AWS for media storage and serverless functions while continuing to use Firebase for hosting, auth, and Firestore. We use:

- AWS S3 for file storage
- AWS Lambda (via AWS SAM) to generate presigned URLs
- AWS HTTP API (API Gateway v2) for invoking the Lambdas
- Firebase ID token verification inside Lambdas using jsonwebtoken with Google Secure Token X509 certs (no private keys stored)

### What was added

- `aws/template.yaml` – SAM template defining two Lambdas and an HTTP API with CORS
- `aws/functions/presign-upload/` – Lambda to generate S3 presigned PUT URLs
- `aws/functions/presign-download/` – Lambda to generate S3 presigned GET URLs
- `src/services/awsMedia.js` – Frontend service to call the API and upload via presigned URL
- `src/components/common/FileUploader.jsx` – Reusable uploader component (styled-components at bottom, label has icon)

### Prerequisites

- AWS account and credentials configured locally (`aws configure`)
- AWS SAM CLI installed

### 1) Create an S3 bucket for media (choose your region)

Example:

```
aws s3 mb s3://your-media-bucket-name --region ap-southeast-1
```

### 2) Set S3 bucket CORS

This is required for browser uploads via presigned URL. Adjust the allowed origins to match your sites.

Bucket CORS (JSON):

```
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["PUT", "GET", "HEAD"],
    "AllowedOrigins": [
      "http://localhost:4000",
      "http://localhost:4173",
      "https://YOUR_FIREBASE_SITE.web.app",
      "https://YOUR_FIREBASE_SITE.firebaseapp.com"
    ],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3000
  }
]
```

Apply via console or CLI:

```
aws s3api put-bucket-cors \
  --bucket your-media-bucket-name \
  --cors-configuration file://bucket-cors.json
```

### 3) Deploy SAM stack (HTTP API + Lambdas)

From `aws/` directory:

```
sam build
sam deploy --guided
```

Or from repo root (specify template file):

```
sam build --template-file aws/template.yaml
sam deploy --guided --template-file aws/template.yaml
```

During the guided deploy, provide parameters:

- `BucketName` – your S3 media bucket name
- `FirebaseProjectId` – your Firebase project ID (e.g. `hyacinthattendance`)
- `AllowedOrigins` – comma-separated list of your app origins (same values as in S3 CORS)

After deploy, note the output `ApiBaseUrl` (e.g., `https://abc123.execute-api.ap-southeast-1.amazonaws.com`).

### 4) Configure environment variables

Set the API base URL in your Vite env files:

- `.env.development` – `VITE_AWS_API_BASE_URL=YOUR_API_BASE_URL`
- `.env.production` – `VITE_AWS_API_BASE_URL=YOUR_API_BASE_URL`

Rebuild if needed and restart dev server.

### 5) Use in frontend

Option A: use the reusable component in any page:

```jsx
// adjust the import path to where FileUploader.jsx sits relative to your file
import FileUploader from '../components/common/FileUploader';

// inside your component render
<FileUploader label="Upload Attachment" prefix="attachments" onUploaded={({ key }) => {
  // Save `key` to Firestore if you want to reference the file later
}} />
```

Option B: call the service directly:

```js
import { presignUpload, uploadToS3 } from '../../services/awsMedia';

const { url, key } = await presignUpload({ file, prefix: 'attachments' });
await uploadToS3(url, file, file.type);
// Persist `key` in Firestore as needed
```

### Notes

- Files are written under `s3://<bucket>/<uid>/<prefix>/<YYYY>/<MM>/<DD>/<ts>-<filename>` so each user is namespaced.
- Download presigning checks that the requested key starts with the caller's UID for security.
- We intentionally do NOT use Firebase Cloud Functions, per project rules.
- If you enable the Firebase Auth Emulator, ID tokens are not signed by Google and will NOT validate in Lambda using Google certs. Keep `VITE_USE_AUTH_EMULATOR=false` when testing AWS media uploads, or adjust the Lambda to accept emulator tokens only in dev.
