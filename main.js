const ProductManager = require("./productManager");

// Crear una instancia de ProductManager
const manager = new ProductManager();

// Agregar algunos productos
manager.addProduct({
  title: "Producto 1",
  description: "Descripción del producto 1",
  price: 2000,
  thumbnail: "ruta/imagen1.jpg",
  code: "P1",
  stock: 8,
});

manager.addProduct({
  title: "Producto 2",
  description: "Descripción del producto 2",
  price: 1100,
  thumbnail: "ruta/imagen2.jpg",
  code: "P2",
  stock: 8,
});

// Obtener todos los productos
const products = manager.getProducts();
console.log("Productos:", products);

// Obtener un producto por ID
const productId = 1;
const product = manager.getProductById(productId);
if (product) {
  console.log("Producto encontrado:", product);
}
