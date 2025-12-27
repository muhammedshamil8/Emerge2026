# Emerge2026

A modern conference website built with React, featuring a comprehensive admin panel, user registration, and an engaging landing page. This platform is designed to manage conference information, participants, and feedback.

## 📋 Features

- **Landing Page**: Showcase conference details, speakers, and event information
- **User Registration**: Streamlined registration system for conference attendees
- **Login System**: Secure authentication with user accounts
- **Admin Panel**: Comprehensive dashboard to manage:
  - Conference details and scheduling
  - Participant registrations
  - Committee information
  - Abstract submissions
- **Feedback Form**: Collect participant feedback on the conference
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Data Management**: Excel export capabilities with XLSX support

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4 + PostCSS
- **Routing**: React Router DOM 6.28
- **UI Components**: Ant Design 5.22, Lucide React, React Icons
- **Backend**: Supabase (PostgreSQL)
- **State Management**: React Hooks
- **Animations**: Motion (Framer Motion alternative)
- **Data Handling**: XLSX for Excel exports
- **Utilities**: UUID for unique identifiers, Moment.js for date handling

## 📁 Project Structure

```
src/
├── assets/              # Images, icons, and logos
│   ├── brochure/
│   ├── icons/
│   ├── images/
│   └── logo/
├── layout/              # Layout components
├── libs/                # Utilities and helpers
│   ├── createClient.js  # Supabase client setup
│   └── useAuth.jsx      # Authentication hook
├── pages/               # Page components
│   ├── Home/            # Landing page
│   ├── Login/           # Login page
│   ├── Register/        # Registration page
│   ├── Admin/           # Admin dashboard
│   ├── Committee/       # Committee management
│   ├── AbstractForm/    # Abstract submission
│   └── FeedbackForm/    # Feedback collection
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Emerge2026
```

2. Install dependencies:
```bash
npm install
```

3. Configure Supabase:
   - Set up your Supabase project
   - Update your credentials in `src/libs/createClient.js`

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the host specified by Vite)

## 📦 Available Scripts

- `npm run dev` - Start development server with host access
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality

## 🔐 Authentication

The project uses Supabase for authentication. Key authentication utilities are located in:
- `src/libs/useAuth.jsx` - Custom hook for authentication
- `src/pages/Login/` - Login page
- `src/pages/Register/` - Registration page

## 🗄️ Database

Database configuration and Supabase client initialization:
- `src/libs/createClient.js` - Initialize Supabase client

## 📝 Forms & Data

- **Abstract Form**: Located in `src/pages/AbstractForm/`
- **Feedback Form**: Located in `src/pages/FeedbackForm/`
- **Excel Export**: Supports XLSX format for data export

## 🎨 Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **PostCSS** for CSS processing
- **Ant Design** components for UI consistency

Main styles: `src/assets/styles/index.css`

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop browsers
- Tablets
- Mobile devices

## 🚢 Deployment

The project includes a `vercel.json` configuration for Vercel deployment. To deploy:

```bash
npm run build
# Deploy to Vercel or your preferred hosting
```

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `eslint.config.js` - ESLint rules
- `vercel.json` - Vercel deployment configuration

## 📄 License

This project is part of the Emerge2026 conference initiative.

## 🤝 Contributing

Contributions are welcome! Please ensure code follows the project's ESLint configuration.

## 📞 Support

For issues or questions, please contact the development team or open an issue in the repository.


