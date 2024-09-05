import SupportRequest from '../models/SupportRequest.js';

export const getAllRequests = async (req, res) => {
  try {
    const requests = await SupportRequest.findAll();
    res.json(requests);
  } catch (error) {
    console.error('Error fetching support requests:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const createRequest = async (req, res) => {
  try {
    const { text } = req.body;
    const newRequest = await SupportRequest.create({ text });
    res.status(201).json(newRequest);
  } catch (error) {
    console.error('Error creating support request:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
