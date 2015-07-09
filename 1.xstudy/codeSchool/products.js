(function(){
    var app = angular.module('store-directives', []);
//productDescription指令器
    app.directive("productDescription", function() {
      return {
      	//标签指令器
        restrict: 'E',
        //指向对应页面
        templateUrl: "product-description.html"
      };
    });
//表单
    app.directive("productReviews", function() {
      return {
        restrict: 'E',
        templateUrl: "product-reviews.html"
      };
    });
//详细
    app.directive("productSpecs", function() {
      return {
        restrict:"A",
        templateUrl: "product-specs.html"
      };
    });
//productTabs指令器
    app.directive("productTabs", function() {
      return {
      	//标签指令器
        restrict: "E",
        //指向对应页面内容
        templateUrl: "product-tabs.html",
        //内置控制器
        controller: function() {
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        },
        //控制器命名
        controllerAs: "tab"
      };
    });
//	图片指令器
    app.directive("productGallery", function() {
      return {
      	//标签指令器
        restrict: "E",
        //指向位置，将其内容显示出来
        templateUrl: "product-gallery.html",
        //内置控制器
        controller: function() {
          this.current = 0;
          this.setCurrent = function(imageNumber){
            this.current = imageNumber || 0;
          };
        },
        //命名控制器
        controllerAs: "gallery"
      };
    });
  })();
