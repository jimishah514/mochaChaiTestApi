var chai = require('chai')

expect  = chai.expect


chai.should()

function isEven(num) {
    return  num%2 === 0
}

describe('student',function() {
    it('should return true',function(){
        isEven(2).should.be.true
    })
    it('should return false',function(){
        isEven(3).should.be.false
    })

    it('should return false',function(){
        expect(isEven(2).should.be.false)
    })
})

function add(num1,num2) {
    return  num1+ num2
}
describe('number function',function() {
var num = 4

// it.only('should return true',function(){
//     num = add(num,5)
//     num.should.equal(10)
// })
    it('should return true',function(){
        num = add(num,5)
        num.should.equal(10)
    })

    it.skip('should return true',function(){
        num = add(num,6)
        num.should.equal(10)
    })

   xit('should return true',function(){
        num = add(num,6)
        num.should.equal(10)
    })
})