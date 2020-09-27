import { Router } from 'express';
import SiteRouter from './SiteRouter';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/site', SiteRouter);

// Export the base-router
export default router;
 