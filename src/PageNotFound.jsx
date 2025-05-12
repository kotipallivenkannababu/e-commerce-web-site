import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
    let navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 5000);

        // Optional: clean up if the component unmounts before 5 sec
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist...</p>
            <img src="/images/404.JPG" alt="404 Not Found" height="50%" width="100%" />
        </div>
    );
}

export default PageNotFound;
