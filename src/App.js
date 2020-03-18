import React from 'react';
import './App.css';
import './Header.js';


function App() {
  return (
    <div className="App">
    <body>
        <main>  
          <section>
            <header>
              <h2>Contact information:</h2>
            </header>
            <address>
              <p>Name: Sally Student</p>
              <p>Phone: 425-555-0057</p>
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
