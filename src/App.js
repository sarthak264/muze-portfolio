import { useState } from "react";
import Footer from "./components/Footer";
import MusicCard from "./components/MusicCard";
import Work from "./components/Work";
import Header from "./components/Header";
import Menu from "./components/Menu";
import styled from "styled-components";

const Music = styled.section`
  padding: 4.5rem 0;
  @media screen and (max-width: 500px) {
    padding: 1.5rem 0;
  }
  @media screen and (max-width: 991px) {
    padding: 2.5rem 0;
  }
`;


function App() {
  return (
    <div className="container">
      <Menu />
      <Header />
      <div className="box">
        <h2 className="mb-4 fw-bolder">Latest Work</h2>
        <div className="px-3">
          <Work
            image="./images/portfolio1.jpg"
            heading="P4 Branding and packaging"
          />
          <Work
            image="./images/portfolio2.jpg"
            heading="Blood Orange book design and print"
          />
          <Work
            image="./images/portfolio3.jpg"
            heading="Cobra Motors rebrand"
          />
          <Work
            image="./images/portfolio4.jpg"
            heading="Nike 3d design tv advertisment"
          />
        </div>
      </div>
      <Music className="music_section">
        <h2 className="mb-4 fw-bolder">Music</h2>
        <div className="row">
          <div className="col-12 col-sm-6">
            <MusicCard
              img="./images/portfolio5.jpg"
              caption="The madmen came to life"
            />
          </div>
          <div className="col-12 col-sm-6">
            <MusicCard
              img="./images/portfolio6.jpg"
              caption="Sally goes to the park"
            />
          </div>
        </div>
      </Music>
      <Footer />
    </div>
  );
}

export default App;
