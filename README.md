# One-Pager PRD Creator

A beautiful React application that helps you turn vague product ideas into clear, structured one-pager Product Requirements Documents (PRDs).

## Features

- **Simple 3-Question Interface**: Answer three key questions about your product
- **AI-Powered Generation**: Uses Claude AI to generate professional PRDs
- **Beautiful UI**: Modern glassmorphism design with animated backgrounds
- **Sample Examples**: Pre-filled examples for Team Dashboard, Shopping App, and Fitness Tracker
- **Export Options**: Copy to clipboard or download as Markdown
- **Real-time Preview**: See your PRD rendered in real-time

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd one-page-prd
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Claude API Integration

The application currently uses a mock Claude API integration located in `public/claude-api.js`. To use the real Claude API:

### Option 1: Direct API Integration (Client-side)

⚠️ **Warning**: This exposes your API key in the browser. Only use for development/testing.

1. Get your API key from [Anthropic Console](https://console.anthropic.com/)
2. Install the Anthropic SDK:
```bash
npm install @anthropic-ai/sdk
```
3. Update `public/claude-api.js` to use the real API

### Option 2: Backend Proxy (Recommended)

For production, create a backend API that:
1. Receives the prompt from the frontend
2. Calls Claude API securely with your API key
3. Returns the response to the frontend

Example backend endpoint:
```javascript
// Express.js example
app.post('/api/generate-prd', async (req, res) => {
  const { prompt } = req.body;

  const response = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 4096,
    messages: [{ role: 'user', content: prompt }]
  });

  res.json({ content: response.content[0].text });
});
```

Then update `window.claude.complete` in `public/claude-api.js` to call your backend:
```javascript
window.claude = {
  complete: async (prompt) => {
    const response = await fetch('/api/generate-prd', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await response.json();
    return data.content;
  }
};
```

## Project Structure

```
one-page-prd/
├── public/
│   └── claude-api.js       # Claude API integration
├── src/
│   ├── components/
│   │   └── PRDCreator.jsx  # Main PRD creator component
│   ├── App.jsx             # App entry point
│   ├── main.jsx            # React DOM entry
│   └── index.css           # Tailwind CSS imports
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
└── vite.config.js          # Vite configuration
```

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **Claude AI**: AI-powered PRD generation

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Customization

### Changing the PRD Template

Edit the prompt template in `src/components/PRDCreator.jsx` in the `generatePRD` function to customize the PRD structure and sections.

### Adding More Examples

Add new examples to the `sampleExamples` array in `src/components/PRDCreator.jsx`:

```javascript
{
  name: 'Your Example',
  icon: '🎯',
  data: {
    question1: 'Product description...',
    question2: 'Target users...',
    question3: 'Key features...'
  }
}
```

### Styling

The app uses Tailwind CSS. Modify classes in the JSX or extend the theme in `tailwind.config.js`.

## Deployment

### GitHub Pages with GitHub Actions (Recommended - Automated!)

This project includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages when you push to the `main` branch.

**One-time setup**:

1. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under "Build and deployment"
   - Source: Select **"GitHub Actions"**

2. **Push to main branch**:
   ```bash
   git push origin main
   ```

That's it! The GitHub Action will automatically:
- Build your app
- Deploy to GitHub Pages
- Your site will be live at: `https://yourusername.github.io/one-page-prd/`

**Workflow file**: `.github/workflows/deploy.yml` - automatically triggers on push to main or can be run manually from the Actions tab.

**Note**: The app is configured with `base: '/one-page-prd/'` in `vite.config.js`. If you rename the repo, update this value accordingly.

### Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
npm run deploy
```

This uses the `gh-pages` package to deploy the `dist` folder to a `gh-pages` branch.

### Other Hosting Options

Build the app for production:

```bash
npm run build
```

The built files will be in the `dist` directory. Deploy to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist` folder
- **AWS S3**: Upload `dist` contents
- **Cloudflare Pages**: Connect your repo and deploy

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.