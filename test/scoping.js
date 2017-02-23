describe('scoping', function () {
  it('should correctly deal with scoping `this` back to the callee', function () {
    var mod = new Module(),
        request;

    request = function (callback) {
      return callback();
    };

    function Module () {
      this.foo = 'bar';
      thisRef = this;
    }

    Module.prototype.method = function() {
      return thisRef.foo;
    };

    Module.prototype.req = function() {
      return request(this.method);
    };

    expect(mod.req()).toBe('bar');
  });
});