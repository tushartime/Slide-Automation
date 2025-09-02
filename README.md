# Slide - Instagram Automation Platform

A Next.js application that automates Instagram DMs and comments to boost engagement and turn interactions into business opportunities.

## 🚀 Features

- **Instagram Automation**: Automate DM responses and comment replies
- **User Authentication**: Secure authentication with Clerk
- **Subscription Management**: Stripe integration for premium plans
- **Dashboard**: Comprehensive analytics and automation management
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.7 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Authentication**: Clerk
- **Database**: Prisma ORM
- **Payments**: Stripe
- **State Management**: Redux Toolkit + React Query
- **Package Manager**: Bun (recommended) or npm

## 📋 Prerequisites

- Node.js 18+ or Bun
- Git
- Database (PostgreSQL, MySQL, SQLite, etc.)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd Slide
```

### 2. Install dependencies

```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="your_database_connection_string"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

# Stripe (optional - app works without it)
STRIPE_CLIENT_SECRET="your_stripe_secret_key"
STRIPE_SUBSCRIPTION_PRICE_ID="your_stripe_price_id"
NEXT_PUBLIC_HOST_URL="http://localhost:3000"

# OpenAI (for AI features)
OPENAI_API_KEY="your_openai_api_key"
```

### 4. Database Setup

```bash
# Generate Prisma client
bunx prisma generate

# Run database migrations
bunx prisma migrate dev

# (Optional) Seed the database
bunx prisma db seed
```

### 5. Start Development Server

```bash
# Using Bun
bun run dev

# Or using npm
npm run dev
```

The application will be available at `http://localhost:3000`.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── (protected)/       # Protected dashboard pages
│   └── (website)/         # Public marketing pages
├── components/            # Reusable UI components
│   ├── global/           # Global components
│   └── ui/               # shadcn/ui components
├── actions/              # Server actions
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
├── providers/            # React context providers
├── redux/                # Redux store and slices
├── types/                # TypeScript type definitions
└── constants/            # Application constants
```

## 🔧 Available Scripts

```bash
# Development
bun run dev              # Start development server
bun run build            # Build for production
bun run start            # Start production server
bun run lint             # Run ESLint

# Database
bunx prisma generate     # Generate Prisma client
bunx prisma migrate dev  # Run database migrations
bunx prisma studio       # Open Prisma Studio
bunx prisma db push      # Push schema changes to database
```

## 🎨 UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) components built on top of Radix UI and Tailwind CSS. Components are located in `src/components/ui/`.

## 🔐 Authentication

Authentication is handled by [Clerk](https://clerk.com/). The app supports:
- Email/password authentication
- Social logins
- User management
- Protected routes

## 💳 Payments

Payment processing is handled by Stripe. The app includes:
- Subscription management
- Payment forms
- Webhook handling
- Mock payment mode for development

## 🗄️ Database

The application uses Prisma ORM with support for multiple databases:
- PostgreSQL (recommended for production)
- MySQL
- SQLite (for development)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🐛 Troubleshooting

### Common Issues

1. **Prisma Engine Error**: Ensure Prisma CLI and client versions match
2. **Stripe Errors**: App works without Stripe - set environment variables only when needed
3. **Hydration Warnings**: Fixed by moving `suppressHydrationWarning` to html element
4. **Client Component Errors**: Add `"use client"` directive to components using hooks

### Development Notes

- The app is configured to work without Stripe for development
- Mock payment URLs are provided when Stripe is not configured
- All client-side hooks require `"use client"` directive

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support, email support@slide.com or create an issue in the repository.

---

**Note**: This application is designed for Instagram automation and engagement. Please ensure compliance with Instagram's Terms of Service and API usage policies.