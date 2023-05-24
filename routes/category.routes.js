const { Router } = require("express");
const { categoryController } = require("../contollers/category.controllers");


const router = Router()

router.get('/category', categoryController.getCategories)
router.post('/category/:create', categoryController.addCategories)
router.delete('/category/:id', categoryController.deleteCategories)

//router.patch('/students/:id', studentsController.changeStudent)

module.exports = router;