import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <>
        
            <nav >
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/useMemo">Use Memo</Link>
                    </li>
                    <li>
                        <Link to="/useCallback">Use Callback</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <hr />
            <Outlet />
          
        </>
    )
};

export default Layout;