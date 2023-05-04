
import {createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/home/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ViewChef from '../layouts/ViewChef';
import ChefRecipeDetails from '../pages/chefDetails/ChefRecipeDetails';
import ErrorPage from '../pages/errorPage/ErrorPage';
import Blog from '../pages/blog/Blog';
import PrivateRouter from './PrivateRouter';



    const router = createBrowserRouter([
        {
            path:'/',
            element: <Main></Main>,
            errorElement: <ErrorPage></ErrorPage>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/blog',
                    element: <Blog></Blog>
                },
                {
                    path:'/register',
                    element: <Register></Register>
                },
                {
                    path:'/login',
                    element: <Login></Login>
                }
            ]
        },
        {
            path:'chefRecipeDetails',
            element: <ViewChef></ViewChef>,
            children:[
                {
                    path:':id',
                    element: <PrivateRouter><ChefRecipeDetails></ChefRecipeDetails></PrivateRouter>,
                    loader: ({params}) => fetch(`https://china-chef-recipe-house-server-mamun-ur-rashid.vercel.app/allData/${params.id}`)
                }
            ]
        }
    ]);

export default router;