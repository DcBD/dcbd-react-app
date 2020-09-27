


import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import db from "@common/helpers/db/connection"

// Init shared
const router = Router();


/******************************************************
 *                Test route "GET /api/site/test"
 *****************************************************/

router.get('/test', async (req: Request, res: Response) => {
  
// Test connection
db.authenticate().then(() => console.log("Connected to the database")).catch(err => console.log(err));
  return res.status(OK).json({success: "TAK"});
});


export default router;