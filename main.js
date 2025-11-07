const listeHena = ["Kisoa", "Omby", "Autres"];

const listePeriode = ["Ataondro", "Ariva", "Tontolo andro"];

const listeLaokaHenaKisoa = [
  {
    nom: "Ravitoto",
    periode: [listePeriode[0], listePeriode[1]],
  },
  {
    nom: "Tsaramaso",
    periode: [listePeriode[0], listePeriode[1]],
  },
  {
    nom: "Haricot vert",
    periode: [listePeriode[0], listePeriode[1]],
  },
  {
    nom: "Voanjobory",
    periode: [listePeriode[0], listePeriode[1]],
  },
  {
    nom: "Anamamy",
    periode: [listePeriode[0], listePeriode[1]],
  },
  {
    nom: "Petsay",
    periode: [listePeriode[0], listePeriode[1]],
  },
  {
    nom: "Ramborebaka",
    periode: [listePeriode[0], listePeriode[1]],
  },
  {
    nom: "Lentille",
    periode: [listePeriode[0], listePeriode[1]],
  },
  {
    nom: "Tsesisy",
    periode: [listePeriode[0], listePeriode[1]],
  },
  {
    nom: "Petits Pois",
    periode: [listePeriode[0], listePeriode[1]],
  },
  {
    nom: "Laisoa",
    periode: [listePeriode[0], listePeriode[1]],
  },
  {
    nom: "Poireaux",
    periode: [listePeriode[0], listePeriode[1]],
  },
];

const listeLaokaHenaOmby = [
  {
    nom: "Voanjobory sy Ravombomanga",
    periode: [listePeriode[0], listePeriode[1]],
  },
  {
    nom: "Ravombomanga",
    periode: [listePeriode[0], listePeriode[1]],
  },
  {
    nom: "Ravombomanga sy Patsa",
    periode: [listePeriode[0], listePeriode[1]],
  },
  {
    nom: "Lasopy Legioma",
    periode: [listePeriode[0], listePeriode[1]],
  },
  {
    nom: "Tsaramaso",
    periode: [listePeriode[0], listePeriode[1]],
  },
];

const listeLaokaHenaAutres = [
  {
    nom: "Atody",
    periode: [listePeriode[1]],
  },
  {
    nom: "Carcasses Akoho",
    periode: [listePeriode[1]],
  },
  {
    nom: "Ovy sy toton-kena",
    periode: [listePeriode[1]],
  },
  {
    nom: "Karoty, Haricots verts sy toton-kena",
    periode: [listePeriode[1]],
  },
  {
    nom: "Riz cantonnais",
    periode: [listePeriode[1]],
  },
  {
    nom: "Mine sao legioma",
    periode: [listePeriode[1]],
  },
  {
    nom: "Trondro ao am Lokka (tsy lohany)",
    periode: [listePeriode[1]],
  },
  {
    nom: "Atody sy sardine",
    periode: [listePeriode[1]],
  },
  {
    nom: "Saucisses",
    periode: [listePeriode[1]],
  },
  {
    nom: "Antinkena akoho",
    periode: [listePeriode[1]],
  },
  {
    nom: "Antinkena omby",
    periode: [listePeriode[1]],
  },
  {
    nom: "Araran'akoho",
    periode: [listePeriode[1]],
  },
];

const initSelectHena = () => {
  const element = document.getElementById("selectHena");

  console.log(element);

  element.innerHTML = "";

  listeHena.forEach((hena) => {
    const option = document.createElement("option");
    option.value = hena;
    option.textContent = hena;
    element.appendChild(option);
  });
};

const initSelectPeriode = () => {
  const element = document.getElementById("selectPeriode");

  console.log(element);

  element.innerHTML = "";

  listePeriode.forEach((periode) => {
    const option = document.createElement("option");
    option.value = periode;
    option.textContent = periode;
    element.appendChild(option);
  });
};

const onSubmit = () => {
  const hena = document.getElementById("selectHena").value;
  const periode = document.getElementById("selectPeriode").value;

  let listeLaoka = [];
  for (let i = 0; i < listeLaokaHenaKisoa.length; i++) {
    listeLaoka.push({ ...listeLaokaHenaKisoa[i], hena: listeHena[0] });
  }
  for (let i = 0; i < listeLaokaHenaOmby.length; i++) {
    listeLaoka.push({ ...listeLaokaHenaOmby[i], hena: listeHena[1] });
  }
  for (let i = 0; i < listeLaokaHenaAutres.length; i++) {
    listeLaoka.push({ ...listeLaokaHenaAutres[i], hena: listeHena[2] });
  }

  // On filtre les plats correspondant à la viande
  const platsParHena = listeLaoka.filter((item) => item.hena === hena);

  // Puis on filtre selon la période
  const platsCompatibles = platsParHena.filter((item) => {
    if (periode === listePeriode[2]) {
      // Doit convenir à la fois à Atoandro et Ariva
      return (
        item.periode.includes(listePeriode[0]) &&
        item.periode.includes(listePeriode[1])
      );
    } else if(periode === listePeriode[1] && hena === listeHena[2]) {
      return item.periode[0] == periode
    } else {
      return item.periode.includes(periode);
    }
  });

  // Sélection aléatoire parmi les plats compatibles
  if (platsCompatibles.length > 0) {
    const randomIndex = Math.floor(Math.random() * platsCompatibles.length);
    const platChoisi = platsCompatibles[randomIndex];
    console.log("Plat choisi :", platChoisi.nom);
    if(hena!=listeHena[2]){
      alert(`Plat choisi : Hena ${hena} sy ${platChoisi.nom}\nPériode: ${periode}`);
    }
    else{
      alert(`Plat choisi : ${platChoisi.nom}\nPériode: ${periode}`);
    }
  } else {
    console.log("Aucun plat trouvé pour ces critères");
    alert("Aucun plat trouvé pour ces critères");
  }
};

initSelectHena();
initSelectPeriode();
