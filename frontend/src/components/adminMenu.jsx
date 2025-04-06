import {NavLink} from "react-router-dom";
const AdminMenu = () => {
return(
 
        <div className="text-center ">
            <div className="w-60 d-flex flex-col rounded-[0px] py-4 gap-3">
                <h4 className="text-lg uppercase text-dark">admin pannel</h4>
                <div className="list-group">
                    <NavLink to="/dashboard/create-Category" className="no-underline list-group-item rounded-0 py-3">create category</NavLink>
                    <NavLink to="/" className="no-underline list-group-item rounded-0 py-3">create product</NavLink>
                    <NavLink to="/" className="no-underline list-group-item rounded-0 py-3">create category</NavLink>
                    <NavLink to="/" className="no-underline list-group-item rounded-0 py-3">create product</NavLink>
                    <NavLink to="/" className="no-underline list-group-item rounded-0 py-3">create category</NavLink>
                    <NavLink to="/" className="no-underline list-group-item rounded-0 py-3">create product</NavLink>
                </div>
            </div>
        </div>
  

)


}

export default AdminMenu;