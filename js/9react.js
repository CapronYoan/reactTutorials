// Conditionnement de l'affichage du DOM avec l'opérateur conditionel ternaire.

class MonComposant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility(){
        this.setState({visibility: true})
    }


    render() {
        const show = this.state.visibility;

        {/* Ici on peut observer l'utilisation d'une sythaxe Javascript très pratique, l'opérateur conditionel ternaire.
            Le but est d'alléger le code précédent au maximum
            Pour résumé vous l'aurez peut-être deviné:
            si show est supérieur true qui se marque avec ? alors affiche le contenu, sinon null : */}
        
        return  <div>
                    <button onClick={this.toggleVisibility}><h3>Cliquez moi</h3></button>
                    { show ? <h1>Maintenant vous me voyez!</h1> : null}
                </div>;
       
        
    }
}

ReactDOM.render(React.createElement(MonComposant), document.querySelector("#root"));


// Pour en savoir plus, le lien vers la documentation réact: https://fr.reactjs.org/docs/getting-started.html


