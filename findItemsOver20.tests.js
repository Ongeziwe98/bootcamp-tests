describe('findItemsOver20 function' , function(){
    it('should return all the products that have a quantity higher than 20', function(){

         assert.deepEqual(findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]),results);
         
    });

    it('should return false when the data entered is invalid', function(){

     assert.equal(findItemsOver20('ytjgtkxx'), false);
});
    });
