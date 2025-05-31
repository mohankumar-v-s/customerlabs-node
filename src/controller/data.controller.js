const { Account, Destination } = require('../models');
const axios = require('axios');
const controller ={}

controller.handleIncomingData = async (req, res) => {

  const token = req.headers['cl-x-token'];
  if (!token) return res.status(401).json({ sucess:false,message: 'Un Authenticate' });

  const account = await Account.findOne({ where: { appSecretToken: token } });
  if (!account) return res.status(401).json({ sucess:false, message: 'Un Authenticate' });

  if (typeof req.body !== 'object') {
    return res.status(400).json({sucess:false, message: 'Invalid Data' });
  }

  const destinations = await Destination.findAll({ where: { accountId: account.accountId } });
  const data = req.body;

  for (const dest of destinations) {
    try {
      const config = {
        method: dest.method.toLowerCase(),
        url: dest.url,
        headers: dest.headers
      };

      if (dest.method === 'GET') {
        config.params = data;
      } else {
        config.data = data;
      }

      await axios(config);
    } catch (err) {
      console.error(`Failed to send to ${dest.url}:`, err.message);
    }
  }

  res.json({sucess:true, message: 'Data pushed successfully' });
};

module.exports=controller
