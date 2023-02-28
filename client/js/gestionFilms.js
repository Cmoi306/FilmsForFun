let creerCard = (unFilm) =>
{
    let lesGenres;
    if(unFilm.genres.length == 1) {
        lesGenres = unFilm.genres[0];
    }
    else if(unFilm.genres.length == 2) {
        lesGenres = unFilm.genres[0] + ", " + unFilm.genres[1];
    }
    else if(unFilm.genres.length == 3) {
        lesGenres = unFilm.genres[0] + ", " + unFilm.genres[1] + ", " + unFilm.genres[2];
    }
    let card = `
        <div class="card card-style">
            <img src="${unFilm.posterUrl}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title" style="padding-top: 10px;">${unFilm.title}</h5>
                <h6 class="card-text">${unFilm.year}</h6>
                <p class="card-text">${unFilm.plot}</p>
                <p class="card-text" style="margin-bottom: 15%;">${lesGenres}</p>
                <div class="btns" id="btns">
                <a href="https://www.youtube.com/results?search_query=${unFilm.title}+trailer" id="btn-bande" target="_blank" class="btn btn-primary">Bande Annonce</a>
                <a href="https://www.amazon.ca/s?k=${unFilm.title}+movie&__mk_fr_CA=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=RMRN9546ULOG&sprefix=${unFilm.title}+movie%2Caps%2C78&ref=nb_sb_noss_1" target="_blank" id="btn-panier"class="btn btn-secondary"><img id="icon" src="client/images/panier.png"></a>
                </div>
            </div>
        </div>
    `;
    return card;
}

let lister = (categ) => {
    let listeCards = `<div class="row">`;
    for(let unFilm of listeFilms)
    {
        let cardExiste = false;
        for(let unGenre of unFilm.genres)
        {
            if (categ == unGenre.toLowerCase() || categ == 'tous')
            {
                if(!cardExiste)
                {
                    cardExiste = true;
                    listeCards += creerCard(unFilm);
                }
            }
        }
    }
    listeCards +=`</div>`;
    document.getElementById('contenu').innerHTML = listeCards;
}
let listerSelonSelect = () => {
    let selCategs = document.getElementById('selCategs');
    let indexOptionChoisie = selCategs.selectedIndex;
    let categ = selCategs.options[indexOptionChoisie].text.toLowerCase();
    lister(categ);
}
let creerSelCategs = () => {
    let selCategs = document.getElementById('selCategs');
    for ( let unFilm of listeFilms)
    {
        for(let unGenre of unFilm.genres)
        {
            let optionExiste = false;
            for(let uneOption of selCategs.options)
            {
                if(uneOption.text.toLowerCase() == unGenre.toLowerCase())
                {
                    optionExiste = true;
                }
            }
            if(optionExiste == false)
            {
                selCategs.options[selCategs.options.length] = new Option(unGenre, unGenre.substring(0, 3));
            }
        }
    }
}
function filter(){
        let listeCards = `<div class="row">`;
            for(let unFilm of listeFilms){
                if(unFilm.id <= 15){
                    listeCards += creerCard(unFilm, 15);
                }
            }
            listeCards +=`</div>`;
            document.getElementById('contenu').innerHTML = listeCards;}
     