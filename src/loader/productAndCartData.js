import { getStoredCart } from "../utils/fakeDB";

export const productAndCartData = async() => {
  const productData = await fetch('products.json');
  const products = await productData.json();

  const saveCart = getStoredCart()
  const initialCart = []
  for(const id in saveCart){
    const foundProduct = products.find(product => product.id === id)
    if(foundProduct){
      const quantity = saveCart[id];
      foundProduct.quantity = quantity;
      initialCart.push(foundProduct)
    }
  }

  return { products, initialCart }
}

