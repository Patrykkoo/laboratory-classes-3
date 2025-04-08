const express = require("express");
const { LOGOUT_LINKS } = require("../constants/navigation");

const router = express.Router();

router.get("/", (_req, res) => {
  res.render("logout", {
    headTitle: "Shop - Logout",
    path: "/logout",
    menuLinks: LOGOUT_LINKS,
    activeLinkPath: "/logout",
  });
});

module.exports = router;
