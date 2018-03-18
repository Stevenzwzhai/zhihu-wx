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
            showSlide: function showSlide() {
                this.slidePop = true;
                this.$apply();
            },
            closeSlide: function closeSlide(item) {
                var _this2 = this;

                console.log(2, item);
                if (item) {
                    _wepy2.default.request('http://news-at.zhihu.com/api/4/theme/' + item.id).then(function (res) {
                        _this2.theamType = true;
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
            getMoreList: function getMoreList() {},
            getList: function getList() {
                console.log(123123);
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
                    _wepy2.default.request('http://news.at.zhihu.com/api/4/news/before/' + _utils2.default.getDate(date)).then(function (res) {
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

            _wepy2.default.request('http://news-at.zhihu.com/api/4/news/latest').then(function (res) {
                _this4.imageUrls = res.data.top_stories;
                _this4.newsTypeList[0].list = res.data.stories;
                _this4.$apply();
            });
        }
    }]);

    return _default;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiY29uZmlnIiwiZGF0YSIsInRoZWFtVHlwZSIsInNsaWRlUG9wIiwiaW1hZ2VVcmxzIiwibmV3c0xpc3QiLCJuZXdzVHlwZUxpc3QiLCJ0aXRsZSIsImxpc3QiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJ0aGVhbU5ld3MiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm5hdiIsInNsaWRlIiwiZXZlbnRzIiwic2hvd1NsaWRlIiwiJGFwcGx5IiwiY2xvc2VTbGlkZSIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsImlkIiwidGhlbiIsImJnIiwiaW1hZ2UiLCJyZXMiLCJiYWNrZ3JvdW5kIiwiZGVzY3JpcHRpb24iLCJhdXRob3IiLCJlZGl0b3JzIiwibmFtZSIsImF1dGhvckltZyIsImF2YXRhciIsInN0b3JpZXMiLCJtZXRob2RzIiwiZ2V0TW9yZUxpc3QiLCJnZXRMaXN0IiwibG9hZE1vcmUiLCJkZWJvdW5jZSIsImRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImZpbmQiLCJwdXNoIiwidG9wX3N0b3JpZXMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OExBRUlBLE0sR0FBUyxFLFFBR1RDLEksR0FBTztBQUNIQyx1QkFBVyxLQURSO0FBRUhDLHNCQUFVLEtBRlA7QUFHSEMsdUJBQVcsRUFIUjtBQUlIQyxzQkFBVSxFQUpQO0FBS0hDLDBCQUFjLENBQUM7QUFDWEMsdUJBQU8sTUFESTtBQUVYQyxzQkFBTTtBQUZLLGFBQUQsQ0FMWDtBQVNIQyx5QkFBYSxJQUFJQyxJQUFKLEVBVFY7QUFVSEMsdUJBQVc7QUFWUixTLFFBWVJDLE0sR0FBUyxFQUFDLFNBQVEsRUFBQyxZQUFXLEVBQVosRUFBVCxFLFFBQ2hCQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsOEJBREU7QUFFRkM7QUFGRSxTLFFBSU5DLE0sR0FBUztBQUNMQyxxQkFESyx1QkFDTztBQUNSLHFCQUFLZixRQUFMLEdBQWdCLElBQWhCO0FBQ0EscUJBQUtnQixNQUFMO0FBQ0gsYUFKSTtBQUtMQyxzQkFMSyxzQkFLTUMsSUFMTixFQUtZO0FBQUE7O0FBQ2JDLHdCQUFRQyxHQUFSLENBQVksQ0FBWixFQUFlRixJQUFmO0FBQ0Esb0JBQUdBLElBQUgsRUFBUTtBQUNKLG1DQUFLRyxPQUFMLDJDQUFxREgsS0FBS0ksRUFBMUQsRUFDS0MsSUFETCxDQUNVLGVBQU87QUFDVCwrQkFBS3hCLFNBQUwsR0FBaUIsSUFBakI7QUFDQSwrQkFBS1MsU0FBTCxHQUFpQjtBQUNiZ0IsZ0NBQUcsQ0FBQztBQUNBQyx1Q0FBT0MsSUFBSTVCLElBQUosQ0FBUzZCLFVBRGhCO0FBRUF2Qix1Q0FBT3NCLElBQUk1QixJQUFKLENBQVM4QjtBQUZoQiw2QkFBRCxDQURVO0FBS2JDLG9DQUFRSCxJQUFJNUIsSUFBSixDQUFTZ0MsT0FBVCxDQUFpQixDQUFqQixFQUFvQkMsSUFMZjtBQU1iQyx1Q0FBV04sSUFBSTVCLElBQUosQ0FBU2dDLE9BQVQsQ0FBaUIsQ0FBakIsRUFBb0JHLE1BTmxCO0FBT2I1QixrQ0FBTXFCLElBQUk1QixJQUFKLENBQVNvQztBQVBGLHlCQUFqQjtBQVNBLCtCQUFLbEIsTUFBTDtBQUNILHFCQWJMO0FBY0g7QUFDakI7QUFDQTtBQUNBO0FBQ2dCLHFCQUFLaEIsUUFBTCxHQUFnQixLQUFoQjtBQUNBLHFCQUFLZ0IsTUFBTDtBQUNIO0FBNUJJLFMsUUFzQ1RtQixPLEdBQVU7QUFDTkMsdUJBRE0seUJBQ1EsQ0FFYixDQUhLO0FBSU5DLG1CQUpNLHFCQUlJO0FBQ05sQix3QkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDSCxhQU5LO0FBT05rQixvQkFQTSxzQkFPSztBQUFBOztBQUN2QjtBQUNnQixnQ0FBTUMsUUFBTixDQUFlLFlBQU07QUFDakIsd0JBQUlDLE9BQU8sSUFBSWpDLElBQUosQ0FBUyxJQUFJQSxJQUFKLEdBQVdrQyxPQUFYLENBQW1CLE9BQUtuQyxXQUFMLENBQWlCb0MsT0FBakIsS0FBMkIsQ0FBOUMsQ0FBVCxDQUFYO0FBQ0Esd0JBQUcsT0FBS3ZDLFlBQUwsQ0FBa0J3QyxJQUFsQixDQUF1QjtBQUFBLCtCQUFRekIsS0FBS2QsS0FBTCxJQUFZLGdCQUFNc0MsT0FBTixDQUFjRixJQUFkLENBQXBCO0FBQUEscUJBQXZCLENBQUgsRUFBbUU7QUFDL0Q7QUFDSDtBQUNELG1DQUFLbkIsT0FBTCxpREFBMkQsZ0JBQU1xQixPQUFOLENBQWNGLElBQWQsQ0FBM0QsRUFDS2pCLElBREwsQ0FDVSxlQUFPO0FBQ1RKLGdDQUFRQyxHQUFSLENBQVlNLEdBQVo7QUFDQSwrQkFBS3ZCLFlBQUwsQ0FBa0J5QyxJQUFsQixDQUF1QjtBQUNuQnhDLG1DQUFPLGdCQUFNc0MsT0FBTixDQUFjRixJQUFkLENBRFk7QUFFbkJuQyxrQ0FBTXFCLElBQUk1QixJQUFKLENBQVNvQztBQUZJLHlCQUF2QjtBQUlBLCtCQUFLNUIsV0FBTCxHQUFtQmtDLElBQW5CO0FBQ0EsK0JBQUt4QixNQUFMO0FBQ0gscUJBVEw7QUFVSCxpQkFmRCxFQWVHLElBZkg7QUFnQkg7QUF6QkssUzs7Ozs7aUNBUkQ7QUFBQTs7QUFDTCwyQkFBS0ssT0FBTCxDQUFhLDRDQUFiLEVBQ0tFLElBREwsQ0FDVSxlQUFPO0FBQ1QsdUJBQUt0QixTQUFMLEdBQWlCeUIsSUFBSTVCLElBQUosQ0FBUytDLFdBQTFCO0FBQ0EsdUJBQUsxQyxZQUFMLENBQWtCLENBQWxCLEVBQXFCRSxJQUFyQixHQUE0QnFCLElBQUk1QixJQUFKLENBQVNvQyxPQUFyQztBQUNBLHVCQUFLbEIsTUFBTDtBQUNILGFBTEw7QUFNSDs7OztFQTNEd0IsZUFBSzhCLEkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IG5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdidcbiAgICBpbXBvcnQgc2xpZGUgZnJvbSAnLi4vY29tcG9uZW50cy9zbGlkZSdcbiAgICBpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG5cbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdGhlYW1UeXBlOiBmYWxzZSxcbiAgICAgICAgICAgIHNsaWRlUG9wOiBmYWxzZSxcbiAgICAgICAgICAgIGltYWdlVXJsczogW10sXG4gICAgICAgICAgICBuZXdzTGlzdDogW10sXG4gICAgICAgICAgICBuZXdzVHlwZUxpc3Q6IFt7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfku4rml6XmlrDpl7snLFxuICAgICAgICAgICAgICAgIGxpc3Q6IFtdXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGN1cnJlbnREYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgdGhlYW1OZXdzOiB7fVxuICAgICAgICB9XG4gICAgICAgJHByb3BzID0ge1wic2xpZGVcIjp7XCJ4bWxuczp3eFwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIG5hdixcbiAgICAgICAgICAgIHNsaWRlXG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRzID0ge1xuICAgICAgICAgICAgc2hvd1NsaWRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVQb3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2VTbGlkZShpdGVtKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coMiwgaXRlbSlcbiAgICAgICAgICAgICAgICBpZihpdGVtKXtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5yZXF1ZXN0KGBodHRwOi8vbmV3cy1hdC56aGlodS5jb20vYXBpLzQvdGhlbWUvJHtpdGVtLmlkfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlYW1UeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZWFtTmV3cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmc6W3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiByZXMuZGF0YS5iYWNrZ3JvdW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6IHJlcy5kYXRhLmVkaXRvcnNbMF0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9ySW1nOiByZXMuZGF0YS5lZGl0b3JzWzBdLmF2YXRhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogcmVzLmRhdGEuc3Rvcmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICBpZihpdGVtKXtcbi8vICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxuLy8gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVQb3AgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHdlcHkucmVxdWVzdCgnaHR0cDovL25ld3MtYXQuemhpaHUuY29tL2FwaS80L25ld3MvbGF0ZXN0JylcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlVXJscyA9IHJlcy5kYXRhLnRvcF9zdG9yaWVzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld3NUeXBlTGlzdFswXS5saXN0ID0gcmVzLmRhdGEuc3RvcmllcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBnZXRNb3JlTGlzdCgpIHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldExpc3QoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coMTIzMTIzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRNb3JlKCkge1xuLy8gICAgICAgICAgICAgICAgdGhpcy5nZXRNb3JlTGlzdCgpO1xuICAgICAgICAgICAgICAgIHV0aWxzLmRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldERhdGUodGhpcy5jdXJyZW50RGF0ZS5nZXREYXRlKCktMSkpO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm5ld3NUeXBlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS50aXRsZT09dXRpbHMuZ2V0RGF0ZShkYXRlKSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdlcHkucmVxdWVzdChgaHR0cDovL25ld3MuYXQuemhpaHUuY29tL2FwaS80L25ld3MvYmVmb3JlLyR7dXRpbHMuZ2V0RGF0ZShkYXRlKX1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdzVHlwZUxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB1dGlscy5nZXREYXRlKGRhdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiByZXMuZGF0YS5zdG9yaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAzMDAwKSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=