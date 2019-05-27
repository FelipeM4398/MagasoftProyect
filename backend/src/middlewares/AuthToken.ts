import {verify} from 'jsonwebtoken';
export default function (request ,response, next) {
    if (request.headers.authorization) {
        const token = request.headers.authorization.split(' ')[1]
        verify(token, 'secretMagasoft', (error, decoded) => {
          return  (error) ? response.json({message: 'Invalid Token'}) : '';
        })
        next();
    } else {
        response.status(403).json({
            message: 'You do not have enough permissons to acces'
        });
    }
}