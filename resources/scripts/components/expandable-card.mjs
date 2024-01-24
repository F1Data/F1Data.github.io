import { APP_CAPTION, MENU_ITEMS } from '../helpers/constants.mjs';
import { getPageName } from '../helpers/miscellaneous.mjs';
//------------------------------------------------------------------------------
class ExpandableCard extends HTMLElement {
    //--------------------------------------------------------------------------
    constructor(id, title) {

        super();
        
        this.header = '';

    }
    //--------------------------------------------------------------------------
    connectedCallback() {

        let expanded = false;

        if (this.hasAttribute('header')) this.header = this.getAttribute('header');
        if (this.hasAttribute('expanded')) expanded = true;

        this.innerHTML = `
            <input type="checkbox" class="exp-control" name="exp-control" id="exp-control-${this.id}" ${expanded ? 'checked' : ''}>
            <label class="exp-label" for="exp-control-${this.id}"><h2>${this.header}</h2></label>                
            <div class="exp-content">
                ${this.innerHTML}
            </div>        
        `;

    }
    //--------------------------------------------------------------------------
}
//------------------------------------------------------------------------------
customElements.define('expandable-card', ExpandableCard);
//------------------------------------------------------------------------------