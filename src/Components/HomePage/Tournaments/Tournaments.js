import React from "react";
import Map_1 from "./../../../Image/map_1.jpeg"
const Tournaments = () => {
  return (
    <div className="container">
      <h1 className="text-center">TOURNAMENTS</h1>
      <div class="d-flex justify-content-between">
        <h4 className="fw-bold">PUBG</h4>
        <h4 className="fw-bold">TOP 10 PLAYERS</h4>
        <div>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
              <img src={Map_1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
      </div>
    </div>
  );
};

export default Tournaments;
