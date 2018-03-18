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
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return _default;
}(_wepy2.default.component);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaG9tZVNyYyIsInByb3BzIiwibmF2VGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsIm1ldGhvZHMiLCJzaG93U2xpZGUiLCIkZW1pdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7QUFDSjs7Ozs7Ozs7Ozs7Ozs7OzhMQUVRQSxJLEdBQU87QUFDSEMscUJBQVM7QUFETixTLFFBR1BDLEssR0FBUTtBQUNKQyxzQkFBVTtBQUNOQyxzQkFBTUMsTUFEQTtBQUVOQyx5QkFBUztBQUZIO0FBRE4sUyxRQU9SQyxPLEdBQVU7QUFDTkMscUJBRE0sdUJBQ007QUFDUixxQkFBS0MsS0FBTCxDQUFXLFdBQVg7QUFDSDtBQUhLLFM7Ozs7RUFYZSxlQUFLQyxTIiwiZmlsZSI6Im5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4vLyAgICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBob21lU3JjOiAnLi4vYWNjZXNzL2ltYWdlcy9jYXRhbG9nLnN2ZydcbiAgICAgICAgfVxuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIG5hdlRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICfpppbpobUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgc2hvd1NsaWRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3Nob3dTbGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19