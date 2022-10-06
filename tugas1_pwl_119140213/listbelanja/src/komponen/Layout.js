import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul style={{display:"flex",gap:35,fontSize:18,padding:20,backgroundColor:"orange"}}>
          <ol>
            <Link to="/">Shopping Lists</Link>
          </ol>
          <ol>
            <Link to="/toko">Shop</Link>
          </ol>
          <p style={{marginLeft:600,fontSize:20,marginBottom:20}}>My Shopping Lists</p>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;
