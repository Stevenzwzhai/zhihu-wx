'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$component) {
    _inherits(_default, _wepy$component);

    function _default() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _default);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            titleList: []
        }, _this.methods = {
            close: function close() {
                this.$emit('closeSlide');
            },
            getTeamNews: function getTeamNews($event) {
                console.log(1, $event);
                this.$emit('closeSlide', this.titleList[$event.currentTarget.dataset.index]);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_default, [{
        key: 'onLoad',
        value: function onLoad() {
            var _this2 = this;

            _wepy2.default.request('http://news-at.zhihu.com/api/4/themes').then(function (res) {
                _this2.titleList = res.data.others;
                _this2.$apply();
            });
        }
    }]);

    return _default;
}(_wepy2.default.component);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJ0aXRsZUxpc3QiLCJtZXRob2RzIiwiY2xvc2UiLCIkZW1pdCIsImdldFRlYW1OZXdzIiwiJGV2ZW50IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJyZXF1ZXN0IiwidGhlbiIsInJlcyIsIm90aGVycyIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhMQUVJQSxJLEdBQU87QUFDSEMsdUJBQVc7QUFEUixTLFFBVVBDLE8sR0FBVTtBQUNOQyxpQkFETSxtQkFDRTtBQUNKLHFCQUFLQyxLQUFMLENBQVcsWUFBWDtBQUNILGFBSEs7QUFJTkMsdUJBSk0sdUJBSU1DLE1BSk4sRUFJYztBQUNoQkMsd0JBQVFDLEdBQVIsQ0FBWSxDQUFaLEVBQWVGLE1BQWY7QUFDQSxxQkFBS0YsS0FBTCxDQUFXLFlBQVgsRUFBeUIsS0FBS0gsU0FBTCxDQUFlSyxPQUFPRyxhQUFQLENBQXFCQyxPQUFyQixDQUE2QkMsS0FBNUMsQ0FBekI7QUFDSDtBQVBLLFM7Ozs7O2lDQVBBO0FBQUE7O0FBQ04sMkJBQUtDLE9BQUwsQ0FBYSx1Q0FBYixFQUNLQyxJQURMLENBQ1UsZUFBTztBQUNULHVCQUFLWixTQUFMLEdBQWlCYSxJQUFJZCxJQUFKLENBQVNlLE1BQTFCO0FBQ0EsdUJBQUtDLE1BQUw7QUFDSCxhQUpMO0FBS0g7Ozs7RUFWd0IsZUFBS0MsUyIsImZpbGUiOiJzbGlkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHRpdGxlTGlzdDogW11cbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQgKCkge1xuICAgICAgICAgICAgd2VweS5yZXF1ZXN0KCdodHRwOi8vbmV3cy1hdC56aGlodS5jb20vYXBpLzQvdGhlbWVzJylcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpdGxlTGlzdCA9IHJlcy5kYXRhLm90aGVycztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBjbG9zZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZVNsaWRlJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRUZWFtTmV3cygkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygxLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2VTbGlkZScsIHRoaXMudGl0bGVMaXN0WyRldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19