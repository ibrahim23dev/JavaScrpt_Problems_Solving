const router=require('express').Router();

const CategoryController=require('../../Controller/Dasboard/CategoryController');


router.post('/addCategory',CategoryController.addCategory);

module.exports=router;