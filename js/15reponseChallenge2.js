// Réponse et explications challenge2

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
    // Ne pas oublier de lier le this  
    this.handleChange = this.handleChange.bind(this);
    }
   
    handleChange(event){
      this.setState({ input: event.target.value})
    }
    render() {
      return (
        <div>
            {/* Nous utilisons ici deux composants différents */}
            {/* Nous envoyons les informations sous forme d'arguments vers les composants inférieurs */}
            <Input handleChange={this.handleChange} />
            <Output input={this.state.input} />
        </div>
      );
    }
  };

class Input extends React.Component {
   render() {
      return    <h3>
                    {/* Nous récupérons les informations du composant supérieur avec le mot clé props */}
                    <input onChange={this.props.handleChange}></input>
                </h3>;
    }
  };

class Output extends React.Component {
    render() {
        return  <div>
                    <h3>Elements entrés:</h3>
                    {/* Nous récupérons les informations du composant supérieur avec le mot clé props */}
                    <h3>{this.props.input}</h3>
                </div>;
    }
};


ReactDOM.render(React.createElement(App), document.querySelector("#root"));

///// Dans L'idée c'est ça :)
///// Il est d'ailleur intéressant de visualiser l'arborésence react en 3 dimensions.


/////                                                     App 
/////                                                ///       \\\
/////                                         input                 handleChange
/////                                    ///                                      \\\
/////                             Input                                                Output
