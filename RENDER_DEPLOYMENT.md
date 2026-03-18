# Render Deployment Guide for CoachingDekho

## Prerequisites
- Git repository pushed to GitHub/GitLab/Gitea
- Render account (free tier available)

## Deployment Options

### Option 1: Docker-based Deployment (Recommended)
The `Dockerfile` and `render.yaml` are already configured for Docker deployment.

**Steps:**
1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Click "New +" → "Web Service"
4. Connect your Git repository
5. Render will automatically detect the `render.yaml` and deploy

**Deployment will automatically:**
- Build the Docker image
- Install dependencies with `npm install --legacy-peer-deps`
- Build the project with `npm run build`
- Start the server with `npm start`
- Serve on `https://<your-service-name>.onrender.com`

### Option 2: Native Node.js Deployment (Faster Builds)
Alternative native Node.js setup:

1. In Render dashboard, connect your GitHub repo
2. Select "Node" as the runtime
3. Set these values:
   - **Build Command:** `npm install --legacy-peer-deps && npm run build`
   - **Start Command:** `npm start`
   - **Node Version:** 20 or higher

4. Add environment variables if needed:
   - `NODE_ENV: production`

5. Click "Create Web Service"

## Environment Variables
Set these in Render dashboard if needed:
- `NODE_ENV=production`
- Any API keys or configuration

## Port Configuration
The app automatically listens on the `PORT` environment variable (Render sets this dynamically).
Default fallback: `3000`

## After Deployment
- Your site will be available at: `https://<your-service-name>.onrender.com`
- The server will use port provided by Render
- Static files from `public/static` are served automatically
- API endpoints available at `/api/*`

## Troubleshooting

### Build Fails
- Check build logs in Render dashboard
- Ensure `npm install --legacy-peer-deps` works locally
- Verify Node version compatibility

### Static Files Not Loading
- Ensure `public/static` directory exists
- Check `serveStatic` middleware configuration in `src/index.tsx`

### Port Issues
- Don't hardcode port; the app automatically uses Render's PORT env variable

## Local Testing Before Deploy
```bash
# Install dependencies
npm install --legacy-peer-deps

# Build for production
npm run build

# Start the server (requires PORT env var or defaults to 3000)
PORT=3000 npm start

# Visit http://localhost:3000
```

## Files Modified for Render
- `vite.config.ts` - Changed from Cloudflare to Node.js build
- `src/index.tsx` - Changed from Cloudflare middleware to Node.js middleware
- `package.json` - Added `start` script for production
- `Dockerfile` - Docker configuration for deployment
- `render.yaml` - Render deployment configuration
- `.dockerignore` - Docker build optimization

## Support
For Render-specific issues, check: https://render.com/docs
