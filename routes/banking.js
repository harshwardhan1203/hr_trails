const express = require("express");
const router = express.Router();

const bankingRoute = require("../controller/banking");

/**
 * @swagger
 * components:
 *   schemas:
 *     Banking:
 *       type: object
 *       properties:
 *         bank_name:
 *           type: string
 *           example: "State Bank of ABC"
 *         account_number:
 *           type: string
 *           example: "123456789012345"
 *         ifsc_code:
 *           type: string
 *           example: "SBI0000123"
 *         branch_name:
 *           type: string
 *           example: "Downtown Branch"
 */

/**
 * @swagger
 * /banking/bankingRoute:
 *   get:
 *     summary: Retrieve all banking records
 *     description: Fetch all records from the banking table.
 *     responses:
 *       200:
 *         description: Successfully retrieved banking records.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Banking'
 *       500:
 *         description: Internal server error.
 */
router.route("/bankingRoute").get(bankingRoute.banking_get_api); // Correct function for GET

/**
 * @swagger
 * /banking/bankingRoute:
 *   post:
 *     summary: Add a new banking record
 *     description: Insert a new record into the banking table.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Banking'
 *     responses:
 *       200:
 *         description: Banking record added successfully.
 *       500:
 *         description: Internal server error.
 */
router.route("/bankingRoute").post(bankingRoute.banking_post_api); // Correct function for POST

/**
 * @swagger
 * /banking/bankingRoute:
 *   put:
 *     summary: Update a banking record
 *     description: Update an existing record in the banking table.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               field:
 *                 type: string
 *                 example: account_number
 *               data:
 *                 type: string
 *                 example: "987654321012345"
 *               id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Banking record updated successfully.
 *       500:
 *         description: Internal server error.
 */
router.route("/bankingRoute").put(bankingRoute.banking_update_api); // Correct function for PUT

module.exports = router;
