function A(){
  this.aaa = 'aaa';
}

A.prototype.bbb = 'bbb';
A.prototype.ccc = () => 'ccc';

if (process.env.NODE_ENV !== 'production') {
  var ddd = 'ddd';
}

module.exports = A;
