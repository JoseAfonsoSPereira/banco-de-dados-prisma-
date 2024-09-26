import {getCustomers, createCustomerController,  getCustomer, updateCustomerController, deleteCustomerController} from'../controllers/customerContrller.js';
import {Router} from "express";

const router = Router();

router.get('/customers', getCustomers);
router.post("/customers", createCustomerController)
router.get("/customers/:id", getCustomer)
router.patch("/customers/:id", updateCustomerController)
router.delete("/customers/:id",deleteCustomerController)

export default router;