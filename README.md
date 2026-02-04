# Rivaaz 💍

**Rivaaz** is a premium, high-end wedding planning platform designed to help couples manage their special day with elegance and ease.

The application features a sophisticated **"wedding-first" aesthetic**, utilizing a romantic palette of **crimson and rose**, paired with traditional serif typography.

---

## ✨ Features

* **Smart Dashboard**: Overview of remaining tasks, budget tracking, and an integrated **Wedding Countdown** with a romantic gradient aesthetic.

* **Life Profile Card**: A floating identity card that overlaps the user's cover banner, showcasing the couple's style and location.

* **Wedding Style Selector**: An interactive carousel for selecting wedding themes:

  * Traditional
  * Minimalist
  * Bohemian
  * Modern

* **Curated Catalog**: A magazine-style vendor directory featuring multi-image gallery grids and category-based filtering.

* **Messenger Sidebar**: Real-time communication portal for coordinating with vendor teams.

* **Backend Ready**: Data structures for vendors, tasks, and events are mapped to unique IDs, preparing the frontend for seamless API integration.

---

## 🛠️ Tech Stack

* **Frontend**: React.js (Vite)
* **Styling**: Tailwind CSS
* **Icons**: Lucide React

### Typography

* **Playfair Display** — Traditional Serif for titles
* **Plus Jakarta Sans** — Modern Sans-serif for UI/data

---

## 🎨 Design Tokens

The project uses a custom-defined palette in **tailwind.config.js**:

* `rivaaz-primary`: Trust-building action blue.
* `rivaaz-red`: Elegant crimson for primary CTA and high-priority alerts.
* `rivaaz-pink/rose`: Soft romantic accents for backgrounds and progress tracking.
* `shadow-romantic`: A soft-glowing pink box shadow used for cards.

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v18 or higher)
* npm or yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/rivaaz-frontend.git
cd rivaaz-frontend
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 📂 Project Structure

```plaintext
src/
├── components/
│   ├── dashboard/      # Widgets (Messenger, Schedule, etc.)
│   └── layout/         # Sidebar, Navbar, and MainLayout wrapper
├── pages/
│   ├── Dashboard.jsx   # Main entry view
│   ├── Profile.jsx     # User identity and Style Selector
│   └── Catalog.jsx     # Vendor directory
├── App.jsx             # Routing configuration
└── tailwind.config.js  # Custom theme and font pairs
```

---

## 🗺️ Roadmap

* [ ] **Phase 1**: Complete UI/UX for all modules (Dashboard, Catalog, Profile).
* [ ] **Phase 2**: Implement "Vendor Team" view and "Hired" logic.
* [ ] **Phase 3**: Integrate backend APIs for real-time task management and messaging.
* [ ] **Phase 4**: Add AI-assisted wedding planning recommendations.

---

💍 *Rivaaz — Where tradition meets modern wedding planning elegance.*
