import Product from "../schemas/products.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ _id: id });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name_product, description_product, category, price, stock } =
      req.body;

    const id = Math.random() * 10;

    const newProduct = new Product({
      id,
      name_product,
      description_product,
      category,
      price,
      stock,
    });

    if (req.file) {
      const { filename } = req.file;
      newProduct.setImageUrl(filename);
    }

    newProduct
      .save()
      .then((product) => {
        res.json({ mensaje: "Producto agregado correctamente", product });
      })
      .catch((error) => console.error(error));
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateProduct = (req, res) => {
  const productId = req.params.id;
  const update = req.body;

  Product.findByIdAndUpdate(productId, update, (error, productUpdated) => {
    if (error) res.status(500).json({ error });

    res.status(200).send({ product: productUpdated });
  });
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ _id: req.params.id });
    res
      .status(200)
      .json({ mensaje: "Producto eliminado correctamente", product });
  } catch (error) {
    res.status(500).json(error);
  }
};

//aca iria para habilitar o desabilitar el producto
export const availableProduct = (req, res) => {
  const productId = req.params.id;
  const update = { available: true };

  Product.findByIdAndUpdate(productId, update, (error, productUpdated) => {
    if (error) res.status(500).json({ error });

    res.status(200).send({ product: productUpdated });
  });
};
