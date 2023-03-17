import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from
"react-router-dom"
import MainNav from './components/navigation/MainNav';
import PageAccueil from './components/pages/PageAccueil';
import PageProfesseurs from './components/professeurs/pages/PageProfesseurs';
import PageCours from './components/cours/page/PageCours';
import PageCoursIndividuelle from './components/cours/page/PageCoursIndividuelle';

function App() {

  const DUMMY_COURS = [
    {
        session: "Hiver 2023",
        titre: "The Rock is cooking",
        discipline:"cooking",
        nmbMaxEleve: 12,
        dateDebut: "10 janvier 2023",
        dateFin: "6 mai 2023",
        professeur: "The Rock",
        listEleve: [{
          nom:"Jacques",
          prenom:"Jean",
          id: "a1"
        },
        {
          nom:"Man",
          prenom:"Nathan",
          id: "a2"
        }
    
        ]


        //listEleve [
            
    },
    {
        session: "Hiver 2022",
        titre: "Chad physics",
        discipline:"physique",
        nmbMaxEleve: 20,
        dateDebut: "13 janvier 2023",
        dateFin: "3 mai 2023",
        professeur: "Giga Chad",
        listEleve: [{
          nom:"Gabriel",
          prenom:"Gabi",
          id: "a1"
        },
        {
          nom:"Yes",
          prenom:"No",
          id: "a2"
        }
    
        ]
    }

  ]

  const DUMMY_PROF = [
    {
        nom: "Giga",
        prenom: "Chad",
        image : "https://i.pinimg.com/originals/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg",
        listeCours: [
            "Chad physics",
            "Chad chemistry"
        ],
        dateEmbauche : "29 mai 2011"
    },
    {
        nom: "The",
        prenom: "Rock",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3p0_rrqRu8yNil40DvHxtFozTEbhYo9DdA&usqp=CAU",
        listeCours: [
            "The Rock is cooking"
        ],
        dateEmbauche : "29 mai 2011"
    },
    
  ]
  const [listProf, addProf] = useState(DUMMY_PROF);
  const [listCours, addCours] = useState(DUMMY_COURS);

  return (
    <div className="App">
      <Router>
        <MainNav />
        <main>
          <Switch>
            <Route path="/" exact>
              <PageAccueil />
            </Route>
            <Route path="/professeur">
              <PageProfesseurs addProf={addProf} listProf={listProf} listCours={listCours} addCours={addCours}/>
            </Route>
            <Route path="/cours">
              <PageCours listCours={listCours} addCours={addCours} listProf={listProf} addProf={addProf}/>
            </Route>
            <Route path="/:titre">
              <PageCoursIndividuelle listCours={listCours} />
          
            </Route>
            
          </Switch>

        </main>
        
        
      </Router>
        
    </div>
  );
}

export default App;
