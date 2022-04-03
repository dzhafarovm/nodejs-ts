import { v4 } from "uuid";
import updateProducts from "./updateProducts";
import getAll from "./getAll";
import { IProduct } from "./interfaceProducts";

const add = async (data: IProduct) => {
  const products: IProduct[] = await getAll();
  const newProduct = { ...data, id: v4() };
  products.push(newProduct);
  await updateProducts(products);

  return newProduct;
};

export default add;
