/// Créer un simple counter qui peut augmenter, diminuer et remettre à zéro.
/// Aide:
/// créer une fonction pour chaque bouton sans oublier de lier les this en amont. 



class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // Insérer du code en-dessous
  
      // Insérer du code au-dessus
    }
    // Insérer du code en-dessous
  
    // Insérer du code au-dessus
    render() {
      return (
        <div>
          <button className='aug' onClick={this.augmente}>Augmenter!</button>
          <button className='dim' onClick={this.diminue}>Diminuer!</button>
          <button className='reset' onClick={this.reset}>Remise à zéro</button>
          <h1>Décompte: {this.state.count}</h1>
        </div>
      );
    }
  };

  ReactDOM.render(React.createElement(Counter), document.querySelector("#root"));

  /// Exercice bonus: Il est possible d'afficher uniquement des nombres entiers supérieurs ou égal à zéro.
  /// C'est-à-dire, lorsque 0 est affiché, je ne peux plus diminuer.
  /// Comment procéderais-tu?
