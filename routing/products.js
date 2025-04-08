const express = require("express");

const { MENU_LINKS } = require("../constants/navigation");
const { productsSlice } = require("../store/products");

const router = express.Router();

router.get("/", (_req, res) => {
  res.render("products", {
    headTitle: "Shop - Products",
    path: "/products",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products",
    products: productsSlice.products,
  });
});

router.get("/add", (_req, res) => {
  res.render("add-product", {
    headTitle: "Shop - Add product",
    path: "/products/add",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/add",
  });
});

router.post("/add", (req, res) => {
  const { name, description } = req.body;

  const newProduct = { name, description };

  productsSlice.newestProduct = newProduct;
  productsSlice.products.push(newProduct);

  res.redirect("/products/new");
});

router.get("/new", (_req, res) => {
  res.render("new-product", {
    headTitle: "Shop - Newest product",
    path: "/products/new",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/new",
    newestProduct: productsSlice.newestProduct,
  });
});

module.exports = router;
