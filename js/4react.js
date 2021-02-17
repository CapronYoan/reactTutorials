// Utiliser les propriétés des composants parents vers composants enfants

class Children extends React.Component {
    //// ajouter call function

    render(){
        // On récupère la propriété valeur depuis le composants parent préfixé par "this.props." puis le nom de la propriété
        return <h2>{this.props.valeur}</h2>
    }    
}

// la classe parent qui inclut la classe enfant
class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello Gaea21 :)"
        }
    }

    render() {
        return  <div>
                    <h1>{this.state.message}</h1>

                    {/* les propriétés s'insère comme un argument en html*/}
                    <Children valeur="Voici une propriété"/>
                
                </div>;
        
    }
}

// ne pas oublier de modifier la classe Parent à afficher et pas d'inquiétude, les composants enfants sont inclut.
ReactDOM.render(React.createElement(Parent), document.querySelector("#root"));


// Pour en savoir plus, le lien vers la documentation réact: https://fr.reactjs.org/docs/getting-started.html
