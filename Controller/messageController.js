// const prisma = require("../DB/db.config");

// exports.message = async (req, res) => {
//     try {
//         const users = await prisma.messages.findMany();

//         return res.status(200).json(users)
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// }