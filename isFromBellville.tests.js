describe('isFromBellville' , function(){
    it('should returns true if a registration number is for Bellville. ' , function(){
       
        assert.equal(isFromBellville('CY'),true);
        
    });
    
    it('should return false if it is not Bellville ' , function(){
       
        assert.equal(isFromBellville('CJ'),false);
        
    });
    
});