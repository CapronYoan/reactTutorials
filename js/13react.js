// Créer une forme et soumettre les éléments dans une liste

class MaForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: []
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
        // event.preventDefault():
        // si l'événement n'est pas traité explicitement, 
        // son action par défaut ne doit pas être prise en compte comme elle le serait normalement.
        event.preventDefault();
        // Une nouveau type d'actualisation est possible ici:
        // [...this.state.submit] représente une copie de this.state.submit
        // [...this.state.submit, this.state.input] est l'équivalent d'un push sur la copie de this.state.submit
        // enfin on actualise le state submit avec le nouveau array
        this.setState({ submit: [...this.state.submit, this.state.input] },
            // this.setState étant une function asynchrone, il est necessaire d'attendre la réponse 
            // à la première requête {submit: ...}, puis de créer une fonction anonyme qui va effacé le contenu de l'input
            () => {
                document.querySelector("input").value = "";
            }
        );
    }
        
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} />
                <button type='submit'>Submit!</button>
            </form>
            <ul>
                {/* ici nous précisons un nouvel argument dans le map:
                l'index, un argument par défaut de la fonction map qui sera à son tour la valeur
                de l'argument key. Key étant une valeur d'indexation des éléments car React ne gère
                pas de manière automatique indexation. */}
                { this.state.submit.map((element, index) => <h1 key={index} ><li>{ element }</li></h1> ) }
            </ul>
        </div>
      );
    }
  }

ReactDOM.render(React.createElement(MaForm), document.querySelector("#root"));
