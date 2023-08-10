import Cuisines from "./Cuisines";
import Message from "./Message";
import Navbar from "./Navbar";


function Home() {
    
    return <div className="home-container">
        {/* <Navbar /> */}
        <Message />
        <Cuisines />
    </div>;
}

export default Home;