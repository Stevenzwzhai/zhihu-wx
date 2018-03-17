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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJ0aXRsZUxpc3QiLCJtZXRob2RzIiwiY2xvc2UiLCIkZW1pdCIsInJlcXVlc3QiLCJ0aGVuIiwicmVzIiwib3RoZXJzIiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OExBRUlBLEksR0FBTztBQUNIQyx1QkFBVztBQURSLFMsUUFVUEMsTyxHQUFVO0FBQ05DLGlCQURNLG1CQUNFO0FBQ0oscUJBQUtDLEtBQUwsQ0FBVyxZQUFYO0FBQ0g7QUFISyxTOzs7OztpQ0FQQTtBQUFBOztBQUNOLDJCQUFLQyxPQUFMLENBQWEsdUNBQWIsRUFDS0MsSUFETCxDQUNVLGVBQU87QUFDVCx1QkFBS0wsU0FBTCxHQUFpQk0sSUFBSVAsSUFBSixDQUFTUSxNQUExQjtBQUNBLHVCQUFLQyxNQUFMO0FBQ0gsYUFKTDtBQUtIOzs7O0VBVndCLGVBQUtDLFMiLCJmaWxlIjoic2xpZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5jb21wb25lbnR7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICB0aXRsZUxpc3Q6IFtdXG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkICgpIHtcbiAgICAgICAgICAgIHdlcHkucmVxdWVzdCgnaHR0cDovL25ld3MtYXQuemhpaHUuY29tL2FwaS80L3RoZW1lcycpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZUxpc3QgPSByZXMuZGF0YS5vdGhlcnM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgY2xvc2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2VTbGlkZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=