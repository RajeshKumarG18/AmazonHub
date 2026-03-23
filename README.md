# AmazonHub - Amazon-like E-Commerce Platform

A modern, full-featured e-commerce website built with React, TypeScript, Tailwind CSS, and Firebase as backend.


## Features:

### Core Functionality
- **Product Catalog**: Browse and search through a wide range of products
- **Product Details**: View detailed product information, images, and specifications
- **Shopping Cart**: Add/remove items, update quantities, persistent storage
- **Checkout Flow**: Complete checkout process with shipping and payment forms
- **User Account**: Profile management, order history, wishlist, and settings
- **Category Filtering**: Filter products by category
- **Price Sorting**: Sort by price (low to high, high to low) and rating
- **Search**: Full-text search across product names and descriptions
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop


### Design & UX
- **Modern UI**: Clean, professional design with gradients and smooth animations
- **Framer Motion**: Beautiful page transitions and micro-interactions
- **Lucide Icons**: Consistent, modern icon set
- **Color Scheme**: Premium dark navy with amber/orange accents
- **Glassmorphism**: Frosted glass effects on cards and modals
- **Hover Effects**: Engaging hover states and transitions


##  Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Firebase (Authentication, Firestore)
- **State Management**: React Context API
- **Build Tool**: Vite


## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with search and cart
│   ├── Footer.tsx      # Site footer
│   ├── ProductCard.tsx # Product display card
│   └── CartModal.tsx   # Shopping cart modal
├── contexts/           # React Context providers
│   └── CartContext.tsx # Shopping cart state management
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Products.tsx    # Product listing with filters
│   ├── ProductDetail.tsx # Individual product page
│   ├── Cart.tsx        # Shopping cart page
│   ├── Checkout.tsx    # Checkout process
│   └── Account.tsx     # User account management
├── lib/                # Utility libraries
│   └── firebase.ts     # Firebase configuration
├── data/               # Mock data
│   └── products.ts     # Sample products and categories
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared interfaces
├── App.tsx             # Main app component with routing
├── main.tsx            # Entry point
└── index.css           # Global styles
```


## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Firebase account (for backend features)


### Follow the installation process below:

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AmazonHub
   ```

2. **Install dependencies of node js**
   ```bash
   npm install
   ```
3. **Verify the installation of node js**
   ```bash
   1. node -v
   2. npm -v
   ```

4. **Run the development server as localhost to test the development in browser**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`


6. **Set up Firebase**
   
   a. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com/)
   
   b. Enable Authentication (Email/Password)
   
   c. Create a Firestore database
   
   d. Get your Firebase config from Project Settings
   
   e. Create a `.env` file in the root directory:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

##  Deployment

### Deploy to Firebase

1. **Install Globally**
   ```bash
   npm install -g firebase-tools
   ```

2. **Verify and Check installation version**
   ```bash
   firebase --version
   ```

3. **Login to Firebase**
   ```bash
   firebase login
   ```

4. **Create a Firebase Project**
   

5. **Initialize Firebase in Your Project**
   ```bash
   cd your-project-folder
   ```
   ```bash
   firebase init
   ```


### Build for Production

```bash
npm run build
```

### Deploy to Firebase

   ```bash
   npm run deploy
   ```


>> The built files will be in the `dist/` directory.


## Pages & Routes

- `/` - Home page with featured products and categories
- `/products` - Product catalog with search and filters
- `/product/:id` - Individual product details
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/account` - User account management

## Design System

### Colors
- **Primary**: Slate-900 (#0f172a) - Dark navy backgrounds
- **Accent**: Amber-500 to Orange-500 gradient - CTAs and highlights
- **Text**: Slate-900 for headings, Slate-600 for body
- **Background**: Slate-50 for main content, White for cards

### Typography
- **Font Family**: Inter (system fonts fallback)
- **Headings**: Bold, 2xl-4xl sizes
- **Body**: Regular, base-lg sizes
- **Buttons**: Semibold, tracking-wide

### Components
- **Cards**: White background, rounded-xl, shadow-lg, border-slate-200
- **Buttons**: Gradient amber-to-orange, hover scale effects
- **Inputs**: Border-slate-300, focus ring-amber-500
- **Modals**: Backdrop blur, slide-in animations

## Firebase Integration

The app is set up for Firebase integration:

### Authentication
- Email/Password authentication
- User session management
- Protected routes

### Firestore
- Product catalog storage
- User data
- Order history
- Wishlist items

To enable full Firebase functionality:
1. Complete Firebase setup in `.env`
2. Enable Authentication providers
3. Set up Firestore security rules
4. Add product data to Firestore

## Shopping Cart Features

- **Persistent Storage**: Cart saved to localStorage
- **Quantity Management**: Increase/decrease item quantities
- **Remove Items**: Remove products from cart
- **Price Calculation**: Automatic subtotal, tax, and total
- **Empty State**: Clear messaging when cart is empty

## Search & Filtering

- **Full-text Search**: Search product names and descriptions
- **Category Filter**: Filter by product category
- **Price Range**: Filter by maximum price
- **Sorting Options**:
  - Featured (default)
  - Price: Low to High
  - Price: High to Low
  - Highest Rated

## Responsive Design

- **Mobile**: Stacked layouts, hamburger menu, touch-friendly
- **Tablet**: Optimized grid layouts, horizontal scrolling
- **Desktop**: Full-featured layouts, sidebar navigation

##  Future Enhancements

- [ ] Complete Firebase Authentication integration
- [ ] Real-time Firestore product sync
- [ ] Payment gateway integration (Stripe)
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Order tracking
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Product comparison
- [ ] Advanced filtering

##  License

This project is open source and available under the MIT License.

##  Acknowledgments

- Product images from Unsplash
- Icons from Lucide React
- Design inspiration from Amazon and modern e-commerce platforms

## Live Demo


Check out the live demo: 1. Project Console:  https://console.firebase.google.com/project/hu-50d8d/overview
                         2. Live Hosting URL: https://hu-50d8d.web.app


The AmazonHub, an e-commerce platform developed to deliver a seamless and efficient online shopping experience.

Your feedback and insights would be highly valuable as we continue to refine and enhance the platform.

---

Built with difficulties using React, TypeScript, and Tailwind CSS