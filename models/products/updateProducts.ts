import fs from "fs/promises";
import filePath from "./filePath";
import { IProduct } from "./interfaceProducts";

const updateProducts = async (products: IProduct[]) => {
  await await fs.writeFile(filePath, JSON.stringify(products));
};

export default updateProducts;
