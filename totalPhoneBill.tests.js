describe('totalPhoneBill' , function(){

    it('should takes in a string calls made and sms sent' , function(){
       
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"), "R7.45")
   
    });

    it('should takes in a string calls made' , function(){
       
        assert.equal(totalPhoneBill("call, call"), "R5.50")
   
    });

    it('should takes in a string calls  sms sent' , function(){
       
        assert.equal(totalPhoneBill("sms, sms, sms"), "R1.95")
   
    });
});
