describe('isFromBellville' , function(){
    it('should returns true if a registration number is for Bellville. ' , function(){
       
        assert.equal(isFromBellville('CY'),true);
        
    });
    
    it('otherwise return false ' , function(){
       
        assert.equal(isFromBellville('CJ'),false);
        
    });
    
});