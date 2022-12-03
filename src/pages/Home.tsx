import axios from "axios";
import "../styles/style.css";
// import "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css";

function Home() {
    return (
        <>
            <nav>
                <h4>Ninestagram</h4>
                <ul>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/friends">Friends</a></li>
                    <li><a href="/">Logout</a></li>
                </ul>
            </nav>

            <div className="container mt-4">
                <div className="card">
                    <div className="card text-center">
                        <div className="card-header">
                            Follower's name
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Content's title</h5>
                            <p className="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
                                purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea
                                iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros.
                                Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis
                                iudicium purus sit amet fermentum.</p>
                        </div>
                        <div className="card-footer text-muted">
                            Month/Date information
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="card">
                    <div className="card text-center">
                        <div className="card-header">
                            Follower's name
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Content's title</h5>
                            <p className="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
                                purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea
                                iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros.
                                Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis
                                iudicium purus sit amet fermentum.</p>
                        </div>
                        <div className="card-footer text-muted">
                            Month/Date information
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="card">
                    <div className="card text-center">
                        <div className="card-header">
                            Follower's name
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Content's title</h5>
                            <p className="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
                                purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea
                                iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros.
                                Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis
                                iudicium purus sit amet fermentum.</p>
                        </div>
                        <div className="card-footer text-muted">
                            Month/Date information
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="card">
                    <div className="card text-center">
                        <div className="card-header">
                            Follower's name
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Content's title</h5>
                            <p className="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
                                purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea
                                iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros.
                                Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis
                                iudicium purus sit amet fermentum.</p>
                        </div>
                        <div className="card-footer text-muted">
                            Month/Date information
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="card">
                    <div className="card text-center">
                        <div className="card-header">
                            Follower's name
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Content's title</h5>
                            <p className="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
                                purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea
                                iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros.
                                Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis
                                iudicium purus sit amet fermentum.</p>
                        </div>
                        <div className="card-footer text-muted">
                            Month/Date information
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="card">
                    <div className="card text-center">
                        <div className="card-header">
                            Follower's name
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Content's title</h5>
                            <p className="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
                                purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea
                                iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros.
                                Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis
                                iudicium purus sit amet fermentum.</p>
                        </div>
                        <div className="card-footer text-muted">
                            Month/Date information
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="card">
                    <div className="card text-center">
                        <div className="card-header">
                            Follower's name
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Content's title</h5>
                            <p className="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
                                purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea
                                iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros.
                                Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis
                                iudicium purus sit amet fermentum.</p>
                        </div>
                        <div className="card-footer text-muted">
                            Month/Date information
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;