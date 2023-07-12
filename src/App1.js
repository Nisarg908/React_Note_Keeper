import React from 'react';
import Header from './Components/Header';
import Note from './Components/Note';
import Footer from './Components/Footer';
import Notes from './notes.js'
function createNote(Notes) {
  return <Note key={Notes.key} title={Notes.title} content={Notes.content} />
}
function App() {
  return(
    // <div>
    //   <Header />
    //   <Note title='Jquery' content='Jquery is very interesting' />
    //   <Footer />
    // </div>
    <div>
      <Header />
      {
        Notes.map(createNote)
      }
      <Footer />
    </div>
  );
}
export default App;