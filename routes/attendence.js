const express = require("express");
const router = express.Router();

const attendanceRoute = require("../controller/attendence");

/**
 * @swagger
 * components:
 *   schemas:
 *     Attendance:
 *       type: object
 *       properties:
 *         date:
 *           type: string
 *           format: date
 *           example: "2025-01-12"
 *         check_in:
 *           type: string
 *           format: date-time
 *           example: "2025-01-12T09:00:00Z"
 *         check_out:
 *           type: string
 *           format: date-time
 *           example: "2025-01-12T17:00:00Z"
 *         status:
 *           type: string
 *           example: "Present"
 *         start_time:
 *           type: string
 *           format: date-time
 *           example: "2025-01-12T09:00:00Z"
 *         end_time:
 *           type: string
 *           format: date-time
 *           example: "2025-01-12T17:00:00Z"
 *         location_at_start_time:
 *           type: string
 *           example: "New York Office"
 *         ip_address:
 *           type: string
 *           example: "192.168.1.1"
 *         location_at_end_time:
 *           type: string
 *           example: "New York Office"
 */

/**
 * @swagger
 * /attendence/attendanceRoute:
 *   get:
 *     tags:
 *       - attendance
 *     summary: Retrieve all attendance records
 *     description: Fetch all attendance records.
 *     responses:
 *       200:
 *         description: Successfully retrieved attendance records.
 *       500:
 *         description: Error fetching attendance records.
 */

router.route("/attendanceRoute").get(attendanceRoute.attendance_get_api);

/**
 * @swagger
 * /attendence/attendanceRoute:
 *   post:
 *     tags:
 *       - attendance
 *     summary: Record attendance
 *     description: Insert a new attendance record.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Attendance'
 *     responses:
 *       200:
 *         description: Attendance recorded successfully.
 */
router.route("/attendanceRoute").post(attendanceRoute.attendance_post_api);

/**
 * @swagger
 * /attendence/attendanceRoute:
 *   put:
 *     tags:
 *       - attendance
 *     summary: Update an attendance record
 *     description: Update an existing attendance record.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               field:
 *                 type: string
 *                 example: "status"
 *               data:
 *                 type: string
 *                 example: "Absent"
 *               id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Attendance record updated successfully.
 *       500:
 *         description: Error updating attendance.
 */
router.route("/attendanceRoute").put(attendanceRoute.attendance_update_api);

module.exports = router;
