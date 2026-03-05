# Antica Heritage - Coffee Website

A premium coffee website showcasing authentic Italian coffee blends from Trieste, featuring traditional wood-fired roasting methods.

## Features

- **8 Premium Coffee Blends**: Each with unique flavor profiles and characteristics
- **Multilingual Support**: Lithuanian, English, and Russian
- **Modern Design**: Built with React, TypeScript, and Tailwind CSS
- **Product Profiles**: Detailed tasting notes, intensity ratings, and origin information
- **Responsive Design**: Optimized for all devices

## Coffee Collection

### Available Blends

1. **Nessun Dorma** (Classic Blend)
   - Notes: Hazelnut, cocoa, floral, citrus
   - Profile: Creaminess 9/10, Body 8/10, Intensity 8/10

2. **Risvegli** (Intense Blend)
   - Notes: Cocoa, hazelnut, jasmine
   - Profile: Creaminess 9/10, Body 9/10, Intensity 9/10

3. **Buonissimo** (Strong Blend)
   - Notes: Cocoa, flowers, vanilla
   - Profile: Creaminess 10/10, Body 10/10, Intensity 10/10

4. **Organic BIO** (Organic Selection)
   - Notes: Hazelnut, chocolate, structured acidity
   - Profile: Creaminess 6/10, Body 6/10, Intensity 7/10

5. **Nabucco** (Arabica Blend)
   - Notes: Cocoa, vanilla
   - Profile: Creaminess 9/10, Body 9/10, Intensity 10/10

6. **Decaffeinate** (Decaffeinated)
   - Notes: Chocolate, vanilla, flowers
   - Profile: Creaminess 8/10, Body 7/10, Intensity 7/10

7. **Figaro** (Strong Character)
   - Notes: Cocoa, spicy notes
   - Profile: Creaminess 9/10, Body 10/10, Intensity 10/10

8. **Rigoletto** (Harmonious Blend)
   - Notes: Cocoa, citrus, floral
   - Profile: Creaminess 9/10, Body 9/10, Intensity 8/10

## Technology Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Deployment**: Vercel-ready configuration

## Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment to Vercel

This project is configured for seamless deployment to Vercel:

1. **Automatic Configuration**: The `vercel.json` file handles all deployment settings
2. **Build Optimization**: Vite build process creates optimized production assets
3. **Routing**: Single Page Application routing is properly configured
4. **Environment Variables**: All necessary configurations are in place

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the framework and deploy
4. Your site will be live at `https://your-project-name.vercel.app`

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Project Structure

```
antica/
├── components/          # React components
├── public/             # Static assets
├── src/                # Source files
│   ├── App.tsx         # Main application component
│   ├── constants.ts    # Product data and constants
│   ├── types.ts        # TypeScript type definitions
│   └── LanguageContext.tsx # Internationalization
├── vercel.json         # Vercel deployment configuration
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## Customization

### Adding New Products

1. Update `constants.ts` with new product data
2. Add product images to the appropriate directory
3. Update language translations in `LanguageContext.tsx`

### Modifying Styles

The project uses Tailwind CSS with custom color variables:
- `terracotta`: Primary accent color
- `heritageBlack`: Text color
- `mustard`: Secondary accent
- `sage`: Tertiary accent
- `paper`: Background color

## Support

For questions or support regarding the coffee products or deployment:
- Contact through the website's contact form
- Business inquiries for cafes, bars, and restaurants are welcome

---

**Caffè ATT - Tradition since 1995**
*Traditional Trieste roasting over beech wood*
