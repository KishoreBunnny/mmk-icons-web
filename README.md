# 🧩 mmk-icons

A beautifully curated set of SVG developer icons — React, Next.js, TailwindCSS, GitHub, and more — built for seamless integration into **React** and **Next.js** projects.

## ✨ Features

- ⚛️ Ready-to-use React components
- 🎨 Full styling support (`className`, `fill`, `style`)
- 🧩 Easy to scale, animate, and theme with Tailwind CSS or custom styles
- 📦 Tree-shakable and lightweight

---
## Npm Package

[![image](https://github.com/user-attachments/assets/74cd9ba0-45e7-42b8-b8b1-71605c703953)
](https://www.npmjs.com/package/mmk-icons)

## 📦 Installation

```bash
npm install mmk-icons

Basic Usage

import { NextjsIcon } from 'mmk-icons';

const App = () => {
  return <NextjsIcon />;
};

export default App;

** Custom Styling **

import { NextjsIcon } from 'mmk-icons';

const App = () => {
  return (
    <NextjsIcon
      className="text-neutral-900"
      fill="white"
      style={{ width: "30px", height: "30px" }}
    />
  );
};

export default App;

- <NextjsIcon />
+ <NextjsIcon
+   className="text-neutral-900"
+   fill="white"
+   style={{ width: "30px", height: "30px" }}
+ />





Use any of the following:

ReactIcon

NextjsIcon

TailwindIcon

MongoDbIcon

PostgresIcon

SqlIcon

HtmlIcon

CssIcon

JsIcon

TsIcon

ReduxIcon

GraphQlIcon

ExpressIcon

DockerIcon

GitIcon

GoogleIcon

GitHubIcon

...and more
