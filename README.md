# ⚡ Rumious

**Rumious** is a UI library based on **Web Components**, enabling you to build modern interfaces without relying on Virtual DOM or heavy frameworks.

## 🚀 Key Features
- **Web Components** – Fully compatible with any framework or works independently.
- **No Virtual DOM** – High performance with minimal resource usage.
- **Lifecycle Hooks Support** – Control the rendering and removal process of components.

## 📦 Installation
```sh
npm install rumious rumious-babel-preset rumious-builder
```

## 🔧 Basic Usage

Using **Rumious** to create custom components and apps is simple and efficient. Follow the steps below to get started with a basic example.

### 1. Create a New Project

Start by initializing a new Rumious project:

```sh
rumious init --name=start-app
```

This command will generate a project directory with the basic structure and configuration files.

### 2. Create Your First App

Navigate to the *index.jsx* file and add the following code:

```js
const app = new RumiousApp(document.getElementById("root"));

app.render(
  <>
    <h1>Hello Rumious</h1>
    <button onClick={async () => alert("Hello Rumious!")}>Click me!</button>
  </>
);

```

In this example, you are rendering a simple application with a heading and a button. When the button is clicked, an alert with "Hello Rumious!" is displayed.

### 3. Build and Test Your Project

Once you've created your app, you can build it and start testing it locally.

To build your project, run:
```sh
rumious build:dev
```

After the build is complete, open your browser and go to http://localhost to see the result of your app.

---

By following these steps, you’ve created your first Rumious app, showcasing the power of Web Components in a lightweight and performant way. You can now customize and expand your project with more components and logic as needed.


## 📚 Documentation & Community

For detailed documentation and further examples, please visit the Rumious Documentation Site (link to be provided). You can also join our community on GitHub Discussions or Discord to share ideas, ask questions, and contribute to the project.

## 🎯 Roadmap

Enhanced Tooling: Development of CLI tools for component scaffolding and project setup.

State Management Integration: Seamless integration with popular state management libraries.

Improved Testing Utilities: Tools and guidelines for writing tests for Rumious components.

Additional Lifecycle Hooks: More granular control over component updates and re-renders.


## 📄 License

Rumious is open-sourced under the MIT License. See the LICENSE file for more information.

## 🙏 Contributing

Contributions are welcome! To contribute to Rumious, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear, descriptive commit messages.
4. Submit a pull request describing your changes.

For more details, please see our Contributing Guidelines.

---

We hope Rumious helps you build better, faster, and more efficient web interfaces. Thank you for choosing Rumious!