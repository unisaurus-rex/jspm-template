describe("hello world", function(){
  it("passes", function(){
    var t = true;

    expect(t).toBe(true);
  });
  
  it("fails", function(){
    var f = false;
    
    expect(f).toBe(true);
  });
});
