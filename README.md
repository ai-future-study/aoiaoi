<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Sl6BM3P9MDyqoUE-E_KvoHlbM8gYCNkl

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
## Deploy to GitHub Pages

### Setup Steps

1. **Create a GitHub repository** and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. **Configure base path in vite.config.ts**:
   - If deploying to `https://<username>.github.io/`, keep `base: '/'`
   - If deploying to `https://<username>.github.io/<repo-name>/`, change `base: '/<repo-name>/'`

3. **Set GitHub Actions secret**:
   - Go to Settings → Secrets and variables → Actions
   - Add `GEMINI_API_KEY` with your Gemini API key value
   - This secret is used during the build process during deployment

4. **Enable Pages**:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (automatically created by GitHub Actions)

5. **Push to trigger deployment**:
   ```bash
   git push origin main
   ```
   GitHub Actions will automatically build and deploy your site to GitHub Pages.

### Manual Deployment (Optional)

You can also deploy manually using GitHub CLI or git commands:

```bash
npm run build
# Then commit the dist/ folder or use a tool like `gh-pages`
```