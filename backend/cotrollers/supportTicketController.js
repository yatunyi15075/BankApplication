import SupportRequest from '../models/supportModel.js';

export const getSupportRequests = async (req, res) => {
  try {
    const supportRequests = await SupportRequest.find();
    res.status(200).json(supportRequests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching support requests' });
  }
};

export const updateSupportRequest = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  
  try {
    const updatedRequest = await SupportRequest.findByIdAndUpdate(id, { status }, { new: true });
    if (!updatedRequest) {
      return res.status(404).json({ message: 'Support request not found' });
    }
    res.status(200).json(updatedRequest);
  } catch (error) {
    res.status(500).json({ message: 'Error updating support request' });
  }
};
