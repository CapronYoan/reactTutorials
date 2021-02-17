// Une notion importante en réact. L'utilisation du Context API.
// Vous l'aurez peut-être remarqué, react transmet les informations d'un composant supérieur à inféreur
// jusqu'alors. Un peu comme si les composants étaient les étages d'un immeuble et que nous les descendions 
// un à un entre les composants.
// Et bien dans ce cas, le context API serait un peu comme un ascenseur qui descendrait directement à 
// l'étage du composant cible. Ceci afin d'éviter les répétitions d'arguments.

// Il faut tout d'abord déclarer une variable context de la façon suivante:
const MContext = React.createContext();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Je suis le composant 5. Je récupère les données là grâce à l'API Context <<<<"
        };
    }

    render() {
        /// Définir le context provider et sa valeur de la façon suivante
        return <MContext.Provider value = { this.state } >
            <
            ul >
            <
            li > < h1 > Je suis le composant principale.J 'envois les données à l'
        API Context d 'ici >>>> </h1></li> <
            Composant1 / >
            <
            /ul>

        <
        /MContext.Provider>
    }
};

// Composant vide
class Composant1 extends React.Component {
    render() {
        return <ul >
            <
            li > < h1 > Je suis Composant 1 < /h1></li >
            <
            Composant2 / >
            <
            /ul>
    }
};

// Composant vide
class Composant2 extends React.Component {
    render() {
        return <ul >
            <
            li > < h1 > Je suis Composant 2 < /h1></li >
            <
            Composant3 / >
            <
            /ul>
    }
};

// Composant vide
class Composant3 extends React.Component {
    render() {
        return <ul >
            <
            li > < h1 > Je suis Composant 3 < /h1></li >
            <
            Composant4 / >
            <
            /ul>
    }
};

// Composant vide
class Composant4 extends React.Component {
    render() {
        return <ul >
            <
            li > < h1 > Je suis Composant 4 < /h1></li >
            <
            Composant5 / >
            <
            /ul>
    }
};

// Composant qui récupère le context
class Composant5 extends React.Component {
    render() {
        return <ul >
            <
            li > < h1 > { this.context.message } < /h1></li >
            <
            /ul>
    }
};

// Afin de récupérer le context, il faut en préciser le type comme ci dessous:
Composant5.contextType = MContext;


ReactDOM.render(React.createElement(App), document.querySelector("#root"));

///// Dans L'idée du API context c'est ça :)

/////                                                      App       >>>>    context POST (this.state)
/////                                                      |||                 |||
/////                                                   Composant1             |||
/////                                                      |||                 |||                                
/////                                                   Composant2             |||
/////                                                      |||                 |||
/////                                                   Composant3             |||
/////                                                      |||                 |||
/////                                                   Composant4             |||
/////                                                      |||                 |||
/////                                                   Composant5   <<<<    context GET (this.context)



/////  Nous voici à la fin de la partie 1 de cette formation. Evidemment il s'agit d'examples non-exhaustifs d'utilisation et il existe
/////  encore d'autres concepts que je vous laisse explorer. Pour être à l'aise avec react, il vous faudra pratiquer.
/////  Donc R.P.P: Relax, Pratique et Patience ;) En espérant que cela vous sera utile ...

////   Le lien vers la documentation réact: https://fr.reactjs.org/docs/getting-started.html