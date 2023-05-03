
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
            // element: <ErrorPage></ErrorPage>,
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
            // element: <ErrorPage></ErrorPage>,
            children:[
                {
                    path:':id',
                    element: <PrivateRouter><ChefRecipeDetails></ChefRecipeDetails></PrivateRouter>,
                    loader: ({params}) => fetch(`http://localhost:5000/allData/${params.id}`)
                }
            ]
        }
    ]);

export default router;