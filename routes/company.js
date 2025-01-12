const express = require("express");
const router = express.Router();

const companyRoute = require("../controller/company");

/**
 * @swagger
 * components:
 *   schemas:
 *     Company:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "ABC Corp"
 *         address:
 *           type: string
 *           example: "123 Business Ave, New York, NY"
 *         email:
 *           type: string
 *           format: email
 *           example: "contact@abccorp.com"
 *         phone:
 *           type: string
 *           example: "1234567890"
 *         industry:
 *           type: string
 *           example: "Software"
 *         company_gst:
 *           type: string
 *           example: "123456789012345"
 *         is_active:
 *           type: string
 *           example: "y"
 */

/**
 * @swagger
 * /company/companyRoute:
 *   get:
 *     summary: Retrieve all company records
 *     description: Fetch all records from the company table.
 *     responses:
 *       200:
 *         description: Successfully retrieved company records.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Company'
 *       500:
 *         description: Internal server error.
 */
router.route("/companyRoute").get(companyRoute.display_get_api); // Correct function for GET

/**
 * @swagger
 * /company/companyRoute:
 *   post:
 *     summary: Add a new company
 *     description: Insert a new record into the company table.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Company'
 *     responses:
 *       200:
 *         description: Company record added successfully.
 *       500:
 *         description: Internal server error.
 */
router.route("/companyRoute").post(companyRoute.company_post_api); // Correct function for POST

/**
 * @swagger
 * /company/companyRoute:
 *   put:
 *     summary: Update a company record
 *     description: Update an existing record in the company table.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               field:
 *                 type: string
 *                 example: email
 *               data:
 *                 type: string
 *                 example: "newemail@abccorp.com"
 *               id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Company record updated successfully.
 *       500:
 *         description: Internal server error.
 */
router.route("/companyRoute").put(companyRoute.update_put_api); // Correct function for PUT

module.exports = router;
