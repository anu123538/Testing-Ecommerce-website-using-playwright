

🛒 E-Commerce Testing Suite (Playwright)
🌟 Project Overview
This repository contains a robust automated testing suite for an E-Commerce application, focusing on critical user journeys such as shopping cart logic and checkout processes. The goal was to ensure data integrity and a seamless user experience using modern automation tools.
+1

🛠️ Tech Stack

Testing Framework: Playwright 


Language: JavaScript 


Test Runner: Jest / Playwright Runner 


Version Control: Git 

🧪 Key Test Scenarios Covered
Product Search: Verifying the search functionality for accurate results.


Cart Operations: Adding/Removing items and validating real-time price updates.


Checkout Workflow: Ensuring the end-to-end flow from cart to successful order placement.


Data Integrity: Validating that product details in the cart match the selected items.

🚀 How to Run Locally
Clone the repository:



git clone https://github.com/anu123538/Testing-Ecommerce-website-using-playwright.git
Install dependencies:



npm install
Run tests:



npx playwright test
View Report:



npx playwright show-report
📊 Testing Artifacts

      Test Cases: Designed to cover edge cases in e-commerce logic.

      Reports: Detailed execution logs and screenshots for failed steps.

✅ Test Case Table

| Step | Action                                                                                      | Expected Result                                    | Actual Output                                                     | Status |
| ---- | ------------------------------------------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------- | ------ |
| 1    | Navigate to homepage [https://ecommerce.calvinseng.com/](https://ecommerce.calvinseng.com/) | Homepage loads successfully                        | Homepage loaded with search bar visible                           | ✅ Pass |
| 2    | Search for "Alexandria Shirt" using the search bar                                          | Search results page displays relevant products     | Search results displayed with "Alexandria Shirt" listed           | ✅ Pass |
| 3    | Click on the product link "Alexandria Shirt"                                                | Product detail page loads for "Alexandria Shirt"   | Product detail page displayed correctly                           | ✅ Pass |
| 4    | Click "Add to cart" button                                                                  | Product is added to cart with confirmation message | "Product added" message displayed, and "View Cart" button appears | ✅ Pass |
| 5    | Click "View Cart" from confirmation message                                                 | User is redirected to cart page                    | Cart page loaded with product list                                | ✅ Pass |
| 6    | Verify the cart contains "Alexandria Shirt"                                                 | Cart displays "Alexandria Shirt" as an item        | "Alexandria Shirt" found in the cart item list                    | ✅ Pass |

