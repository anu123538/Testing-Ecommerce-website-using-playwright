const { test, expect } = require('@playwright/test');

test('Buy Alexandria Shirt on Calvin Seng ecommerce demo', async ({ page }) => {
  // 1. Go to homepage
  await page.goto('https://ecommerce.calvinseng.com/');

  // 2. Search for "Alexandria Shirt"
  const searchInput = page.locator('input#s');
  await searchInput.waitFor({ state: 'visible' });
  await searchInput.fill('Alexandria Shirt');
  await page.keyboard.press('Enter');

  // 3. Wait for the product link to appear and click it
  const productLink = page.locator('a', { hasText: 'Alexandria Shirt' }).first();
  await expect(productLink).toBeVisible();
  await productLink.click();

  // 4. Wait for "Add to cart" button and click it
  const addToCartBtn = page.locator('button:has-text("Add to cart")');
  await addToCartBtn.waitFor({ state: 'visible', timeout: 10000 });
  await addToCartBtn.click();

  // 5. Wait for and click "View Cart" button from pink success message
  const viewCartBtn = page.locator('a:has-text("View Cart")');
  await expect(viewCartBtn).toBeVisible();
  await viewCartBtn.click();

  // 6. Verify cart has the product
  const cartItem = page.locator('table.cart td.product-name');
  await expect(cartItem).toContainText('Alexandria Shirt');
});
