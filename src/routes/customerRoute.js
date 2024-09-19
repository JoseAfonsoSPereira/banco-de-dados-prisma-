import {getCustomers} from'../controllers/customerContrller.js';
import {Router} from "express";

const router = Router();

router.get('/customers', getCustomers);

export default router;