const { Router } = require("express");
const { newsController } = require("../contollers/news.controllers");


const router = Router()

router.get('/news', newsController.getNews)
router.post('/news', )
router.delete('/news', )

//router.patch('/students/:id', studentsController.changeStudent)

module.exports = router;