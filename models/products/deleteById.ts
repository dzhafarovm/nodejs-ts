import getAll from "./getAll";
import updateProduct from "./updateProducts";
import { IProduct } from "./interfaceProducts";

const deleteById = async (id: string) => {
  const products: IProduct[] = await getAll();
  const indx = products.findIndex((el) => el.id === id);
  if (indx === -1) {
    return null;
  }
  const deleteProduct = products.filter((el) => el.id !== id);
  await updateProduct(deleteProduct);

  return products[indx];
};

export default deleteById;
