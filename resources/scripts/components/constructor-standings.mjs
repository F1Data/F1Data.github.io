import { FLAG_IMG_PATH, ERGAST_API_ENDPOINT } from '../helpers/constants.mjs';
import { getFlagFromDemonym, getPaisFromDemonym, getISO3FromDemonym } from '../helpers/countries.mjs'
import { cacheGet, cacheSet } from '../helpers/cache.mjs';
import { createLoader } from '../helpers/miscellaneous.mjs';
//------------------------------------------------------------------------------
class ConstructorStandings extends HTMLElement {
    //--------------------------------------------------------------------------
    constructor(id, title) {

        super();
        
        this.season = 'current';      

    }
    //--------------------------------------------------------------------------
    connectedCallback() {

        if (this.hasAttribute('season')) this.season = this.getAttribute('season');

        this.innerHTML = createLoader();

        //this.render();

    }
    //--------------------------------------------------------------------------
    render() {

        if (this.season == 'current' || this.season >= 1950) {
            this.#ERGAST_api()
            .then(json => {
                this.season = json.MRData.StandingsTable.StandingsLists[0].season;
                this.innerHTML = this.#buildContent(json);
                let e = new CustomEvent('load', {detail: 'bla bla', bubbles: true, composed: true} );
                this.dispatchEvent(e);                
            })
            .catch(e => {
                console.log(e);
            });

        }
        else {
            this.classList.remove('loading-image');
            this.innerHTML = `<div class="sign"><p>Rango inválido para la consulta (${this.season}</p></div>`;
        }

    }    
    //--------------------------------------------------------------------------
    #buildContent(json) {

        let c = '';

        json.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map(x => {
            c += `
                <div class="table-row position-row">
                    <div class="row-position">
                        <span class="position">${x.position}</span>
                    </div>
                    <div class="row-content">
                        <div class="flag-box">
                            <img class="table-col flag" src="${FLAG_IMG_PATH + getFlagFromDemonym(x.Constructor.nationality)}" title="${getPaisFromDemonym(x.Constructor.nationality)}">
                            <span>${getISO3FromDemonym(x.Constructor.nationality)}</span>
                        </div>
                        <a class="table-col link-1 constructor-name" href="constructorSeasonRaces.html?constructorName=${x.Constructor.name}&constructorId=${x.Constructor.constructorId}&season=${this.season}" title="Ver carreras de la temporada">${x.Constructor.name}</a>
                        <span class="table-col points">${x.points}</span>
                        <span class="table-col wins">${x.wins}</span>                                     
                    </div>
                </div>               
            `;
        });

        return `
        <div class="table">
            <div class="table-header">
            <div class="row-position"></div>
            <div class="row-content">
                <div class="table-col"></div>
                <div class="table-col flag-box"></div>
                <div class="table-col constructor-name">Constructor</div>
                <div class="table-col points">Puntos</div>
                <div class="table-col wins">Victorias</div>
            </div>
        </div>
            <div class="table-body">
                ${c}
            </div>
        </div>
        `;
    }
    //--------------------------------------------------------------------------
    async #ERGAST_api() {

        const endpoint = ERGAST_API_ENDPOINT + this.season + '/constructorStandings.json?limit=100';

        let response = cacheGet(endpoint);

        if (response) {
            return JSON.parse(response);
        }

        response = await fetch(endpoint);

        if (response.ok) {
            const jsonResponse = await response.json();
            cacheSet(endpoint, JSON.stringify(jsonResponse));
            return jsonResponse;
        }
        else {
            throw new Error(response.error());
        }
        
    }
    //--------------------------------------------------------------------------
}
//------------------------------------------------------------------------------
customElements.define('constructor-standings', ConstructorStandings);
//------------------------------------------------------------------------------