describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    for(var i=0; i<arr.length; i++){
      if(arr[i].length){
        arr = arr.reduce(function(a, b) {
          return a.concat(b);
        }, []);
      }
    }
    
    arr.sort();

    expect(arr).toEqual(expected);
  });
});