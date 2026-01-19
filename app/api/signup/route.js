export async function GET(request) {
  return new Response(
    `<html>
<style>
  body {
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f2f5;
  }
  h1 {
    color: #333;
  }
  form {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 300px;
  }
  div {
    margin-bottom: 1rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #666;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  button {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
</style>
<head>
  <title>Signup</title>
</head>
<body>
  <h1>Signup</h1>
  <form action="" method="post">
    <div>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>
    </div>
    <div>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
    </div>
    <div>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>
    </div>
    <button type="submit">Sign Up</button>
  </form>
</body>
  </html>
    `,
    {
      headers: { "Content-Type": "text/html" },
    }
  );
}

export async function POST(request) {
  const formData = await request.formData();
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  // Here you would typically handle the signup logic,
  // such as saving the user to a database.
  // For this example, we'll just return a success message.

  return new Response(
    `<html>
<head>
  <title>Signup Successful</title>
</head>
<body>
  <h1>Signup Successful</h1>
  <p>Welcome, ${username}! Your account has been created.</p>
</body>
</html>
    `,
    {
      headers: { "Content-Type": "text/html" },
    }
  );
}
