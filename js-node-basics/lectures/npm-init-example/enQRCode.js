const qr = require("qrcode")

const fileName = process.argv[2]
const text = process.argv[3]

qr.toFile(`$(fileName}.png`, text, err => {
    console.log(`QR code saved to ${fileName}`);
})