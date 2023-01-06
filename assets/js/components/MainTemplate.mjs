//------------------------------------------------------------------------------
class MainTemplate extends HTMLElement {
    //--------------------------------------------------------------------------
    constructor() {

        super();

        this.content = null;
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

        let content = this.innerHTML;

        this.innerHTML = '';

        this.appendChild(this.#createNav(this));
        this.appendChild(this.#createContent(content));
        this.appendChild(this.#createFooter());

    }
    //--------------------------------------------------------------------------
    #createNav(layout) {

        var r = document.createElement('nav');

        var mnuOpen = document.createElement('a');
        mnuOpen.className = 'menu-button menu-open-button';
    
        var mnuClose = document.createElement('a');
        mnuClose.className = 'menu-button menu-close-button';
        
        mnuOpen.addEventListener('click', function(e) {
            mnuOpen.classList.add('menu-open');
            mnuClose.classList.add('menu-open')
            layout.classList.add('menu-open');
        });
    
        mnuClose.addEventListener('click', function(e) {
            mnuOpen.classList.remove('menu-open');
            mnuClose.classList.remove('menu-open');
            layout.classList.remove('menu-open');
        });
    
        var link1 = document.createElement('a');
        link1.className = 'nav-link';
        link1.innerText = 'Temporadas';
        link1.href = 'index.html';
    
        var link2 = document.createElement('a');
        link2.className = 'nav-link';
        link2.innerText = 'Pilotos';
        link2.href = 'drivers.html';
    
        var link3 = document.createElement('a');
        link3.className = 'nav-link';
        link3.innerText = 'Constructores';
        link3.href = 'constructors.html';
    
        var linksBox = document.createElement('div');
        linksBox.className = 'nav-links-box';
    
        linksBox.appendChild(link1);
        linksBox.appendChild(link2);
        linksBox.appendChild(link3);
       
        r.appendChild(mnuOpen);
        r.appendChild(mnuClose);
    
        r.appendChild(linksBox);
    
        return r;

    }
    //--------------------------------------------------------------------------
    #createContent(content) {

        var r = document.createElement('main');

        r.innerHTML = content;

        return r;

    }
    //--------------------------------------------------------------------------
    #createFooter() {

        var r = document.createElement('footer');

        var fL = document.createElement('span');
        fL.innerHTML = 'F1Data - &copy; 2023';
    
        var fR = document.createElement('a');
        fR.innerText = 'Ergast Developer API';
        fR.href = 'http://ergast.com/mrd/';
    
        r.appendChild(fL);
        r.appendChild(fR);
    
        return r;
    }
    //--------------------------------------------------------------------------
}
//------------------------------------------------------------------------------
customElements.define('main-template', MainTemplate);
//------------------------------------------------------------------------------