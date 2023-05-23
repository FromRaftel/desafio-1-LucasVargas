class ProductManager {
  constructor() {
    this.products = []; // Arreglo vacío para almacenar los productos
    this.nextId = 1; // Variable para generar el próximo ID autoincrementable
  }

  addProduct(product) {
    // Verifica que todos los campos sean obligatorios
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      console.log("Error: Todos los campos son obligatorios");
      return;
    }

    // Verificar si el código ya existe
    const existingProduct = this.products.find((p) => p.code === product.code);
    if (existingProduct) {
      console.log(`Error: El producto con código ${product.code} ya existe`);
      return;
    }

    // Agregar el producto al arreglo con un ID autoincrementable
    product.id = this.nextId;
    this.products.push(product);
    this.nextId++;

    console.log(`Producto agregado: ${product.title}`);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      return product;
    } else {
      console.log("Error: Producto no encontrado");
    }
  }
}

module.exports = ProductManager;
