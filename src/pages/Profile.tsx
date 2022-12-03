import axios from "axios";
import "../styles/style.css";
// import "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css";

function Profile() {

    return (
        <>
            <nav>
                <h4>Profile</h4>
                <ul>
                    <li><a href="/home">Contents</a></li>
                </ul>
            </nav>

            <div className="container mt-4">
                <div className="card">
                    <div className="card-header">
                        Write Your Contents
                    </div>

                    <div className="card-body">
                        <div className="form group">
                            <table width="500">
                                <tr>
                                    <th>
                                        Contents
                                    </th>
                                </tr>
                                <tr>

                                    <td>
                                        <input type="text" placeholder="Wirte your title."/>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="400">
                                    <textarea placeholder="Write your contents."
                                    ></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <input type="button" className="btn btn-primary" value="Confirm"/>
                                        <a href="/home" className="btn btn-primary">Go list</a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>


                <div className="container mt-4">
                    <div className="card">
                        <div className="card-header">
                            Change Password Form
                        </div>

                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Current Password</label>
                                    <input type="text" className="form-control" id="password" name="password"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">New Password</label>
                                    <input type="email" className="form-control" id="new_password" name="new_password"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Confirm New Password</label>
                                    <input type="password" className="form-control" id="new_password"
                                           name="new_password"/>
                                </div>

                                <a href="/home" className="btn btn-primary">Change</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;