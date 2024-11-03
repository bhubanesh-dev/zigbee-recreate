# ALL API SERVICEs

## Overview

This document outlines the available API endpoints for the application. Each endpoint includes the HTTP method, endpoint URL, request body parameters, and response format.

---

## Endpoints

### 1. User Registration

**POST** `/api/register`

**Request Body:**

```json
{
  "roll_number": "string",
  "password": "string",
  "confirm_password": "string"
}
```

**Response:**

- **Success:**

  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "status": "success"
    }
    ```

- **Failure:**
  - Status Code: `400 Bad Request`
  - Body:
    ```json
    {
      "status": "unsuccess"
    }
    ```

---

### 2. User Login

**POST** `/api/login`

**Request Body:**

```json
{
  "roll_number": "string",
  "password": "string"
}
```

**Response:**

- **Success:**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "authToken": "string"
    }
    ```
- **Failure:**
  - Status Code: `400 Bad Request`
  - Body:
    ```json
    {
      "status": "can't login"
    }
    ```

---

### 3. Alumni Highlights

**GET** `/api/alumini/highlights`

**Response:**

- **Success:**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "highlights": [
        {
          "name": "string",
          "company": "string",
          "batch": "number",
          "message": "string"
        }
      ]
    }
    ```

---

### 4. Alumni List

**GET** `/api/alumini`

**Response:**

- **Success:**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "alumni": [
        {
          "batch": [
            {
              "name": "string",
              "Linkedin": "string",
              "imageURL": "string"
            }
          ]
        }
      ]
    }
    ```

---

### 5. add alumini

**POST** `/api/alumini/add-alumini`

**Request Header**

```json
{
  "auth-token": "string"
}
```

**Request Body:**

```json
{
  "name": "string",
  "linkedin": "string",
  "imageurl": "string",
  "batch": "number"
}
```

**Response:**

- **Success:**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "message": "success"
    }
    ```

---

### 6. delete alumini

**POST** `/api/alumini/delete-alumini`

**Request Header**

```json
{
  "auth-token": "string"
}
```

**Request Body:**

```json
{
  "id": "string",
  "batch": "number"
}
```

**Response:**

- **Success:**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "message": "success"
    }
    ```

---

### 7. Resources List

**GET** `/api/resources`

**Response:**

- **Success:**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "resources": [
        {
          "name": "string",
          "link": "string",
          "field": "string",
          "uploaded_on": "string"
        }
      ]
    }
    ```

---

### 8. Resources List Add

**POST** `/api/resources/add-resource`

**Request:**

**Request Header**

```json
{
  "auth-token": "string"
}
```

**Request Body:**

- Body:
  ```json
  {
    "resources": [
      {
        "name": "string",
        "link": "string",
        "field": "string",
        "uploaded_on": "string"
      }
    ]
  }
  ```

**Response:**

- **Success:**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "message": "success"
    }
    ```

---

### 9. Resources List Delete

**POST** `/api/resources/delete-resource`

**Request:**

**Request Header**

```json
{
  "auth-token": "string"
}
```

**Request Body:**

- Body:
  ```json
  {
    "id": "number"
  }
  ```

**Response:**

- **Success:**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "message": "success"
    }
    ```

---

### 10. Events List

**GET** `/api/events`

**Response:**

- **Success:**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "events": [
        {
          "image": "string",
          "event_name": "string",
          "date": "date",
          "host": [
            {
              "name": "string",
              "batch": "number",
              "position": "string"
            }
          ]
        }
      ]
    }
    ```

---

### 11. Magazines List

**GET** `/api/magazines`

**Response:**

- **Success:**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "magazines": [
        {
          "title": "string",
          "uploaded on ": "string",
          "link": "string"
        }
      ]
    }
    ```

---

### 12. Codewars Photos

**GET** `/api/codewars`

**Response:**

- **Success:**

  - Status Code: `200 OK`
  - Body:

    ```json
    {
      "batch": [
        {
          "photos": [
            {
              "url": "string",
              "description": "string"
            }
          ],
          "winners": [
            {
              "name": "string",
              "photo": "string",
              "position": "string"
            }
          ]
        }
      ]
    }
    ```

---

### 13. Gallery Images (Paginated)

**GET** `/api/gallery`

**Response:**

- **Success:**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "images": [
        {
          "url": "string",
          "description": "string"
        }
      ],
      "pagination": {
        "current_page": "number",
        "total_pages": "number"
      }
    }
    ```

---
