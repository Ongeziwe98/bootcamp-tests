describe('findItemsOver function' , function(){
    it('should return all the products that have a quantity higher than threshold', function(){
         assert.deepEqual(findItemsOver(itemList, threshold), result)
 });
 it('should return an empty array for product that are not over threshold ', function(){
    assert.deepEqual(findItemsOver( [{name : 'apples', qty : 10},{name : 'banana', qty : 3}], threshold), [])
});
}); 