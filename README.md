# samspoke.com

Personal blog and portfolio site for Sameer — writing on business, AI, analytics, and sustainability.

Built with Next.js 14, TypeScript, and Tailwind CSS. Deployed on Vercel.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Domain**: samspoke.com

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
samspoke/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/page.tsx
│   └── blog/
│       ├── page.tsx
│       └── [slug]/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── FeaturedPosts.tsx
│   ├── AboutSection.tsx
│   ├── BlogGrid.tsx
│   ├── BlogCard.tsx
│   └── NewsletterCTA.tsx
├── lib/
│   └── posts.ts
└── public/
```

## License

MIT
