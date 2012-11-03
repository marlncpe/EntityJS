module('displays/paddle', lazy('paddle'));

test('stay within bounds', function(){
  
  paddle.posY = -10;
  
  paddle.checkBounds();
  
  ok(paddle.posY >= 0);
  
  paddle.posY = re.main().sizeY + 10;
  
  paddle.checkBounds();
  
  ok(paddle.posY <= re.main().sizeY)
  
});