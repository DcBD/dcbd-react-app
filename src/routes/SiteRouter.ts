


import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';


// Init shared
const router = Router();


/******************************************************
 *                Test route "GET /api/site/test"
 *****************************************************/

router.get('/test', async (req: Request, res: Response) => {
  
  return res.status(OK).json({success: "TAK"});
});


export default router;