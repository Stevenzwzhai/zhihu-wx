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
        }, _this.$props = { "slide": { "xmlns:wx": "" } }, _this.$events = {}, _this.components = {
            nav: _nav2.default,
            slide: _slide2.default
        }, _this.events = {
            goHome: function goHome() {
                console.log('home');
                this.theamType = false;
                this.$apply();
            },
            showSlide: function showSlide() {
                this.slidePop = true;
                this.$apply();
            },
            closeSlide: function closeSlide(item) {
                var _this2 = this;

                console.log(item);
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
            goCDetail: function goCDetail($event) {
                //                let item = this.theamNews.list[$event.currentTarget.dataset.index]
                //                console.log(item);
                //                wepy.navigateTo({
                //                    url: `detail?id=${item.id}`
                //                })
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiY29uZmlnIiwiZGF0YSIsIm5hdlRpdGxlIiwidGhlYW1UeXBlIiwic2xpZGVQb3AiLCJpbWFnZVVybHMiLCJuZXdzTGlzdCIsIm5ld3NUeXBlTGlzdCIsInRpdGxlIiwibGlzdCIsImN1cnJlbnREYXRlIiwiRGF0ZSIsInRoZWFtTmV3cyIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibmF2Iiwic2xpZGUiLCJldmVudHMiLCJnb0hvbWUiLCJjb25zb2xlIiwibG9nIiwiJGFwcGx5Iiwic2hvd1NsaWRlIiwiY2xvc2VTbGlkZSIsIml0ZW0iLCJyZXF1ZXN0IiwiaWQiLCJ0aGVuIiwibmFtZSIsImJnIiwiaW1hZ2UiLCJyZXMiLCJiYWNrZ3JvdW5kIiwiZGVzY3JpcHRpb24iLCJhdXRob3IiLCJlZGl0b3JzIiwiYXV0aG9ySW1nIiwiYXZhdGFyIiwic3RvcmllcyIsIm1ldGhvZHMiLCJnb0RldGFpbCIsIiRldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidGluZGV4IiwiaW5kZXgiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ29DRGV0YWlsIiwibG9hZE1vcmUiLCJkZWJvdW5jZSIsImRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImZpbmQiLCJwdXNoIiwidG9wX3N0b3JpZXMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OExBRUlBLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNIQyxzQkFBVSxJQURQO0FBRUhDLHVCQUFXLEtBRlI7QUFHSEMsc0JBQVUsS0FIUDtBQUlIQyx1QkFBVyxFQUpSO0FBS0hDLHNCQUFVLEVBTFA7QUFNSEMsMEJBQWMsQ0FBQztBQUNYQyx1QkFBTyxNQURJO0FBRVhDLHNCQUFNO0FBRkssYUFBRCxDQU5YO0FBVUhDLHlCQUFhLElBQUlDLElBQUosRUFWVjtBQVdIQyx1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QSwrQkFBSzdCLFdBQUwsR0FBbUIwQyxJQUFuQjtBQUNBLCtCQUFLOUIsTUFBTDtBQUNILHFCQVRMO0FBVUgsaUJBZkQsRUFlRyxJQWZIO0FBZ0JIO0FBakNLLFM7Ozs7O2lDQVJEO0FBQUE7O0FBQ0wsMkJBQUtJLE9BQUwsQ0FBYSw2Q0FBYixFQUNLRSxJQURMLENBQ1UsZUFBTztBQUNULHVCQUFLdkIsU0FBTCxHQUFpQjJCLElBQUkvQixJQUFKLENBQVN3RCxXQUExQjtBQUNBLHVCQUFLbEQsWUFBTCxDQUFrQixDQUFsQixFQUFxQkUsSUFBckIsR0FBNEJ1QixJQUFJL0IsSUFBSixDQUFTc0MsT0FBckM7QUFDQSx1QkFBS2pCLE1BQUw7QUFDSCxhQUxMO0FBTUg7Ozs7RUE5RHdCLGVBQUtvQyxJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCBuYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYnXG4gICAgaW1wb3J0IHNsaWRlIGZyb20gJy4uL2NvbXBvbmVudHMvc2xpZGUnXG4gICAgaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzJ1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBuYXZUaXRsZTogJ+mmlumhtScsXG4gICAgICAgICAgICB0aGVhbVR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgc2xpZGVQb3A6IGZhbHNlLFxuICAgICAgICAgICAgaW1hZ2VVcmxzOiBbXSxcbiAgICAgICAgICAgIG5ld3NMaXN0OiBbXSxcbiAgICAgICAgICAgIG5ld3NUeXBlTGlzdDogW3tcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+S7iuaXpeaWsOmXuycsXG4gICAgICAgICAgICAgICAgbGlzdDogW11cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgY3VycmVudERhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICB0aGVhbU5ld3M6IHt9XG4gICAgICAgIH1cbiAgICAgICAkcHJvcHMgPSB7XCJzbGlkZVwiOntcInhtbG5zOnd4XCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgbmF2LFxuICAgICAgICAgICAgc2xpZGVcbiAgICAgICAgfVxuICAgICAgICBldmVudHMgPSB7XG4gICAgICAgICAgICBnb0hvbWUoKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaG9tZScpXG4gICAgICAgICAgICAgICAgdGhpcy50aGVhbVR5cGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1NsaWRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVQb3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2VTbGlkZShpdGVtKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSlcbiAgICAgICAgICAgICAgICBpZihpdGVtKXtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5yZXF1ZXN0KGBodHRwczovL25ld3MtYXQuemhpaHUuY29tL2FwaS80L3RoZW1lLyR7aXRlbS5pZH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZWFtVHlwZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdlRpdGxlID0gaXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVhbU5ld3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnOlt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogcmVzLmRhdGEuYmFja2dyb3VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiByZXMuZGF0YS5lZGl0b3JzWzBdLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvckltZzogcmVzLmRhdGEuZWRpdG9yc1swXS5hdmF0YXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IHJlcy5kYXRhLnN0b3JpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVQb3AgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHdlcHkucmVxdWVzdCgnaHR0cHM6Ly9uZXdzLWF0LnpoaWh1LmNvbS9hcGkvNC9uZXdzL2xhdGVzdCcpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVVybHMgPSByZXMuZGF0YS50b3Bfc3RvcmllcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdzVHlwZUxpc3RbMF0ubGlzdCA9IHJlcy5kYXRhLnN0b3JpZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgZ29EZXRhaWwoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLm5ld3NUeXBlTGlzdFskZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnRpbmRleF0ubGlzdFskZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYGRldGFpbD9pZD0ke2l0ZW0uaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29DRGV0YWlsKCRldmVudCkge1xuLy8gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnRoZWFtTmV3cy5saXN0WyRldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdXG4vLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbi8vICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4vLyAgICAgICAgICAgICAgICAgICAgdXJsOiBgZGV0YWlsP2lkPSR7aXRlbS5pZH1gXG4vLyAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRNb3JlKCkge1xuLy8gICAgICAgICAgICAgICAgdGhpcy5nZXRNb3JlTGlzdCgpO1xuICAgICAgICAgICAgICAgIHV0aWxzLmRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldERhdGUodGhpcy5jdXJyZW50RGF0ZS5nZXREYXRlKCktMSkpO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm5ld3NUeXBlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS50aXRsZT09dXRpbHMuZ2V0RGF0ZShkYXRlKSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdlcHkucmVxdWVzdChgaHR0cHM6Ly9uZXdzLmF0LnpoaWh1LmNvbS9hcGkvNC9uZXdzL2JlZm9yZS8ke3V0aWxzLmdldERhdGUoZGF0ZSl9YClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3c1R5cGVMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdXRpbHMuZ2V0RGF0ZShkYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogcmVzLmRhdGEuc3Rvcmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSwgMzAwMCkoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19