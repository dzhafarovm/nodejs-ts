import fs from "fs/promises";
import filePath from "./filePath";
import { IProduct } from "./interfaceProducts";

const getAll = async () => {
  const data: string = await fs.readFile(filePath, "utf-8");
  const products: IProduct[] = JSON.parse(data);
  return products;
};

export default getAll;
