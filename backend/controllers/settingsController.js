export const getSettings = async (req, res) => {
    try {
        const settings = await Setting.findOne();
        if (settings) {
            res.json(settings);
        } else {
            res.status(404).json({ message: 'Settings not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const updateSettings = async (req, res) => {
    try {
        const { interestRate, repaymentTerm, fees, termsOfService, privacyPolicy } = req.body;
        let settings = await Setting.findOne();
        if (settings) {
            settings.interestRate = interestRate;
            settings.repaymentTerm = repaymentTerm;
            settings.fees = fees;
            settings.termsOfService = termsOfService;
            settings.privacyPolicy = privacyPolicy;
            await settings.save();
            res.json(settings);
        } else {
            settings = await Setting.create({ interestRate, repaymentTerm, fees, termsOfService, privacyPolicy });
            res.status(201).json(settings);
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const createSettings = async (req, res) => {
    try {
        const { interestRate, repaymentTerm, fees, termsOfService, privacyPolicy } = req.body;
        const newSettings = await Setting.create({ interestRate, repaymentTerm, fees, termsOfService, privacyPolicy });
        res.status(201).json(newSettings);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const deleteSettings = async (req, res) => {
    try {
        const { id } = req.params;
        const settings = await Setting.findByPk(id);
        if (settings) {
            await settings.destroy();
            res.json({ message: 'Settings deleted successfully' });
        } else {
            res.status(404).json({ message: 'Settings not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

