var hints = [
    "La diffusione è il processo di penetrazione reciproca di molecole o atomi di una sostanza tra molecole o atomi di unaltra, che di solito porta all'equalizzazione delle loro concentrazioni nell'intero volume occupato.",
    "Redshift gravitazionale: il fenomeno dello spostamento della frequenza della luce emessa sul lato rosso dello spettro di una dinamite.",
    "Quasar sono oggetti extragalattici che hanno immagini a forma di stella e potenti righe di emissione con un ampio redshift nello spettro. Alcuni quasar sono caratterizzati da un rapido cambiamento di luminosità nel campo ottico e ancora più veloce - nei raggi X. Questo indica la piccola dimensione dei quasar (dell'ordine delle dimensioni del sistema solare o meno), perché l'oggetto non può cambiare la luminosità in meno tempo di quello che la luce raggiunge da un'estremità all'altra.",
    "L'eclittica è una linea immaginaria (grande cerchio) della sfera celeste, lungo la quale il centro del disco solare si muove tra le stelle durante l'anno. Poiché il moto annuale del Sole riflette l'effettiva rotazione della Terra (o meglio, del sistema Terra-Luna) in orbita, l'eclittica è una traccia dell'intersezione della sfera celeste con il piano dell'orbita terrestre.",
    "Hipparcos è un telescopio spaziale dell'Agenzia spaziale europea, progettato per compiti astrometrici: misurare le coordinate, le parallasse e i movimenti naturali delle stelle e le distanze da esse.",
    "Una lente gravitazionale è un corpo massiccio (pianeta, stella) o un sistema di corpi (galassia, ammasso di galassie) che distorce la direzione della propagazione della radiazione mediante il suo campo gravitazionale, proprio come una normale lente distorce un raggio di luce.",
    "Precessione geodetica (precessione di de Sitter) - l'effetto di cambiare la direzione dell'asse di rotazione di un corpo che si muove nello spazio-tempo distorto, fornito dalla teoria della relatività generale, si riferisce ai suoi effetti gravimagnetici.",
    "Una pulsar è una stella di neutroni che ruota e ha un forte campo magnetico, ed è quindi una sorgente cosmica di radiazione elettromagnetica pulsante dai poli magnetici. Se i raggi dei poli magnetici sono diretti alla Terra, questa radiazione può essere registrata sulla Terra sotto forma di impulsi - raffiche che si ripetono periodicamente (simile a come la luce di un faro può essere vista solo quando è diretta verso il osservatore).",
    "Legge di gravitazione universale è una legge fisica fondamentale che afferma che nell'Universo due corpi si attraggono in modo direttamente proporzionale al prodotto delle loro masse e inversamente proporzionale alla loro distanza elevata al quadrato. Formulata da Isaac Newton",
    "Costante cosmologica - un parametro dell'equazione di Einstein, che descrive la metrica dello spazio-tempo e la sua relazione con la materia. Di solito è indicato dalla lettera greca Lambda. La particolarità della costante cosmologica è che è la stessa per tutto lo spazio. Albert Einstein ha aggiunto una costante cosmologica alle sue equazioni per ottenere un universo stazionario. Tuttavia, è stato dimostrato che la soluzione ottenuta da Einstein è ancora instabile. Inoltre, le osservazioni astronomiche hanno mostrato che l'universo si sta espandendo, come evidenziato dal redshift delle righe spettrali. Pertanto, Einstein abbandonò la costante cosmologica. Tuttavia, l'interesse per la costante cosmologica è ripreso a causa di nuove osservazioni del movimento delle galassie, che indicano l'esistenza nell'universo di una massa maggiore di quella che si può osservare: la materia oscura. Pertanto, l'esatto valore numerico della costante cosmologica rimane sconosciuto.",
    "In astrofisica il collasso gravitazionale è la progressiva compressione di un corpo massiccio sotto l'influenza della sua stessa forza di gravità. Ciò avviene quando la pressione idrostatica del corpo non è più in grado di controbilanciarne la gravità.",
    "Il Large Hadron Collider, abbreviato in LHC, è un acceleratore di particelle situato presso il CERN di Ginevra, utilizzato per ricerche sperimentali nel campo della fisica delle particelle.",
    "Una singolarità gravitazionale è un punto in cui la curvatura dello spaziotempo tende a un valore infinito. Secondo alcune teorie fisiche l'universo potrebbe avere avuto inizio e finire con singolarità gravitazionali, rispettivamente il Big Bang e il Big Crun",
    "Aristotele credeva che il movimento, sebbene non abbia una realtà piena, è puro essere, ma non è il non essere. È il passaggio dal possibile al reale, il processo e l'attività attraverso cui la forma si incarna nel potenziale materiale.",
    "Onda trasversale - un'onda in cui si verificano oscillazioni su un piano perpendicolare alla direzione di propagazione. Si dice longitudinale un'onda in cui le oscillazioni sono parallele alla direzione del moto.",
    "Il campo eterico è un campo energetico che svolge la funzione di gestione di un organismo vivente. Questo campo di energia differisce per molti aspetti dal normale campo elettromagnetico.",
    "Sistema di riferimento inerziale - un sistema di riferimento in cui tutti i corpi liberi si muovono in linea retta e in modo uniforme o riposano. L'esistenza di sistemi che hanno questa proprietà è postulata dalla prima legge di Newton.",
    "L'equazione di Maxwell è un sistema di equazioni in forma differenziale o integrale che descrive il campo elettromagnetico e la sua relazione con le cariche elettriche e le correnti nel vuoto e nei mezzi continui. Insieme all'espressione per la forza di Lorentz, che determina il grado di influenza del campo elettromagnetico sulle particelle cariche, queste equazioni formano un sistema completo di equazioni dell'elettrodinamica classica, talvolta chiamato equazioni di Maxwell-Lorentz.",
    "Etere - un mezzo ipotetico, il materiale attraverso il quale durante il XIX secolo gli scienziati hanno spiegato la propagazione delle onde elettromagnetiche e le interazioni gravitazionali",
    "Una stella di neutroni è un corpo cosmico che è uno dei possibili risultati dell'evoluzione stellare, costituito principalmente da un nucleo di neutroni ricoperto da una crosta di materia relativamente sottile (circa 1 km) sotto forma di nuclei atomici pesanti ed elettroni."
];

function GetElementAndDisplay(index) {
    let display = document.getElementById("field");

    display.textContent = hints[index - 1];
   
}

function DisplayClear() {
    let display = document.getElementById("field");
    display.textContent = " ";
}
//добавить галерею и презентацию