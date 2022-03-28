import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src="http://localhost:3000/src/grey.jpg"/>
                    <p>
                        For Watching Race Show Please Click 'Race Category'
                    </p>
                    <Link className="btn btn-dark" to="/users">Greyhound</Link>
                    <Link className="btn btn-light ms-3" to="/posts">Horse</Link>
                </div>
            </div>
        </div >
    )
}

export default Home;