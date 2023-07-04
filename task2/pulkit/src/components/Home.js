
const Home = () => {
  return (
    <div className="container mt-4">
      <h1 className="display-4">Welcome to My Website!</h1>
      <p className="lead">This is the Home page.</p>

      <h2>Latest News</h2>
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">News Article 1</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor tortor sed est accumsan, nec efficitur urna congue.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">News Article 2</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor tortor sed est accumsan, nec efficitur urna congue.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">News Article 3</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor tortor sed est accumsan, nec efficitur urna congue.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
