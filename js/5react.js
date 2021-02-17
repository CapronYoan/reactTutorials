// Passer une liste à travers les composants

class Children extends React.Component {
    render(){
        // L'élément récupéré est un liste
        
        return  <ul>
                    {/* Mais quel est ce charabia en dessous: element li h2 bla bla bla :) */}
                    {/* No stress je vais vous expliquer: */}
                    {/* Une notions utile en javascript est la notion de mapping */}
                    {/* Rappelez vous je vous avait dit précédemment que pour passer du code Javascript il fallait des accolades.
                    A partir de la liste "this.props.liste", je map chaque element que je nomme donc "element" un peu 
                    à la manière forEach. Autrement dit je vais appliquer une fonction à chaque element de la liste.
                    Chaque element retournera un  li: element de la liste h2: titre moyen, du pure html contenant mon element 
                    en fait ici chaque element est l'argument de la fonction et Javascript ES6 me permet de retourner sans
                    le mot clé return et sur une seule ligne. Pas mal non?? */}
                    
                    { this.props.liste.map( element => <li><h2>{element}</h2></li> ) }
                </ul>;
    }    
}

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
                    {/* La liste des prénom passé en argument */}
                    {/* Aussi veuillez ajouter votre prénom à la fin */}
                    <Children liste={["Denis", "Letitia", "Amed", "Cynthia", "Yoan"]}/>
                </div>;
        
    }
}

// ne pas oublier de modifier la classe Parent à afficher et pas d'inquiétude, les composants enfants sont inclut.
ReactDOM.render(React.createElement(Parent), document.querySelector("#root"));


// Pour en savoir plus, le lien vers la documentation réact: https://fr.reactjs.org/docs/getting-started.html