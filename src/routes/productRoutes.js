import {getProducts, createProductController, getProduct} from'../controllers/productController.js';
import {Router} from "express";

const router = Router();

router.get("/products", getProducts);
router.post("/products", createProductController)
router.get("/products/:id", getProducts)

export default router;
