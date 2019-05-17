describe('countAllFromTown function' , function(){
    it('should return all the registration numbers in the string that is for that town', function(){

         assert.deepEqual(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3)
    });
    it('should return 0 if the string is empty ' , function(){
       
     assert.equal(countAllFromTown(''), 0);
     
 });
    });
