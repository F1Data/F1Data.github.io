//------------------------------------------------------------------------------
import { ERGAST_API_ENDPOINT, ERGAST_API } from "../helpers/helpers.mjs";

//------------------------------------------------------------------------------
class SeasonSelector extends HTMLElement {
    //--------------------------------------------------------------------------
    constructor() {

        super();

    }
    //--------------------------------------------------------------------------
    connectedCallback() {
        
        this.render();
    }
    //--------------------------------------------------------------------------
    disconnectedCallback() {

    }
    //--------------------------------------------------------------------------
    attributeChangedCallback() {

    }
    //--------------------------------------------------------------------------
    render() {

        this.innerHTML = '<img src="./assets/img/loading.gif" />';

        fetch(ERGAST_API_ENDPOINT + 'seasons.json?limit=1000')
        .then((response) => response.json())
        .then((json) => {
            let s = `<div class="section-title">
                        <span>Temporadas</span>
                    </div>
                    <div class="season-selector-box">`;
            for (var i = json.MRData.SeasonTable.Seasons.length - 1; i >= 0; i--) {
                s += `<a href="seasonDetail.html?season=${json.MRData.SeasonTable.Seasons[i].season}" class="season-selector-link">${json.MRData.SeasonTable.Seasons[i].season}</a>`; 
            }
            s += '</div>'
            this.innerHTML = s;
        });

    }
    //--------------------------------------------------------------------------
}
//------------------------------------------------------------------------------
customElements.define('season-selector', SeasonSelector);
//------------------------------------------------------------------------------