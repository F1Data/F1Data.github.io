//------------------------------------------------------------------------------
export const APP_CAPTION = 'F1Data';

export const ERGAST_API_ENDPOINT = 'https://ergast.com/api/f1/';

export const FLAG_IMG_PATH = './resources/images/flags/';

export const MENU_ITEMS = [
    {
        text: 'Inicio',
        href: 'index.html',
        title: 'Inicio'
    },            
    {
        text: 'Temporadas',
        href: 'race.html',
        title: 'Explorar datos por temporada'
    },
    {
        text: 'Pilotos',
        title: 'Explorar datos por piloto',
        subItems: [
            {
                text: 'Campeones mundiales',
                href: 'championDrivers.html', 
                title: 'Todos los pilotos campeones mundiales'
        
            },
            {
                text: 'Todos los pilotos',
                href: 'driversxxxx.html',
                title: 'Explorar&nbsp;datos&nbsp;por&nbsp;piloto'
        
            },            
            {
                text: 'Clasificación por campeonatos',
                href: 'driversByChampionships.html',
                title: 'Campeonatos&nbsp;ganados'
            }

        ]
    },
    {
        text: 'Constructores',
        title: 'Explorar datos por constructor',
        subItems: [
            {
                text: 'Todos los constructores',
                href: 'constructors.html',
                title: 'Explorar&nbsp;datos&nbsp;por&nbsp;constructor'
        
            },
            {
                text: 'Clasificación por campeonatos',
                href: 'constructorsByChampionships.html',
                title: 'Campeonatos&nbsp;ganados'
        
            }

        ]
    },            
    {
        text: 'Calendario',
        href: 'seasonSchedule.html',
        title: 'Calendario de la temporada actual'
    }
];

//------------------------------------------------------------------------------