'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxParse = require('./../wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$page) {
    _inherits(_default, _wepy$page);

    function _default() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _default);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            content: ""
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_default, [{
        key: 'onLoad',
        value: function onLoad(option) {
            var _this2 = this;

            console.log(option);
            _wepy2.default.request('http://news-at.zhihu.com/api/4/news/' + option.id).then(function (res) {
                console.log(res);
                _this2.content = res.data.body;
                var self = _this2;
                _wxParse2.default.wxParse('content', 'html', self.content, self, 5);
            });
        }
    }]);

    return _default;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiY29udGVudCIsIm9wdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwiaWQiLCJ0aGVuIiwicmVzIiwiYm9keSIsInNlbGYiLCJ3eFBhcnNlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OExBRUlBLEksR0FBTztBQUNIQyxxQkFBUztBQUROLFM7Ozs7OytCQUdBQyxNLEVBQVE7QUFBQTs7QUFDWEMsb0JBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBLDJCQUFLRyxPQUFMLDBDQUFvREgsT0FBT0ksRUFBM0QsRUFDS0MsSUFETCxDQUNVLGVBQU87QUFDVEosd0JBQVFDLEdBQVIsQ0FBWUksR0FBWjtBQUNBLHVCQUFLUCxPQUFMLEdBQWVPLElBQUlSLElBQUosQ0FBU1MsSUFBeEI7QUFDQSxvQkFBSUMsYUFBSjtBQUNBLGtDQUFRQyxPQUFSLENBQWdCLFNBQWhCLEVBQTJCLE1BQTNCLEVBQW1DRCxLQUFLVCxPQUF4QyxFQUFpRFMsSUFBakQsRUFBdUQsQ0FBdkQ7QUFDSCxhQU5MO0FBT0g7Ozs7RUFid0IsZUFBS0UsSSIsImZpbGUiOiJkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCBXeFBhcnNlIGZyb20gJy4uL3d4UGFyc2Uvd3hQYXJzZSdcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2cob3B0aW9uKVxuICAgICAgICAgICAgd2VweS5yZXF1ZXN0KGBodHRwOi8vbmV3cy1hdC56aGlodS5jb20vYXBpLzQvbmV3cy8ke29wdGlvbi5pZH1gKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gcmVzLmRhdGEuYm9keVxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgICAgICAgICAgICAgV3hQYXJzZS53eFBhcnNlKCdjb250ZW50JywgJ2h0bWwnLCBzZWxmLmNvbnRlbnQsIHNlbGYsIDUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==