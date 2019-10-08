let cart = [];

let products = [
  {
    id: 1,
    name: "hat",
    price: 10
  },
  {
    id: 2,
    name: "pants",
    price: 50
  },
  {
    id: 3,
    name: "shirt",
    price: 20
  },
  {
    id: 4,
    name: "shoes",
    price: 180
  },
  {
    id: 5,
    name: "jacket",
    price: 80
  }
];

const addToCart = (req, res) => {
  // const { product } = req.body;
  cart.push(req.body);
  res.status(200).json(cart);
};

const getCart = (req, res) => {
  res.status(200).json(cart);
};

const getProducts = (req, res) => {
  res.status(200).json(products);
};

const removeFromCart = (req, res) => {
  const { id } = req.params;
  const index = cart.findIndex(product => id == product.id);
  cart.splice(index, 1);
  res.status(200).json(cart);
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
  getProducts
};
