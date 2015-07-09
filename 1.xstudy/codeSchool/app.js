(function() {
							//该模块依赖于store-directives模块
  var app = angular.module('gemStore', ['store-directives']);
  //定义控制器StoreController，使用http服务，
  app.controller('StoreController', ['$http',function($http){
    var store = this;
    store.products = [];
    //通过http协议获取后台json数据，转入store.products
    $http.get('./store-products.json').success(function(data){
        store.products = data;
    });    
  }]);
 //表单中用到的控制器
  app.controller('ReviewController', function() {
    this.review = {};
	//提交表单
    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();