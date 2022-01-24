/*----- DESABILITA O USO DO ONCONTEXTMENU -----*/

window.onload = function() {
    document.oncontextmenu = function() {
        return false;
    }
}

