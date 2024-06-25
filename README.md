# Backend Documentation
### Overview
This is the backend server for handling form submissions. 
It is built using Express.js and connects to a MySQL database using the mysql package. 
The server is configured to use environment variables for sensitive data such as database credentials.
### Prerequisites
<ul>
<li>Node.js</li>
<li>npm (Node Package Manager)</li>
<li>MySQL Database</li>
<li>PHPMyAdmin (optional for database management)</li>
</ul>

## Installation
### Clone the repository:
### bash
#### Clone the respository.
<pre>
<code>
git clone https://github.com/sandhya-og/backend-shivskill.git
cd backend-shivskill
</code>
</pre>
#### Install dependencies:
<pre>
<code>
npm install
</code>
</pre>
#### Set up environment variables:
Create a .env file in the root directory of your project and add the following variables:
<pre>
<code>
PORT=3000
DB_HOST=your-database-host
DB_USER=your-database-username
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
</code>
</pre>
#### Start the server:
<pre>
<code>
node server.js
</code>
</pre>
### API Endpoints
#### POST /join-us
This endpoint handles form submissions and stores the data in the MySQL database.
<ul>
<li>URL: /join-us</li>
<li>Method: POST</li>
<li>Request Body:</li>
</ul>
json
<pre>
<code>
{
    "fullName": "John Doe",
    "email": "john.doe@example.com",
    "phoneNumber": "1234567890",
    "companyName": "Example Inc."
}
</code>
</pre>

#### Response:
Success:
json
<pre><code>
{
    "message": "Form submitted successfully"
}
</code></pre>
Error:
json
<pre>
<code>
{
    "message": "Error saving data"
}
</code>
</pre>

### Code Explanation
server.js
<li>
This code sets up an Express.js server that listens on the port specified in the environment variables or defaults to port 3000. 
It connects to a MySQL database using credentials stored in environment variables. 
The /join-us endpoint accepts POST requests containing form data and saves it to the database.
</li>

### Acknowledgments
<ul>
<li>Express.js</li>
<li>MySQL</li>
<li>Dotenv</li>
<li>Body-Parser</li>
<li>CORS</li>
</ul>
