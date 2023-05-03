import React from 'react';
import error from '../../assets/error404.jpg'

const ErrorPage = () => {
    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
            <p>We're sorry, but the page you are trying to access cannot be found.</p>
            <p>Please check the URL for any mistakes or try searching for the content you are looking for using the search bar above.</p>
            <p>Error code: 404 Not Found</p>
            <img src={error} alt="Error" />
        </div>
    );
};

export default ErrorPage;