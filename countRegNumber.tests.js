describe('countRegNumber' , function(){
    it('should  returns the number of registration numbers in the string' , function(){
       
        assert.equal(countRegNumber(Reg), 3);
        
    });
    it('should return 0 if the are no registration numbers' , function(){
       
        assert.equal(countRegNumber(""), 1);
        
    });
   
});