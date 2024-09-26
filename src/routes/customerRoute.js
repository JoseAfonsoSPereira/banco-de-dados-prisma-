import {getCustomers, createCustomerController,  getCustomer, updateCustomerController, deleteCustomerController} from'../controllers/customerContrller.js';
import {Router} from "express";

const router = Router();

router.get('/customers', getCustomers);
router.post("/products", createCustomerController)
router.get("/products/:id", getCustomer)
router.patch("/products/:id", updateCustomerController)
router.delete("/products/:id",deleteCustomerController)

export default router;