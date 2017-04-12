export var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heros = [
            { id: 11, name: 'Batman' },
            { id: 12, name: 'Spiderman' },
            { id: 13, name: 'Flash' },
            { id: 14, name: 'HawkEye' },
            { id: 15, name: 'Hulk' },
            { id: 16, name: 'Thor' },
            { id: 17, name: 'Kkrish' },
            { id: 18, name: 'Shaktimaan' },
            { id: 19, name: 'Superman' },
            { id: 20, name: 'DeadPool' },
        ];
        return { heros: heros };
    };
    return InMemoryDataService;
}());
/**
 * Created by Lenovo on 4/11/2017.
 */
//# sourceMappingURL=D:/ECLIPSE workspace/angular-tour-of-heros/src/app/in-memory-data.service.js.map