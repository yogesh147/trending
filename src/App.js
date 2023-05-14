import React, { Component } from 'react';
import Header from './Header';
class App extends React.Component {  
   render() {  
      return (  
         <div>  
            <Header/>  
            <Second/>  
         </div>  
      );  
   }  
}  

class Second extends React.Component {  
   render() {  
      return (  
         <div>  
            <h2>www.javatpoint.com</h2>  
            <p>This websites contains the great CS tutorial.</p>  
         </div>  
      );  
   }  
}  
export default App;  