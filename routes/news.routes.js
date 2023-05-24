const { Router } = require("express");
const { newsController } = require("../contollers/news.controllers");


const router = Router()

router.get('/news', newsController.getNews)
router.get('/news/:id', newsController.getNewsbyId)
router.get('/news/category/:id', newsController.getNewsCategoryById)
router.post('/news/create', newsController.createNews)
router.patch('/news/change/:id', newsController.changeNews)
router.delete('/news/delete/:id', newsController.deleteNews)

//router.patch('/students/:id', studentsController.changeStudent)

module.exports = router;