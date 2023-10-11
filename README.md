This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).



# StackBuld Blog

A Simple Blogging Platform Application


## Objective:
StackBuld Blog is a simple web based blogging platform built with Next.js, React, JavaScript/TypeScript, and React Query and MongoD, The app is user-friendly, and the code is intended to adhere to development best practices as well-organized and properly documented.

## Features:
CRUD Functionality for Blog Posts:

* The user can Create, Read, Update, and Delete blog posts.
* Each post has a title, content, and a created/updated timestamp.
* The app has a nice looking and simple text editor for creating and editing posts.
* Blogs Posts are presented in a Listed order and each post can be viewed on a Single Post page:
* A homepage that lists all created blog posts.
* A single post view page that displays the full content of a post.
* The User Interface is responsive and mobile friendly with great user experience.
* Users are able to search for blog posts by title.


## API Integration/Development:

StackBuld blog uses a NextJs based API's for fetching data, caching, and state management.
" " Uses a customized RESTful API cluster for data storage and retrieval. 


## Deployment:

StackBuld Blog is live on vercel @.......


## Built With
NextJs
Tailwind CSS
Custom API
JavaScript/typeScript
NextJs state management
MongoDB

## Getting Started
To get a local copy up and running follow these simple steps.

## Prerequisites
Make sure you already installed NextJs, Redux, Git.
Setup
Clone the repository using the below commands.

```
git clone git@github.com:collinsmezie/StackBuld_blog.git
cd StackBuld_blog
Use npm install to install dependencies
Add your credentials to .env file
npm run dev
```

## Usage
Kindly modify the files as needed.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

# StackBuld Blog


# API Documentation

This documentation outlines the usage of the StackBuld Blog API. The API allows you to perform basic CRUD (Create, Read, Update, Delete) operations on a collection of blog Posts stored in a MongoDB based cluster.

## API Base URL

The base URL for all API endpoints is https://hngxapi-kggb.onrender.com/api....

## Standard Formats for Requests and Responses

**Request Format:** The API accepts JSON-formatted requests.

**Response Format:** The API responds with JSON-formatted data.

## Endpoints

### 1. Create a New Blog Post

- **Endpoint:** `POST /api/posts/create`
- **Request Body:**
  - `title` (string): The title of the blog to be created.
  - `content` (string): The content of the blog to be created.
  - `topic` (string): The topic category of the blog to be created.
- **Responses:**
  - `201 Created`: The Blog was created successfully. The response includes the newly created blog data.

    ```json
    {
      "_id": "5ffdb3b243454f35d8f41e12",
      "title": "cryptocurrency",
      "content": "The next big thing in finance",
      "topic": "technology"
    }
    ```

  - `500 Internal Server Error`: An error occurred while creating the blog.

### 2. Get Blog Post by Topic

- **Endpoint:** `GET /api/posts/topic/art`
- **Responses:**
  - `200 OK`: The Blog post was found successfully. The response includes the blog post's data.

    ```json
     {
      "_id": "5ffdb3b243454f35d8f41e12",
      "title": "cryptocurrency",
      "content": "The next big thing in finance",
      "topic": "technology"
    }
    ```

  - `404 Not Found`: The blog post with the specified ID does not exist.

    ```json
    {
      "error": "Post not found"
    }
    ```

  - `500 Internal Server Error`: An error occurred while fetching the post.



  ### 2. Get Blog Post by ID (single Post view page)

- **Endpoint:** `GET /api/posts/read/id`
- **Responses:**
  - `200 OK`: The Blog post was found successfully. The response includes the blog post's data.

    ```json
     {
      "_id": "5ffdb3b243454f35d8f41e12",
      "title": "cryptocurrency",
      "content": "The next big thing in finance",
      "topic": "technology"
    }
    ```

  - `404 Not Found`: The blog post with the specified ID does not exist.

    ```json
    {
      "error": "Post not found"
    }
    ```

  - `500 Internal Server Error`: An error occurred while fetching the post.

### 4. Get All Posts

- **Endpoint:** `GET /api/posts/read`
- **Responses:**
  - `200 OK`: The list of Posts was fetched successfully.

    ```json
    [
     {
      "_id": "5ffdb3b243454f35d8f41e12",
      "title": "Machine learning",
      "content": "The next big paradigm shift in business ",
      "topic": "technology"
    }
      {
        "_id": "5ffdb2b243458f35d5f41e12",
        "title": "Eat Arabic",
        "content": "Taste Middle eastern culture",
        "topic": "food"
      }
    ]
    ```

  - `500 Internal Server Error`: An error occurred while fetching the Posts.

### 4. Update Post by ID

- **Endpoint:** `PUT /api/posts/update`
- **Request Body:** The updated Post data.
- **Responses:**
  - `200 OK`: The Post was updated successfully.

    ```json
    {
      "message": "Post updated successfully"
    }
    ```

  - `404 Not Found`: The Post with the specified ID does not exist.

    ```json
    {
      "error": "Post not found"
    }
    ```

  - `500 Internal Server Error`: An error occurred while updating the Post.

### 5. Delete Post by ID

- **Endpoint:** `DELETE /api/Posts/delete/_PostId`
- **Responses:**
  - `200 OK`: The Post was deleted successfully.

    ```json
    {
      "message": "Post deleted successfully"
    }
    ```

  - `404 Not Found`: The Post with the specified ID does not exist.

    ```json
    {
      "error": "Post not found"
    }
    ```

  - `500 Internal Server Error`: An error occurred while deleting the Post.

## Sample Usage

1. Create a New Post

   ```http
   POST /api/posts/create
   Content-Type: application/json

    {
        "_id": "5ffdb2b243458f35d5f41e12",
        "title": "Eat Arabic",
        "content": "Taste Middle eastern culture",
        "topic": "food"
    }

2. Find all Posts by Topic

   ```http
   POST /api/posts/read/topic/food
   Content-Type: application/json

    {
        "_id": "5ffdb2b243458f35d5f41e12",
        "title": "Eat Arabic",
        "content": "Taste Middle eastern culture",
        "topic": "food"
    },

    {
        "_id": "5ffdb2b243458f35d5f41e12",
        "title": "Only cuisines",
        "content": "Your one stop spot for taste",
        "topic": "food"
    }


3. Get Post by ID

   ```http
   GET /api/posts/read/5ffdb3b243454f35d8f41e12

4. Get All Posts

    ```http
    GET /api/posts/read


5. Update Post by ID

    ```http
    PUT /api/posts/update/5ffdb3b243454f35d8f41e12
    Content-Type: application/json

```json
   {
    "_id": "5ffdb2b243458f35d5f41e12",
    "title": "updated title",
    "content": "updated content",
    "topic": "updated topic"
    }
```

6. Delete Post by ID

```http
DELETE /api/posts/delete/5ffdb3b243454f35d8f41e12
```




## Known Limitations and Assumptions

- The API assumes a MongoDB database is set up and running.
- The API does not include authentication or authorization mechanisms.

## Setting Up and Deploying the API

### Locally

1. Clone the repository containing the API code.
2. Install the required dependencies using `npm install`.
3. Set up a MongoDB database and obtain the connection URI.
4. Update the `uri` variable in the code with your MongoDB connection URI.
5. Run the API using `npm run dev`.
6. The API will be available locally at http://localhost:3000.

### On a Server

1. Follow steps 1 to 4 from the local setup instructions.
2. Choose a server hosting provider (e.g., AWS, Heroku, or Render).
3. Deploy the API code to the server.
4. Update the `uri` variable in the code with your production MongoDB connection URI.
5. Start the API on the server.
6. Your API will be available at the server's URL.


