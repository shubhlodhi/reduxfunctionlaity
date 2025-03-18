import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useSelector } from "react-redux";
import refresh from "./../images/refresh.png"
import deletes from "./../images/delete.png"
import { useDispatch } from "react-redux";

function User() {
    const users = useSelector((state) => state.counter.users);
    console.log("sss" , users)
    
   
    

    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center text-primary mb-4">Employee Details</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-hover table-bordered shadow-lg rounded-3">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Counter</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td> 
                                        <td>{user.name}</td> 
                                        <td>{user.counter}</td> 
                                        <td><img src={refresh} alt="" /><img onClick={()=>removes(user.id)} src={deletes} alt="" /></td>

                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="text-center text-muted">No Users Found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default User;
