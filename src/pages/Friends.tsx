import {API_FOLLOW_READ} from "../config/env";
import axios from "axios";
import "../styles/style.css";
// import "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css";
import Follower from "../components/Follower";
import {useState} from "react";

function Friends() {
    const [followers, setFollower] = useState("");
    const cellList = ["id", "nickname", "email"];

    async function followerAPI(){
        const response = await axios({
            url: API_FOLLOW_READ + "/1",
            method: "get"
        });
        return response.data;
    }

    const stateRefresh = () => {
        followerAPI()
            .then(res => setFollower(res))
            .catch(err => console.error(err));
    }

    const filteredComponents = (data: any) => {
        return data.map((c: any) => {
            return <Follower stateRefresh={stateRefresh} key={c.id} id={c.id} image={c.image} name={c.name}
                             birthday={c.birthday} gender={c.gender} job={c.job}/>
        })
    }

    return (
        <>
            <nav>
                <h4>Following/Follower</h4>
                <ul>
                    <li><a href="/home">Contents</a></li>
                </ul>
            </nav>
            <div className="container mt-4">
                <h1>Following</h1>
                <table className="table">
                    <thead>
                    <tr>
                        {cellList.map(c => {
                            return <td>{c}</td>
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        followers ? filteredComponents(followers)
                            :
                            <td></td>
                    }
                    </tbody>
                </table>
            </div>


            <div className="container mt-4">
                <h1>Follower</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nickname</th>
                        <th scope="col">Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Friends;