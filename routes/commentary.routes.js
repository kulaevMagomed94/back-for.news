const { Router } = require("express");
const { commentaryController } = require("../contollers/commentary.controllers") 

const router = Router()

router.get('/comment',  commentaryController.getcommentary)
router.post('/comment', )
router.delete('/comment', )

//router.patch('/students/:id', studentsController.changeStudent)

module.exports = router;