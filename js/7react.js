// Lier les functions avec le this
class MonComposant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello Gaea21 :)"
        }
        // Une autre façon de lier le this est d'utiliser la fonction bind
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({ message: "Vous avez cliqué" })
    }


    render() {
        const show = this.state.message;
        return  <div>
                    <h1>{ show }</h1>
                    {/* Rappelez vous nous presentions précédemment la fonction onClick sous la forme:
                    onClick={()=>this.handleClick()} */}
                    {/* et bien grace au .bind(this) défini plus haut, nous pouvons nous défaire de cette synthaxe */}
                    <button onClick={this.handleClick}>X</button>
                </div>;
        
    }
}

ReactDOM.render(React.createElement(MonComposant), document.querySelector("#root"));


// Pour en savoir plus, le lien vers la documentation réact: https://fr.reactjs.org/docs/getting-started.html