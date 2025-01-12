const express = require("express");
const router = express.Router();

const timeOffRoute = require("../controller/time_off");

/**
 * @swagger
 * components:
 *   schemas:
 *     TimeOff:
 *       type: object
 *       properties:
 *         leave_type:
 *           type: string
 *         start_date:
 *           type: string
 *           format: date
 *         end_date:
 *           type: string
 *           format: date
 *         reason:
 *           type: string
 *         status:
 *           type: string
 */

/**
 * @swagger
 * /time_off/time_offRoute:
 *   get:
 *     summary: Retrieve all time-off data
 *     description: Fetch all records from the time_off table
 *     responses:
 *       200:
 *         description: Successfully retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TimeOff'
 */
router.route("/time_offRoute").get(timeOffRoute.time_off_get_api);

/**
 * @swagger
 * /time_off/time_offRoute:
 *   post:
 *     summary: Add a new time-off record
 *     description: Insert a new record into the time_off table
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TimeOff'
 *     responses:
 *       200:
 *         description: Successfully added
 */
router.route("/time_offRoute").post(timeOffRoute.time_off_post_api);

/**
 * @swagger
 * /time_off/time_offRoute:
 *   put:
 *     summary: Update an existing time-off record
 *     description: Update an existing record in the time_off table
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               field:
 *                 type: string
 *                 example: leave_type
 *               data:
 *                 type: string
 *                 example: "sick"
 *               id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.route("/time_offRoute").put(timeOffRoute.time_off_update_api);

module.exports = router;
