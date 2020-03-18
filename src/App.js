import React from 'react';
import './App.css';
import Header from './Header.js';


function App() {
  return (
    <div className="App">
      <body>
        <Header />
        <main>  
          <section>
            <h2>Contact information:</h2>
            <address>
              <p>Name: Sally Student</p>
              <p>Email at <a href="mailto:sallys@gmail.com" target="_blank">sallys@gmail.com.</a></p>
              <p>Phone: 425-555-0057</p>
              <div>
                <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" alt="A picture of me, Sally Student."/>
              </div>
            </address>
          </section>
          <section>
            <header>
              <h2>Education:</h2>
            </header>
            <p>BS at UBS of Boring, England</p>
            <p>MS at UMS of Manchester, England</p>
          </section>
          <section>
            <header>
              <h2>Employment history:</h2>
            </header>
            <h3>Soledad Superconductors</h3>
              <p>Junior Engineer</p>
              <p>1/1/2016-9/1/2017</p>
              <p>Supervised the soldering together of several superconductors.</p>
            <h3>Hanover Hovercraft</h3>
              <p>Program Junior Coordination Manager</p>
              <p>11/1/2017-8/1/2018</p>
              <p>Helped overcome hindrances to the handing over of high-tech hovercraft.</p>
          </section>
        </main>
      </body>
    </div>
  );
}

export default App;
