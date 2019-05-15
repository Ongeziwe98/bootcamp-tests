describe('transportFee' , function(){

    it('should return the cost for the morning shift' , function(){
       
        assert.equal(transportFee("morning"), "R20");
    });
    it('should return the cost for afternoon shift' , function(){
       
        assert.equal(transportFee("afternoon"), "R10");
    });
    it('should return the cost nightshift' , function(){
       
        assert.equal(transportFee("nightshift"), "free");
    });
    

});
