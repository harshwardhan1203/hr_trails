const express = require("express");
const router = express.Router();

const personRoute = require("../controller/person");

/**
 * @swagger
 * components:
 *   schemas:
 *     Person:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Jane Doe
 *         relationship:
 *           type: string
 *           example: Friend
 *         email:
 *           type: string
 *           format: email
 *           example: jane.doe@example.com
 *         address:
 *           type: string
 *           example: "123 Main St, Springfield"
 *         is_active:
 *           type: boolean
 *           example: true
 *         password:
 *           type: string
 *           example: "securepassword"
 */

/**
 * @swagger
 * /person/personRoute:
 *   get:
 *     summary: Retrieve all person records
 *     description: Fetch all records from the person table.
 *     responses:
 *       200:
 *         description: Successfully retrieved data.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Person'
 */
router.route("/personRoute").get(personRoute.person_get_api);

/**
 * @swagger
 * /person/personRoute:
 *   post:
 *     summary: Add a new person
 *     description: Insert a new record into the person table.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Person'
 *     responses:
 *       200:
 *         description: Successfully added data.
 */
router.route("/personRoute").post(personRoute.person_post_api);

/**
 * @swagger
 * /person/personRoute:
 *   put:
 *     summary: Update a person record
 *     description: Update an existing record in the person table.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               field:
 *                 type: string
 *                 example: address
 *               data:
 *                 type: string
 *                 example: "456 Elm St, Springfield"
 *               id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Successfully updated data.
 */
router.route("/personRoute").put(personRoute.person_update_api);

module.exports = router;