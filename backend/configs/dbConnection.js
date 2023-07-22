// external import
import mongoose from "mongoose"

export default async function dbConnection() {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
    } catch (error) {
        console.log({ error })
    }
}