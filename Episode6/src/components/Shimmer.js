const Shimmer = () => {
  return (
    <div className="shimmer_container">
      {Array(50)
        .fill(" ")
        .map((x, index) => (
          <div key={index} className="shimmer_resCard">
            <img alt="" />
            <div className="shimmer_resCard_content">
              <h3></h3>
              <h4></h4>
              <p></p>
              <h6></h6>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
