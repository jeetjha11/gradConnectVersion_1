
import { User } from "../models/user.model.js";



module.exports = {
    createSMTPData: async (req, res) => {

        try {
            const SMTP = new SMTP(req.body);
            const userId = req.params.user
            if (!userId) {
                return res.status(400).json({
                    message: "User ID is required.",
                    success: false
                })
            }
            const user = await User.findById(userId)
            if (!user) {
                return res.status(404).json({
                    message: "User not found.",
                    success: false
                })
            }

            const SmtpData = await SMTP.save()
            //send the created SMTP data to the frontend for use
            res.status(200).json({
                message: "SMTP data created successfully",
                success: true,
                data: SmtpData
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "An error occurred while creating SMTP data",
                success: false
            })
        }

    },
    deleteSMTPdata: async (req, res) => {
        try {
            const userId = req.params.user
            if (!userId) {
                return res.status(400).json({
                    message: "User ID is required.",
                    success: false
                })
            }
            const user = await User.findById(userId)
            if (!user) {
                return res.status(404).json({
                    message: "User not found.",
                    success: false
                })
            }
            await SMTP.remove()
            res.status(200).json({
                message: "SMTP data deleted successfully",
                success: true
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "An error occurred while deleting SMTP data",
                success: false
            })
        }
    },
    updateSMTPdata: async (req, res) => {
        try {
            const userId = req.params.user
            if (!userId) {
                return res.status(400).json({
                    message: "User ID is required.",
                    success: false
                })
            }
            const user = await User.findById(userId)
            if (!user) {
                return res.status(404).json({
                    message: "User not found.",
                    success: false
                })
            }
            const SMTP = await SMTP.findByIdAndUpdate(req.params.smtpId, req.body, { new: true })
            if (!SMTP) {
                return res.status(404).json({
                    message: "SMTP data not found.",
                    success: false
                })
            }
            res.status(200).json({
                message: "SMTP data updated successfully",
                success: true,
                data: SMTP
            })
        } catch (error) {
            console.log(error);
            res.status(5)
            json({
                message: "An error occurred while updating SMTP data",
                success: false
            })
        }

    },
    getSMTPdata: async (req, res) => {

        try {
            const userId = req.params.user
            if (!userId) {
                return res.status(400).json({
                    message: "User ID is required.",
                    success: false
                })
            }
            const user = await User.findById(userId)
            if (!user) {
                return res.status(404).json({
                    message: "User not found.",
                    success: false
                })
            }
            const SMTP = await SMTP.find({ user: userId })
            if (!SMTP) {
                return res.status(404).json({
                    message: "SMTP data not found.",
                    success: false
                })
            }
            res.status(200).json({
                message: "SMTP data retrieved successfully",
                success: true,
                data: SMTP
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: " An error occurred while retrieving SMTP data",
                success: false
            })
        }
    }

}