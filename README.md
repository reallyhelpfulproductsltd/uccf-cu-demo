# UCCF Christian Union List Demo

## Overview

This repository contains a small demonstration project that fetches a list of Christian Unions from UCCF’s public API and displays them in a readable format.

The aim of the exercise is to show a clear, thoughtful approach to working with external data, understanding API responses, and presenting information in a way that is easy to understand and maintain. It is intentionally simple and not a production-ready application.

---

## Repository structure

```
uccf-cu-demo/
├── index.js
├── package.json
└── README.md
```

* `index.js` – A small Node.js script that fetches data from the UCCF API and prints it in a friendly format
* `package.json` – Minimal configuration to run the script
* `README.md` – Explanation of approach and next steps

---

## How to run the project

### Requirements

* Node.js 18 or later (tested using GitHub Codespaces)

### Steps

```bash
npm install
npm start
```

This will fetch the Christian Union data and print a formatted list to the terminal.

---

## Approach

I approached this task by starting with the data rather than assumptions about structure.

Before building any logic, I inspected the real API response to understand how the data was actually shaped. Based on that, I implemented a simple script that:

* Fetches data from the public UCCF endpoint
* Validates the response format
* Iterates over the returned Christian Unions
* Displays key information (name, institution, region, website) in a readable way

I deliberately avoided frameworks or unnecessary abstractions so the code remains easy to follow and explain.

---

## Robustness and limitations

For a small demonstration, the code aims to be:

* Defensive against unexpected API responses
* Clear and readable rather than clever
* Easy for someone else to modify or extend

For a production system, I would expect to add:

* Structured logging
* More detailed error handling
* Tests
* Pagination or caching if required
* Separation between data access and presentation

---

## Use of AI tools

AI tools were used in a supportive way during development (for example, to sanity-check ideas and assist with drafting), but the structure, approach, and final implementation reflect how I personally work and reason about systems.

---

## How I would develop this further

With more time, I could:

* Add a simple web interface to make the data more accessible to non-technical users
* Introduce filtering or search (for example by region or institution)
* Cache API responses to reduce repeated requests
* Add documentation for non-technical maintainers
* Integrate authentication if access control were required

---

This project is intentionally small, but it reflects my preference for building clear, maintainable systems that prioritise understanding and stewardship over complexity.
