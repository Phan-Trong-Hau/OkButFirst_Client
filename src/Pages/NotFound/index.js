import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
    useEffect(() => {
        document.title = "Not Found 404";
    }, []);

    return (
        <main className="page-404">
            <section>
                <div className="container">
                    <div className="empty-page-content">
                        <h1>404</h1>
                        <h2 className="page-heading">Page not found</h2>
                        <p className="description">
                            Uh oh, looks like the page you are looking for has
                            moved or no longer exists.
                        </p>

                        <div className="button-group">
                            <Link
                                to="/collections"
                                className="theme-btn__black"
                            >
                                Continue shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NotFound;
