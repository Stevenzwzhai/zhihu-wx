'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _nav = require('./../components/nav.js');

var _nav2 = _interopRequireDefault(_nav);

var _slide = require('./../components/slide.js');

var _slide2 = _interopRequireDefault(_slide);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {
            slidePop: false,
            imageUrls: [],
            newsList: []
        }, _this.$props = { "slide": { "xmlns:wx": "" } }, _this.$events = {}, _this.components = {
            nav: _nav2.default,
            slide: _slide2.default
        }, _this.events = {
            showSlide: function showSlide() {
                console.log('show');
                this.slidePop = true;
                this.$apply();
            },
            closeSlide: function closeSlide() {
                this.slidePop = false;
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_default, [{
        key: 'onLoad',
        value: function onLoad() {
            var _this2 = this;

            _wepy2.default.request('http://news-at.zhihu.com/api/4/news/latest').then(function (res) {
                console.log(res);
                _this2.imageUrls = res.data.top_stories;
                _this2.newsList = res.data.stories;
                console.log(_this2.imageUrls);
                _this2.$apply();
            });
        }
    }]);

    return _default;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiY29uZmlnIiwiZGF0YSIsInNsaWRlUG9wIiwiaW1hZ2VVcmxzIiwibmV3c0xpc3QiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm5hdiIsInNsaWRlIiwiZXZlbnRzIiwic2hvd1NsaWRlIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsImNsb3NlU2xpZGUiLCJyZXF1ZXN0IiwidGhlbiIsInJlcyIsInRvcF9zdG9yaWVzIiwic3RvcmllcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OExBRUlBLE0sR0FBUyxFLFFBR1RDLEksR0FBTztBQUNIQyxzQkFBVSxLQURQO0FBRUhDLHVCQUFXLEVBRlI7QUFHSEMsc0JBQVU7QUFIUCxTLFFBS1JDLE0sR0FBUyxFQUFDLFNBQVEsRUFBQyxZQUFXLEVBQVosRUFBVCxFLFFBQ2hCQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsOEJBREU7QUFFRkM7QUFGRSxTLFFBSU5DLE0sR0FBUztBQUNMQyxxQkFESyx1QkFDTztBQUNSQyx3QkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDQSxxQkFBS1gsUUFBTCxHQUFnQixJQUFoQjtBQUNBLHFCQUFLWSxNQUFMO0FBQ0gsYUFMSTtBQU1MQyxzQkFOSyx3QkFNUTtBQUNULHFCQUFLYixRQUFMLEdBQWdCLEtBQWhCO0FBQ0EscUJBQUtZLE1BQUw7QUFDSDtBQVRJLFM7Ozs7O2lDQVdBO0FBQUE7O0FBQ0wsMkJBQUtFLE9BQUwsQ0FBYSw0Q0FBYixFQUNLQyxJQURMLENBQ1UsZUFBTztBQUNUTCx3QkFBUUMsR0FBUixDQUFZSyxHQUFaO0FBQ0EsdUJBQUtmLFNBQUwsR0FBaUJlLElBQUlqQixJQUFKLENBQVNrQixXQUExQjtBQUNBLHVCQUFLZixRQUFMLEdBQWdCYyxJQUFJakIsSUFBSixDQUFTbUIsT0FBekI7QUFDQVIsd0JBQVFDLEdBQVIsQ0FBWSxPQUFLVixTQUFqQjtBQUNBLHVCQUFLVyxNQUFMO0FBQ0gsYUFQTDtBQVFIOzs7O0VBbkN3QixlQUFLTyxJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCBuYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYnXG4gICAgaW1wb3J0IHNsaWRlIGZyb20gJy4uL2NvbXBvbmVudHMvc2xpZGUnXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG5cbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc2xpZGVQb3A6IGZhbHNlLFxuICAgICAgICAgICAgaW1hZ2VVcmxzOiBbXSxcbiAgICAgICAgICAgIG5ld3NMaXN0OiBbXVxuICAgICAgICB9XG4gICAgICAgJHByb3BzID0ge1wic2xpZGVcIjp7XCJ4bWxuczp3eFwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIG5hdixcbiAgICAgICAgICAgIHNsaWRlXG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRzID0ge1xuICAgICAgICAgICAgc2hvd1NsaWRlKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG93JylcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlUG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlU2xpZGUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZVBvcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgd2VweS5yZXF1ZXN0KCdodHRwOi8vbmV3cy1hdC56aGlodS5jb20vYXBpLzQvbmV3cy9sYXRlc3QnKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVVybHMgPSByZXMuZGF0YS50b3Bfc3RvcmllcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdzTGlzdCA9IHJlcy5kYXRhLnN0b3JpZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW1hZ2VVcmxzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=