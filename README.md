# How to Build a CometChat Using Visual Builder

## What You'll Be Building

![Chat UI Screenshot](https://www.cometchat.com/docs/assets/images/visual_chat_builder-3270b27870aa7586ed5b34d489b18e0b.png)  
*Alt text: Screenshot of a working CometChat-Visual Builder for customizing CometChat with a user logged in and active chat visible*

CometChat’s Visual Build into a fresh React TypeScript project to enables user login, one-on-one chat, and real-time message updates. By following each step, you’ll end up with a working chat interface powered entirely by CometChat.

---

## Introduction

In this Section, you’ll learn how to integrate CometChat into a React application using the official CometChat Visual Builder.

Real-time chat is a foundational feature in many modern apps, from customer support to social platforms. CometChat offers a robust SDK and UI Kit that makes it fast and reliable to add chat functionality without building everything from scratch.

---

## Prerequisites

**Knowledge Required**
- Basic React hooks
- React component structure (functional components, JSX)
- ES6+ JavaScript

**Tools Required**
- Node.js v16+  
- npm (v8+)  
- Git (optional, for cloning the repository)  
- A modern code editor (e.g., VS Code)
- A free CometChat account (to obtain your App ID and Auth Key)

---

# CometChat Integration

## Step 1: Set Up Your Project
- Create a React app with TypeScript and navigate into the folder.
- Remove unnecessary boilerplate files, keeping only core components (`main.tsx`, `App.tsx`, etc.).
- Verify folder structure matches the intended minimal setup.

  ```bash
  npx create-react-app my-app --template typescript
  cd my-app
  ```

## Step 2: Install Dependencies
- Install CometChat SDK and UI Kit using npm or yarn.
- Confirm dependencies (`chat-sdk`, `calls-sdk`, `ui-kit`) appear correctly in `package.json`.

```bash
  npm install @cometchat/chat-sdk-javascript @cometchat/calls-sdk-javascript @cometchat/chat-uikit-react
```

## Step 3: Initialize CometChat
- Set up CometChat in `main.tsx` using `CometChatProvider` and `CometChatUIKit`.
- Define placeholders for `App ID`, `Region`, and `Auth Key`—update them with values from the CometChat Dashboard.

## Step 4: Build the UI
- Add extracted CometChat components under `src/CometChat/` (handles login, chat windows, user selection).
- `Login.tsx` manages authentication, updating user state.
- `App.tsx` ensures CometChat UI is properly initialized with height & width settings.

## Step 5: Authenticate & Send/Receive Messages
- Login flow handled in `main.tsx`, updating state upon success.
- `CometChatHome.tsx` fetches conversations and displays chat history.
- `CometChatMessages.tsx` listens for incoming messages and handles sending text in real time.

## Step 6: Test & Verify
- Start the app: `npm run dev`, then open `http://localhost:5173/`.
- Log in and see the conversation list auto-populate.
- Select a conversation to load past messages or start a new chat.
- Send a message—it should appear instantly.

### Troubleshooting
- Verify `.env` credentials (`App ID`, `Auth Key`) are correct.
- Ensure a user exists in the CometChat Dashboard.
- Check `MessageListener` registration for real-time updates.

## Conclusion
You’ve built a CometChat-integrated React TypeScript app with:
- User authentication
- Real-time messaging
- Conversation history
- One-on-one and group chat
- Voice & video calls
- Message editing

Next steps:
- Add image/file sharing
- Store messages locally
- Implement typing indicators & read receipts

Enjoy building with CometChat!
