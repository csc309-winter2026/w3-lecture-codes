import { NextResponse } from "next/server";

export async function GET(request) {
  return new Response(
    `
      <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Signup Form</title>
            <style>
            body {
            font-family: Arial, sans-serif;
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            }
            .signup-container {
            background-color: #fff;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            width: 100%;
            max-width: 400px;
            }
            h2 {
            text-align: center;
            color: #333;
            margin-bottom: 1.5rem;
            }
            .form-group {
            margin-bottom: 1rem;
            }
            label {
            display: block;
            margin-bottom: 0.5rem;
            color: #555;
            }
            input[type="text"],
            input[type="email"],
            input[type="password"] {
            width: 100%;
            padding: 0.75rem;
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
            transition: background-color 0.3s ease;
            }
            button:hover {
            background-color: #0056b3;
            }
            </style>
        </head>
        <body>
            <div class="signup-container">
            <form action="/api/signup" method="post">
            <h2>Create Account</h2>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">Sign Up</button>
            </form>
            </div>
        </body>
        </html>
      `,
    {
      headers: {
        "Content-Type": "text/html",
        "UofT-Author": "Chatgpt",
      },
    },
  );
}

export async function POST(request) {
  const formData = await request.formData();
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  // Actual signup logic would go here (e.g., save to database)

  // return NextResponse.json({
  //   message: `User ${username} signed up successfully!`,
  // });
  return new Response(`User ${username} signed up successfully!`, {
    headers: { "Content-Type": "text/plain" },
  });
}
