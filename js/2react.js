// Créer une classe React.Component et rafraichir le react state

class NameofClass extends React.Component {
    
    // on voit apparaitre ici une nouvelle synthaxe, le state qui influencera l'affichage
    // en effet le state permet de stocker et actualiser des informations à afficher

    constructor(props) {
        super(props);
        this.state = {
            message: "Hello Gaea21 :)"
        }
    }
    
    // fonction qui réactualise les informations stocké dans le react state
    handleClick(){
        // ici nous utilisons une nouvelle function nommé setState permettant d'actualiser le react state
        this.setState({ message: "Bienvenue" })
    }

    render() {
        
        return  <div>
                    <h1>{this.state.message}</h1>
                    
                    {/* !!! vous noterez ici qu'en JSX onClick prend une majuscule */}
                    {/* !!! le code javascript en JSX s'inclut à l'intérieur d'accolades: {} */}
                    <button onClick={()=>this.handleClick()}>X</button>
               
                </div>;
        
    }
}

ReactDOM.render(React.createElement(NameofClass), document.querySelector("#root"));


// Pour en savoir plus, le lien vers la documentation réact: https://fr.reactjs.org/docs/getting-started.html
