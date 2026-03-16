import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const startSimulation = () => {
    navigate("/loading");

    setTimeout(() => {
      navigate("/simulator");
    }, 2000);
  };

 return (
  <div className="home">
    <button className="start-btn" onClick={startSimulation}>
      START SIMULATION
    </button>
  </div>
);
}

export default Home;