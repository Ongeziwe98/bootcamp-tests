describe('isWeekday function' , function(){
    it('should that takes a string parameter - to find out if the parameter passed in is a day of the week (ie. Not a weekend day).' , function(){
       
        assert.equal(isWeekday('Saturday'), false);
    });

    it('should return true if it is Monday' , function(){
       
        assert.equal(isWeekday('Monday'), true);
    });

});
