# 🔗 TinyLink - URL Shortener

A simple web app to shorten long URLs into short, shareable links.

---

## 🚀 Features

- Convert long URLs into short links
- Redirect to the original URL
- Copy-to-clipboard support
- Basic analytics (click count) – _optional enhancement_
- Built with **React** and **Node.js (Express)**
- **MongoDB** used to store URL mappings

---

## 📁 Project Structure

```
url-shortener/
├── client/         # React frontend
│   ├── public/
│   └── src/
├── server/         # Node.js backend
│   ├── models/
│   ├── routes/
│   └── index.js
└── README.md
```

---

## ⚙️ Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)
- Git

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```ini
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
PORT=5000
```

Start the backend:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd ../client
npm install
npm start
```

---

## 🌐 Usage

1. Enter a long URL in the input box
2. Click **Shorten**
3. A short link will appear (e.g., `http://localhost:5000/abc123`)
4. Copy and share the short link
5. Visiting the short link will redirect to the original long URL

---

## 🧠 How It Works

1. Frontend sends the long URL to the backend (`POST /api/shorten`)
2. Backend generates a unique short code (e.g., using `nanoid`)
3. Short code + original URL are saved in MongoDB
4. When someone visits `/abc123`, backend looks up the original URL and redirects

---

## 📦 Example API

### `POST /api/shorten`

**Request:**

```json
{
  "longUrl": "https://www.example.com/article/xyz"
}
```

**Response:**

```json
{
  "shortUrl": "http://localhost:5000/abc123"
}
```

---

## 📌 Optional Enhancements

- ✅ Track click count for each URL
- 🔒 Add user accounts & login
- 🧼 URL validation & sanitation
- ⏳ Expiry dates for short links
- 📊 Dashboard to manage your URLs

---

## 🛠 Tech Stack

- **Frontend:** React, Axios
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Others:** nanoid, dotenv, mongoose, cors

---

## 👨‍💻 Author

Your Name

---

## 📄 License

[MIT License](LICENSE)
