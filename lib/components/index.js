'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.P = exports.Span = exports.Em = exports.Dd = exports.Dt = exports.Dl = exports.Li = exports.Ul = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.A = exports.Textarea = exports.Input = exports.Button = exports.Img = exports.Div = exports.GlobalColor = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t\t@media (max-width: ', 'px) {\n\t\t\t', '\n\t\t}\n\t'], ['\n\t\t@media (max-width: ', 'px) {\n\t\t\t', '\n\t\t}\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n    ', '\n    ', '\n    ', '\n    ', '\n     \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n   \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n  \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n        \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n        \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n\n\t\t', '\n    \n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', ' \n    ', '   \n        \n    ', ' \n    ', ' \n    \n    box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;\n   \n'], ['\n    ', '\n    ', '\n    ', '\n    ', '\n     \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n   \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n  \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n        \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n        \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n\n\t\t', '\n    \n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', ' \n    ', '   \n        \n    ', ' \n    ', ' \n    \n    box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;\n   \n']),
    _templateObject3 = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject4 = _taggedTemplateLiteral(['\n    object-fit:cover;\n    ', '\n    ', '\n\n    ', '\n    ', '\n\n     ', '\n    ', '\n\n    ', '\n    ', '\n\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n  \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    ', ';\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n     ', '\n'], ['\n    object-fit:cover;\n    ', '\n    ', '\n\n    ', '\n    ', '\n\n     ', '\n    ', '\n\n    ', '\n    ', '\n\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n  \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    ', ';\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n     ', '\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\ttransition: all 0.5s;\n    :hover {\n    \ttransition: all 0.5s;\n        background: ', '\n        ', '\n    }\n\n    ', '\n    ', '\n    ', '\n    ', '\n     \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n\n    ', '\n    ', '\n    ', '\n   \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n     ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    \n    ', '\n    ', ' \n    ', ' \n'], ['\n\ttransition: all 0.5s;\n    :hover {\n    \ttransition: all 0.5s;\n        background: ', '\n        ', '\n    }\n\n    ', '\n    ', '\n    ', '\n    ', '\n     \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n\n    ', '\n    ', '\n    ', '\n   \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n     ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    \n    ', '\n    ', ' \n    ', ' \n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    ::-webkit-input-placeholder {color:', ';', '}\n    :-moz-placeholder {color:', ';', '}\n    ::-moz-placeholder {color:', ';', '}\n    :-ms-input-placeholder {color:', ';', '}\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n  \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n     ', '\n'], ['\n    ::-webkit-input-placeholder {color:', ';', '}\n    :-moz-placeholder {color:', ';', '}\n    ::-moz-placeholder {color:', ';', '}\n    :-ms-input-placeholder {color:', ';', '}\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n  \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n     ', '\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n  \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n\t', '\n   \n    ', '\n    ', '\n    ', '\n    ', '\n     ', '\n'], ['\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n  \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n\t', '\n   \n    ', '\n    ', '\n    ', '\n    ', '\n     ', '\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n    ', '\n    ', '\n    ', '\n    ', '\n     \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n  \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n\n    ', '\n    ', '\n\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n   \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n     ', '\n    ', '\n\n    ', '\n    ', '\n'], ['\n    ', '\n    ', '\n    ', '\n    ', '\n     \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n  \n    ', '\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n    ', '\n\n    ', '\n    ', '\n\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n   \n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n     ', '\n    ', '\n\n    ', '\n    ', '\n']),
    _templateObject9 = _taggedTemplateLiteral(['', ' ', ' ', ' ', ''], ['', ' ', ' ', ' ', '']),
    _templateObject10 = _taggedTemplateLiteral([''], ['']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _color = require('../styles/color');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalColor = exports.GlobalColor = function GlobalColor() {
	var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    primary = _ref.primary,
	    primaryRGB = _ref.primaryRGB,
	    primaryG = _ref.primaryG,
	    success = _ref.success,
	    successRGB = _ref.successRGB,
	    successG = _ref.successG,
	    danger = _ref.danger,
	    dangerRGB = _ref.dangerRGB,
	    dangerG = _ref.dangerG,
	    warning = _ref.warning,
	    warningRGB = _ref.warningRGB,
	    warningG = _ref.warningG,
	    info = _ref.info,
	    infoRGB = _ref.infoRGB,
	    infoG = _ref.infoG;

	if (primary) {
		_color.DefaultColor.primary = primary;
	}
	if (primaryRGB) {
		_color.DefaultColor.primaryRGB = primaryRGB;
	}
	if (primaryG) {
		_color.DefaultColor.primaryG = primaryG;
	}
	if (success) {
		_color.DefaultColor.success = success;
	}
	if (successRGB) {
		_color.DefaultColor.successRGB = successRGB;
	}
	if (successG) {
		_color.DefaultColor.successG = successG;
	}
	if (danger) {
		_color.DefaultColor.danger = danger;
	}
	if (dangerRGB) {
		_color.DefaultColor.dangerRGB = dangerRGB;
	}
	if (dangerG) {
		_color.DefaultColor.dangerG = dangerG;
	}
	if (warning) {
		_color.DefaultColor.warning = warning;
	}
	if (warningRGB) {
		_color.DefaultColor.warningRGB = warningRGB;
	}
	if (warningG) {
		_color.DefaultColor.warningG = warningG;
	}
	if (info) {
		_color.DefaultColor.info = info;
	}
	if (infoRGB) {
		_color.DefaultColor.infoRGB = infoRGB;
	}
	if (infoG) {
		_color.DefaultColor.infoG = infoG;
	}
};

/*
 * 媒体查询
 * 分辨率: 0 ~ 767 手机 | 768 ~ 991 平板 | 992 ~ 1199 小屏幕电脑 | 1200 ~ * 大屏幕电脑
 * 名称: phone 手机 | tablet 平板 | desktop 小屏幕电脑
 * */
var sizes = { desktop: 1199, tablet: 991, phone: 767, miniPhone: 374 };
var media_container = Object.keys(sizes).reduce(function (acc, label) {
	acc[label] = function () {
		return (0, _styledComponents.css)(_templateObject, sizes[label], _styledComponents.css.apply(undefined, arguments));
	};
	return acc;
}, {});

/*
 * 媒体查询
 * 级别: maxDesktop,desktop tablet phone minPhone
 * 状态:
 * 限定分辨率显不显示，*b,显示 *n,隐藏
 * 继承显不显示，*ba，自己和以下显示，*na, 自己和以下隐藏
 * */
var media = function media(_ref2) {
	var mb = _ref2.mb,
	    mba = _ref2.mba,
	    mn = _ref2.mn,
	    mna = _ref2.mna,
	    db = _ref2.db,
	    dba = _ref2.dba,
	    dna = _ref2.dna,
	    dn = _ref2.dn,
	    tb = _ref2.tb,
	    tba = _ref2.tba,
	    tn = _ref2.tn,
	    tna = _ref2.tna,
	    pb = _ref2.pb,
	    pn = _ref2.pn,
	    pba = _ref2.pba,
	    pna = _ref2.pna,
	    mpb = _ref2.mpb,
	    mpn = _ref2.mpn;

	var css = void 0;
	if (mb && typeof mb === 'boolean') {
		//仅在大桌面显示
		css = '@media only screen and (max-width: 1199px) {display:none;}';
	}

	if (mn && typeof mn === 'boolean') {
		//仅在大桌面隐藏
		css = '@media only screen and (min-width:1200px)  {display:none;}';
	}

	if (mba && typeof mba === 'boolean') {
		//全显示
		css = '{display:block;}';
	}

	if (mna && typeof mna === 'boolean') {
		//全隐藏
		css = '{display:none;}';
	}

	//992 ~ 1199
	if (db && typeof db === 'boolean') {
		//仅在桌面显示
		css = '@media only screen and (max-width:991px) {display:none;}  @media only screen and (min-width: 1200px) {display:none;}';
	}

	if (dn && typeof dn === 'boolean') {
		//仅在桌面隐藏
		css = '@media screen and (min-width:992px) and (max-width:1199px) {display:none;}';
	}

	if (dba && typeof dba === 'boolean') {
		//仅在桌面及以下分辨率显示
		css = '@media only screen and (min-width:1200px)  {display:none;}';
	}

	if (dna && typeof dna === 'boolean') {
		//仅在桌面及以下分辨率隐藏
		css = '@media only screen and (max-width: 1199px) {display:none;}';
	}

	//768 ~ 991 平板
	if (tb && typeof tb === 'boolean') {
		//仅在平板显示
		css = '@media only screen and (max-width: 767px) {display:none;} @media only screen and (min-width: 992px) {display:none;} ';
	}

	if (tn && typeof tn === 'boolean') {
		//仅在平板隐藏
		css = '@media only screen and (min-width:768px) and (max-width:991px) {display:none;}';
	}

	if (tba && typeof tba === 'boolean') {
		//在平板及以下分辨率显示
		css = '@media only screen and (min-width: 992px)  {display:none;}';
	}

	if (tna && typeof tna === 'boolean') {
		//在平板及以下分辨率隐藏
		css = '@media only screen and (max-width:991px)  {display:none;}';
	}

	//375 ~ 767 手机
	if (pb && typeof pb === 'boolean') {
		//仅在大屏幕手机显示
		css = '@media only screen and (max-width: 374px) {display:none;} @media only screen and (min-width: 768px) {display:none;} ';
	}

	if (pn && typeof pn === 'boolean') {
		//仅在大屏幕手机隐藏
		css = '@media only screen and (min-width:375px) and (max-width:767px) {display:none;}';
	}

	if (pba && typeof pba === 'boolean') {
		//在大屏幕手机及以下分辨率显示
		css = '@media only screen and (min-width: 768px)  {display:none;}';
	}

	if (pna && typeof pna === 'boolean') {
		//在大屏幕手机及以下分辨率隐藏
		css = '@media only screen and (max-width:767px)  {display:none;}';
	}

	//0 ~ 374
	if (mpb && typeof mpb === 'boolean') {
		//仅在小屏幕手机显示
		css = '@media only screen and (min-width: 375px) {display:none;}';
	}
	if (mpn && typeof mpn === 'boolean') {
		//仅在小屏幕手机隐藏
		css = '@media only screen and (max-width: 374px) {display:none;}';
	}

	return css;
};

/*
 * 获得颜色
 * c,o,over:是否激活颜色
 * */
var getColor = function getColor(c, o, over) {
	switch (c) {
		case 'p':
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.primaryRGB + ',' + ('.' + o) + ')' : over ? _color.DefaultColor.primaryG : _color.DefaultColor.primary;
			break;
		case 's':
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.successRGB + ',' + ('.' + o) + ')' : over ? _color.DefaultColor.successG : _color.DefaultColor.success;
			break;
		case 'd':
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.dangerRGB + ',' + ('.' + o) + ')' : over ? _color.DefaultColor.dangerG : _color.DefaultColor.danger;
			break;
		case 'w':
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.warningRGB + ',' + ('.' + o) + ')' : over ? _color.DefaultColor.warningG : _color.DefaultColor.warning;
			break;
		case 'i':
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.infoRGB + ',' + ('.' + o) + ')' : over ? _color.DefaultColor.infoG : _color.DefaultColor.info;
			break;
		case 'ff':
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.ffRGB + ',' + ('.' + o) + ')' : over ? _color.DefaultColor.ffG : _color.DefaultColor.ff;
			break;
		case 'fe':
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.feRGB + ',' + ('.' + o) + ')' : over ? _color.DefaultColor.feG : _color.DefaultColor.fe;
			break;
		case 'fc':
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.fcRGB + ',' + ('.' + o) + ')' : over ? _color.DefaultColor.fcG : _color.DefaultColor.fc;
			break;
		case 'f9':
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.f9RGB + ',' + ('.' + o) + ')' : over ? _color.DefaultColor.f9G : _color.DefaultColor.f9;
			break;
		case 'f6':
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.f6RGB + ',' + ('.' + o) + ')' : over ? _color.DefaultColor.f6G : _color.DefaultColor.f6;
			break;
		case 'f3':
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.f3RGB + ',' + ('.' + o) + ')' : over ? _color.DefaultColor.f3G : _color.DefaultColor.f3;
			break;
		case 'f0':
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.f0RGB + ',' + ('.' + o) + ')' : over ? _color.DefaultColor.f0G : _color.DefaultColor.f0;
			break;
		case 'bg':
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.bgRGB + ',' + ('.' + o) + ')' : over ? _color.DefaultColor.bgG : _color.DefaultColor.bg;
			break;
		case 'bp':
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.bpRGB + ',' + ('.' + o) + ')' : over ? _color.DefaultColor.bpG : _color.DefaultColor.bp;
			break;
		case 'bs':
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.bsRGB + ',' + ('.' + o) + ')' : over ? _color.DefaultColor.bsG : _color.DefaultColor.bs;
			break;
		case 'bd':
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.bdRGB + ',' + ('.' + o) + ')' : over ? _color.DefaultColor.bdG : _color.DefaultColor.bd;
			break;
		case 'bw':
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.bwRGB + ',' + ('.' + o) + ')' : over ? _color.DefaultColor.bwG : _color.DefaultColor.bw;
			break;
		case 'bi':
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.biRGB + ',' + ('.' + o) + ')' : over ? _color.DefaultColor.biG : _color.DefaultColor.bi;
			break;
		default:
			c = o || o === 0 ? 'rgba(' + _color.DefaultColor.ffRGB + ',' + ('.' + o) + ')' : '';
			break;
	}
	return c;
};

/*
 * 获得渐变
 * */
var getGradient = function getGradient(bg) {
	var gs = '',
	    ge = '';
	switch (bg) {
		case 'p':
			gs = _color.DefaultColor.primary;
			ge = _color.DefaultColor.primaryG;
			break;
		case 's':
			gs = _color.DefaultColor.success;
			ge = _color.DefaultColor.successG;
			break;
		case 'd':
			gs = _color.DefaultColor.danger;
			ge = _color.DefaultColor.dangerG;
			break;
		case 'w':
			gs = _color.DefaultColor.warning;
			ge = _color.DefaultColor.warningG;
			break;
		case 'i':
			gs = _color.DefaultColor.info;
			ge = _color.DefaultColor.infoG;
			break;
		case 'ff':
			gs = _color.DefaultColor.ff;
			ge = _color.DefaultColor.ffG;
			break;
		case 'fe':
			gs = _color.DefaultColor.fe;
			ge = _color.DefaultColor.feG;
			break;
		case 'fc':
			gs = _color.DefaultColor.fc;
			ge = _color.DefaultColor.fcG;
			break;
		case 'f9':
			gs = _color.DefaultColor.f9;
			ge = _color.DefaultColor.f9G;
			break;
		case 'f6':
			gs = _color.DefaultColor.f6;
			ge = _color.DefaultColor.f6G;
			break;
		case 'f3':
			gs = _color.DefaultColor.f3;
			ge = _color.DefaultColor.f3G;
			break;
		default:
			gs = _color.DefaultColor.ff;
			ge = _color.DefaultColor.ffG;
			break;
	}
	return [gs, ge];
};

/*
 * 设置背景渐变
 * */
var setBackground = function setBackground(bg, g) {
	var _getGradient = getGradient(bg),
	    _getGradient2 = _slicedToArray(_getGradient, 2),
	    gs = _getGradient2[0],
	    ge = _getGradient2[1];

	return '\n        background-color: ' + gs + ';\n        background-image: -webkit-linear-gradient(' + g + 'deg, ' + gs + ' 0%, ' + ge + ' 100%);\n        background-image: -moz-linear-gradient(' + g + 'deg, ' + gs + ' 0%, ' + ge + ' 100%);\n        background-image: -o-linear-gradient(' + g + 'deg, ' + gs + ' 0%, ' + ge + ' 100%);\n        background-image: -ms-linear-gradient(' + g + 'deg, ' + gs + ' 0%, ' + ge + ' 100%);\n        background-image: linear-gradient(' + g + 'deg, ' + gs + ' 0%, ' + ge + ' 100%);\n    ';
};

/*
 *  flex-direction 布局
 *  r,rs,c,cs
 * */
var flexDirection = function flexDirection(param) {
	var flex = 'display:flex;';
	var direction = 'row';
	switch (param) {
		case 'r':
			direction = 'row';
			break;
		case 'rs':
			direction = 'row-reverse';
			break;
		case 'c':
			direction = 'column';
			break;
		case 'cs':
			direction = 'column-reverse';
			break;
		default:
			direction = 'row';
			break;
	}
	var value = '-webkit-flex-direction:' + direction + ';\n                            -webkit-flex-direction:' + direction + ';\n                            -ms-flex-direction:' + direction + ';\n                            flex-direction:' + direction + ';';
	return typeof param === 'string' ? flex + value : flex;
};

/*
 *  flex-wrap 布局
 *  w,ws
 * */
var flexWrap = function flexWrap(param) {
	var flex = 'display:flex;';
	var wrap = void 0;
	switch (param) {
		case 'w':
			wrap = 'wrap';
			break;
		case 'ws':
			wrap = 'wrap-reverse';
			break;
		default:
			wrap = 'nowrap';
			break;
	}
	var value = '-webkit-flex-wrap:' + wrap + ';\n                            -webkit-flex-wrap:' + wrap + ';\n                            -ms-flex-wrap:' + wrap + ';\n                            flex-wrap:' + wrap + ';';
	return typeof param === 'string' ? flex + value : flex;
};

/*
 *  justify-content 布局
 *  fs,fe,c,sb,sa
 * */
var justifyContent = function justifyContent(param) {
	var flex = 'display:flex;';
	var content = void 0;
	switch (param) {
		case 'fs':
			content = 'flex-start';
			break;
		case 'fe':
			content = 'flex-end';
			break;
		case 'c':
			content = 'center';
			break;
		case 'sb':
			content = 'space-between';
			break;
		case 'sa':
			content = 'space-around';
			break;
		default:
			content = 'flex-start';
			break;
	}
	var value = '-webkit-justify-content:' + content + ';\n                            -webkit-justify-content:' + content + ';\n                            -ms-justify-content:' + content + ';\n                            justify-content:' + content + ';';
	return typeof param === 'string' ? flex + value : flex;
};

/*
 *  align-items 布局
 *  fs,fe,c,b,s
 * */
var alignItems = function alignItems(param) {
	var flex = 'display:flex;';
	var content = void 0;
	switch (param) {
		case 'fs':
			content = 'flex-start';
			break;
		case 'fe':
			content = 'flex-end';
			break;
		case 'c':
			content = 'center';
			break;
		case 'b':
			content = 'baseline';
			break;
		case 's':
			content = 'stretch';
			break;
		default:
			content = 'flex-start';
			break;
	}
	var value = '-webkit-align-items:' + content + ';\n                            -webkit-align-items:' + content + ';\n                            -ms-align-items:' + content + ';\n                            align-items:' + content + ';';
	return typeof param === 'string' ? flex + value : flex;
};

/*
 *  align-content 布局
 *  fs,fe,c,sb,sa
 * */
var alignContent = function alignContent(param) {
	var flex = 'display:flex;';
	var content = void 0;
	switch (param) {
		case 'fs':
			content = 'flex-start';
			break;
		case 'fe':
			content = 'flex-end';
			break;
		case 'c':
			content = 'center';
			break;
		case 'sb':
			content = 'space-between';
			break;
		case 'sa':
			content = 'space-around';
			break;
		case 's':
			content = 'stretch';
			break;
		default:
			content = 'flex-start';
			break;
	}
	var value = '-webkit-align-content:' + content + ';\n                            -webkit-align-content:' + content + ';\n                            -ms-align-content:' + content + ';\n                            align-content:' + content + ';';
	return typeof param === 'string' ? flex + value : flex;
};

/*
 *  align-self 布局
 *  fs,fe,c,b,s
 * */
var alignSelf = function alignSelf(param) {
	var flex = 'display:flex;';
	var content = void 0;
	switch (param) {
		case 'fs':
			content = 'flex-start';
			break;
		case 'fe':
			content = 'flex-end';
			break;
		case 'c':
			content = 'center';
			break;
		case 'b':
			content = 'baseline';
			break;
		case 's':
			content = 'stretch';
			break;
		default:
			content = 'auto';
			break;
	}
	var value = '-webkit-align-self:' + content + ';\n                            -webkit-align-self:' + content + ';\n                            -ms-align-self:' + content + ';\n                            align-self:' + content + ';';
	return typeof param === 'string' ? flex + value : flex;
};

/*
 * 定义边框
 * @标签 b: 全边框
 * @标签 bt,br,bb,bl 定义上右下边框
 * @params: 顺序，size，type，color，opacity
 * */
var border = function border(_ref3) {
	var b = _ref3.b,
	    bt = _ref3.bt,
	    br = _ref3.br,
	    bb = _ref3.bb,
	    bl = _ref3.bl;

	var getBorder = function getBorder(params) {
		var _params = _slicedToArray(params, 4),
		    size = _params[0],
		    _params$ = _params[1],
		    type = _params$ === undefined ? 'solid' : _params$,
		    color = _params[2],
		    opacity = _params[3];

		if (type) {
			switch (type) {
				case 'd':
					type = 'dashed';
					break;
				default:
					type = 'solid';
					break;
			}
		}
		color = getColor(color, opacity);
		return size + 'px ' + type + ' ' + color;
	};

	var border = '';
	if (b && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') {
		border = 'border:' + getBorder(b) + ';';
	}
	if (bt && (typeof bt === 'undefined' ? 'undefined' : _typeof(bt)) === 'object') {
		border = border + ' border-top:' + getBorder(bt) + ';';
	}
	if (br && (typeof br === 'undefined' ? 'undefined' : _typeof(br)) === 'object') {
		border = border + ' border-right:' + getBorder(br) + ';';
	}
	if (bb && (typeof bb === 'undefined' ? 'undefined' : _typeof(bb)) === 'object') {
		border = border + ' border-bottom:' + getBorder(bb) + ';';
	}
	if (bl && (typeof bl === 'undefined' ? 'undefined' : _typeof(bl)) === 'object') {
		border = border + ' border-left:' + getBorder(bl) + ';';
	}
	return border;
};

/*
 * 定义内间距
 * 标准: p,pt,pr,pb,pl
 * 大屏幕: dp,dpt,dpr,dpb,dpl
 * 平板:tp,tpt,tpr,tpb,tpl
 * 手机：pp,ppt,ppr,ppb,ppl
 * */
var padding = function padding(_ref4) {
	var p = _ref4.p,
	    pt = _ref4.pt,
	    pr = _ref4.pr,
	    pb = _ref4.pb,
	    pl = _ref4.pl,
	    dp = _ref4.dp,
	    dpt = _ref4.dpt,
	    dpr = _ref4.dpr,
	    dpb = _ref4.dpb,
	    dpl = _ref4.dpl,
	    tp = _ref4.tp,
	    tpt = _ref4.tpt,
	    tpr = _ref4.tpr,
	    tpb = _ref4.tpb,
	    tpl = _ref4.tpl,
	    pp = _ref4.pp,
	    ppt = _ref4.ppt,
	    ppr = _ref4.ppr,
	    ppb = _ref4.ppb,
	    ppl = _ref4.ppl;

	var combination = '';
	if (p || pt || pr || pb || pl || p === 0 || pt === 0 || pr === 0 || pb === 0 || pl === 0) {
		var _padding = '';
		if (typeof p === 'number' && (p || p === 0)) {
			_padding = 'padding:' + p + 'px;';
		} else {
			if (typeof pt === 'number' && (pt || pt === 0)) {
				_padding += 'padding-top:' + pt + 'px;';
			}
			if (typeof pr === 'number' && (pr || pr === 0)) {
				_padding += 'padding-right:' + pr + 'px;';
			}
			if (typeof pb === 'number' && (pb || pb === 0)) {
				_padding += 'padding-bottom:' + pb + 'px;';
			}
			if (typeof pl === 'number' && (pl || pl === 0)) {
				_padding += 'padding-left:' + pl + 'px;';
			}
		}
		combination += _padding;
	}

	if (dp || dpt || dpr || dpb || dpl || dp === 0 || dpt === 0 || dpr === 0 || dpb === 0 || dpl === 0) {
		var _css = '';
		if (typeof dp === 'number' && (dp || dp === 0)) {
			_css = 'padding:' + dp + 'px;';
		} else {
			if (typeof dpt === 'number' && (dpt || dpt === 0)) {
				_css += 'padding-top:' + dpt + 'px;';
			}
			if (typeof dpr === 'number' && (dpr || dpr === 0)) {
				_css += 'padding-right:' + dpr + 'px;';
			}
			if (typeof dpb === 'number' && (dpb || dpb === 0)) {
				_css += 'padding-bottom:' + dpb + 'px;';
			}
			if (typeof dpl === 'number' && (dpl || dpl === 0)) {
				_css += 'padding-left:' + dpl + 'px;';
			}
		}
		combination += '@media (max-width: 1199px){' + _css + '}';
	}

	if (tp || tpt || tpr || tpb || tpl || tp === 0 || tpt === 0 || tpr === 0 || tpb === 0 || tpl === 0) {
		var _css2 = '';
		if (typeof tp === 'number' && (tp || tp === 0)) {
			_css2 = 'padding:' + tp + 'px;';
		} else {
			if (typeof tpt === 'number' && (tpt || tpt === 0)) {
				_css2 += 'padding-top:' + tpt + 'px;';
			}
			if (typeof tpr === 'number' && (tpr || tpr === 0)) {
				_css2 += 'padding-right:' + tpr + 'px;';
			}
			if (typeof tpb === 'number' && (tpb || tpb === 0)) {
				_css2 += 'padding-bottom:' + tpb + 'px;';
			}
			if (typeof tpl === 'number' && (tpl || tpl === 0)) {
				_css2 += 'padding-left:' + tpl + 'px;';
			}
		}
		combination += '@media (max-width: 991px){' + _css2 + '}';
	}

	if (pp || ppt || ppr || ppb || ppl || pp === 0 || ppt === 0 || ppr === 0 || ppb === 0 || ppl === 0) {
		var _css3 = '';
		if (typeof pp === 'number' && (pp || pp === 0)) {
			_css3 = 'padding:' + pp + 'px;';
		} else {
			if (typeof ppt === 'number' && (ppt || ppt === 0)) {
				_css3 += 'padding-top:' + ppt + 'px;';
			}
			if (typeof ppr === 'number' && (ppr || ppr === 0)) {
				_css3 += 'padding-right:' + ppr + 'px;';
			}
			if (typeof ppb === 'number' && (ppb || ppb === 0)) {
				_css3 += 'padding-bottom:' + ppb + 'px;';
			}
			if (typeof ppl === 'number' && (ppl || ppl === 0)) {
				_css3 += 'padding-left:' + ppl + 'px;';
			}
		}
		combination += '@media (max-width: 767px){' + _css3 + '}';
	}
	return combination;
};

/*
 * 定义外间距
 * 标准: m,mt,mr,mb,ml,
 * 大屏幕: m,dmt,dmr,dmb,dml,
 * 平板:tm,tmt,tmr,tmb,tml,
 * 手机：pm,pmt,pmr,pmb,pml
 * */
var margin = function margin(_ref5) {
	var m = _ref5.m,
	    mt = _ref5.mt,
	    mr = _ref5.mr,
	    mb = _ref5.mb,
	    ml = _ref5.ml,
	    dm = _ref5.dm,
	    dmt = _ref5.dmt,
	    dmr = _ref5.dmr,
	    dmb = _ref5.dmb,
	    dml = _ref5.dml,
	    tm = _ref5.tm,
	    tmt = _ref5.tmt,
	    tmr = _ref5.tmr,
	    tmb = _ref5.tmb,
	    tml = _ref5.tml,
	    pm = _ref5.pm,
	    pmt = _ref5.pmt,
	    pmr = _ref5.pmr,
	    pmb = _ref5.pmb,
	    pml = _ref5.pml;

	var combination = '';
	if (dm || dmt || dmr || dmb || dml || dm === 0 || dmt === 0 || dmr === 0 || dmb === 0 || dml === 0) {
		var _css4 = '';
		if (typeof dm === 'number' && (dm || dm === 0)) {
			_css4 = 'margin:' + dm + 'px;';
		} else {
			if (typeof dmt === 'number' && (dmt || dmt === 0)) {
				_css4 += 'margin-top:' + dmt + 'px;';
			}
			if (typeof dmr === 'number' && (dmr || dmr === 0)) {
				_css4 += 'margin-right:' + dmr + 'px;';
			}
			if (typeof dmb === 'number' && (dmb || dmb === 0)) {
				_css4 += 'margin-bottom:' + dmb + 'px;';
			}
			if (typeof dml === 'number' && (dml || dml === 0)) {
				_css4 += 'margin-left:' + dml + 'px;';
			}
		}
		combination += '@media (max-width: 1199px){' + _css4 + '}';
	}
	if (tm || tmt || tmr || tmb || tml || tm === 0 || tmt === 0 || tmr === 0 || tmb === 0 || tml === 0) {
		var _css5 = '';
		if (typeof tm === 'number' && (tm || tm === 0)) {
			_css5 = 'margin:' + tm + 'px;';
		} else {
			if (typeof tmt === 'number' && (tmt || tmt === 0)) {
				_css5 += 'margin-top:' + tmt + 'px;';
			}
			if (typeof tmr === 'number' && (tmr || tmr === 0)) {
				_css5 += 'margin-right:' + tmr + 'px;';
			}
			if (typeof tmb === 'number' && (tmb || tmb === 0)) {
				_css5 += 'margin-bottom:' + tmb + 'px;';
			}
			if (typeof tml === 'number' && (tml || tml === 0)) {
				_css5 += 'margin-left:' + tml + 'px;';
			}
		}
		combination += '@media (max-width:991px){' + _css5 + '}';
	}
	if (pm || pmt || pmr || pmb || pml || pm === 0 || pmt === 0 || pmr === 0 || pmb === 0 || pml === 0) {
		var _css6 = '';
		if (typeof pm === 'number' && (pm || pm === 0)) {
			_css6 = 'margin:' + pm + 'px;';
		} else {
			if (typeof pmt === 'number' && (pmt || pmt === 0)) {
				_css6 += 'margin-top:' + pmt + 'px;';
			}
			if (typeof pmr === 'number' && (pmr || pmr === 0)) {
				_css6 += 'margin-right:' + pmr + 'px;';
			}
			if (typeof pmb === 'number' && (pmb || pmb === 0)) {
				_css6 += 'margin-bottom:' + pmb + 'px;';
			}
			if (typeof pml === 'number' && (pml || pml === 0)) {
				_css6 += 'margin-left:' + pml + 'px;';
			}
		}
		combination += '@media (max-width:767px){' + _css6 + '}';
	}
	if (m || mt || mr || mb || ml || m === 0 || mt === 0 || mr === 0 || mb === 0 || ml === 0) {
		var _margin = '';
		if (typeof m === 'number' && (m || m === 0)) {
			_margin = 'margin:' + m + 'px;';
		} else {
			if (typeof mt === 'number' && (mt || mt === 0)) {
				_margin += 'margin-top:' + mt + 'px;';
			}
			if (typeof mr === 'number' && (mr || mr === 0)) {
				_margin += 'margin-right:' + mr + 'px;';
			}
			if (typeof mb === 'number' && (mb || mb === 0)) {
				_margin += 'margin-bottom:' + mb + 'px;';
			}
			if (typeof ml === 'number' && (ml || ml === 0)) {
				_margin += 'margin-left:' + ml + 'px;';
			}
		}
		combination += _margin;
	}
	return combination;
};

/*
 * 定义圆角
 * @param: number,全部。[1,1,1,1]，指定四个角,上右下左
 */
var rounded = function rounded(_ref6) {
	var r = _ref6.r;

	var rounded = '';
	if (r) {
		if (typeof r === 'number') {
			rounded = r + 'px';
		}
		if ((typeof r === 'undefined' ? 'undefined' : _typeof(r)) === 'object') {
			r.forEach(function (i) {
				return rounded = rounded + (i + 'px ');
			});
		}
	}
	return 'border-radius:' + (r === 0 ? '0' : rounded) + ';';
};

/*
 * 定义列的百分比
 * @param: column, 1~10
 * */
var column = function column(_ref7) {
	var col = _ref7.col;

	var percentage = void 0;
	switch (Number(col)) {
		case 1:
			percentage = 8.33333333;
			break;
		case 2:
			percentage = 16.66666667;
			break;
		case 3:
			percentage = 25;
			break;
		case 4:
			percentage = 33.33333333;
			break;
		case 5:
			percentage = 41.66666667;
			break;
		case 6:
			percentage = 50;
			break;
		case 7:
			percentage = 58.33333333;
			break;
		case 8:
			percentage = 66.66666667;
			break;
		case 9:
			percentage = 75;
			break;
		case 10:
			percentage = 83.33333333;
			break;
		case 11:
			percentage = 91.66666667;
			break;
		case 12:
			percentage = 100;
			break;
		default:
			percentage = 100;
			break;
	}
	return 'width:' + percentage + '%;';
};

/*
 * 透明度
 * @param: o, number
 * */
var opacity = function opacity(_ref8) {
	var o = _ref8.o;

	var opacity = '';
	if (o === 0) {
		opacity = 'opacity:0;';
	}
	if (o && typeof o === 'number') {
		opacity = o > 9 ? 'opacity:1;' : 'opacity:.' + o + ';';
		Button;
	}

	return opacity;
};

/**
 * 浮动布局
 * position
 * 标准: _pr,_pa,_pf,_pi,_z,_t,_r,_b,_l
 * 大屏幕: _dpr,_dpa,_dpf,_dpi,_dz,_dt,_dr,_db,_dl
 * 平板:_tpr,_tpa,_tpf,_tpi,_tz,_tt,_tr,_tb,_tl
 * 手机：_ppr,_ppa,_ppf,_ppi,_pz,_pt,_pr,_pb,_pl
 * */

var position = function position(props) {
	var _dpr = props._dpr,
	    _dpa = props._dpa,
	    _dpf = props._dpf,
	    _dpi = props._dpi,
	    _dz = props._dz,
	    _dt = props._dt,
	    _dr = props._dr,
	    _db = props._db,
	    _dl = props._dl,
	    _tpr = props._tpr,
	    _tpa = props._tpa,
	    _tpf = props._tpf,
	    _tpi = props._tpi,
	    _tz = props._tz,
	    _tt = props._tt,
	    _tr = props._tr,
	    _tb = props._tb,
	    _tl = props._tl;
	var _ppr = props._ppr,
	    _ppa = props._ppa,
	    _ppf = props._ppf,
	    _ppi = props._ppi,
	    _pz = props._pz,
	    _pt = props._pt,
	    _pb = props._pb,
	    _pl = props._pl,
	    _pr = props._pr,
	    _pa = props._pa,
	    _pf = props._pf,
	    _pi = props._pi,
	    _z = props._z,
	    _t = props._t,
	    _r = props._r,
	    _b = props._b,
	    _l = props._l,
	    nwp = props.nwp;

	var combination = '';
	if (_dpr || _dpa || _dpf || _dpi) {
		var _css7 = '';
		if (_dpr && typeof _dpr === 'boolean') {
			_css7 = 'position:relative;';
		}
		if (_dpa && typeof _dpa === 'boolean') {
			_css7 = 'position:absolute;';
		}
		if (_dpf && typeof _dpf === 'boolean') {
			_css7 = 'position:fixed;';
		}
		if (_dpi && typeof _dpi === 'boolean') {
			_css7 = 'position:inherit;';
		}
		if (_dz && typeof _dz === 'number' || _dz === 0) {
			_css7 += 'z-index:' + _dz + ';';
		}
		if (_dt && typeof _dt === 'number' || _dt === 0) {
			_css7 += 'top:' + _dt + 'px;';
		}
		if (_dr && typeof _dr === 'number' || _dr === 0) {
			_css7 += 'right:' + _dr + 'px;';
		}
		if (_db && typeof _db === 'number' || _db === 0) {
			_css7 += 'bottom:' + _db + 'px;';
		}
		if (_dl && typeof _dl === 'number' || _dl === 0) {
			_css7 += 'left:' + _dl + 'px;';
		}
		combination += '@media (max-width: 1199px){' + _css7 + '}';
	}
	if (_tpr || _tpa || _tpf || _tpi) {
		var _css8 = '';
		if (_tpr && typeof _tpr === 'boolean') {
			_css8 = 'position:relative;';
		}
		if (_tpa && typeof _tpa === 'boolean') {
			_css8 = 'position:absolute;';
		}
		if (_tpf && typeof _tpf === 'boolean') {
			_css8 = 'position:fixed;';
		}
		if (_tpi && typeof _tpi === 'boolean') {
			_css8 = 'position:inherit;';
		}
		if (_tz && typeof _tz === 'number' || _tz === 0) {
			_css8 += 'z-index:' + _tz + ';';
		}
		if (_tt && typeof _tt === 'number' || _tt === 0) {
			_css8 += 'top:' + _tt + 'px;';
		}
		if (_tr && typeof _tr === 'number' || _tr === 0) {
			_css8 += 'right:' + _tr + 'px;';
		}
		if (_tb && typeof _tb === 'number' || _tb === 0) {
			_css8 += 'bottom:' + _tb + 'px;';
		}
		if (_tl && typeof _tl === 'number' || _tl === 0) {
			_css8 += 'left:' + _tl + 'px;';
		}
		combination += '@media (max-width: 991px){' + _css8 + '}';
	}
	if (_ppr || _ppa || _ppf || _ppi) {
		var _css9 = '';
		if (_ppr && typeof _ppr === 'boolean') {
			_css9 = 'position:relative;';
		}
		if (_ppa && typeof _ppa === 'boolean') {
			_css9 = 'position:absolute;';
		}
		if (_ppf && typeof _ppf === 'boolean') {
			_css9 = 'position:fixed;';
		}
		if (_ppi && typeof _ppi === 'boolean') {
			_css9 = 'position:inherit;';
		}
		if (_pz && typeof _pz === 'number' || _pz === 0) {
			_css9 += 'z-index:' + _pz + ';';
		}
		if (_pt && typeof _pt === 'number' || _pt === 0) {
			_css9 += 'top:' + _pt + 'px;';
		}
		if (_pr && typeof _pr === 'number' || _pr === 0) {
			_css9 += 'right:' + _pr + 'px;';
		}
		if (_pb && typeof _pb === 'number' || _pb === 0) {
			_css9 += 'bottom:' + _pb + 'px;';
		}
		if (_pl && typeof _pl === 'number' || _pl === 0) {
			_css9 += 'left:' + _pl + 'px;';
		}
		combination += '@media (max-width: 767px){' + _css9 + '}';
	}
	if (_pr || _pa || _pf || _pi) {
		var _css10 = '';
		if (_pr && typeof _pr === 'boolean') {
			_css10 = 'position:relative;';
		}
		if (_pa && typeof _pa === 'boolean') {
			_css10 = 'position:absolute;' + (nwp ? '' : 'width:100%;');
		}
		if (_pf && typeof _pf === 'boolean') {
			_css10 = 'position:fixed;' + (nwp ? '' : 'width:100%;');
		}
		if (_pi && typeof _pi === 'boolean') {
			_css10 = 'position:inherit;';
		}
		if (_z && typeof _z === 'number' || _z === 0) {
			_css10 += 'z-index:' + _z + ';';
		}
		if (_t && typeof _t === 'number' || _t === 0) {
			_css10 += 'top:' + _t + 'px;';
		}
		if (_r && typeof _r === 'number' || _r === 0) {
			_css10 += 'right:' + _r + 'px;';
		}
		if (_b && typeof _b === 'number' || _b === 0) {
			_css10 += 'bottom:' + _b + 'px;';
		}
		if (_l && typeof _l === 'number' || _l === 0) {
			_css10 += 'left:' + _l + 'px;';
		}
		combination += _css10;
	}
	return combination;
};

/*
 * 改造div
 * 布局属性 flex-direction,flex-wrap,justify-content,align-items,align-content,align-self,order
 * 常规属性 width,height,color,font-size,line-height,background,border|border-x,margin,padding,l,b
 * 定位属性 position,z-index,top,right,bottom,left, pa|pf 默认有 100%, nwp 可去除
 * 内容对齐 text-align
 * 超出隐藏 oh,
 * 鼠标指针 cp: 手形,cc:十字,
 * 最大最小宽高 xw,nw,xwp,nwp,xh,nh,xhp,nhp
 * 整体透明 o
 * 旋转 tr
 * */

var Div = exports.Div = _styledComponents2.default.div(_templateObject2, function (props) {
	return props['fd'] && flexDirection(props['fd']);
}, function (props) {
	return props['dfd'] && media_container.desktop(_templateObject3, flexDirection(props['dfd']));
}, function (props) {
	return props['tfd'] && media_container.tablet(_templateObject3, flexDirection(props['tfd']));
}, function (props) {
	return props['pfd'] && media_container.phone(_templateObject3, flexDirection(props['pfd']));
}, function (props) {
	return props['fw'] && flexWrap(props['fw']);
}, function (props) {
	return props['dfw'] && media_container.desktop(_templateObject3, flexWrap(props['dfw']));
}, function (props) {
	return props['tfw'] && media_container.tablet(_templateObject3, flexWrap(props['tfw']));
}, function (props) {
	return props['pfw'] && media_container.phone(_templateObject3, flexWrap(props['pfw']));
}, function (props) {
	return props['jc'] && justifyContent(props['jc']);
}, function (props) {
	return props['djc'] && media_container.desktop(_templateObject3, justifyContent(props['djc']));
}, function (props) {
	return props['tjc'] && media_container.tablet(_templateObject3, justifyContent(props['tjc']));
}, function (props) {
	return props['pjc'] && media_container.phone(_templateObject3, justifyContent(props['pjc']));
}, function (props) {
	return props['ai'] && alignItems(props['ai']);
}, function (props) {
	return props['dai'] && media_container.desktop(_templateObject3, alignItems(props['dai']));
}, function (props) {
	return props['tai'] && media_container.tablet(_templateObject3, alignItems(props['tai']));
}, function (props) {
	return props['pai'] && media_container.phone(_templateObject3, alignItems(props['pai']));
}, function (props) {
	return props['ac'] && alignContent(props['ac']);
}, function (props) {
	return props['as'] && alignSelf(props['as']);
}, function (props) {
	return props['f'] && typeof props['f'] === 'number' && 'flex:' + props['f'] + ';';
}, function (props) {
	return props['df'] && media_container.desktop(_templateObject3, flexDirection(props['df']));
}, function (props) {
	return props['tf'] && media_container.tablet(_templateObject3, flexDirection(props['tf']));
}, function (props) {
	return props['pf'] && media_container.phone(_templateObject3, flexDirection(props['pf']));
}, function (props) {
	return props['_o'] && typeof props['_o'] === 'number' && 'order:' + props['_o'] + ';';
}, function (props) {
	return props['w'] && typeof props['w'] === 'number' && 'width:' + props['w'] + 'px;';
}, function (props) {
	return props['dw'] && media_container.desktop(_templateObject3, 'width:' + props['dw'] + 'px;');
}, function (props) {
	return props['tw'] && media_container.tablet(_templateObject3, 'width:' + props['tw'] + 'px;');
}, function (props) {
	return props['pw'] && media_container.phone(_templateObject3, 'width:' + props['pw'] + 'px;');
}, function (props) {
	return props['wp'] && typeof props['wp'] === 'number' && 'width:' + props['wp'] + '%;';
}, function (props) {
	return props['dwp'] && media_container.desktop(_templateObject3, 'width:' + props['dwp'] + '%;');
}, function (props) {
	return props['twp'] && media_container.tablet(_templateObject3, 'width:' + props['twp'] + '%;');
}, function (props) {
	return props['pwp'] && media_container.phone(_templateObject3, 'width:' + props['pwp'] + '%;');
}, function (props) {
	return props['h'] && typeof props['h'] === 'number' && 'height:' + props['h'] + 'px;';
}, function (props) {
	return props['dh'] && media_container.desktop(_templateObject3, 'height:' + props['dh'] + 'px;');
}, function (props) {
	return props['th'] && media_container.tablet(_templateObject3, 'height:' + props['th'] + 'px;');
}, function (props) {
	return props['ph'] && media_container.phone(_templateObject3, 'height:' + props['ph'] + 'px;');
}, function (props) {
	return props['hp'] && typeof props['hp'] === 'number' && 'height:' + props['hp'] + '%;';
}, function (props) {
	return props['dhp'] && media_container.desktop(_templateObject3, 'height:' + props['dhp'] + '%;');
}, function (props) {
	return props['thp'] && media_container.tablet(_templateObject3, 'height:' + props['thp'] + '%;');
}, function (props) {
	return props['php'] && media_container.phone(_templateObject3, 'height:' + props['php'] + '%;');
}, function (props) {
	return props['c'] && 'color:' + getColor(props['c'], props['o']) + ';';
}, function (props) {
	return props['fs'] && typeof props['fs'] === 'number' && 'font-size:' + props['fs'] + 'px;';
}, function (props) {
	return props['dfs'] && media_container.desktop(_templateObject3, 'font-size:' + props['dfs'] + 'px;');
}, function (props) {
	return props['tfs'] && media_container.tablet(_templateObject3, 'font-size:' + props['tfs'] + 'px;');
}, function (props) {
	return props['pfs'] && media_container.phone(_templateObject3, 'font-size:' + props['pfs'] + 'px;');
}, function (props) {
	return props['mpfs'] && media_container.miniPhone(_templateObject3, 'font-size:' + props['mpfs'] + 'px;');
}, function (props) {
	return props['lh'] && typeof props['lh'] === 'number' && 'line-height:' + props['lh'] + 'px;';
}, function (props) {
	return props['dlh'] && media_container.desktop(_templateObject3, 'line-height:' + props['dlh'] + 'px;');
}, function (props) {
	return props['tlh'] && media_container.tablet(_templateObject3, 'line-height:' + props['tlh'] + 'px;');
}, function (props) {
	return props['plh'] && media_container.phone(_templateObject3, 'line-height:' + props['plh'] + 'px;');
}, function (props) {
	return props['l'] && typeof props['l'] === 'boolean' && 'font-weight:300;';
}, function (props) {
	return props['b'] && typeof props['b'] === 'boolean' && 'font-weight:600;';
}, function (props) {
	return props['bg'] && typeof props['bg'] === 'string' && props['g'] ? setBackground(props['bg'], props['g']) : 'background:' + getColor(props['bg'], props['bgo']) + ';';
}, function (props) {
	return props['dbg'] && media_container.desktop(_templateObject3, props['g'] ? setBackground(props['dbg'], props['g']) : 'background:' + getColor(props['dbg'], props['dbgo']) + ';');
}, function (props) {
	return props['tbg'] && media_container.tablet(_templateObject3, props['g'] ? setBackground(props['tbg'], props['g']) : 'background:' + getColor(props['tbg'], props['tbgo']) + ';');
}, function (props) {
	return props['pbg'] && media_container.phone(_templateObject3, props['g'] ? setBackground(props['pbg'], props['g']) : 'background:' + getColor(props['pbg'], props['pbgo']) + ';');
}, function (props) {
	return props['br'] && typeof props['br'] === 'number' && 'border-radius:' + props['br'] + 'px;';
}, function (props) {
	return border(props);
}, function (props) {
	return rounded(props);
}, function (props) {
	return padding(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return media(props);
}, function (props) {
	return opacity(props);
}, function (props) {
	return props['col'] && column(props);
}, function (props) {
	return props['dcol'] && media_container.desktop(_templateObject3, column(props['dcol']));
}, function (props) {
	return props['tcol'] && media_container.tablet(_templateObject3, column(props['tcol']));
}, function (props) {
	return props['pcol'] && media_container.phone(_templateObject3, column(props['pcol']));
}, function (props) {
	return position(props);
}, function (props) {
	return props['tl'] && typeof props['tl'] === 'boolean' && 'text-align:left;';
}, function (props) {
	return props['tc'] && typeof props['tc'] === 'boolean' && 'text-align:center;';
}, function (props) {
	return props['tr'] && typeof props['tr'] === 'boolean' && 'text-align:right;';
}, function (props) {
	return props['oh'] && typeof props['oh'] === 'boolean' && 'overflow:hidden;';
}, function (props) {
	return props['oa'] && typeof props['oa'] === 'boolean' && 'overflow:auto;';
}, function (props) {
	return props['oy'] && typeof props['oy'] === 'boolean' && 'overflow-x:auto;overflow-y:hidden;';
}, function (props) {
	return props['ox'] && typeof props['ox'] === 'boolean' && 'overflow-y:auto;overflow-x:hidden;';
}, function (props) {
	return props['cp'] && typeof props['cp'] === 'boolean' && 'cursor:pointer;';
}, function (props) {
	return props['cc'] && typeof props['cc'] === 'boolean' && 'cursor:crosshair;';
}, function (props) {
	return props['xw'] && typeof props['xw'] === 'number' && 'max-width:' + props['xw'] + 'px;';
}, function (props) {
	return props['nw'] && typeof props['nw'] === 'number' && 'min-width:' + props['nw'] + 'px;';
}, function (props) {
	return props['xwp'] && typeof props['xwp'] === 'number' && 'max-width:' + props['xwp'] + '%;';
}, function (props) {
	return props['nwp'] && typeof props['nwp'] === 'number' && 'min-width:' + props['nwp'] + '%;';
}, function (props) {
	return props['xh'] && typeof props['xh'] === 'number' && 'max-height:' + props['xh'] + 'px;';
}, function (props) {
	return props['nh'] && typeof props['nh'] === 'number' && 'min-height:' + props['nh'] + 'px;';
}, function (props) {
	return props['xhp'] && typeof props['xhp'] === 'number' && 'max-height:' + props['xhp'] + '%;';
}, function (props) {
	return props['nhp'] && typeof props['nhp'] === 'number' && 'min-height:' + props['nhp'] + '%;';
}, function (props) {
	return props['ns'] && typeof props['ns'] === 'boolean' && 'user-select: none;';
}, function (props) {
	return props['bs'] && _typeof(props['bs']) === 'object' && 'box-shadow:' + props['bs'][0] + 'px ' + props['bs'][1] + 'px ' + props['bs'][2] + 'px rgba(0,0,0,' + props['bs'][3] + ');';
}, function (props) {
	return props['tr'] && typeof props['tr'] === 'number' && 'transform:rotate(' + props['tr'] + 'deg);';
}, function (props) {
	return props['ch'] && '\n        :hover{color:' + getColor(props['ch'], props['cho'], true) + ';transition: all 0.5s;}\n    ';
}, function (props) {
	return props['bh'] && '\n        :hover{background:' + getColor(props['bh'], props['bho']) + ';transition: all 0.5s;}\n    ';
});

/*
 * 改造img
 * 属性 width,height,border-radius,border,padding,margin
 * */
var Img = exports.Img = _styledComponents2.default.img(_templateObject4, function (props) {
	return props['xw'] && typeof props['xw'] === 'number' && 'max-width:' + props['xw'] + 'px;';
}, function (props) {
	return props['nw'] && typeof props['nw'] === 'number' && 'min-width:' + props['nw'] + 'px;';
}, function (props) {
	return props['xwp'] && typeof props['xwp'] === 'number' && 'max-width:' + props['xwp'] + '%;';
}, function (props) {
	return props['nwp'] && typeof props['nwp'] === 'number' && 'min-width:' + props['nwp'] + '%;';
}, function (props) {
	return props['xh'] && typeof props['xh'] === 'number' && 'max-height:' + props['xh'] + 'px;';
}, function (props) {
	return props['nh'] && typeof props['nh'] === 'number' && 'min-height:' + props['nh'] + 'px;';
}, function (props) {
	return props['xhp'] && typeof props['xhp'] === 'number' && 'max-height:' + props['xhp'] + '%;';
}, function (props) {
	return props['nhp'] && typeof props['nhp'] === 'number' && 'min-height:' + props['nhp'] + '%;';
}, function (props) {
	return props['w'] && typeof props['w'] === 'number' && 'width:' + props['w'] + 'px;';
}, function (props) {
	return props['dw'] && media_container.desktop(_templateObject3, 'width:' + props['dw'] + 'px;');
}, function (props) {
	return props['tw'] && media_container.tablet(_templateObject3, 'width:' + props['tw'] + 'px;');
}, function (props) {
	return props['pw'] && media_container.phone(_templateObject3, 'width:' + props['pw'] + 'px;');
}, function (props) {
	return props['wp'] && typeof props['wp'] === 'number' && 'width:' + props['wp'] + '%;';
}, function (props) {
	return props['wwp'] && media_container.desktop(_templateObject3, 'width:' + props['dwp'] + '%;');
}, function (props) {
	return props['twp'] && media_container.tablet(_templateObject3, 'width:' + props['twp'] + '%;');
}, function (props) {
	return props['pwp'] && media_container.phone(_templateObject3, 'width:' + props['pwp'] + '%;');
}, function (props) {
	return props['h'] && typeof props['h'] === 'number' && 'height:' + props['h'] + 'px;';
}, function (props) {
	return props['dh'] && media_container.desktop(_templateObject3, 'height:' + props['dh'] + 'px;');
}, function (props) {
	return props['th'] && media_container.tablet(_templateObject3, 'height:' + props['th'] + 'px;');
}, function (props) {
	return props['ph'] && media_container.phone(_templateObject3, 'height:' + props['ph'] + 'px;');
}, function (props) {
	return props['hp'] && typeof props['hp'] === 'number' && 'height:' + props['hp'] + '%;';
}, function (props) {
	return props['dhp'] && media_container.desktop(_templateObject3, 'height:' + props['dhp'] + '%;');
}, function (props) {
	return props['thp'] && media_container.tablet(_templateObject3, 'height:' + props['thp'] + '%;');
}, function (props) {
	return props['php'] && media_container.phone(_templateObject3, 'height:' + props['php'] + '%;');
}, function (props) {
	return props['br'] && typeof props['br'] === 'number' && 'border-radius:' + props['br'] + 'px;';
}, function (props) {
	return border(props);
}, function (props) {
	return rounded(props);
}, function (props) {
	return padding(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return media(props);
}, function (props) {
	return opacity(props);
});

/*
 * 按钮默认样式
 * padding,font-size,color,border-radius
 * 大小 size: xs,s,m,l
 * 背景 bg,bgo
 * 颜色 c,co
 * 透明度 o
 * 圆角 r
 * 边框透明 bro
 * */
var getButton = function getButton(props, type) {
	var xs = props.xs,
	    s = props.s,
	    l = props.l,
	    xl = props.xl,
	    bg = props.bg,
	    bgo = props.bgo,
	    g = props.g,
	    c = props.c,
	    co = props.co,
	    b = props.b,
	    bt = props.bt,
	    br = props.br,
	    bb = props.bb,
	    bl = props.bl,
	    bro = props.bro,
	    _props$i = props.i,
	    i = _props$i === undefined ? false : _props$i,
	    fs = props.fs,
	    pfs = props.pfs;
	var r = props.r;

	var rounded = '';

	var style = 'line-height: 1.42857143;\n    white-space: nowrap;\n    vertical-align: middle;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    touch-action: manipulation;\n    ' + (type === 'button' && 'text-align: center;') + '\n    background-image: none;\n    -webkit-appearance: button;\n    -webkit-writing-mode: horizontal-tb !important;\n    ';

	var background = bgo === 0 && !bg ? 'rgba(255,255,255,0)' : getColor(bg, bgo);
	var color = getColor(c, co);

	var padding = type === 'button' ? '6px 16px' : '6px',
	    fontWeight = '400',
	    border = '1px solid ' + _color.DefaultColor.fc + ';',
	    fontSize = fs || pfs || '12px',
	    borderRadius = type === 'button' ? '3px' : '0',
	    lineHeight = '1.42857143';

	if (xs) {
		padding = type === 'button' ? '1px 9px' : '1px 5px';
		fontWeight = '400';
		lineHeight = i ? '1.4' : '1.6';
		fontSize = fs || pfs || '12px';
	}
	if (s) {
		padding = type === 'button' ? '5px 14px' : '5px';
		lineHeight = '1.5';
		fontSize = fs || pfs || '12px';
	}
	if (l) {
		padding = type === 'button' ? '8px 20px' : '8px';
		lineHeight = '1.33333';
		fontSize = fs || pfs || '12px';
	}
	if (xl) {
		padding = type === 'button' ? '12px 28px' : '12px';
		lineHeight = '1.33333';
		fontSize = fs || pfs || '14px';
	}
	if (r) {
		if (typeof r === 'number') {
			rounded = r + 'px';
		}
		if ((typeof r === 'undefined' ? 'undefined' : _typeof(r)) === 'object') {
			r.forEach(function (i) {
				return rounded = rounded + (i + 'px ');
			});
		}
	}

	//判断是否手动设置
	fontSize = fs || pfs ? fontSize + 'px' : fontSize;

	var _getGradient3 = getGradient(bg),
	    _getGradient4 = _slicedToArray(_getGradient3, 2),
	    gs = _getGradient4[0],
	    ge = _getGradient4[1];

	var gradient = '\n        background-color: ' + gs + ';\n        background-image: -webkit-linear-gradient(' + g + 'deg, ' + gs + ' 0%, ' + ge + ' 100%);\n        background-image: -moz-linear-gradient(' + g + 'deg, ' + gs + ' 0%, ' + ge + ' 100%);\n        background-image: -o-linear-gradient(' + g + 'deg, ' + gs + ' 0%, ' + ge + ' 100%);\n        background-image: -ms-linear-gradient(' + g + 'deg, ' + gs + ' 0%, ' + ge + ' 100%);\n        background-image: linear-gradient(' + g + 'deg, ' + gs + ' 0%, ' + ge + ' 100%);\n    ';

	return style + ('\n        padding:' + padding + ';\n        font-size:' + fontSize + ';\n        font-weight:' + fontWeight + ';\n        ' + (!b && !bt && !br && !bb && !bl ? 'border:' + (bgo === 0 || bg ? '1px solid ' + getColor(bg, bro) + ';' : border) : '') + '\n        border-radius:' + (r === 0 ? '0' : rounded || borderRadius) + ';\n        background:' + (g ? gradient : background) + ';\n        color:' + (c ? color : bg ? bgo === 0 ? getColor(bg) : _color.DefaultColor.ff : _color.DefaultColor.f6) + ';\n        line-height:' + lineHeight + ';\n    ');
};

var buttonIcon = function buttonIcon() {
	return '\n    span{display:block;float:left;padding-bottom:0;padding-top:1px;}\n    span:first-child{margin-right:3px;}\n    span:first-child>svg{padding-top:1px;}\n  ';
};

/*
 * 改造button
 * 属性 width,height,border-radius,border,padding,margin
 * 全宽 a
 * */
var Button = exports.Button = _styledComponents2.default.button(_templateObject5, function (props) {
	return props['bg'] ? getColor(props['bg'], props['bgo'], true) : '#eceff1;';
}, function (props) {
	return (props['bgo'] || props['bgo'] === 0) && '\n            border:' + (props.b ? props.b[0] : '1') + 'px ' + (props.b && props.b[1] && props.b[1] === 'd' ? 'dashed' : 'solid') + ' ' + getColor(props.b ? props.b[2] : props['bg'], null, 1) + '\n            color:' + getColor(props.b ? props.b[2] : props['bgo'] === 0 ? props['bg'] : '', null, 1) + '\n        ';
}, function (props) {
	return props['fd'] && flexDirection(props['fd']);
}, function (props) {
	return props['dfd'] && media_container.desktop(_templateObject3, flexDirection(props['dfd']));
}, function (props) {
	return props['tfd'] && media_container.tablet(_templateObject3, flexDirection(props['tfd']));
}, function (props) {
	return props['pfd'] && media_container.phone(_templateObject3, flexDirection(props['pfd']));
}, function (props) {
	return props['fw'] && flexWrap(props['fw']);
}, function (props) {
	return props['dfw'] && media_container.desktop(_templateObject3, flexWrap(props['dfw']));
}, function (props) {
	return props['tfw'] && media_container.tablet(_templateObject3, flexWrap(props['tfw']));
}, function (props) {
	return props['pfw'] && media_container.phone(_templateObject3, flexWrap(props['pfw']));
}, function (props) {
	return props['jc'] && justifyContent(props['jc']);
}, function (props) {
	return props['djc'] && media_container.desktop(_templateObject3, justifyContent(props['djc']));
}, function (props) {
	return props['tjc'] && media_container.tablet(_templateObject3, justifyContent(props['tjc']));
}, function (props) {
	return props['pjc'] && media_container.phone(_templateObject3, justifyContent(props['pjc']));
}, function (props) {
	return props['ai'] && alignItems(props['ai']);
}, function (props) {
	return props['dai'] && media_container.desktop(_templateObject3, alignItems(props['dai']));
}, function (props) {
	return props['tai'] && media_container.tablet(_templateObject3, alignItems(props['tai']));
}, function (props) {
	return props['pai'] && media_container.phone(_templateObject3, alignItems(props['pai']));
}, function (props) {
	return props['ac'] && alignContent(props['ac']);
}, function (props) {
	return props['as'] && alignSelf(props['as']);
}, function (props) {
	return props['f'] && typeof props['f'] === 'number' && 'flex:' + props['f'] + ';';
}, function (props) {
	return props['df'] && media_container.desktop(_templateObject3, flexDirection(props['df']));
}, function (props) {
	return props['tf'] && media_container.tablet(_templateObject3, flexDirection(props['tf']));
}, function (props) {
	return props['pf'] && media_container.phone(_templateObject3, flexDirection(props['pf']));
}, function (props) {
	return props['_o'] && typeof props['_o'] === 'number' && 'order:' + props['_o'] + ';';
}, function (props) {
	return props['w'] && typeof props['w'] === 'number' && 'width:' + props['w'] + 'px;';
}, function (props) {
	return props['h'] && typeof props['h'] === 'number' && 'height:' + props['h'] + 'px;';
}, function (props) {
	return props['br'] && typeof props['br'] === 'number' && 'border-radius:' + props['br'] + 'px;';
}, function (props) {
	return props['a'] && typeof props['a'] === 'boolean' && 'width:100%;';
}, function (props) {
	return border(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return getButton(props, 'button');
}, function (props) {
	return media(props);
}, function (props) {
	return opacity(props);
}, function (props) {
	return props['col'] && column(props);
}, function (props) {
	return props['_pr'] && typeof props['_pr'] === 'boolean' && 'position:relative;';
}, function (props) {
	return props['_pa'] && typeof props['_pa'] === 'boolean' && 'position:absolute;width:100%;';
}, function (props) {
	return props['_pf'] && typeof props['_pf'] === 'boolean' && 'position:fixed;width:100%;';
}, function (props) {
	return props['_pi'] && typeof props['_pi'] === 'boolean' && 'position:inherit;';
}, function (props) {
	return props['_z'] && typeof props['_z'] === 'number' && 'z-index:' + props['_z'] + ';';
}, function (props) {
	return (props['_t'] || props['_t'] === 0) && typeof props['_t'] === 'number' && 'top:' + props['_t'] + 'px;';
}, function (props) {
	return (props['_r'] || props['_r'] === 0) && typeof props['_r'] === 'number' && 'right:' + props['_r'] + 'px;';
}, function (props) {
	return (props['_b'] || props['_b'] === 0) && typeof props['_b'] === 'number' && 'bottom:' + props['_b'] + 'px;';
}, function (props) {
	return (props['_l'] || props['_l'] === 0) && typeof props['_l'] === 'number' && 'left:' + props['_l'] + 'px;';
}, function (props) {
	return props['tl'] && typeof props['tl'] === 'boolean' && 'text-align:left;';
}, function (props) {
	return props['tc'] && typeof props['tc'] === 'boolean' && 'text-align:center;';
}, function (props) {
	return props['tr'] && typeof props['tr'] === 'boolean' && 'text-align:right;';
}, function (props) {
	return props['fs'] && typeof props['fs'] === 'number' && 'font-size:' + props['fs'] + 'px;';
}, function (props) {
	return props['dfs'] && media_container.desktop(_templateObject3, 'font-size:' + props['dfs'] + 'px;');
}, function (props) {
	return props['tfs'] && media_container.tablet(_templateObject3, 'font-size:' + props['tfs'] + 'px;');
}, function (props) {
	return props['pfs'] && media_container.phone(_templateObject3, 'font-size:' + props['pfs'] + 'px;');
}, function (props) {
	return props['mpfs'] && media_container.miniPhone(_templateObject3, 'font-size:' + props['mpfs'] + 'px;');
}, function (props) {
	return props['cp'] && typeof props['cd'] === 'boolean' && 'cursor:pointer;';
}, function (props) {
	return props['cd'] && typeof props['cd'] === 'boolean' && 'cursor:default;';
}, function (props) {
	return props['d'] && typeof props['d'] === 'boolean' && 'disabled:disabled;';
}, function (props) {
	return props['i'] && buttonIcon();
}, function (props) {
	return props['ch'] && '\n        :hover{transition: all 0.5s;color:' + getColor(props['ch'], props['cho'], true) + ';}\n    ';
}, function (props) {
	return props['bh'] && '\n        :hover{transition: all 0.5s;background:' + getColor(props['bh'], props['bho']) + ';}\n    ';
});

/*
 * 设置输入框placeholder颜色
 * */
var setColor = function setColor(_ref9) {
	var c = _ref9.c,
	    b = _ref9.b,
	    bg = _ref9.bg;

	var color = '#333';
	if (b) {
		color = getColor(b[2], 5);
	}
	if (bg) {
		color = 'rgba(255,255,255,.5)';
	}
	if (c) {
		color = getColor(c, 5);
	}
	return color;
};

/*
 * 改造input
 * 属性 width,height,border-radius,border,padding,margin
 * 字体 phfs,placeholder font size
 * */
var Input = exports.Input = _styledComponents2.default.input(_templateObject6, function (props) {
	return setColor(props);
}, function (props) {
	return props['phfs'] && 'font-size:' + props['phfs'] + 'px;';
}, function (props) {
	return setColor(props);
}, function (props) {
	return props['phfs'] && 'font-size:' + props['phfs'] + 'px;';
}, function (props) {
	return setColor(props);
}, function (props) {
	return props['phfs'] && 'font-size:' + props['phfs'] + 'px;';
}, function (props) {
	return setColor(props);
}, function (props) {
	return props['phfs'] && 'font-size:' + props['phfs'] + 'px;';
}, function (props) {
	return props['w'] && typeof props['w'] === 'number' && 'width:' + props['w'] + 'px;';
}, function (props) {
	return props['dw'] && media_container.desktop(_templateObject3, 'width:' + props['dw'] + 'px;');
}, function (props) {
	return props['tw'] && media_container.tablet(_templateObject3, 'width:' + props['tw'] + 'px;');
}, function (props) {
	return props['pw'] && media_container.phone(_templateObject3, 'width:' + props['pw'] + 'px;');
}, function (props) {
	return props['wp'] && typeof props['wp'] === 'number' && 'width:' + props['wp'] + '%;';
}, function (props) {
	return props['wwp'] && media_container.desktop(_templateObject3, 'width:' + props['dwp'] + '%;');
}, function (props) {
	return props['twp'] && media_container.tablet(_templateObject3, 'width:' + props['twp'] + '%;');
}, function (props) {
	return props['pwp'] && media_container.phone(_templateObject3, 'width:' + props['pwp'] + '%;');
}, function (props) {
	return props['h'] && typeof props['h'] === 'number' && 'height:' + props['h'] + 'px;';
}, function (props) {
	return props['dh'] && media_container.desktop(_templateObject3, 'height:' + props['dh'] + 'px;');
}, function (props) {
	return props['th'] && media_container.tablet(_templateObject3, 'height:' + props['th'] + 'px;');
}, function (props) {
	return props['ph'] && media_container.phone(_templateObject3, 'height:' + props['ph'] + 'px;');
}, function (props) {
	return props['hp'] && typeof props['hp'] === 'number' && 'height:' + props['hp'] + '%;';
}, function (props) {
	return props['dhp'] && media_container.desktop(_templateObject3, 'height:' + props['dhp'] + '%;');
}, function (props) {
	return props['thp'] && media_container.tablet(_templateObject3, 'height:' + props['thp'] + '%;');
}, function (props) {
	return props['php'] && media_container.phone(_templateObject3, 'height:' + props['php'] + '%;');
}, function (props) {
	return props['br'] && typeof props['br'] === 'number' && 'border-radius:' + props['br'] + 'px;';
}, function (props) {
	return props['a'] && typeof props['a'] === 'boolean' && 'width:100%;';
}, function (props) {
	return props['fs'] && typeof props['fs'] === 'number' && 'font-size:' + props['fs'] + 'px;';
}, function (props) {
	return props['dfs'] && media_container.desktop(_templateObject3, 'font-size:' + props['dfs'] + 'px;');
}, function (props) {
	return props['tfs'] && media_container.tablet(_templateObject3, 'font-size:' + props['tfs'] + 'px;');
}, function (props) {
	return props['pfs'] && media_container.phone(_templateObject3, 'font-size:' + props['pfs'] + 'px;');
}, function (props) {
	return props['mpfs'] && media_container.miniPhone(_templateObject3, 'font-size:' + props['pfs'] + 'px;');
}, function (props) {
	return props['tl'] && typeof props['tl'] === 'boolean' && 'text-align:left;vertical-align:middle;';
}, function (props) {
	return props['tc'] && typeof props['tc'] === 'boolean' && 'text-align:center;vertical-align:middle;';
}, function (props) {
	return props['tr'] && typeof props['tr'] === 'boolean' && 'text-align:right;vertical-align:middle;';
}, function (props) {
	return border(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return getButton(props, 'input');
}, function (props) {
	return media(props);
}, function (props) {
	return opacity(props);
});

/*
 * 改造 textarea
 * 其它属性同 input
 * ro:  可见行数，数字
 * */
var Textarea = exports.Textarea = _styledComponents2.default.textarea(_templateObject7, function (props) {
	return props['w'] && typeof props['w'] === 'number' && 'width:' + props['w'] + 'px;';
}, function (props) {
	return props['dw'] && media_container.desktop(_templateObject3, 'width:' + props['dw'] + 'px;');
}, function (props) {
	return props['tw'] && media_container.tablet(_templateObject3, 'width:' + props['tw'] + 'px;');
}, function (props) {
	return props['pw'] && media_container.phone(_templateObject3, 'width:' + props['pw'] + 'px;');
}, function (props) {
	return props['wp'] && typeof props['wp'] === 'number' && 'width:' + props['wp'] + '%;';
}, function (props) {
	return props['wwp'] && media_container.desktop(_templateObject3, 'width:' + props['dwp'] + '%;');
}, function (props) {
	return props['twp'] && media_container.tablet(_templateObject3, 'width:' + props['twp'] + '%;');
}, function (props) {
	return props['pwp'] && media_container.phone(_templateObject3, 'width:' + props['pwp'] + '%;');
}, function (props) {
	return props['h'] && typeof props['h'] === 'number' && 'height:' + props['h'] + 'px;';
}, function (props) {
	return props['dh'] && media_container.desktop(_templateObject3, 'height:' + props['dh'] + 'px;');
}, function (props) {
	return props['th'] && media_container.tablet(_templateObject3, 'height:' + props['th'] + 'px;');
}, function (props) {
	return props['ph'] && media_container.phone(_templateObject3, 'height:' + props['ph'] + 'px;');
}, function (props) {
	return props['hp'] && typeof props['hp'] === 'number' && 'height:' + props['hp'] + '%;';
}, function (props) {
	return props['dhp'] && media_container.desktop(_templateObject3, 'height:' + props['dhp'] + '%;');
}, function (props) {
	return props['thp'] && media_container.tablet(_templateObject3, 'height:' + props['thp'] + '%;');
}, function (props) {
	return props['php'] && media_container.phone(_templateObject3, 'height:' + props['php'] + '%;');
}, function (props) {
	return props['br'] && typeof props['br'] === 'number' && 'border-radius:' + props['br'] + 'px;';
}, function (props) {
	return props['a'] && typeof props['a'] === 'boolean' && 'width:100%;';
}, function (props) {
	return props['fs'] && typeof props['fs'] === 'number' && 'font-size:' + props['fs'] + 'px;';
}, function (props) {
	return props['dfs'] && media_container.desktop(_templateObject3, 'font-size:' + props['dfs'] + 'px;');
}, function (props) {
	return props['tfs'] && media_container.tablet(_templateObject3, 'font-size:' + props['tfs'] + 'px;');
}, function (props) {
	return props['pfs'] && media_container.phone(_templateObject3, 'font-size:' + props['pfs'] + 'px;');
}, function (props) {
	return props['mpfs'] && media_container.miniPhone(_templateObject3, 'font-size:' + props['pfs'] + 'px;');
}, function (props) {
	return props['ro'] && 'rows:' + props['ro'] + ';';
}, function (props) {
	return border(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return getButton(props, 'input');
}, function (props) {
	return media(props);
}, function (props) {
	return opacity(props);
});

/*
 * 改变a链接
 * color,font-size,line-height,border,padding,margin
 * :hover ch,cho 颜色，透明度
 * */
var A = exports.A = _styledComponents2.default.a(_templateObject8, function (props) {
	return props['fd'] && flexDirection(props['fd']);
}, function (props) {
	return props['dfd'] && media_container.desktop(_templateObject3, flexDirection(props['dfd']));
}, function (props) {
	return props['tfd'] && media_container.tablet(_templateObject3, flexDirection(props['tfd']));
}, function (props) {
	return props['pfd'] && media_container.phone(_templateObject3, flexDirection(props['pfd']));
}, function (props) {
	return props['fw'] && flexWrap(props['fw']);
}, function (props) {
	return props['dfw'] && media_container.desktop(_templateObject3, flexWrap(props['dfw']));
}, function (props) {
	return props['tfw'] && media_container.tablet(_templateObject3, flexWrap(props['tfw']));
}, function (props) {
	return props['pfw'] && media_container.phone(_templateObject3, flexWrap(props['pfw']));
}, function (props) {
	return props['jc'] && justifyContent(props['jc']);
}, function (props) {
	return props['djc'] && media_container.desktop(_templateObject3, justifyContent(props['djc']));
}, function (props) {
	return props['tjc'] && media_container.tablet(_templateObject3, justifyContent(props['tjc']));
}, function (props) {
	return props['pjc'] && media_container.phone(_templateObject3, justifyContent(props['pjc']));
}, function (props) {
	return props['ai'] && alignItems(props['ai']);
}, function (props) {
	return props['dai'] && media_container.desktop(_templateObject3, alignItems(props['dai']));
}, function (props) {
	return props['tai'] && media_container.tablet(_templateObject3, alignItems(props['tai']));
}, function (props) {
	return props['pai'] && media_container.phone(_templateObject3, alignItems(props['pai']));
}, function (props) {
	return props['ac'] && alignContent(props['ac']);
}, function (props) {
	return props['as'] && alignSelf(props['as']);
}, function (props) {
	return props['f'] && typeof props['f'] === 'number' && 'flex:' + props['f'] + ';';
}, function (props) {
	return props['df'] && media_container.desktop(_templateObject3, flexDirection(props['df']));
}, function (props) {
	return props['tf'] && media_container.tablet(_templateObject3, flexDirection(props['tf']));
}, function (props) {
	return props['pf'] && media_container.phone(_templateObject3, flexDirection(props['pf']));
}, function (props) {
	return props['_o'] && typeof props['_o'] === 'number' && 'order:' + props['_o'] + ';';
}, function (props) {
	return props['w'] && typeof props['w'] === 'number' && 'width:' + props['w'] + 'px;';
}, function (props) {
	return props['dw'] && media_container.desktop(_templateObject3, 'width:' + props['dw'] + 'px;');
}, function (props) {
	return props['tw'] && media_container.tablet(_templateObject3, 'width:' + props['tw'] + 'px;');
}, function (props) {
	return props['pw'] && media_container.phone(_templateObject3, 'width:' + props['pw'] + 'px;');
}, function (props) {
	return props['wp'] && typeof props['wp'] === 'number' && 'width:' + props['wp'] + '%;';
}, function (props) {
	return props['wwp'] && media_container.desktop(_templateObject3, 'width:' + props['dwp'] + '%;');
}, function (props) {
	return props['twp'] && media_container.tablet(_templateObject3, 'width:' + props['twp'] + '%;');
}, function (props) {
	return props['pwp'] && media_container.phone(_templateObject3, 'width:' + props['pwp'] + '%;');
}, function (props) {
	return props['h'] && typeof props['h'] === 'number' && 'height:' + props['h'] + 'px;';
}, function (props) {
	return props['dh'] && media_container.desktop(_templateObject3, 'height:' + props['dh'] + 'px;');
}, function (props) {
	return props['th'] && media_container.tablet(_templateObject3, 'height:' + props['th'] + 'px;');
}, function (props) {
	return props['ph'] && media_container.phone(_templateObject3, 'height:' + props['ph'] + 'px;');
}, function (props) {
	return props['hp'] && typeof props['hp'] === 'number' && 'height:' + props['hp'] + '%;';
}, function (props) {
	return props['dhp'] && media_container.desktop(_templateObject3, 'height:' + props['dhp'] + '%;');
}, function (props) {
	return props['thp'] && media_container.tablet(_templateObject3, 'height:' + props['thp'] + '%;');
}, function (props) {
	return props['php'] && media_container.phone(_templateObject3, 'height:' + props['php'] + '%;');
}, function (props) {
	return props['bg'] && typeof props['bg'] === 'string' && props['g'] ? setBackground(props['bg'], props['g']) : 'background:' + getColor(props['bg'], props['bgo']) + ';';
}, function (props) {
	return props['br'] && typeof props['br'] === 'number' && 'border-radius:' + props['br'] + 'px;';
}, function (props) {
	return props['c'] && typeof props['c'] === 'string' && 'color:' + getColor(props['c'], props['o']) + ';';
}, function (props) {
	return props['fs'] && typeof props['fs'] === 'number' && 'font-size:' + props['fs'] + 'px;';
}, function (props) {
	return props['dfs'] && media_container.desktop(_templateObject3, 'font-size:' + props['dfs'] + 'px;');
}, function (props) {
	return props['tfs'] && media_container.tablet(_templateObject3, 'font-size:' + props['tfs'] + 'px;');
}, function (props) {
	return props['pfs'] && media_container.phone(_templateObject3, 'font-size:' + props['pfs'] + 'px;');
}, function (props) {
	return props['lh'] && typeof props['lh'] === 'number' && 'line-height:' + props['lh'] + 'px;';
}, function (props) {
	return props['dlh'] && media_container.desktop(_templateObject3, 'line-height:' + props['dlh'] + 'px;');
}, function (props) {
	return props['tlh'] && media_container.tablet(_templateObject3, 'line-height:' + props['tlh'] + 'px;');
}, function (props) {
	return props['plh'] && media_container.phone(_templateObject3, 'line-height:' + props['plh'] + 'px;');
}, function (props) {
	return border(props);
}, function (props) {
	return padding(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return media(props);
}, function (props) {
	return opacity(props);
}, function (props) {
	return props['col'] && column(props);
}, function (props) {
	return props['ch'] && '\n        :hover{transition: all 0.5s;color:' + getColor(props['ch'], props['cho'], true) + ';}\n    ';
}, function (props) {
	return props['bh'] && '\n        :hover{transition: all 0.5s;background:' + getColor(props['bh'], props['bho']) + ';}\n    ';
});

/*
 * 改造行内元素
 * 标签 h1~h6,p,span
 * 可定义 color,background,padding,margin,font-size,line-height
 * */
var text = function text(props) {
	var res = '';
	if (props && props['c']) {
		res = 'color:' + getColor(props['c'], props['o']) + ';';
	}
	if (props && props['fs']) {
		res = res + ('font-size:' + props['fs'] + 'px;');
	}
	if (props && props['dfs']) {
		res = res + ('@media (max-width: 1200px){font-size:' + props['dfs'] + 'px;}');
	}
	if (props && props['tfs']) {
		res = res + ('@media (max-width: 992px){font-size:' + props['tfs'] + 'px;}');
	}
	if (props && props['pfs']) {
		res = res + ('@media (max-width: 768px){font-size:' + props['pfs'] + 'px;}');
	}
	if (props && props['lh']) {
		res = res + ('line-height:' + props['lh'] + 'px;');
	}
	if (props && props['dlh']) {
		res = res + ('@media (max-width: 1200px){line-height:' + props['dlh'] + 'px;}');
	}
	if (props && props['tlh']) {
		res = res + ('@media (max-width: 992px){line-height:' + props['tlh'] + 'px;}');
	}
	if (props && props['plh']) {
		res = res + ('@media (max-width: 768px){line-height:' + props['plh'] + 'px;}');
	}
	if (props && props['bg']) {
		res = res + ('background:' + getColor(props['bg'], props['bgo']) + ';');
	}
	if (props && props['l']) {
		res = res + 'font-weight:300;';
	}
	if (props && props['b']) {
		res = res + 'font-weight:600;';
	}
	if (props && props['ch']) {
		res = res + (':hover{color:' + getColor(props['ch'], props['cho'], true) + ';transition: all 0.5s;}');
	}
	return res;
};

var H1 = exports.H1 = _styledComponents2.default.h1(_templateObject9, function (props) {
	return text(props);
}, function (props) {
	return padding(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return media(props);
});
var H2 = exports.H2 = _styledComponents2.default.h2(_templateObject9, function (props) {
	return text(props);
}, function (props) {
	return padding(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return media(props);
});
var H3 = exports.H3 = _styledComponents2.default.h3(_templateObject9, function (props) {
	return text(props);
}, function (props) {
	return padding(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return media(props);
});
var H4 = exports.H4 = _styledComponents2.default.h4(_templateObject9, function (props) {
	return text(props);
}, function (props) {
	return padding(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return media(props);
});
var H5 = exports.H5 = _styledComponents2.default.h5(_templateObject9, function (props) {
	return text(props);
}, function (props) {
	return padding(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return media(props);
});
var H6 = exports.H6 = _styledComponents2.default.h6(_templateObject9, function (props) {
	return text(props);
}, function (props) {
	return padding(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return media(props);
});
var Ul = exports.Ul = _styledComponents2.default.ul(_templateObject9, function (props) {
	return text(props);
}, function (props) {
	return padding(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return media(props);
});
var Li = exports.Li = _styledComponents2.default.li(_templateObject9, function (props) {
	return text(props);
}, function (props) {
	return padding(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return media(props);
});
var Dl = exports.Dl = _styledComponents2.default.dl(_templateObject9, function (props) {
	return text(props);
}, function (props) {
	return padding(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return media(props);
});
var Dt = exports.Dt = _styledComponents2.default.dt(_templateObject9, function (props) {
	return text(props);
}, function (props) {
	return padding(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return media(props);
});
var Dd = exports.Dd = _styledComponents2.default.dd(_templateObject9, function (props) {
	return text(props);
}, function (props) {
	return padding(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return media(props);
});
var Em = exports.Em = _styledComponents2.default.em(_templateObject9, function (props) {
	return text(props);
}, function (props) {
	return padding(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return media(props);
});

var Span = exports.Span = _styledComponents2.default.span(_templateObject9, function (props) {
	return text(props);
}, function (props) {
	return padding(props);
}, function (props) {
	return margin(props);
}, function (props) {
	return media(props);
});
var P = exports.P = (0, _styledComponents2.default)(Span)(_templateObject10);