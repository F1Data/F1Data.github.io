import { FLAG_IMG_PATH, ERGAST_API_ENDPOINT } from '../helpers/constants.mjs';
import { getFlagFromCountry } from '../helpers/countries.mjs'
import { createLoader, formatStdDate } from '../helpers/miscellaneous.mjs';
import { cacheGet, cacheSet } from '../helpers/cache.mjs';
//------------------------------------------------------------------------------
class NextRace extends HTMLElement {
    //--------------------------------------------------------------------------
    constructor(id, title) {

        super();
        
        this.season = 'current';      

    }
    //--------------------------------------------------------------------------
    connectedCallback() {

        this.innerHTML = createLoader();

        this.render();

    }
    //--------------------------------------------------------------------------
    render() {


        this.#ERGAST_api()
        .then(json => {
            this.season = json.MRData.RaceTable.season;
            this.innerHTML = `
                <h2>${ json.MRData.RaceTable.Races[0].raceName }</h2>
                <h2>${ formatStdDate(json.MRData.RaceTable.Races[0].date)}</h2>
                <h3>${ json.MRData.RaceTable.Races[0].Circuit.circuitName}</h3>
                <h4>
                    ${ json.MRData.RaceTable.Races[0].Circuit.Location.locality },  
                    ${ json.MRData.RaceTable.Races[0].Circuit.Location.country } 
                    <img class="flag-img" src="${FLAG_IMG_PATH + getFlagFromCountry(json.MRData.RaceTable.Races[0].Circuit.Location.country)}" />
            `;
        })
        .catch(e => {
            console.log(e);
        });

    }    
    //--------------------------------------------------------------------------
    async #ERGAST_api() {

        const endpoint = ERGAST_API_ENDPOINT + 'current/next.json';

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
customElements.define('next-race', NextRace);
//------------------------------------------------------------------------------