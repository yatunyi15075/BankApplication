import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    // Extract the token from the Authorization header
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the decoded user to the request object
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};



export const roleMiddleware = (roles) => {
    return (req, res, next) => {
        // Extract the token from the Authorization header
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Check if the user's role is allowed
            if (!roles.includes(decoded.role)) {
                return res.status(403).json({ message: 'Access denied' });
            }

            req.user = decoded; // Attach the decoded user to the request object
            next();
        } catch (err) {
            res.status(401).json({ message: 'Token is not valid' });
        }
    };
};


