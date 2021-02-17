// Le challenge 2 ici vous demande de créer deux sous-composants séparés et de les rassembler 
// dans la class supérieur nommé App 
// Vous devrez biensure gérer le passage d'informations entre les niveaux des composants

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(event){
    this.setState({ input: event.target.value})
  }
  
  render() {
    return  <div>
              {/* Insérer du code en-dessous
            
               Insérer du code au-dessus  */}
            </div>;
  }
};

class Input extends React.Component {
  render() {
    return  <div>
              {/* Insérer du code en-dessous
            
               Insérer du code au-dessus  */}
            </div>;
     }
};

class Output extends React.Component {
  render() {
    return  <div>
              {/*  Insérer du code en-dessous
            
               Insérer du code au-dessus  */}
            </div>;

  }
};


ReactDOM.render(React.createElement(App), document.querySelector("#root"));



  
