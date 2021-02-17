// Réponse challenge 1
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      /// Ne pas oublié les bind ;)
      this.augmente = this.augmente.bind(this);
      this.diminue = this.diminue.bind(this);
      this.reset = this.reset.bind(this);
    }

    // Fonction augmente
    augmente(){
        this.setState({count: this.state.count + 1 })
    }

    // Fonction diminue
    diminue(){
        this.setState({count: this.state.count - 1 })
    }
        
    // Fonction reset
    reset(){
        this.setState({count: 0})
    }

    render() {
      const count = this.state.count;
      return (
        <div>
          <button onClick={this.augmente}>Augmenter!</button>
          <button onClick={this.diminue}>Diminuer!</button>
          <button onClick={this.reset}>Remise à zéro</button>
          <h1>Décompte: { count >= 0 ? count : 0 }</h1>
        </div>
      );
    }
  };

  ReactDOM.render(React.createElement(Counter), document.querySelector("#root"));

