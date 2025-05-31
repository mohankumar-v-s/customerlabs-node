`````
# Customer Labs Node 🔁

An Express.js web application that receives JSON data for an account and forwards it to multiple configured destinations using webhooks. Uses SQLite (via Sequelize) for data storage.

---

## 🚀 Features

- ✅ Account Management (CRUD)
- ✅ Destination Management (CRUD)
- ✅ Webhook-based Data Forwarding
- ✅ Auth via App Secret Token
- ✅ Supports GET, POST, PUT forwarding
- ✅ SQLite (lightweight and portable)

---

## 🏗️ Tech Stack

- **Node.js**
- **Express**
- **Sequelize ORM**
- **SQLite**
- **Axios** (for outbound HTTP)

---

## 📦 Installation

```bash
git clone https://github.com/mohankumar-v-s/customerlabs-node.git
cd customerlabs-node
npm install
npm run dev
````

The app runs on `http://localhost:8000`

---

## 🧩 API Overview

### Account

| Method | Endpoint        | Description                   |
| ------ | --------------- | ----------------------------- |
| POST   | `/accounts`     | Create account                |
| GET    | `/accounts`     | List all accounts             |
| GET    | `/accounts/:id` | Get one account               |
| PUT    | `/accounts/:id` | Update account                |
| DELETE | `/accounts/:id` | Delete account + destinations |

### Destination

| Method | Endpoint                           | Description              |
| ------ | ---------------------------------- | ------------------------ |
| POST   | `/destinations`                    | Create destination       |
| GET    | `/destinations`                    | List all destinations    |
| GET    | `/destinations/:id`                | Get one destination      |
| PUT    | `/destinations/:id`                | Update destination       |
| DELETE | `/destinations/:id`                | Delete destination       |
| GET    | `/destinations/account/:accountId` | Destinations for account |

### Data Handler

| Method | Endpoint                | Description                       |
| ------ | ----------------------- | --------------------------------- |
| POST   | `/server/incoming_data` | Receive and push JSON to webhooks |

> Requires `CL-X-TOKEN` in headers and JSON data in body.

---

## 🧪 Sample API Calls

## 📬 Postman Collection

You can use the provided Postman collection to test all APIs quickly.

### 🔗 [Download Collection](./postman/customerlabs-node.postman_collection.json)

---

## 🗃️ SQLite DB

* Default DB file: `data.db`
* Auto-created by Sequelize.

---

## 🔐 Security Notes

* App secret token is sent via HTTP headers using: `CL-X-TOKEN`
* Invalid tokens return `"Un Authenticate"`.

----

````
