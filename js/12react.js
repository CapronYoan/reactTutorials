// Controller les changements insérés dans un input à la manière "react"
// React à comme principale force de réagir intantanément à une insertion 
// comme nous allons voir ensemble. C'est justement d'où est tiré son nom: react
class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
    this.handleChange = this.handleChange.bind(this);
    }
    // ici nous utilisons une nouvel notion even.target.value qui se charge
    // de récupérer les modifications de l'input instantanément 
    handleChange(event){
      this.setState({ input: event.target.value})
    }
    render() {
      return (
        <div>
            {/* !!! ne pas oublier l'attribut onChange avec une majuscule */}
            <h3><input onChange={this.handleChange}></input></h3>
            <h3>Elements entrés:</h3>
            <h3>{this.state.input}</h3>
        </div>
      );
    }
  };

  ReactDOM.render(React.createElement(Input), document.querySelector("#root"));
