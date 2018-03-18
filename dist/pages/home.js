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

var _utils = require('./../utils/index.js');

var _utils2 = _interopRequireDefault(_utils);

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
            navTitle: '首页',
            theamType: false,
            slidePop: false,
            imageUrls: [],
            newsList: [],
            newsTypeList: [{
                title: '今日新闻',
                list: []
            }],
            currentDate: new Date(),
            theamNews: {}
        }, _this.$props = { "nav": { "xmlns:v-bind": "", "v-bind:navTitle.once": "navTitle" }, "slide": { "xmlns:wx": "" } }, _this.$events = {}, _this.components = {
            nav: _nav2.default,
            slide: _slide2.default
        }, _this.events = {
            showSlide: function showSlide() {
                this.slidePop = true;
                this.$apply();
            },
            closeSlide: function closeSlide(item) {
                var _this2 = this;

                if (item) {
                    _wepy2.default.request('https://news-at.zhihu.com/api/4/theme/' + item.id).then(function (res) {
                        _this2.theamType = true;
                        _this2.navTitle = item.name;
                        _this2.theamNews = {
                            bg: [{
                                image: res.data.background,
                                title: res.data.description
                            }],
                            author: res.data.editors[0].name,
                            authorImg: res.data.editors[0].avatar,
                            list: res.data.stories
                        };
                        _this2.$apply();
                    });
                }
                //                if(item){
                //                    console.log(item)
                //                }
                this.slidePop = false;
                this.$apply();
            }
        }, _this.methods = {
            goDetail: function goDetail($event) {
                var item = this.newsTypeList[$event.currentTarget.dataset.tindex].list[$event.currentTarget.dataset.index];
                console.log(item);
                _wepy2.default.navigateTo({
                    url: 'detail?id=' + item.id
                });
            },
            loadMore: function loadMore() {
                var _this3 = this;

                //                this.getMoreList();
                _utils2.default.debounce(function () {
                    var date = new Date(new Date().setDate(_this3.currentDate.getDate() - 1));
                    if (_this3.newsTypeList.find(function (item) {
                        return item.title == _utils2.default.getDate(date);
                    })) {
                        return;
                    }
                    _wepy2.default.request('https://news.at.zhihu.com/api/4/news/before/' + _utils2.default.getDate(date)).then(function (res) {
                        console.log(res);
                        _this3.newsTypeList.push({
                            title: _utils2.default.getDate(date),
                            list: res.data.stories
                        });
                        _this3.currentDate = date;
                        _this3.$apply();
                    });
                }, 3000)();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_default, [{
        key: 'onLoad',
        value: function onLoad() {
            var _this4 = this;

            _wepy2.default.request('https://news-at.zhihu.com/api/4/news/latest').then(function (res) {
                _this4.imageUrls = res.data.top_stories;
                _this4.newsTypeList[0].list = res.data.stories;
                _this4.$apply();
            });
        }
    }]);

    return _default;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiY29uZmlnIiwiZGF0YSIsIm5hdlRpdGxlIiwidGhlYW1UeXBlIiwic2xpZGVQb3AiLCJpbWFnZVVybHMiLCJuZXdzTGlzdCIsIm5ld3NUeXBlTGlzdCIsInRpdGxlIiwibGlzdCIsImN1cnJlbnREYXRlIiwiRGF0ZSIsInRoZWFtTmV3cyIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibmF2Iiwic2xpZGUiLCJldmVudHMiLCJzaG93U2xpZGUiLCIkYXBwbHkiLCJjbG9zZVNsaWRlIiwiaXRlbSIsInJlcXVlc3QiLCJpZCIsInRoZW4iLCJuYW1lIiwiYmciLCJpbWFnZSIsInJlcyIsImJhY2tncm91bmQiLCJkZXNjcmlwdGlvbiIsImF1dGhvciIsImVkaXRvcnMiLCJhdXRob3JJbWciLCJhdmF0YXIiLCJzdG9yaWVzIiwibWV0aG9kcyIsImdvRGV0YWlsIiwiJGV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ0aW5kZXgiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwidXJsIiwibG9hZE1vcmUiLCJkZWJvdW5jZSIsImRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImZpbmQiLCJwdXNoIiwidG9wX3N0b3JpZXMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OExBRUlBLE0sR0FBUyxFLFFBR1RDLEksR0FBTztBQUNIQyxzQkFBVSxJQURQO0FBRUhDLHVCQUFXLEtBRlI7QUFHSEMsc0JBQVUsS0FIUDtBQUlIQyx1QkFBVyxFQUpSO0FBS0hDLHNCQUFVLEVBTFA7QUFNSEMsMEJBQWMsQ0FBQztBQUNYQyx1QkFBTyxNQURJO0FBRVhDLHNCQUFNO0FBRkssYUFBRCxDQU5YO0FBVUhDLHlCQUFhLElBQUlDLElBQUosRUFWVjtBQVdIQyx1QkFBVztBQVhSLFMsUUFhUkMsTSxH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LGVBQU87QUFDVCx1QkFBS3BCLFNBQUwsR0FBaUJ3QixJQUFJNUIsSUFBSixDQUFTc0QsV0FBMUI7QUFDQSx1QkFBS2hELFlBQUwsQ0FBa0IsQ0FBbEIsRUFBcUJFLElBQXJCLEdBQTRCb0IsSUFBSTVCLElBQUosQ0FBU21DLE9BQXJDO0FBQ0EsdUJBQUtoQixNQUFMO0FBQ0gsYUFMTDtBQU1IOzs7O0VBNUR3QixlQUFLb0MsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgbmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2J1xuICAgIGltcG9ydCBzbGlkZSBmcm9tICcuLi9jb21wb25lbnRzL3NsaWRlJ1xuICAgIGltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscydcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcblxuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBuYXZUaXRsZTogJ+mmlumhtScsXG4gICAgICAgICAgICB0aGVhbVR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgc2xpZGVQb3A6IGZhbHNlLFxuICAgICAgICAgICAgaW1hZ2VVcmxzOiBbXSxcbiAgICAgICAgICAgIG5ld3NMaXN0OiBbXSxcbiAgICAgICAgICAgIG5ld3NUeXBlTGlzdDogW3tcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+S7iuaXpeaWsOmXuycsXG4gICAgICAgICAgICAgICAgbGlzdDogW11cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgY3VycmVudERhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICB0aGVhbU5ld3M6IHt9XG4gICAgICAgIH1cbiAgICAgICAkcHJvcHMgPSB7XCJuYXZcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm5hdlRpdGxlLm9uY2VcIjpcIm5hdlRpdGxlXCJ9LFwic2xpZGVcIjp7XCJ4bWxuczp3eFwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIG5hdixcbiAgICAgICAgICAgIHNsaWRlXG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRzID0ge1xuICAgICAgICAgICAgc2hvd1NsaWRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVQb3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2VTbGlkZShpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYoaXRlbSl7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkucmVxdWVzdChgaHR0cHM6Ly9uZXdzLWF0LnpoaWh1LmNvbS9hcGkvNC90aGVtZS8ke2l0ZW0uaWR9YClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVhbVR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2VGl0bGUgPSBpdGVtLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZWFtTmV3cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmc6W3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiByZXMuZGF0YS5iYWNrZ3JvdW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6IHJlcy5kYXRhLmVkaXRvcnNbMF0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9ySW1nOiByZXMuZGF0YS5lZGl0b3JzWzBdLmF2YXRhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogcmVzLmRhdGEuc3Rvcmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICBpZihpdGVtKXtcbi8vICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxuLy8gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVQb3AgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHdlcHkucmVxdWVzdCgnaHR0cHM6Ly9uZXdzLWF0LnpoaWh1LmNvbS9hcGkvNC9uZXdzL2xhdGVzdCcpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVVybHMgPSByZXMuZGF0YS50b3Bfc3RvcmllcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdzVHlwZUxpc3RbMF0ubGlzdCA9IHJlcy5kYXRhLnN0b3JpZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgZ29EZXRhaWwoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLm5ld3NUeXBlTGlzdFskZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnRpbmRleF0ubGlzdFskZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYGRldGFpbD9pZD0ke2l0ZW0uaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZE1vcmUoKSB7XG4vLyAgICAgICAgICAgICAgICB0aGlzLmdldE1vcmVMaXN0KCk7XG4gICAgICAgICAgICAgICAgdXRpbHMuZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuc2V0RGF0ZSh0aGlzLmN1cnJlbnREYXRlLmdldERhdGUoKS0xKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubmV3c1R5cGVMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLnRpdGxlPT11dGlscy5nZXREYXRlKGRhdGUpKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2VweS5yZXF1ZXN0KGBodHRwczovL25ld3MuYXQuemhpaHUuY29tL2FwaS80L25ld3MvYmVmb3JlLyR7dXRpbHMuZ2V0RGF0ZShkYXRlKX1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdzVHlwZUxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB1dGlscy5nZXREYXRlKGRhdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiByZXMuZGF0YS5zdG9yaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAzMDAwKSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=