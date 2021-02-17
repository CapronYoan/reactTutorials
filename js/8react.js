// Conditionnement de l'affichage du DOM

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
        
        // en fonction du react state, j'affiche ou non les informations... 
        if (show) {
            return  <div>
                        <button onClick={this.toggleVisibility}><h3>Cliquez moi</h3></button>
                        <h1>Maintenant vous me voyez!</h1>
                    </div>;
        } else {
            return  <div>
                        <button onClick={this.toggleVisibility}><h3>Cliquez moi</h3></button>
                    </div>;
        }
    }
}

ReactDOM.render(React.createElement(MonComposant), document.querySelector("#root"));


// Pour en savoir plus, le lien vers la documentation réact: https://fr.reactjs.org/docs/getting-started.html


