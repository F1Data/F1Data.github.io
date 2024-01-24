//------------------------------------------------------------------------------
export function getPageName() {

    var fileName = location.pathname.split("/").slice(-1);

    return fileName[0];
}
//------------------------------------------------------------------------------
export function formatMilliSeconds(millis) {

    var milliseconds = Math.floor((millis % 1000)),
    seconds = Math.floor((millis / 1000) % 60),
    minutes = Math.floor((millis / (1000 * 60)) % 60),
    hours = Math.floor((millis / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
//------------------------------------------------------------------------------
export function formatStdDate(sDate) {

    if (!sDate) return '';

    if (sDate.length == 10 ) {
        return sDate.substr(8, 2) + '/' + sDate.substr(5, 2) + '/' + sDate.substr(0, 4);
    }
    else {
        return sDate;
    }
}
//------------------------------------------------------------------------------
export function formatStdTime(sTime) {

    if (!sTime) return '';

    if (sTime.length > 8 ) {
        return sTime.substr(0, 8);
    }
    else {
        return sTime;
    }
}
//------------------------------------------------------------------------------
export function joinConstructors(constructors, template) {

        let s = '';

        constructors.map( (item) => {
            //s += `<a href="constructorRaces?constructorId=${item.constructorId}&season=${season}" title="Carreras de la temporada">${item.name}</a>, `;
            s += template.replace('$constructorId', item.constructorId).replace('$constructorName', item.name)
        } );

        s = s.substring(0, s.length - 2);

        return s;

}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
export function createLoader() {

    return `
        <div class="loader-container">
            <span class="loader"></span>
        </div>
    `;

}
//------------------------------------------------------------------------------

