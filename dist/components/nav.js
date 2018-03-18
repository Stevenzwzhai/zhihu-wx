'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//    import 'wepy-async-function'
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
            homeSrc: '../access/images/catalog.svg'
        }, _this.props = {
            navTitle: {
                type: String,
                default: '首页'
            }
        }, _this.methods = {
            showSlide: function showSlide() {
                this.$emit('showSlide');
            },
            goHome: function goHome() {
                this.$emit('goHome');
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return _default;
}(_wepy2.default.component);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaG9tZVNyYyIsInByb3BzIiwibmF2VGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsIm1ldGhvZHMiLCJzaG93U2xpZGUiLCIkZW1pdCIsImdvSG9tZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7QUFDSjs7Ozs7Ozs7Ozs7Ozs7OzhMQUVRQSxJLEdBQU87QUFDSEMscUJBQVM7QUFETixTLFFBR1BDLEssR0FBUTtBQUNKQyxzQkFBVTtBQUNOQyxzQkFBTUMsTUFEQTtBQUVOQyx5QkFBUztBQUZIO0FBRE4sUyxRQU9SQyxPLEdBQVU7QUFDTkMscUJBRE0sdUJBQ007QUFDUixxQkFBS0MsS0FBTCxDQUFXLFdBQVg7QUFDSCxhQUhLO0FBSU5DLGtCQUpNLG9CQUlHO0FBQ0wscUJBQUtELEtBQUwsQ0FBVyxRQUFYO0FBQ0g7QUFOSyxTOzs7O0VBWGUsZUFBS0UsUyIsImZpbGUiOiJuYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuLy8gICAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaG9tZVNyYzogJy4uL2FjY2Vzcy9pbWFnZXMvY2F0YWxvZy5zdmcnXG4gICAgICAgIH1cbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBuYXZUaXRsZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAn6aaW6aG1J1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHNob3dTbGlkZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzaG93U2xpZGUnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvSG9tZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdnb0hvbWUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19