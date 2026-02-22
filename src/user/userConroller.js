
const createUser =async (req,res) => {
    const user = req.body;
    console.log(user);
    res.json("message")
}

module.exports = createUser;