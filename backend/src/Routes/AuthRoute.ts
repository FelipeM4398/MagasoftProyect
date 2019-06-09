/****
 * Modules
 */
import { Router, Request, Response } from 'express';
import User from '../entity/UserEntity';
import AuthorService from '../Services/AuthService';
import {sign} from 'jsonwebtoken';

/****
 * Instances
 */
const authRouter = Router();
const authService = new AuthorService();

/****
 * Message general
 */
const handleMessage = (response, code, message) => response.status(code).json({ message });


/****
 * Endpoinst
 */

 /***
  * Endpoint for SignUp
  */
authRouter.post('/signUp', async (request: Request, response: Response, next) => {
    const {email, password} = request.body;
    try {
        const data = await authService.signUp(email, password);
        const token = sign({identificationUser: data[0].identificationUser, emailUser:data[0].emailUser, passwordUser:data[0].passwordUser, privilegesTypeUser:data[0].privilegesTypeUser}, 'secretMagasoft')
        handleMessage(response, 200, Object.assign({token}, data[0]))
    } catch (error) {
        console.log(error);
        handleMessage(response, 404, 'Error users')
    }
})


 /***
  * Endpoint for recover password
  */
 authRouter.post('/recoverPassword', async (request: Request, response: Response, next) => {
    const {email, password} = request.body;
    try {
        await authService.recoverPassword(email, password);
        await handleMessage(response, 200, 'Update password');
    } catch (error) {
        handleMessage(response, 404, 'Error users')
    }
})

export default authRouter;