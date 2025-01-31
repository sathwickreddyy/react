# Setting up a Project using the Hybrid Model

=============================================

## Overview

Create a reusable React library for login/signup UI components using AWS Cognito. Implement token validation and user context management in your Java backend. Pass tokens from the React app to your APIs via headers (e.g., Authorization: Bearer <token>). Use middleware in your Java backend (e.g., Spring Security) to extract user ID from tokens and populate it into your API's request context for use in business logic.

## Benefits

This approach combines reusability on the frontend with centralized control and security on the backend, ensuring scalability and maintainability across projects.

## Setup Steps

---------------

### Frontend Setup: Cognito Authentication Library

#### Step 1.1: Initialize the Vite React TypeScript Project

Run the following commands to scaffold the project using Vite:

```bash
# Create project directory
mkdir cognito-auth-library
cd cognito-auth-library

# Initialize Vite React TypeScript project
npm create vite@latest . -- --template react-ts
```

#### Step 1.2: Install Required Dependencies

Install the necessary dependencies for AWS Cognito, routing, and other utilities:

```bash
# Install dependencies
npm install aws-amplify amazon-cognito-identity-js react-router-dom @types/react-router-dom axios

# Install dev dependencies for linting and formatting
npm install -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier
```

#### Step 1.3: Project Structure

Organize your project into the following structure:

```markdown
src/
├── components/       # Reusable React components (Login, Signup, etc.)
├── hooks/            # Custom hooks for authentication logic
├── services/         # Cognito service logic (sign-in, sign-up, etc.)
├── types/            # TypeScript type definitions
├── App.tsx           # Main application entry point
└── main.tsx          # Vite entry file
```

