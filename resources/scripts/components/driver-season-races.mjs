import { FLAG_IMG_PATH, ERGAST_API_ENDPOINT } from '../helpers/constants.mjs';
import { formatMilliSeconds,formatStdDate } from '../helpers/miscellaneous.mjs';
import { getFlagFromCountry, getPaisFromCountry } from '../helpers/countries.mjs'
import { cacheGet, cacheSet } from '../helpers/cache.mjs';
import { createLoader } from '../helpers/miscellaneous.mjs';
//------------------------------------------------------------------------------
class DriverSeasonRaces extends HTMLElement {
    //--------------------------------------------------------------------------
    constructor(id, title) {

        super();
        
        this.season = 'current';      
        this.driverId = '';
        this.driverName = '';

    }
    //--------------------------------------------------------------------------
    connectedCallback() {

        if (this.hasAttribute('season')) this.season = this.getAttribute('season');
        if (this.hasAttribute('driverId')) this.driverId = this.getAttribute('driverId');
        if (this.hasAttribute('driverName')) this.driverName = this.getAttribute('driverName');

        this.innerHTML = createLoader();

    }
    //--------------------------------------------------------------------------
    render() {

        this.season = this.getAttribute('season');
        this.driverId = this.getAttribute('driverId');
        this.driverName = this.getAttribute('driverName');
return;
        

        if (this.season == 'current' || this.season >= 1950) {
            this.#ERGAST_api()
            .then(json => {
                this.season = json.MRData.RaceTable.season
                this.innerHTML = this.#buildContent(json);
            })
            .catch(e => {
                console.log(e);
            });

        }
        else {
            this.innerHTML = `<div class="sign"><p>Rango inválido para la consulta (${this.season}</p></div>`;
        }

    }    
    //--------------------------------------------------------------------------
    #buildContent(json) {

        let c = '';
        let i = 0;

        json.MRData.RaceTable.Races.toReversed().map(x => {
            i++;
            const pod = x.Results[0].position == 1 ? ' winner' : '';
            c += `
                <div class="table-row">
                    <span class="table-col position${pod}">${x.Results[0].position}</span>
                    <a class="table-col race-name" href="circuitSeasonRaces.html?raceName=${x.raceName}&circuitName=${x.Circuit.circuitName}&circuitId=${x.Circuit.circuitId}" title="Todas las temporadas">${x.raceName}</a>
                    <span class="table-col race-date">${formatStdDate(x.date)}</span>
                    <span class="table-col circuit-name">${x.Circuit.circuitName}</span>
                    <span class="table-col country-name">${x.Circuit.Location.locality + ' - ' + x.Circuit.Location.country}</span>
                    <img  class="table-col flag" src="${FLAG_IMG_PATH + getFlagFromCountry(x.Circuit.Location.country)}" title="${getPaisFromCountry(x.Circuit.Location.country)}" /">
                    <input type="checkbox" class="extender-control" id="ext-${i}"/>
                    <label class="table-col extender-label" for="ext-${i}"></label>
                    ${this.#buildExtension(x)}
                </div>                
            `;
        });

        return `
            <div class="component-header">
                <h1>${this.driverName}</h1>
                <h2>Campeonato ${this.season}</h1>
            </div>
            <div class="table">
                <div class="table-header">
                    <div class="table-row">
                        <span class="table-col position">Pos.</span>
                        <span class="table-col race-name">Gran Premio</span>
                        <span class="table-col date no-label">Fecha</span>
                        <span class="table-col circuit-name">Circuito</span>
                        <span class="table-col country-name">Localidad</span>
                        <span class="table-col flag">&nbsp;</span>
                    </div>
                </div>
                <div class="table-body">
                    ${c}
                </div>
            </div>
        `;
    }
    //--------------------------------------------------------------------------
    #buildExtension(x) {

        return `
            <div class="table-extension">
                <span class="table-col race-time" data-title="Tiempo">${x.Results[0].Time ? formatMilliSeconds(x.Results[0].Time.millis) : ''}</span>
                <span class="table-col points" data-title="Pts.">${x.Results[0].points}</span>
                <span class="table-col grid" data-title="Grilla">${x.Results[0].grid}</span>
                <span class="table-col laps" data-title="Vueltas">${x.Results[0].laps}</span>
                <span class="table-col status" data-title="Status">${x.Results[0].status}</span>
                <span class="table-col table-title">Vuelta más rápida</span>
                <span class="table-col lap" data-title="Vuelta">${x.Results[0].FastestLap ? x.Results[0].FastestLap.lap : ''}</span>
                <span class="table-col rank" data-title="Ranking">${x.Results[0].FastestLap ? x.Results[0].FastestLap.rank : ''}</span>                
                <span class="table-col lap-time" data-title="Tiempo">${x.Results[0].FastestLap ? x.Results[0].FastestLap.Time.time : ''}</span>
                <span class="table-col average-speed" data-title="Prom.">${x.Results[0].FastestLap ? x.Results[0].FastestLap.AverageSpeed.speed + ' ' + x.Results[0].FastestLap.AverageSpeed.units : ''} </span>
            </div>
        `;

    }
    //--------------------------------------------------------------------------
    async #ERGAST_api() {

        const endpoint = ERGAST_API_ENDPOINT + this.season + '/drivers/' + this.driverId + '/results.json?limit=100';

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
customElements.define('driver-season-races', DriverSeasonRaces);
//------------------------------------------------------------------------------