import { APP_CAPTION, MENU_ITEMS } from '../helpers/constants.mjs';
import { getPageName } from '../helpers/miscellaneous.mjs';
//------------------------------------------------------------------------------
class MainLayout extends HTMLElement {
    //--------------------------------------------------------------------------
    constructor(id, title) {

        super();
        
        this.PageName = getPageName();

        document.title = APP_CAPTION + ' - ' + document.title;        

    }
    //--------------------------------------------------------------------------
    connectedCallback() {

        const navMenu = this.#createNavMenu(MENU_ITEMS);

        this.innerHTML = `

            <header class="main-header">
                <a class="header-logo">F<span>1</span>Data</a>
                <a  href="#" id="navButtonOpen" class="nav-button nav-button-open">&#x2630;</a>
            </header>

            <nav class="main-nav">
                <a class="nav-logo">F<span>1</span>Data</a>
                <a href="#" id="navButtonClose" class="nav-button nav-button-close">&#x2715;</a>
                <div class="nav-menu">
                    ${navMenu}
                </div>
            </nav>

            <main class="main-content">
                ${this.innerHTML}
            </main>
            
            <footer class="main-footer">
                <span>${APP_CAPTION}&nbsp;&copy;&nbsp;2022</span>
                <a href="http://ergast.com/mrd/" target="_new">Ergast Developer API</a>                   
            </footer>              
        `;

/*
        window.addEventListener('scroll', e => {
            let h = document.querySelector('.main-header');
            let s = document.documentElement.scrollTop || window.scrollY;
            console.log('----->' + s);
            if (s >= 100) {
                h.classList.add('shrink');
            }
            else {
                h.classList.remove('shrink');
            }
        });
*/

        document.getElementById('navButtonOpen').addEventListener('click', (e) => {
            e.preventDefault();
            this.classList.add('nav-is-open');
        });

        document.getElementById('navButtonClose').addEventListener('click', (e) => {
            e.preventDefault();
            this.classList.remove('nav-is-open');
        }); 

    }
    //--------------------------------------------------------------------------
    #createNavMenu(items) {

        let ul = '<ul>'

        items.map(item => {
            let li = '';
            if (item.subItems && item.subItems.length > 0) { 
                li = `
                    <li>
                        <a href="#" class="nav-item has-subitems" title="${item.title}">${item.text}</a>
                        ${this.#createNavMenu(item.subItems)}
                    </li>
                `;
            }
            else {
                li = `
                    <li>
                        <a href="#" 
                           class="nav-item${this.#containsCurrentPage(item) ? ' is-current-page' : ''}" 
                           title="${item.title}"
                           onmousedown="top.location.href='${item.href}'">
                            ${item.text}
                        </a>
                    </li>
                `;
            }

            ul += li;
        });
        

        ul += '</ul>'

        return ul;
    }    
    //--------------------------------------------------------------------------
    #containsCurrentPage(item) {

        let isCurrentPage = false;

        if (item.href != undefined && this.PageName.includes(item.href)) {
            isCurrentPage = true;
        }
        else {
            if (item.subItems) {
                for (var i = 0; i < item.subItems.length; i++) {
                    if (this.#containsCurrentPage(item.subItems[i])) {
                        isCurrentPage = true;
                        break;
                    }
                }
            }
        }

        return isCurrentPage;

    }    
    //--------------------------------------------------------------------------
}
//------------------------------------------------------------------------------
customElements.define('main-layout', MainLayout);
//------------------------------------------------------------------------------