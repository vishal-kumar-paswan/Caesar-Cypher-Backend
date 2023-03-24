// Text encryption
exports.encryptText = (req, res) => {
    try {
        let text = req.body.text;
        let key = req.body.key;
        let encryptedText = "";

        for (let i = 0; i < text.length; i++) {
            let char = text[i].charCodeAt(0);

            if (char >= 97 && char <= 122) {
                char += parseInt(key);
                if (char > 122)
                    char -= 26;
            }
            if (char >= 65 && char <= 90) {
                char += parseInt(key);
                if (char > 90)
                    char -= 26;
            }
            if (char >= 48 && char <= 57) {
                char += parseInt(key);
                if (char > 57)
                    char -= 10;
            }
            encryptedText += String.fromCharCode(char);
        }
        return res.status(200).json({ "encrypted-text": encryptedText });
    } catch (error) {
        return res.status(400).json({ error: "Unable to process your request" });
    }
}

// Text decryption
exports.decryptText = (req, res) => {
    try {
        let text = req.body.text;
        let key = req.body.key;
        let decryptedText = "";

        for (let i = 0; i < text.length; i++) {
            let char = text[i].charCodeAt(0);

            if (char >= 97 && char <= 122) {
                char -= parseInt(key);
                if (char < 97)
                    char += 26;
            }
            if (char >= 65 && char <= 90) {
                char -= parseInt(key);
                if (char < 65)
                    char += 26;
            }
            if (char >= 48 && char <= 57) {
                char -= parseInt(key);
                if (char < 48)
                    char += 10;
            }
            decryptedText += String.fromCharCode(char);
        }
        return res.status(200).json({ "decrypted-text": decryptedText });
    } catch (error) {
        return res.status(400).json({ error: "Unable to process your request" });
    }
}

