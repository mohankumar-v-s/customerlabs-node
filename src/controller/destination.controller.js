const { Destination } = require('../models');
const controller = {}

controller.createDestination = async (req, res) => {
    const { accountId,url, method, headers } = req.body;

    if (!url) {
        return res.status(400).json({ sucess: false, message: 'URL is required' });
    }
    if (!method) {
        return res.status(400).json({ sucess: false, message: 'HTTP method is required' });
    }
    if (!headers) {
        return res.status(400).json({ sucess: false, message: 'Headers are required' });
    }

    try {
        const destination = await Destination.create({
            accountId,
            url,
            method,
            headers
        });
        res.json({
            sucess: true,
            message: "Create a Destination Sucessfully",
            data: destination
        });
    } catch (err) {
        res.status(400).json({ sucess: false, error: err.message });
    }
}

controller.getAllDestination = async (req, res) => {
    const destinations = await Destination.findAll();

    res.json({
        sucess: true,
        message: "Fetched All Destination Sucessfully",
        data: destinations
    });
}

controller.getDestinationByID = async (req, res) => {
    const destination = await Destination.findByPk(req.params.id);

    if (!destination) {
        return res.status(404).json({ sucess: false, message: 'Destination not found' })
    }
    res.json({
        sucess: true,
        message: "Fetched All Destination",
        data: destination
    })
}

controller.updateDestinationById = async (req, res) => {
    const destination = await Destination.findByPk(req.params.id);

    if (!destination) {
        return res.status(404).json({ sucess: false, message: 'Destination not found' });
    }

    await destination.update(req.body);

    res.json({
        sucess: true,
        message: "Updated Destination Sucessfully",
        data: destination
    })
}

controller.deleteDestinationById = async (req, res) => {
    const dest = await Destination.findByPk(req.params.id);
    if (!dest) {
        return res.status(404).json({ sucess: false, message: 'Destination not found' });
    }
    await dest.destroy();
    res.json({ sucess: true, message: 'Destination deleted Sucessfully' });
}

controller.getDestinationByAccountId = async (req, res) => {
    const destinations = await Destination.findAll({
        where: { accountId: req.params.accountId }
    });
    res.json({
        sucess: true,
        message: "Updated Destination Sucessfully",
        data: destinations
    })
}



module.exports = controller