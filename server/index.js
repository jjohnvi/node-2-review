const express = require("express");
const CC = require("./controllers/cart_controller");

const PORT = 8000;

const app = express();

app.use(express.json());

app.get("/api/products", CC.getProducts);
app.get("/api/cart", CC.getCart);
app.post("/api/cart", CC.addToCart);
app.delete("/api/cart/:id", CC.removeFromCart);
app.put("/api/cart/:id", CC.updateCart);

app.listen(PORT, () => console.log(`We in it ${PORT}`));
