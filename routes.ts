/**
 * Public Routes: Routes that are accessible to the public 
 * @type {[String]}
 */
export const publicRoutes = [
    '/',
    '/about-us',
    '/contact',
    '/services',
    '/blog/:slug',
    '/email-verification',
    '/activities',
    '/oneapi',
    '/policies',
    '/gallery',
    '/news/:slug',
    '/impact',
    '/academics',
    '/kpi',
    '/informatics-applications',
    '/news',
    'progress-reports'
]



/**
 * Public Routes: Routes that are used for authentication
 * routes will redirrect logged in users to dashbord 
 * @type { [String] }
 */


export const authRoutes = [
    '/login',
    '/register',
    '/error',
    '/forgot-password',
    '/new-password',
]

/**
 * Public Routes: Routes that are accessible to the public 
 * @type {String}
 * 
 */
export const apiRoutesPrefix = '/api/auth'


export const DEFAULT_LOGGED_IN_REDIRRECT = '/user/home'
export const ADMIN_LOGGED_IN_REDIRRECT = '/admin/dashboard'