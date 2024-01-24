import { FLAG_IMG_PATH, ERGAST_API_ENDPOINT } from '../helpers/constants.mjs';
import { getFlagFromDemonym, getPaisFromDemonym, getISO3FromDemonym } from '../helpers/countries.mjs'
import { cacheGet, cacheSet } from '../helpers/cache.mjs';
import { formatStdDate, formatStdTime, createLoader } from '../helpers/miscellaneous.mjs';
//------------------------------------------------------------------------------
class RaceResults extends HTMLElement {
    //--------------------------------------------------------------------------
    constructor(id, title) {

        super();
        
        this.mode = 'full';
        this.season = 'current';
        this.round = 'last'      

    }
    //--------------------------------------------------------------------------
    connectedCallback() {

        if (this.hasAttribute('season')) this.season = this.getAttribute('season');
        if (this.hasAttribute('round')) this.round = this.getAttribute('round');
        if (this.hasAttribute('mode')) this.mode = this.getAttribute('mode');

        this.innerHTML = createLoader();

        //this.render();
    }
    //--------------------------------------------------------------------------
    render() {

        this.#ERGAST_api()
        .then(json => {
            this.season = json.MRData.RaceTable.season;
            if (this.mode == 'short') {
                this.innerHTML = this.#buildShortContent(json);
            }
            else {
                this.innerHTML = this.#buildContent(json);
            }
            let e = new CustomEvent('load', { detail: { season: this.season, round: this.round }, bubbles: true, composed: true} );
            this.dispatchEvent(e);
        })
        .catch(e => {
            console.log(e);
        });


    }    
    //--------------------------------------------------------------------------
    #buildShortContent(json) {

        let c = '';

        json.MRData.RaceTable.Races[0].Results.map( x => {
            c += `
                <div class="table-row position-row">
                    <div class="row-position">
                        <span class="position">${x.position}</span>
                    </div>
                    <div class="row-content">
                        <div class="flag-box">
                            <img class="table-col flag" src="${FLAG_IMG_PATH + getFlagFromDemonym(x.Driver.nationality)}" title="${getPaisFromDemonym(x.Driver.nationality)}">
                            <span>${getISO3FromDemonym(x.Driver.nationality)}</span>
                        </div>
                        <a class="table-col link-1 driver-name" href="driverSeasonRaces.html?driverName=${x.Driver.givenName + ' ' + x.Driver.familyName}&driverId=${x.Driver.driverId}&season=${this.season}" title="Ver carreras de la temporada">${x.Driver.givenName + ' ' + x.Driver.familyName}&nbsp;<span>#${x.Driver.permanentNumber || ''}</span></a>
                        <span class="table-col points">${x.points}</span>
                        <span class="race-time">${x.Time ? x.Time.time : ''}</span>                                        
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
                            <div class="table-col driver-name">Piloto</div>
                            <div class="table-col points">Puntos</div>
                            <div class="table-col race-time">Tiempo</div>
                        </div>
                    </div>
                    <div class="table-content">
                        ${c}
                    </div>

                </div>
        `;

    }
    //--------------------------------------------------------------------------
    #buildContent(json) {

        let c = '';

        json.MRData.RaceTable.Races[0].Results.map( x => {
            c += `
                <div class="table-row>"
                    <span class="table-col position">${x.position}</span>
                    <div class="row-content">
                        <div class="flag-box">
                            <img class="table-col flag" src="${FLAG_IMG_PATH + getFlagFromDemonym(x.Driver.nationality)}" title="${getPaisFromDemonym(x.Driver.nationality)}">
                            <span>${getISO3FromDemonym(x.Driver.nationality)}</span>
                        </div>
                        <a class="table-col driver-name tag1" href="driverSeasonRaces.html?driverName=${x.Driver.givenName + ' ' + x.Driver.familyName}&driverId=${x.Driver.driverId}&season=${this.season}" title="Ver carreras de la temporada">${x.Driver.givenName + ' ' + x.Driver.familyName}&nbsp;<span>#${x.Driver.permanentNumber}</span></a>
                        <a class="-table-col constructor-name tag2" href="constructorSeasonRaces.html?constructorName=${x.Constructor.name}&constructorId=${x.Constructor.constructorId}&season=${this.season}" title="Ver carreras de la temporada">${x.Constructor.name}</a>
                        <span class="table-col points">${x.points}</span>
                        <span class="race-time">${x.Time ? x.Time.time : 'N/A'}</span>
                        <span class="table-col fastest-lap">${x.FastestLap.lap}</span>
                        <span class="table-col fastest-lap-time">${x.FastestLap.Time ? x.FastestLap.Time.time : 'N/A'}</span>
                        <span class="table-col fastest-lap-rank">${x.FastestLap.rank}</span>
                        <span class="table-col fastest-lap-speed">${x.FastestLap.AverageSpeed.speed + ' ' + x.FastestLap.AverageSpeed.units}</span>
                    </div>
                </div>
            `;
        });

 
        return c;
    }
    //--------------------------------------------------------------------------
    async #ERGAST_api() {

        const endpoint = ERGAST_API_ENDPOINT + `${this.season}/${this.round}/results.json`;

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
customElements.define('race-results', RaceResults);
//------------------------------------------------------------------------------