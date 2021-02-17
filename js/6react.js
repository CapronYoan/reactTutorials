// Définir du javascript dans le render

class MonComposant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello Gaea21 :)"
        }
    }

    render() {
        // ici nous allons utiliser du code javascript pure. Comme en toute fonction javascript,
        // nous avons la possibilité de déclarer des variables comme ci-dessous
        const show = this.state.message;
        return  <div>
                    {/* et enfin retourner un élément javascript de cette variable dans le JSX. */}
                    <h1>{ show }</h1>
                </div>;
        
    }
}

// ne pas oublier de modifier la classe à afficher.
ReactDOM.render(React.createElement(MonComposant), document.querySelector("#root"));


// Pour en savoir plus, le lien vers la documentation réact: https://fr.reactjs.org/docs/getting-started.html