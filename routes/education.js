const express = require("express");
const router = express.Router();

const educationRoute = require("../controller/education");

/**
 * @swagger
 * components:
 *   schemas:
 *     Education:
 *       type: object
 *       properties:
 *         degree:
 *           type: string
 *           example: Bachelor of Science
 *         institution:
 *           type: string
 *           example: University of XYZ
 *         field_of_study:
 *           type: string
 *           example: Computer Science
 *         start_year:
 *           type: integer
 *           example: 2015
 *         end_year:
 *           type: integer
 *           example: 2019
 *         grade:
 *           type: string
 *           example: A
 */

/**
 * @swagger
 * /education/educationRoute:
 *   get:
 *     tags:
 *       - education
 *     summary: Retrieve all education records
 *     description: Fetch all records from the education table.
 *     responses:
 *       200:
 *         description: Successfully retrieved education records.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Education'
 *       500:
 *         description: Internal server error.
 */
router.route("/educationRoute").get(educationRoute.education_get_api);

/**
 * @swagger
 * /education/educationRoute:
 *   post:
 *     tags:
 *       - education
 *     summary: Add a new education record
 *     description: Insert a new record into the education table.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Education'
 *     responses:
 *       200:
 *         description: Education record added successfully.
 *       500:
 *         description: Internal server error.
 */
router.route("/educationRoute").post(educationRoute.education_post_api);

/**
 * @swagger
 * /education/educationRoute:
 *   put:
 *     tags:
 *       - education
 *     summary: Update an education record
 *     description: Update an existing record in the education table.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               field:
 *                 type: string
 *                 example: grade
 *               data:
 *                 type: string
 *                 example: B
 *               id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Education record updated successfully.
 *       500:
 *         description: Internal server error.
 */
router.route("/educationRoute").put(educationRoute.education_update_api);

module.exports = router;
