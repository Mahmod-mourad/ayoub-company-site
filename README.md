
### House Plast - README.md Content in English

Here's a comprehensive README.md content in English for your House Plast GitHub repository:

```markdown
# House Plast - Premium Plastic Products Website

![House Plast Logo](public/logo.png)

A comprehensive website for House Plast, a company specializing in manufacturing and selling high-quality plastic products. The website provides an easy-to-use interface for customers to browse products and order them via WhatsApp.

## 🚀 Key Features

- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Multilingual Support**: Full support for Arabic and English with seamless switching
- **Product Showcase**: Dedicated pages for displaying products with advanced filtering and search
- **Product Details**: Detailed pages for each product with multiple images and specifications
- **WhatsApp Ordering**: Ability to order products directly via WhatsApp
- **Multiple Sections**: Pages for news, FAQs, company information, and contact
- **Modern Design**: Attractive and user-friendly interface

## 🛠️ Technologies Used

- **Next.js 14**: React framework for modern applications
- **TypeScript**: For writing safe and maintainable code
- **Tailwind CSS**: For rapid and flexible UI design
- **Supabase**: For database management and storage
- **Lucide Icons**: Comprehensive icon library
- **React Hooks**: For application state management
- **Responsive Design**: Responsive layout for all screen sizes
- **SEO Optimization**: Search engine optimization

## 📋 Project Structure

```

/app                   # Main page components
/about               # About us page
/products            # Products page
/products/[id]       # Product details page
/news                # News page
/faqs                # FAQs page
/contact             # Contact page
/components            # Reusable components
/hooks                 # Custom React Hooks
/lib                   # Helper functions and services
/public                # Static files (images, icons)
/translations          # Translation files
/types                 # TypeScript definitions

```plaintext

## 🚀 How to Run the Project

### Prerequisites

- Node.js (version 18 or later)
- npm, yarn, or pnpm

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/house-plast.git
   cd house-plast
```

2. Install dependencies:

```shellscript
npm install
# or
yarn install
# or
pnpm install
```


3. Set up environment variables:

1. Create a `.env.local` file in the root directory
2. Add the following environment variables:

```plaintext
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```





4. Run the development server:

```shellscript
npm run dev
# or
yarn dev
# or
pnpm dev
```


5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.


## 📱 Future Features

- Content Management System (CMS) for administrators
- Customer login system
- Integrated shopping cart
- Electronic payment system
- Social media integration
- Improvements in user experience and design
## Additional Project Explanation

You can add this explanation in the "About" section of your website or in your README file:

### What I Developed in This Project:

1. **Professional User Interface Design**: Designed a modern and attractive user interface that reflects the House Plast brand identity, focusing on ease of use and a seamless user experience.

2. **Multilingual System Development**: Developed a complete system supporting both Arabic and English languages with seamless switching, including page direction changes (RTL/LTR) and adaptation of design elements.

3. **Product Display System**: Developed an integrated system for displaying products with category filtering and search capabilities, and detailed pages for each product showing specifications and images.

4. **WhatsApp Integration**: Developed a product ordering system via WhatsApp that allows customers to send their orders directly with product details and quantity.

5. **Multiple Page Development**: Created multiple pages for the website including home page, about us, products, news, FAQs, and contact us.

6. **Supabase Integration**: Connected the website to a Supabase database for storing and retrieving product and news data.

7. **Performance and SEO Optimization**: Applied best practices to improve website performance and search engine optimization (SEO).

8. **Responsive Design Development**: Ensured that the website works perfectly on all screen sizes from mobile phones to desktop computers.

### Detailed Tools and Technologies Used:

1. **Next.js 14**: Used the latest version of the Next.js framework to take advantage of features such as App Router, Server Components, and performance improvements.

2. **TypeScript**: Used TypeScript to ensure type safety and improve code maintainability.

3. **Tailwind CSS**: Relied on Tailwind CSS to develop the user interface quickly and efficiently, while maintaining design consistency.

4. **Supabase**: Used Supabase as a backend service for storing and retrieving data, taking advantage of features such as storage and authentication.

5. **React Hooks**: Developed custom hooks for managing application state, such as useTranslation for managing translations and useCart for managing the shopping cart.

6. **Lucide Icons**: Used the Lucide icon library to ensure consistency and quality of icons throughout the site.

7. **Responsive Design**: Applied responsive design principles using Tailwind CSS to ensure an excellent user experience on all devices.

8. **SEO Optimization**: Implemented SEO best practices such as meta tags, appropriate URL structure, and metadata.

This project represents a comprehensive solution for House Plast to showcase its products online and facilitate the ordering process for customers, with a focus on a seamless user experience and attractive design.

<Actions>
  <Action name="Add project screenshots" description="Add website images to the README file to illustrate the design" />
  <Action name="Create CONTRIBUTING.md file" description="Create a guidelines file for project contributors" />
  <Action name="Add status badges" description="Add badges such as build status and version in README" />
  <Action name="Create project Wiki" description="Create a Wiki on GitHub for more detailed project documentation" />
  <Action name="Add LICENSE file" description="Add a license file to the project" />
</Actions>


This generation may require the following integrations: 
<AddIntegration names={["supabase"]} />

