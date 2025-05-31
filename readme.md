---

# 🔁 Customer Labs Node

An Express.js web app that receives JSON data per account and forwards it to multiple configured destinations using webhooks. Data is stored in a lightweight SQLite database using Sequelize ORM.

---

## 🚀 Features

* ✅ Account & Destination CRUD APIs
* ✅ Webhook-based Data Forwarding
* ✅ Auth via App Secret (`CL-X-TOKEN`)
* ✅ Supports forwarding with `GET`, `POST`, and `PUT`
* ✅ Lightweight SQLite database
* ✅ Built with Node.js + Express

---

## 🏗️ Tech Stack

* **Node.js**
* **Express**
* **Sequelize ORM**
* **SQLite**
* **Axios** (for outbound HTTP requests)

---

## 📦 Installation

```bash
git clone https://github.com/mohankumar-v-s/customerlabs-node.git
cd customerlabs-node
npm install
npm run dev
```

The app will start at: [http://localhost:8000](http://localhost:8000)

---

## 🧩 API Reference

### 🔐 Authentication

All data forwarding (`/server/incoming_data`) requires a valid `CL-X-TOKEN` header:

```http
CL-X-TOKEN: your_app_secret_token
```

---

### 📁 Accounts

| Method | Endpoint        | Description                   |
| ------ | --------------- | ----------------------------- |
| POST   | `/accounts`     | Create a new account          |
| GET    | `/accounts`     | Get all accounts              |
| GET    | `/accounts/:id` | Get a specific account        |
| PUT    | `/accounts/:id` | Update an account             |
| DELETE | `/accounts/:id` | Delete account + destinations |

---

### 🎯 Destinations

| Method | Endpoint                           | Description                    |
| ------ | ---------------------------------- | ------------------------------ |
| POST   | `/destinations`                    | Create a new destination       |
| GET    | `/destinations`                    | Get all destinations           |
| GET    | `/destinations/:id`                | Get a specific destination     |
| PUT    | `/destinations/:id`                | Update a destination           |
| DELETE | `/destinations/:id`                | Delete a destination           |
| GET    | `/destinations/account/:accountId` | Get destinations by account ID |

---

### 🔁 Data Forwarding

| Method | Endpoint                | Description                          |
| ------ | ----------------------- | ------------------------------------ |
| POST   | `/server/incoming_data` | Receive JSON and forward to webhooks |

> ✅ Requires `CL-X-TOKEN` in headers
> ✅ Expects valid JSON body

---

## 🧪 Sample Usage

Test the APIs quickly using Postman.

📬 **Download the Postman Collection:**
[📁 `customerlabs-node.postman_collection.json`](./postman/customerlabs-node.postman_collection.json)

---

## 🗃️ Database

* SQLite database file: `data.db`
* Auto-created and managed by Sequelize.

---

## 🔐 Security Notes

* All data submissions must be authenticated via the `CL-X-TOKEN` header.
* Invalid tokens will return:

```json
{ "message": "Un Authenticate" }
```

---

## 📄 License

MIT License – Feel free to use and modify.

---
