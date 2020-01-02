import React, { Fragment } from 'react'

const About = () => (
  <Fragment>
    <div className="container">
      <div className="containerCenter">
        <img src="/static/img/logoheader.png" alt="Logo Header" />
        <h1>Creado por yo</h1>
        <h3>No mas texto por aca</h3>
      </div>
    </div>
    <style jsx>
      {`
        h1, h3 {
          color: white;
          font-family: 'Roboto';
          text-align: center;
        }
        img {
          width: 7em;
        }
        .containerCenter {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 1rem;
          padding: 1rem 3rem;
        }
        :global(body) {
          background: #F5C6DC;
        }
        .container {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
  </Fragment>
);

export default About;
