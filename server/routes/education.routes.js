import express from 'express'
import qualificationCtrl from '../controllers/education.controller.js'
const router = express.Router()
router.route('/api/qualifications').post(qualificationCtrl.create)
router.route('/api/qualifications').get(qualificationCtrl.list)
router.param('id', qualificationCtrl.educationByID)
router.route('/api/qualifications/:id').get(qualificationCtrl.read)
router.route('/api/qualifications/:id').put(qualificationCtrl.update)
router.route('/api/qualifications/:id').delete(qualificationCtrl.remove)
router.route('/api/qualifications').delete(qualificationCtrl.removeAll)
export default router