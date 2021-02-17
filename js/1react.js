// Créer une classe React.Component et paramétrer le rendu

// Réact utilise l'extension de synthax JavaScript JSX permettant de simplifier l'écriture de programmes.
// En effet cette synthaxe étant assez proche du html, les développeurs sont généralement habitués.
// Cependant il faut noter quelques différences cf: lien doc à la fin.



// Example de déclaration de classe React Component !!! Par convention la class commence par une majuscule 
class NameofClass extends React.Component {

    // ici peuvent être intégré les states: les états du DOM. Une notion très importante en réact
    // state = {
    //     message: "Un autre message"
    // }

    // Les classes react component doivent obligatoirement et au moin retourner la méthode render
    // mais peuvent retourner d'autres méthodes 
    render() {
        
        //Synthaxe JSX
        const JSX = <h1>Hello Gaea21 :)</h1>;
        
        return JSX // retourne obligatoirement un seul element JSX
    }
}


// Pour le rendu: 
// On invoque la class component NameofClass (à savoir la class NameofClass pourrait elle même contenir d'autres classes)
// La fonction React.createElement crée un element réact à partir de notre synthaxe JSX: React.createElement(NameofClass)
// La fonction ReactDOM.render retourne notre element react vers la target html dont l'id est "root" cf: index.html  ex: ReactDOM.render(ReactElementCreated ex:NameofClass, targetHtml ex: document.querySelector("#root"))
// Ce qui donne:
ReactDOM.render(React.createElement(NameofClass), document.querySelector("#root"));


// Une idée pour se familiariser un peu avec Réact serait d'implémenter un boutton qui lorsque l'on clique dessus afficherait, à la suite de Hello Gaea21, le message contenu dans le state.  


// Pour en savoir plus, le lien vers la documentation réact: https://fr.reactjs.org/docs/getting-started.html
