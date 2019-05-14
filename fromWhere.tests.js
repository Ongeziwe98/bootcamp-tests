describe('fromWhere' , function(){
    it('returns the town that the car is from.' , function(){
       
        assert.deepEqual(fromWhere('CY'),"Bellville");
    });
    it('returns the town that the car is from.' , function(){
       
        assert.deepEqual(fromWhere('CJ'),"Paarl");
    });
    it('returns the town that the car is from.' , function(){
       
        assert.deepEqual(fromWhere('CA'),"Cape Town");
    });
});