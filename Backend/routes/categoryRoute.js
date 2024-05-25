import express from 'express'
import { isAdmin, requireSignIN } from '../Middlewares/authmiddleware.js';
import { categoryController, categoryControllerSingle, cretaeCategorycontroller, deleteCategoryControlller, updateCategoryController } from '../controller/createCategory.js';

const router = express.Router();


//roytes
router.post('/create-category' , requireSignIN , isAdmin,cretaeCategorycontroller)

// updation of category 

router.put('/update-category/:id' , requireSignIN , isAdmin , updateCategoryController)

// get all the category

router.get('/getAll-category' , categoryController)

// get single category
router.get('/getAll-category/:slug' , categoryControllerSingle)


// dellete the category 

router.delete('/delte-category/:id' , requireSignIN ,isAdmin ,deleteCategoryControlller )

export default router;