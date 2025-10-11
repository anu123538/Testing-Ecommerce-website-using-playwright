# 🛒 Ecommerce Website Testing with Playwright

This project contains end-to-end automated tests for an ecommerce website using [Microsoft Playwright](https://playwright.dev/). It tests essential functionalities such as user login, product search, cart management, checkout flow, and more.

## 🚀 Project Features

- Automated browser testing using Playwright
- Cross-browser support: Chromium, Firefox, WebKit
- Page Object Model structure for maintainable tests
- CI-ready test scripts
- Easily configurable test environment

## 🧰 Tech Stack

- Node.js
- Playwright
- JavaScript or TypeScript (based on your setup)
- Git + GitHub

## 🛠️ Installation

1. **Clone the repository:**

```bash
git clone https://github.com/anu123538/Testing-Ecommerce-website-using-playwright.git
cd Testing-Ecommerce-website-using-playwright

| Step | Action                                                                                      | Expected Result                                    | Actual Output                                                     | Status |
| ---- | ------------------------------------------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------- | ------ |
| 1    | Navigate to homepage [https://ecommerce.calvinseng.com/](https://ecommerce.calvinseng.com/) | Homepage loads successfully                        | Homepage loaded with search bar visible                           | ✅ Pass |
| 2    | Search for "Alexandria Shirt" using the search bar                                          | Search results page displays relevant products     | Search results displayed with "Alexandria Shirt" listed           | ✅ Pass |
| 3    | Click on the product link "Alexandria Shirt"                                                | Product detail page loads for "Alexandria Shirt"   | Product detail page displayed correctly                           | ✅ Pass |
| 4    | Click "Add to cart" button                                                                  | Product is added to cart with confirmation message | "Product added" message displayed, and "View Cart" button appears | ✅ Pass |
| 5    | Click "View Cart" from confirmation message                                                 | User is redirected to cart page                    | Cart page loaded with product list                                | ✅ Pass |
| 6    | Verify the cart contains "Alexandria Shirt"                                                 | Cart displays "Alexandria Shirt" as an item        | "Alexandria Shirt" found in the cart item list                    | ✅ Pass |

