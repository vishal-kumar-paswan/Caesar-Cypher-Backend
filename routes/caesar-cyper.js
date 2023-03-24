const express = require("express");
const router = express.Router();
const { encryptText, decryptText } = require("../controllers/caesar-cyper");

router.post("/encrypt-text", encryptText);
router.post("/decrypt-text", decryptText);

module.exports = router;