describe('regCheck' , function(){
    it('should check if a registration number is for GP, L, EC, MP registration plates.' , function(){
        assert.deepEqual(regCheck('DV 23 NB GP', 'GP'),true);
    });

    it('should return false if its other registration' , function(){
        assert.deepEqual(regCheck('DV 23 LP GP', 'MP'),false);
    });

});