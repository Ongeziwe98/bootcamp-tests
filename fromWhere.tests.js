describe('fromWhere' , function(){
    it('should return the town(Bellville) that the car is from.' , function(){
       
        assert.deepEqual(fromWhere('CY'),"Bellville");
    });
    it('should return the town(Paarl) that the car is from.' , function(){
       
        assert.deepEqual(fromWhere('CJ'),"Paarl");
    });
    it('should return the town(Cape Town) that the car is from.' , function(){
       
        assert.deepEqual(fromWhere('CA'),"Cape Town");
    });
});