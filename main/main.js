module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.getall()}
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
  constructor(Obj) {
    this.Obj = Obj;
  }
  
  minimum() {
    var min = this.Obj[0];
    for (var i = 1; i < this.Obj.length; i++){
      if (this.Obj[i] < min ){
        min = this.Obj[i];
      }
    }
    return min;
  }

  maximum() {
    var max = this.Obj[0];
    for (var i = 1; i < this.Obj.length; i++){
      if (this.Obj[i] > max ){
        max = this.Obj[i];
      }
    }
    return max;
  }

  getall(){
    return this.Obj.length;
  }

  average(){
    var sum = this.Obj[0];
    for (var i = 1; i < this.Obj.length; i++){
      sum += this.Obj[i];
    }
    var average = sum / (this.Obj.length);
    return average.toFixed(2);
  }
}
