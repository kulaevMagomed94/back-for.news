const { Router } = require("express");
const { commentaryController } = require("../contollers/commentary.controllers") 

const router = Router()

router.get('/comment/:id',  commentaryController.getcommentary)
router.post('/comment/create', commentaryController.adddCmmentary)
router.delete('/comment/delete/:id', commentaryController.deleteComments )

//router.patch('/students/:id', studentsController.changeStudent)

module.exports = router;