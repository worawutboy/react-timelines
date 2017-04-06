'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Sidebar = require('./components/Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Timeline = require('./components/Timeline');

var _Timeline2 = _interopRequireDefault(_Timeline);

var _time = require('./utils/time');

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function (_Component) {
  (0, _inherits3.default)(Container, _Component);

  function Container(props) {
    (0, _classCallCheck3.default)(this, Container);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Container.__proto__ || (0, _getPrototypeOf2.default)(Container)).call(this, props));

    _this.state = {
      time: (0, _time2.default)(props.time)
    };
    return _this;
  }

  (0, _createClass3.default)(Container, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.time !== this.props.time) {
        this.setState({ time: (0, _time2.default)(nextProps.time) });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('Re-rendering container...');
      return _react2.default.createElement(
        'div',
        { className: 'ln-timeline' },
        _react2.default.createElement(
          'div',
          { className: 'layout' },
          _react2.default.createElement(
            'div',
            { className: 'layout__side' },
            _react2.default.createElement(_Sidebar2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'layout__main' },
            _react2.default.createElement(_Timeline2.default, { time: this.state.time, tracks: this.props.tracks })
          )
        )
      );
    }
  }]);
  return Container;
}(_react.Component);

Container.propTypes = {
  time: _react.PropTypes.shape({}).isRequired,
  tracks: _react.PropTypes.arrayOf(_react.PropTypes.shape({})).isRequired
};

exports.default = Container;
module.exports = exports['default'];