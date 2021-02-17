// Créer une classe React enfant et une classe parent

// La classe enfant dans sa version minimale
class Children extends React.Component {
    render(){
        return <h2>Voici le composant "Children"</h2>
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

                    {/* la classe enfant s'insère comme un element html avec une majuscule */}
                    <Children />
                
                </div>;
        
    }
}

// ne pas oublier de modifier la classe Parent à afficher et pas d'inquiétude, les composants enfants sont inclut.
ReactDOM.render(React.createElement(Parent), document.querySelector("#root"));


// Pour en savoir plus, le lien vers la documentation réact: https://fr.reactjs.org/docs/getting-started.html
