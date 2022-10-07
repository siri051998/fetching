import { Outlet, Link } from "react-router-dom";

const PageLayout = () => {
  return (
    <>
      <nav>
        <ul style={{listStyle:"none"}}>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/post"></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default PageLayout;