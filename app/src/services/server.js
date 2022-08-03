import firestore from "../firebase";
import { products } from "./products";

// CRUD PRODUCTS
// CREATE
export const createProduct = async (record) => {
    const collectionRef = firestore.collection("products");

    await collectionRef.add(record);
};

export const seedProducts = async () => {
    const collectionRef = firestore.collection("products");

    const data = await collectionRef.get();

    if (!data.empty) return;

    const promises = products.map(async (product) => {
        return await collectionRef.add(product);
    });

    await Promise.all(promises);
};

// READ
export const getProducts = async () => {
    const collectionRef = firestore.collection("products");

    const querySnap = await collectionRef.get();

    const documents = querySnap.docs;

    const data = documents.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });

    return data;
};

// UPDATE
export const updateProduct = async (id, record) => {
    const collectionRef = firestore.collection("products");

    const docRef = collectionRef.doc(id);
    await docRef.update(record);
};

// GETTING SPECIFIC ITEM BY ID
export const getProductByID = async (id) => {};
