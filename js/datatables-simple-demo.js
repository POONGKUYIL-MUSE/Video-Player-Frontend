window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementsByClassName('datatablesSimple');
    for(var i=0; i<datatablesSimple.length; i++) {
        if (datatablesSimple[i]) {
            new simpleDatatables.DataTable(datatablesSimple[i]);
        }
    }
});
