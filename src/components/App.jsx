import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";



function App() {
   return (
    <React.Fragment>
    <Header />
    {notes.map(entry => (
    <Note key={entry.key} title={entry.title} content={entry.content}/>))}
   <Footer />
    </React.Fragment>
   )  
}

export default App;