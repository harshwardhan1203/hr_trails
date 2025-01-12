const express = require("express");
const router = express.Router();

const employeeRoute = require("../controller/employee");

/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       properties:
 *         first_name:
 *           type: string
 *           example: John
 *         last_name:
 *           type: string
 *           example: Doe
 *         email:
 *           type: string
 *           format: email
 *           example: john.doe@example.com
 *         phone:
 *           type: string
 *           example: "1234567890"
 *         date_of_birth:
 *           type: string
 *           format: date
 *           example: "1990-01-01"
 *         gender:
 *           type: string
 *           example: Male
 *         position:
 *           type: string
 *           example: Software Engineer
 *         date_of_joining:
 *           type: string
 *           format: date
 *           example: "2022-01-01"
 *         salary:
 *           type: number
 *           example: 50000
 *         is_active:
 *           type: string
 *           example: "y"
 */

/**
 * @swagger
 * /employee/employeeRoute:
 *   get:
 *     summary: Retrieve all employee records
 *     description: Fetch all records from the employee table.
 *     responses:
 *       200:
 *         description: Successfully retrieved employee records.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 *       500:
 *         description: Internal server error.
 */
router.route("/employeeRoute").get(employeeRoute.employee_get_api);

/**
 * @swagger
 * /employee/employeeRoute:
 *   post:
 *     summary: Add a new employee
 *     description: Insert a new record into the employee table.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: Employee added successfully.
 *       500:
 *         description: Internal server error.
 */
router.route("/employeeRoute").post(employeeRoute.employee_post_api);

/**
 * @swagger
 * /employee/employeeRoute:
 *   put:
 *     summary: Update an employee record
 *     description: Update an existing record in the employee table.
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
 *                 example: "xyz@gmail.com"
 *               id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Employee updated successfully.
 *       500:
 *         description: Internal server error.
 */
router.route("/employeeRoute").put(employeeRoute.employee_update_api);

module.exports = router;
