import { db } from '../Firebase/firebase.config';

class Product {
	async createProduct(product) {
		return await db.collection('products').add(product);
	}
	async getProducts() {
		return await db.collection('products').get();
	}
	async getProduct(id) {
		return await db.collection('products').doc(id).get();
	}
	async updateProduct(id, product) {
		return await db.collection('products').doc(id).update(product);
	}
}

export default Product;
