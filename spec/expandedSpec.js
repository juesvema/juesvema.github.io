describe('Expanded Form', () => {
    var expandedForm = require('../components/js/expanded.js');
    it('Should return the expanded form', () => {        
        const num = 70304;
        var result = expandedForm(num);
        expect(result).toEqual('70000 + 300 + 4');
    })
});