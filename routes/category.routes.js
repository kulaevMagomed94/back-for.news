const { Router } = require("express");
const { categoryController } = require("../contollers/category.controllers");


const router = Router()

router.get('/category', categoryController.getCategories)
router.post('/category', categoryController.addCategories)
router.delete('/category', categoryController.deleteCategories)

//router.patch('/students/:id', studentsController.changeStudent)

module.exports = router;