describe('mostProfitableDepartment function' , function(){
    it('should return the most profitable department', function(){

         assert.deepEqual(mostProfitable,departmentResults);
         
    });

    it('should return 0 if entered false data set ', function(){

     assert.deepEqual(mostProfitableDepartment(555555),0);
     
});

    });
