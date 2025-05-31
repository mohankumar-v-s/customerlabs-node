const { Account } = require('../models');
const controller = {}

controller.createAccount = async (req, res) => {
    try {
        const { email, accountName, website } = req.body;

        const emailIsAlreadyExist = await Account.findOne({ where: { email: email } })

        if (emailIsAlreadyExist) {
            return res.status(400).json({
                sucess: false,
                message: "Email Is Already Exist"
            });
        }
        const account = await Account.create({
            email,
            accountName,
            website
        });
        res.json({
            sucess: true,
            message: "Account Created Sucessfully",
            data: account
        });
    } catch (err) {
        res.status(400).json({ sucess: false, error: err.message });
    }
}

controller.getAllAccount = async (req, res) => {
    const accounts = await Account.findAll();

    if (!accounts) {
        return res.status(404).json({ sucess: false, message: 'Account not found' })
    }
    res.json({
        sucess: true,
        message: "Get All Accounts",
        data: accounts
    });
}

controller.getAccountById = async (req, res) => {
    const account = await Account.findByPk(req.params.id);

    if (!account) {
        return res.status(404).json({ sucess: false, message: 'Account not found' })
    }

    res.json(res.json({
        sucess: true,
        message: "Fetched Account Sucessfully",
        data: account
    }));
}

controller.updateAccount = async (req, res) => {
    const account = await Account.findByPk(req.params.id);
    if (!account) {
        return res.status(404).json({ sucess: false, message: 'Account not found' });
    }

    await account.update(req.body);
    res.json({
        sucess: true,
        message: "Updated Account By Id",
        data: account
    });
}

controller.deleteAccount = async (req, res) => {
    const account = await Account.findByPk(req.params.id);

    if (!account) {
        return res.status(404).json({ sucess: false, message: 'Account not found' });
    }

    await account.destroy();
    res.json({ sucess: true, message: 'Account deleted' });
}



module.exports = controller