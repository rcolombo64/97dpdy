ej.base.enableRipple(true);
window.orderData =     [{
        'OrderID': 10248,
        'CustomerID': 'VINET',
        'OrderDate': '1996-07-04T00:00:00.000Z',
        'ShippedDate': '1996-07-16T00:00:00.000Z',
        'Freight': 32.38,
        'ShipName': 'Vins et alcools Chevalier',
        'ShipAddress': '59 rue de l\'Abbaye',
        'ShipCity': 'Reims',
        'ShipRegion': null,
        '@ShipCountry': 'France'
    },
    {
        'OrderID': 10249, 
        'CustomerID': 'TOMSP',
        'OrderDate': '1996-07-05T00:00:00.000Z',
        'ShippedDate': '1996-07-10T00:00:00.000Z',
        'Freight': 11.61,
        'ShipName': 'Toms SpezialitÃ¤ten',
        'ShipAddress': 'Luisenstr. 48',
        'ShipCity': 'MÃ¼nster',
        'ShipRegion': null,
        '@ShipCountry': 'Germany' 
    }];

var onActionFailure = function(arg){
debugger
};
    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        allowPaging: true,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: '@ShipCountry', headerText: 'Ship Country', width: 150 },
             {
                headerText: 'Employee Image', textAlign: 'Center',
                template: '#template', width: 150
            },
        ],
        actionFailure:onActionFailure

    });
    grid.appendTo('#Grid');
