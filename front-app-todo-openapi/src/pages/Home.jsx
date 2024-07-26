import mainPhoto from "../assets/home.jpg";

const Home = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center ">
        <div>
          <h2
            className="text-center mb-5"
            style={{
              fontFamily: "serif",
              fontWeight: "bold",
              color: "#755664",
            }}
          >
            Welcome to Memories
          </h2>
        </div>
        <img src={mainPhoto} alt="main_photo" style={{ width: "50%" }} />
      </div>
    </>
  );
};

export default Home;
