//------------------------------------------------------------------------------
export const APP_CAPTION = 'F1 Data';
export const ERGAST_API_ENDPOINT = 'http://ergast.com/api/f1/';
//------------------------------------------------------------------------------
export function ERGAST_API(apiPath, callback, onErrorCallback) {

    var url = ERGAST_API_ENDPOINT + apiPath;

    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
           
        if (xhttp.readyState == 4) {
            if (xhttp.status >= 200 && xhttp.status <= 300) {
                callback(JSON.parse(xhttp.responseText));
            }
            else {
                if (onErrorCallback) {
                    onErrorCallback(apiPath, xhttp.status, xhttp.statusText);
                }
            }
        }
    };

    xhttp.open("GET", url);

    xhttp.send();


}
//------------------------------------------------------------------------------
export function ERGAST_API_ERROR(apiPath, status, statusText) {

    alert('Error al invocar el método ' + apiPath + ':\r\n' + status + ' - ' + statusText);

}
//------------------------------------------------------------------------------