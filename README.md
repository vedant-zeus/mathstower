# 🗼 Trigno Tower

Trigno Tower is a real-time, multiplayer math-based building game. Build the highest tower by correctly answering trigonometry, arithmetic, and algebra questions while competing with others in a global leaderboard.

---

## 🚀 Getting Started

The easiest way to start the entire project (Backend & Frontend) on Windows is using the automation script provided in the root directory.

### ⚡ One-Click Startup (Windows)
Double-click the **`dev-start.bat`** file in the root folder. 
This will launch two command windows:
1.  **Backend Server**: Running at `http://localhost:5000`
2.  **Frontend Server**: Running at `http://localhost:3000` (exposing to your network)

---

## 🛠️ Manual Installation & Running

If you prefer to run the components manually, follow these steps:

### 1. Backend Setup
```bash
cd backend
npm install
npm run dev
```
*   **Port**: 5000
*   **Database**: MongoDB (Ensures your local MongoDB service is running)

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev -- --hostname 0.0.0.0
```
*   **Port**: 3000
*   **Multi-Device**: Using `--hostname 0.0.0.0` allows other devices on your Wi-Fi to access the game.

---

## 📱 Running on Mobile Devices

To play on your phone or tablet:
1.  Connect your phone to the same Wi-Fi as your computer.
2.  Find your computer's **IPv4 Address** (Run `ipconfig` in your terminal).
3.  Open your mobile browser and go to: `http://<YOUR_IP>:3000`

> [!IMPORTANT]
> **Firewall Access**: If your phone cannot connect, run the following command in **PowerShell (Admin)** on your PC to open the ports:
> `New-NetFirewallRule -DisplayName "Allow Trigno Tower" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 3000,5000`

---

## 🧠 Features
*   **Real-time Multiplayer**: Powered by Socket.io for live tower updates and leaderboard sync.
*   **Dynamic Math Quiz**: Randomized questions across different categories.
*   **Responsive UI**: Automatically adapts for both Desktop and Mobile screens.
*   **Global Leaderboard**: Save your high scores to a MongoDB database and view the all-time Top 10.

---

## 🏗️ Tech Stack
*   **Frontend**: Next.js (App Router), TypeScript, Framer Motion, Lucide Icons.
*   **Backend**: Node.js, Express, Socket.io, Mongoose.
*   **Database**: MongoDB.
