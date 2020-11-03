import bookApp from './pages/book-app.cmp.js';
import homePage from './pages/home-page.cmp.js';
import aboutUs from './pages/about-us.cmp.js';
import bookDetails from './pages/book-details.cmp.js';



const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutUs
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
]
export const myRouter = new VueRouter({ routes: myRoutes })
