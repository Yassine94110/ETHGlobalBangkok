# 🐮 The coWncil - Trading Tournament Platform 🏆

The coWncil is a fully on-chain trading tournament platform powered by CowSwap. Compete with friends or other traders, track your trades, and aim to be crowned the best trader!

---

## 🚀 Features

- **Fully On-Chain:** Transparent and secure tournaments managed with Solidity smart contracts deployed on Sepolia.
- **Customizable Tournaments:** Set entry fees, prize pools, max players, budgets, and more.
- **Integrated Swap Interface:** All trades are tracked through our CowSwap-powered swap interface for accurate profit/loss calculations.
- **User Profiles:** View tournaments you've created or joined, with detailed stats and rankings.
- **Frontend Tech Stack:** Built with Next.js 15, Tailwind CSS, and ShadCN for a modern and responsive UI.
- **Backend Tech Stack:** Node.js with custom APIs to fetch data on-chain or from CowSwap's API.
- **Blockchain Tools:** Viem, Wagmi, and Ethers.js for seamless blockchain interaction.

---

## 🛠️ Prerequisites

Before you start, ensure you have the following installed:

- **Node.js** (v16 or later)
- **Yarn** (for frontend dependencies)
- **Reown** account and project ID for wallet connection.

---

## 📂 Project Structure

```
The-coWncil/
├── front/       # Frontend (Next.js)
├── server/      # Backend (Node.js + APIs)
├── README.md    # You're here!
```

---

## 🧑‍💻 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-repo/the-cowncil.git
cd the-cowncil
```

### 2️⃣ Set up `.env.local`

Navigate to the `front` folder and create a `.env.local` file:

```bash
cd front
touch .env.local
```

Add your **Reown Project ID** to the `.env.local` file:

```
NEXT_PUBLIC_PROJECT_ID="xxxxx"
```

### 3️⃣ Install dependencies

Install all necessary packages for both the frontend and backend:

#### Frontend

```bash
cd front
yarn install
```

#### Backend

```bash
cd ../server
npm install
```

---

## 🚦 Running the Project

### 🖥️ Start the Frontend

Navigate to the `front` folder and start the development server:

```bash
cd front
yarn dev
```

The frontend should now be running at [http://localhost:3000](http://localhost:3000). 🌐

### ⚙️ Start the Backend

Navigate to the `server` folder and start the server using **nodemon**:

```bash
cd ../server
npx nodemon
```

The backend server should now be running at [http://localhost:3005](http://localhost:3005). 🚀

---

## 🛠️ Technologies Used

- **Frontend:**
  - Next.js 15
  - Tailwind CSS
  - ShadCN
  - Reown for wallet integration
- **Backend:**
  - Node.js
  - CowSwap API
  - Custom on-chain/off-chain data handling
- **Blockchain:**
  - Solidity smart contracts on Sepolia
  - Viem, Wagmi, and Ethers.js for blockchain interaction

---

## 🐞 Troubleshooting

- If the frontend fails to connect to the backend, ensure both servers are running and accessible.
- Check `.env.local` to verify the Reown Project ID is correctly configured.
- For backend API issues, ensure you’re running the server in the `server` directory.

---

## 🐄 Join the coWncil Community

Start competing, track your trades, and prove you’re the ultimate trader. Ready to take on the challenge? 🚀
