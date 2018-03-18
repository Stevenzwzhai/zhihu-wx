'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    debounce: function debounce(fn, delay) {
        var ctx;
        var args;
        var timer = null;
        var later = function later() {
            fn.apply(ctx, args);
            // 当事件真正执行后，清空定时器
            timer = null;
        };
        return function () {
            ctx = this;
            args = arguments;
            // 当持续触发事件时，若发现事件触发的定时器已设置时，则清除之前的定时器
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            // 重新设置事件触发的定时器
            timer = setTimeout(later, delay);
        };
    },
    getDate: function getDate(dateObj) {
        return dateObj.getFullYear() + (dateObj.getMonth() < 9 ? '0' + (dateObj.getMonth() + 1) : dateObj.getMonth() + 1) + (dateObj.getDate() < 10 ? '0' + dateObj.Date() : dateObj.getDate());
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRlYm91bmNlIiwiZm4iLCJkZWxheSIsImN0eCIsImFyZ3MiLCJ0aW1lciIsImxhdGVyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZ2V0RGF0ZSIsImRhdGVPYmoiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiRGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQWU7QUFDWEEsWUFEVyxvQkFDRkMsRUFERSxFQUNFQyxLQURGLEVBQ1M7QUFDaEIsWUFBSUMsR0FBSjtBQUNBLFlBQUlDLElBQUo7QUFDQSxZQUFJQyxRQUFRLElBQVo7QUFDQSxZQUFJQyxRQUFRLFNBQVJBLEtBQVEsR0FBWTtBQUNwQkwsZUFBR00sS0FBSCxDQUFTSixHQUFULEVBQWNDLElBQWQ7QUFDQTtBQUNBQyxvQkFBUSxJQUFSO0FBQ0gsU0FKRDtBQUtBLGVBQU8sWUFBWTtBQUNmRixrQkFBTSxJQUFOO0FBQ0FDLG1CQUFPSSxTQUFQO0FBQ0E7QUFDQSxnQkFBSUgsS0FBSixFQUFXO0FBQ1BJLDZCQUFhSixLQUFiO0FBQ0FBLHdCQUFRLElBQVI7QUFDSDtBQUNEO0FBQ0FBLG9CQUFRSyxXQUFXSixLQUFYLEVBQWtCSixLQUFsQixDQUFSO0FBQ0gsU0FWRDtBQVdILEtBckJVO0FBc0JYUyxXQXRCVyxtQkFzQkhDLE9BdEJHLEVBc0JNO0FBQ2IsZUFBT0EsUUFBUUMsV0FBUixNQUF1QkQsUUFBUUUsUUFBUixLQUFtQixDQUFuQixHQUFzQixPQUFLRixRQUFRRSxRQUFSLEtBQW1CLENBQXhCLENBQXRCLEdBQW1ERixRQUFRRSxRQUFSLEtBQW1CLENBQTdGLEtBQWtHRixRQUFRRCxPQUFSLEtBQWtCLEVBQWxCLEdBQXNCLE1BQUlDLFFBQVFHLElBQVIsRUFBMUIsR0FBMENILFFBQVFELE9BQVIsRUFBNUksQ0FBUDtBQUNIO0FBeEJVLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgZGVib3VuY2UoZm4sIGRlbGF5KSB7XG4gICAgICAgIHZhciBjdHg7XG4gICAgICAgIHZhciBhcmdzO1xuICAgICAgICB2YXIgdGltZXIgPSBudWxsO1xuICAgICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmbi5hcHBseShjdHgsIGFyZ3MpO1xuICAgICAgICAgICAgLy8g5b2T5LqL5Lu255yf5q2j5omn6KGM5ZCO77yM5riF56m65a6a5pe25ZmoXG4gICAgICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGN0eCA9IHRoaXM7XG4gICAgICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgLy8g5b2T5oyB57ut6Kem5Y+R5LqL5Lu25pe277yM6Iul5Y+R546w5LqL5Lu26Kem5Y+R55qE5a6a5pe25Zmo5bey6K6+572u5pe277yM5YiZ5riF6Zmk5LmL5YmN55qE5a6a5pe25ZmoXG4gICAgICAgICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOmHjeaWsOiuvue9ruS6i+S7tuinpuWPkeeahOWumuaXtuWZqFxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGxhdGVyLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldERhdGUoZGF0ZU9iaikge1xuICAgICAgICByZXR1cm4gZGF0ZU9iai5nZXRGdWxsWWVhcigpKyhkYXRlT2JqLmdldE1vbnRoKCk8OT8oJzAnKyhkYXRlT2JqLmdldE1vbnRoKCkrMSkpOihkYXRlT2JqLmdldE1vbnRoKCkrMSkpKyhkYXRlT2JqLmdldERhdGUoKTwxMD8oJzAnK2RhdGVPYmouRGF0ZSgpKTpkYXRlT2JqLmdldERhdGUoKSlcbiAgICB9XG59XG4iXX0=