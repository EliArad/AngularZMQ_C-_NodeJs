app.directive("sevensegmentComponent", function () {
    return {
        restrict: "E",
        require: 'ngModel',

        link: function (scope, el, atts, ngModel)
        {
            if (!ngModel)
                return; // do nothing if no ng-model
            el.sevenSeg({
                digits: atts.digits,
                value: "11",
                colorOn: atts.colorOn,
                colorOff: atts.colorOff
            });

            ngModel.$render = function () {

                console.log(ngModel);
                //if(typeof ngModel.$viewValue != "undefined")
                {
                    console.log(ngModel);
                    console.log(atts.index);
                    //if (atts.index == ngModel.$viewValue)
                    el.sevenSeg({ value: ngModel.$viewValue });
                }
            }
        }
    }
});


