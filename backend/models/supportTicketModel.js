import mongoose from 'mongoose';

const supportRequestSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Resolved'],
    default: 'Pending',
  },
}, { timestamps: true });

const SupportRequest = mongoose.model('SupportRequest', supportRequestSchema);

export default SupportRequest;
