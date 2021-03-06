import styled, {css} from 'styled-components';
import {DefaultColor as Color} from '../styles/color';

export const GlobalColor = ({
                              primary,
                              primaryRGB,
                              primaryG,
                              success,
                              successRGB,
                              successG,
                              danger,
                              dangerRGB,
                              dangerG,
                              warning,
                              warningRGB,
                              warningG,
                              info,
                              infoRGB,
                              infoG,
                            } = {}) => {
  if (primary) {
    Color.primary = primary;
  }
  if (primaryRGB) {
    Color.primaryRGB = primaryRGB;
  }
  if (primaryG) {
    Color.primaryG = primaryG;
  }
  if (success) {
    Color.success = success;
  }
  if (successRGB) {
    Color.successRGB = successRGB;
  }
  if (successG) {
    Color.successG = successG;
  }
  if (danger) {
    Color.danger = danger;
  }
  if (dangerRGB) {
    Color.dangerRGB = dangerRGB;
  }
  if (dangerG) {
    Color.dangerG = dangerG;
  }
  if (warning) {
    Color.warning = warning;
  }
  if (warningRGB) {
    Color.warningRGB = warningRGB;
  }
  if (warningG) {
    Color.warningG = warningG;
  }
  if (info) {
    Color.info = info;
  }
  if (infoRGB) {
    Color.infoRGB = infoRGB;
  }
  if (infoG) {
    Color.infoG = infoG;
  }
};

/*
 * 媒体查询
 * 分辨率: 0 ~ 767 手机 | 768 ~ 991 平板 | 992 ~ 1199 小屏幕电脑 | 1200 ~ * 大屏幕电脑
 * 名称: phone 手机 | tablet 平板 | desktop 小屏幕电脑
 * */
const sizes = {desktop: 1199, tablet: 991, phone: 767, miniPhone: 374};
const media_container = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
		@media (max-width: ${sizes[label]}px) {
			${css(...args)}
		}
	`;
  return acc;
}, {});

/*
 * 媒体查询
 * 级别: maxDesktop,desktop tablet phone minPhone
 * 状态:
 * 限定分辨率显不显示，*b,显示 *n,隐藏
 * 继承显不显示，*ba，自己和以下显示，*na, 自己和以下隐藏
 * */
const media = ({mb, mba, mn, mna, db, dba, dna, dn, tb, tba, tn, tna, pb, pn, pba, pna, mpb, mpn}) => {
  let css;
  if (mb && typeof mb === 'boolean') {
    //仅在大桌面显示
    css = `@media only screen and (max-width: 1199px) {display:none;}`;
  }

  if (mn && typeof mn === 'boolean') {
    //仅在大桌面隐藏
    css = `@media only screen and (min-width:1200px)  {display:none;}`;
  }

  if (mba && typeof mba === 'boolean') {
    //全显示
    css = `{display:block;}`;
  }

  if (mna && typeof mna === 'boolean') {
    //全隐藏
    css = `{display:none;}`;
  }

  //992 ~ 1199
  if (db && typeof db === 'boolean') {
    //仅在桌面显示
    css = `@media only screen and (max-width:991px) {display:none;}  @media only screen and (min-width: 1200px) {display:none;}`;
  }

  if (dn && typeof dn === 'boolean') {
    //仅在桌面隐藏
    css = `@media screen and (min-width:992px) and (max-width:1199px) {display:none;}`;
  }

  if (dba && typeof dba === 'boolean') {
    //仅在桌面及以下分辨率显示
    css = `@media only screen and (min-width:1200px)  {display:none;}`;
  }

  if (dna && typeof dna === 'boolean') {
    //仅在桌面及以下分辨率隐藏
    css = `@media only screen and (max-width: 1199px) {display:none;}`;
  }

  //768 ~ 991 平板
  if (tb && typeof tb === 'boolean') {
    //仅在平板显示
    css = `@media only screen and (max-width: 767px) {display:none;} @media only screen and (min-width: 992px) {display:none;} `;
  }

  if (tn && typeof tn === 'boolean') {
    //仅在平板隐藏
    css = `@media only screen and (min-width:768px) and (max-width:991px) {display:none;}`;
  }

  if (tba && typeof tba === 'boolean') {
    //在平板及以下分辨率显示
    css = `@media only screen and (min-width: 992px)  {display:none;}`;
  }

  if (tna && typeof tna === 'boolean') {
    //在平板及以下分辨率隐藏
    css = `@media only screen and (max-width:991px)  {display:none;}`;
  }

  //375 ~ 767 手机
  if (pb && typeof pb === 'boolean') {
    //仅在大屏幕手机显示
    css = `@media only screen and (max-width: 374px) {display:none;} @media only screen and (min-width: 768px) {display:none;} `;
  }

  if (pn && typeof pn === 'boolean') {
    //仅在大屏幕手机隐藏
    css = `@media only screen and (min-width:375px) and (max-width:767px) {display:none;}`;
  }

  if (pba && typeof pba === 'boolean') {
    //在大屏幕手机及以下分辨率显示
    css = `@media only screen and (min-width: 768px)  {display:none;}`;
  }

  if (pna && typeof pna === 'boolean') {
    //在大屏幕手机及以下分辨率隐藏
    css = `@media only screen and (max-width:767px)  {display:none;}`;
  }

  //0 ~ 374
  if (mpb && typeof mpb === 'boolean') {
    //仅在小屏幕手机显示
    css = `@media only screen and (min-width: 375px) {display:none;}`;
  }
  if (mpn && typeof mpn === 'boolean') {
    //仅在小屏幕手机隐藏
    css = `@media only screen and (max-width: 374px) {display:none;}`;
  }

  return css;
};

/*
 * 获得颜色
 * c,o,over:是否激活颜色
 * */
const getColor = (c, o, over) => {
  switch (c) {
    case 'p':
      c = o || o === 0 ? `rgba(${Color.primaryRGB},${'.' + o})` : over ? Color.primaryG : Color.primary;
      break;
    case 's':
      c = o || o === 0 ? `rgba(${Color.successRGB},${'.' + o})` : over ? Color.successG : Color.success;
      break;
    case 'd':
      c = o || o === 0 ? `rgba(${Color.dangerRGB},${'.' + o})` : over ? Color.dangerG : Color.danger;
      break;
    case 'w':
      c = o || o === 0 ? `rgba(${Color.warningRGB},${'.' + o})` : over ? Color.warningG : Color.warning;
      break;
    case 'i':
      c = o || o === 0 ? `rgba(${Color.infoRGB},${'.' + o})` : over ? Color.infoG : Color.info;
      break;
    case 'ff':
      c = o || o === 0 ? `rgba(${Color.ffRGB},${'.' + o})` : over ? Color.ffG : Color.ff;
      break;
    case 'fe':
      c = o || o === 0 ? `rgba(${Color.feRGB},${'.' + o})` : over ? Color.feG : Color.fe;
      break;
    case 'fc':
      c = o || o === 0 ? `rgba(${Color.fcRGB},${'.' + o})` : over ? Color.fcG : Color.fc;
      break;
    case 'f9':
      c = o || o === 0 ? `rgba(${Color.f9RGB},${'.' + o})` : over ? Color.f9G : Color.f9;
      break;
    case 'f6':
      c = o || o === 0 ? `rgba(${Color.f6RGB},${'.' + o})` : over ? Color.f6G : Color.f6;
      break;
    case 'f3':
      c = o || o === 0 ? `rgba(${Color.f3RGB},${'.' + o})` : over ? Color.f3G : Color.f3;
      break;
    case 'f0':
      c = o || o === 0 ? `rgba(${Color.f0RGB},${`.${o}`})` : over ? Color.f0G : Color.f0;
      break;
    case 'bg':
      c = o || o === 0 ? `rgba(${Color.bgRGB},${`.${o}`})` : over ? Color.bgG : Color.bg;
      break;
    case 'bp':
      c = o || o === 0 ? `rgba(${Color.bpRGB},${`.${o}`})` : over ? Color.bpG : Color.bp;
      break;
    case 'bs':
      c = o || o === 0 ? `rgba(${Color.bsRGB},${`.${o}`})` : over ? Color.bsG : Color.bs;
      break;
    case 'bd':
      c = o || o === 0 ? `rgba(${Color.bdRGB},${`.${o}`})` : over ? Color.bdG : Color.bd;
      break;
    case 'bw':
      c = o || o === 0 ? `rgba(${Color.bwRGB},${`.${o}`})` : over ? Color.bwG : Color.bw;
      break;
    case 'bi':
      c = o || o === 0 ? `rgba(${Color.biRGB},${`.${o}`})` : over ? Color.biG : Color.bi;
      break;
    default:
      c = o || o === 0 ? `rgba(${Color.ffRGB},${`.${o}`})` : '';
      break;
  }
  return c;
};

/*
 * 获得渐变
 * */
const getGradient = bg => {
  let gs = '',
    ge = '';
  switch (bg) {
    case 'p':
      gs = Color.primary;
      ge = Color.primaryG;
      break;
    case 's':
      gs = Color.success;
      ge = Color.successG;
      break;
    case 'd':
      gs = Color.danger;
      ge = Color.dangerG;
      break;
    case 'w':
      gs = Color.warning;
      ge = Color.warningG;
      break;
    case 'i':
      gs = Color.info;
      ge = Color.infoG;
      break;
    case 'ff':
      gs = Color.ff;
      ge = Color.ffG;
      break;
    case 'fe':
      gs = Color.fe;
      ge = Color.feG;
      break;
    case 'fc':
      gs = Color.fc;
      ge = Color.fcG;
      break;
    case 'f9':
      gs = Color.f9;
      ge = Color.f9G;
      break;
    case 'f6':
      gs = Color.f6;
      ge = Color.f6G;
      break;
    case 'f3':
      gs = Color.f3;
      ge = Color.f3G;
      break;
    default:
      gs = Color.ff;
      ge = Color.ffG;
      break;
  }
  return [gs, ge];
};

/*
 * 设置背景渐变
 * */
const setBackground = (bg, g) => {
  const [gs, ge] = getGradient(bg);
  return `
        background-color: ${gs};
        background-image: -webkit-linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
        background-image: -moz-linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
        background-image: -o-linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
        background-image: -ms-linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
        background-image: linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
    `;
};

/*
 *  flex-direction 布局
 *  r,rs,c,cs
 * */
const flexDirection = param => {
  let flex = `display:flex;`;
  let direction = 'row';
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
  const value = `-webkit-flex-direction:${direction};
                            -webkit-flex-direction:${direction};
                            -ms-flex-direction:${direction};
                            flex-direction:${direction};`;
  return typeof param === 'string' ? flex + value : flex;
};


/*
 *  flex-wrap 布局
 *  w,ws
 * */
const flexWrap = param => {
  let flex = `display:flex;`;
  let wrap;
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
  const value = `-webkit-flex-wrap:${wrap};
                            -webkit-flex-wrap:${wrap};
                            -ms-flex-wrap:${wrap};
                            flex-wrap:${wrap};`;
  return typeof param === 'string' ? flex + value : flex;
};

/*
 *  justify-content 布局
 *  fs,fe,c,sb,sa
 * */
const justifyContent = param => {
  let flex = `display:flex;`;
  let content;
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
  const value = `-webkit-justify-content:${content};
                            -webkit-justify-content:${content};
                            -ms-justify-content:${content};
                            justify-content:${content};`;
  return typeof param === 'string' ? flex + value : flex;
};

/*
 *  align-items 布局
 *  fs,fe,c,b,s
 * */
const alignItems = param => {
  let flex = `display:flex;`;
  let content;
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
  const value = `-webkit-align-items:${content};
                            -webkit-align-items:${content};
                            -ms-align-items:${content};
                            align-items:${content};`;
  return typeof param === 'string' ? flex + value : flex;
};

/*
 *  align-content 布局
 *  fs,fe,c,sb,sa
 * */
const alignContent = param => {
  let flex = `display:flex;`;
  let content;
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
  const value = `-webkit-align-content:${content};
                            -webkit-align-content:${content};
                            -ms-align-content:${content};
                            align-content:${content};`;
  return typeof param === 'string' ? flex + value : flex;
};

/*
 *  align-self 布局
 *  fs,fe,c,b,s
 * */
const alignSelf = param => {
  let flex = `display:flex;`;
  let content;
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
  const value = `-webkit-align-self:${content};
                            -webkit-align-self:${content};
                            -ms-align-self:${content};
                            align-self:${content};`;
  return typeof param === 'string' ? flex + value : flex;
};


/*
 * 定义边框
 * @标签 b: 全边框
 * @标签 bt,br,bb,bl 定义上右下边框
 * @params: 顺序，size，type，color，opacity
 * */
const border = ({b, bt, br, bb, bl}) => {
  const getBorder = params => {
    let [size, type = 'solid', color, opacity] = params;
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
    return `${size}px ${type} ${color}`;
  };

  let border = '';
  if (b && typeof b === 'object') {
    border = `border:${getBorder(b)};`;
  }
  if (bt && typeof bt === 'object') {
    border = `${border} border-top:${getBorder(bt)};`;
  }
  if (br && typeof br === 'object') {
    border = `${border} border-right:${getBorder(br)};`;
  }
  if (bb && typeof bb === 'object') {
    border = `${border} border-bottom:${getBorder(bb)};`;
  }
  if (bl && typeof bl === 'object') {
    border = `${border} border-left:${getBorder(bl)};`;
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
const padding = ({p, pt, pr, pb, pl, dp, dpt, dpr, dpb, dpl, tp, tpt, tpr, tpb, tpl, pp, ppt, ppr, ppb, ppl}) => {
  let combination = '';
  if (p || pt || pr || pb || pl || p === 0 || pt === 0 || pr === 0 || pb === 0 || pl === 0) {
    let padding = '';
    if (typeof p === 'number' && (p || p === 0)) {
      padding = `padding:${p}px;`;
    } else {
      if (typeof pt === 'number' && (pt || pt === 0)) {
        padding += `padding-top:${pt}px;`;
      }
      if (typeof pr === 'number' && (pr || pr === 0)) {
        padding += `padding-right:${pr}px;`;
      }
      if (typeof pb === 'number' && (pb || pb === 0)) {
        padding += `padding-bottom:${pb}px;`;
      }
      if (typeof pl === 'number' && (pl || pl === 0)) {
        padding += `padding-left:${pl}px;`;
      }
    }
    combination += padding;
  }

  if (dp || dpt || dpr || dpb || dpl || dp === 0 || dpt === 0 || dpr === 0 || dpb === 0 || dpl === 0) {
    let css = '';
    if (typeof dp === 'number' && (dp || dp === 0)) {
      css = `padding:${dp}px;`;
    } else {
      if (typeof dpt === 'number' && (dpt || dpt === 0)) {
        css += `padding-top:${dpt}px;`;
      }
      if (typeof dpr === 'number' && (dpr || dpr === 0)) {
        css += `padding-right:${dpr}px;`;
      }
      if (typeof dpb === 'number' && (dpb || dpb === 0)) {
        css += `padding-bottom:${dpb}px;`;
      }
      if (typeof dpl === 'number' && (dpl || dpl === 0)) {
        css += `padding-left:${dpl}px;`;
      }
    }
    combination += `@media (max-width: 1199px){${css}}`;
  }

  if (tp || tpt || tpr || tpb || tpl || tp === 0 || tpt === 0 || tpr === 0 || tpb === 0 || tpl === 0) {
    let css = '';
    if (typeof tp === 'number' && (tp || tp === 0)) {
      css = `padding:${tp}px;`;
    } else {
      if (typeof tpt === 'number' && (tpt || tpt === 0)) {
        css += `padding-top:${tpt}px;`;
      }
      if (typeof tpr === 'number' && (tpr || tpr === 0)) {
        css += `padding-right:${tpr}px;`;
      }
      if (typeof tpb === 'number' && (tpb || tpb === 0)) {
        css += `padding-bottom:${tpb}px;`;
      }
      if (typeof tpl === 'number' && (tpl || tpl === 0)) {
        css += `padding-left:${tpl}px;`;
      }
    }
    combination += `@media (max-width: 991px){${css}}`;
  }

  if (pp || ppt || ppr || ppb || ppl || pp === 0 || ppt === 0 || ppr === 0 || ppb === 0 || ppl === 0) {
    let css = '';
    if (typeof pp === 'number' && (pp || pp === 0)) {
      css = `padding:${pp}px;`;
    } else {
      if (typeof ppt === 'number' && (ppt || ppt === 0)) {
        css += `padding-top:${ppt}px;`;
      }
      if (typeof ppr === 'number' && (ppr || ppr === 0)) {
        css += `padding-right:${ppr}px;`;
      }
      if (typeof ppb === 'number' && (ppb || ppb === 0)) {
        css += `padding-bottom:${ppb}px;`;
      }
      if (typeof ppl === 'number' && (ppl || ppl === 0)) {
        css += `padding-left:${ppl}px;`;
      }
    }
    combination += `@media (max-width: 767px){${css}}`;
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
const margin = ({m, mt, mr, mb, ml, dm, dmt, dmr, dmb, dml, tm, tmt, tmr, tmb, tml, pm, pmt, pmr, pmb, pml}) => {
  let combination = '';
  if (dm || dmt || dmr || dmb || dml || dm === 0 || dmt === 0 || dmr === 0 || dmb === 0 || dml === 0) {
    let css = '';
    if (typeof dm === 'number' && (dm || dm === 0)) {
      css = `margin:${dm}px;`;
    } else {
      if (typeof dmt === 'number' && (dmt || dmt === 0)) {
        css += `margin-top:${dmt}px;`;
      }
      if (typeof dmr === 'number' && (dmr || dmr === 0)) {
        css += `margin-right:${dmr}px;`;
      }
      if (typeof dmb === 'number' && (dmb || dmb === 0)) {
        css += `margin-bottom:${dmb}px;`;
      }
      if (typeof dml === 'number' && (dml || dml === 0)) {
        css += `margin-left:${dml}px;`;
      }
    }
    combination += `@media (max-width: 1199px){${css}}`;
  }
  if (tm || tmt || tmr || tmb || tml || tm === 0 || tmt === 0 || tmr === 0 || tmb === 0 || tml === 0) {
    let css = '';
    if (typeof tm === 'number' && (tm || tm === 0)) {
      css = `margin:${tm}px;`;
    } else {
      if (typeof tmt === 'number' && (tmt || tmt === 0)) {
        css += `margin-top:${tmt}px;`;
      }
      if (typeof tmr === 'number' && (tmr || tmr === 0)) {
        css += `margin-right:${tmr}px;`;
      }
      if (typeof tmb === 'number' && (tmb || tmb === 0)) {
        css += `margin-bottom:${tmb}px;`;
      }
      if (typeof tml === 'number' && (tml || tml === 0)) {
        css += `margin-left:${tml}px;`;
      }
    }
    combination += `@media (max-width:991px){${css}}`;
  }
  if (pm || pmt || pmr || pmb || pml || pm === 0 || pmt === 0 || pmr === 0 || pmb === 0 || pml === 0) {
    let css = '';
    if (typeof pm === 'number' && (pm || pm === 0)) {
      css = `margin:${pm}px;`;
    } else {
      if (typeof pmt === 'number' && (pmt || pmt === 0)) {
        css += `margin-top:${pmt}px;`;
      }
      if (typeof pmr === 'number' && (pmr || pmr === 0)) {
        css += `margin-right:${pmr}px;`;
      }
      if (typeof pmb === 'number' && (pmb || pmb === 0)) {
        css += `margin-bottom:${pmb}px;`;
      }
      if (typeof pml === 'number' && (pml || pml === 0)) {
        css += `margin-left:${pml}px;`;
      }
    }
    combination += `@media (max-width:767px){${css}}`;
  }
  if (m || mt || mr || mb || ml || m === 0 || mt === 0 || mr === 0 || mb === 0 || ml === 0) {
    let margin = '';
    if (typeof m === 'number' && (m || m === 0)) {
      margin = `margin:${m}px;`;
    } else {
      if (typeof mt === 'number' && (mt || mt === 0)) {
        margin += `margin-top:${mt}px;`;
      }
      if (typeof mr === 'number' && (mr || mr === 0)) {
        margin += `margin-right:${mr}px;`;
      }
      if (typeof mb === 'number' && (mb || mb === 0)) {
        margin += `margin-bottom:${mb}px;`;
      }
      if (typeof ml === 'number' && (ml || ml === 0)) {
        margin += `margin-left:${ml}px;`;
      }
    }
    combination += margin;
  }
  return combination;
};

/*
 * 定义圆角
 * @param: number,全部。[1,1,1,1]，指定四个角,上右下左
 */
const rounded = ({r}) => {
  let rounded = '';
  if (r) {
    if (typeof r === 'number') {
      rounded = `${r}px`;
    }
    if (typeof r === 'object') {
      r.forEach(i => (rounded = rounded + `${i}px `));
    }
  }
  return `border-radius:${r === 0 ? '0' : rounded};`;
};

/*
 * 定义列的百分比
 * @param: column, 1~10
 * */
const column = ({col}) => {
  let percentage;
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
  return `width:${percentage}%;`;
};

/*
 * 透明度
 * @param: o, number
 * */
const opacity = ({o}) => {
  let opacity = '';
  if (o === 0) {
    opacity = `opacity:0;`;
  }
  if (o && typeof o === 'number') {
    opacity = o > 9 ? `opacity:1;` : `opacity:.${o};`;
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

const position = props => {
  const {_dpr, _dpa, _dpf, _dpi, _dz, _dt, _dr, _db, _dl, _tpr, _tpa, _tpf, _tpi, _tz, _tt, _tr, _tb, _tl} = props;
  const {_ppr, _ppa, _ppf, _ppi, _pz, _pt, _pb, _pl, _pr, _pa, _pf, _pi, _z, _t, _r, _b, _l, nwp} = props;
  let combination = '';
  if (_dpr || _dpa || _dpf || _dpi) {
    let css = '';
    if (_dpr && typeof _dpr === 'boolean') {
      css = 'position:relative;';
    }
    if (_dpa && typeof _dpa === 'boolean') {
      css = 'position:absolute;';
    }
    if (_dpf && typeof _dpf === 'boolean') {
      css = 'position:fixed;';
    }
    if (_dpi && typeof _dpi === 'boolean') {
      css = 'position:inherit;';
    }
    if ((_dz && typeof _dz === 'number') || _dz === 0) {
      css += `z-index:${_dz};`;
    }
    if ((_dt && typeof _dt === 'number') || _dt === 0) {
      css += `top:${_dt}px;`;
    }
    if ((_dr && typeof _dr === 'number') || _dr === 0) {
      css += `right:${_dr}px;`;
    }
    if ((_db && typeof _db === 'number') || _db === 0) {
      css += `bottom:${_db}px;`;
    }
    if ((_dl && typeof _dl === 'number') || _dl === 0) {
      css += `left:${_dl}px;`;
    }
    combination += `@media (max-width: 1199px){${css}}`;
  }
  if (_tpr || _tpa || _tpf || _tpi) {
    let css = '';
    if (_tpr && typeof _tpr === 'boolean') {
      css = 'position:relative;';
    }
    if (_tpa && typeof _tpa === 'boolean') {
      css = 'position:absolute;';
    }
    if (_tpf && typeof _tpf === 'boolean') {
      css = 'position:fixed;';
    }
    if (_tpi && typeof _tpi === 'boolean') {
      css = 'position:inherit;';
    }
    if ((_tz && typeof _tz === 'number') || _tz === 0) {
      css += `z-index:${_tz};`;
    }
    if ((_tt && typeof _tt === 'number') || _tt === 0) {
      css += `top:${_tt}px;`;
    }
    if ((_tr && typeof _tr === 'number') || _tr === 0) {
      css += `right:${_tr}px;`;
    }
    if ((_tb && typeof _tb === 'number') || _tb === 0) {
      css += `bottom:${_tb}px;`;
    }
    if ((_tl && typeof _tl === 'number') || _tl === 0) {
      css += `left:${_tl}px;`;
    }
    combination += `@media (max-width: 991px){${css}}`;
  }
  if (_ppr || _ppa || _ppf || _ppi) {
    let css = '';
    if (_ppr && typeof _ppr === 'boolean') {
      css = 'position:relative;';
    }
    if (_ppa && typeof _ppa === 'boolean') {
      css = 'position:absolute;';
    }
    if (_ppf && typeof _ppf === 'boolean') {
      css = 'position:fixed;';
    }
    if (_ppi && typeof _ppi === 'boolean') {
      css = 'position:inherit;';
    }
    if ((_pz && typeof _pz === 'number') || _pz === 0) {
      css += `z-index:${_pz};`;
    }
    if ((_pt && typeof _pt === 'number') || _pt === 0) {
      css += `top:${_pt}px;`;
    }
    if ((_pr && typeof _pr === 'number') || _pr === 0) {
      css += `right:${_pr}px;`;
    }
    if ((_pb && typeof _pb === 'number') || _pb === 0) {
      css += `bottom:${_pb}px;`;
    }
    if ((_pl && typeof _pl === 'number') || _pl === 0) {
      css += `left:${_pl}px;`;
    }
    combination += `@media (max-width: 767px){${css}}`;
  }
  if (_pr || _pa || _pf || _pi) {
    let css = '';
    if (_pr && typeof _pr === 'boolean') {
      css = 'position:relative;';
    }
    if (_pa && typeof _pa === 'boolean') {
      css = `position:absolute;${nwp ? '' : `width:100%;`}`;
    }
    if (_pf && typeof _pf === 'boolean') {
      css = `position:fixed;${nwp ? '' : `width:100%;`}`;
    }
    if (_pi && typeof _pi === 'boolean') {
      css = 'position:inherit;';
    }
    if ((_z && typeof _z === 'number') || _z === 0) {
      css += `z-index:${_z};`;
    }
    if ((_t && typeof _t === 'number') || _t === 0) {
      css += `top:${_t}px;`;
    }
    if ((_r && typeof _r === 'number') || _r === 0) {
      css += `right:${_r}px;`;
    }
    if ((_b && typeof _b === 'number') || _b === 0) {
      css += `bottom:${_b}px;`;
    }
    if ((_l && typeof _l === 'number') || _l === 0) {
      css += `left:${_l}px;`;
    }
    combination += css;
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

export const Div = styled.div`
    ${props => props['fd'] && flexDirection(props['fd'])}
    ${props => props['dfd'] && media_container.desktop`${flexDirection(props['dfd'])}`}
    ${props => props['tfd'] && media_container.tablet`${flexDirection(props['tfd'])}`}
    ${props => props['pfd'] && media_container.phone`${flexDirection(props['pfd'])}`}
     
    ${props => props['fw'] && flexWrap(props['fw'])}
    ${props => props['dfw'] && media_container.desktop`${flexWrap(props['dfw'])}`}
    ${props => props['tfw'] && media_container.tablet`${flexWrap(props['tfw'])}`}
    ${props => props['pfw'] && media_container.phone`${flexWrap(props['pfw'])}`}
    
    ${props => props['jc'] && justifyContent(props['jc'])}
    ${props => props['djc'] && media_container.desktop`${justifyContent(props['djc'])}`}
    ${props => props['tjc'] && media_container.tablet`${justifyContent(props['tjc'])}`}
    ${props => props['pjc'] && media_container.phone`${justifyContent(props['pjc'])}`}
    
    ${props => props['ai'] && alignItems(props['ai'])}
    ${props => props['dai'] && media_container.desktop`${alignItems(props['dai'])}`}
    ${props => props['tai'] && media_container.tablet`${alignItems(props['tai'])}`}
    ${props => props['pai'] && media_container.phone`${alignItems(props['pai'])}`}
    
    ${props => props['ac'] && alignContent(props['ac'])}
    ${props => props['as'] && alignSelf(props['as'])}
    
    ${props => props['f'] && typeof props['f'] === 'number' && `flex:${props['f']};`}
    ${props => props['df'] && media_container.desktop`${flexDirection(props['df'])}`}
    ${props => props['tf'] && media_container.tablet`${flexDirection(props['tf'])}`}
    ${props => props['pf'] && media_container.phone`${flexDirection(props['pf'])}`}
    
    ${props => props['_o'] && typeof props['_o'] === 'number' && `order:${props['_o']};`}
    ${props => props['_do'] && media_container.desktop`${`order:${props['_do']};`}`}
    ${props => props['_to'] && media_container.tablet`${`order:${props['_to']};`}`}
    ${props => props['_po'] && media_container.phone`${`order:${props['_po']};`}`}
   
    ${props => props['w'] && typeof props['w'] === 'number' && `width:${props['w']}px;`}
    ${props => props['dw'] && media_container.desktop`${`width:${props['dw']}px;`}`}
    ${props => props['tw'] && media_container.tablet`${`width:${props['tw']}px;`}`}
    ${props => props['pw'] && media_container.phone`${`width:${props['pw']}px;`}`}
    
    ${props => props['wp'] && typeof props['wp'] === 'number' && `width:${props['wp']}%;`}
    ${props => props['dwp'] && media_container.desktop`${`width:${props['dwp']}%;`}`}
    ${props => props['twp'] && media_container.tablet`${`width:${props['twp']}%;`}`}
    ${props => props['pwp'] && media_container.phone`${`width:${props['pwp']}%;`}`}
  
    ${props => props['h'] && typeof props['h'] === 'number' && `height:${props['h']}px;`}
    ${props => props['dh'] && media_container.desktop`${`height:${props['dh']}px;`}`}
    ${props => props['th'] && media_container.tablet`${`height:${props['th']}px;`}`}
    ${props => props['ph'] && media_container.phone`${`height:${props['ph']}px;`}`}
    
    ${props => props['hp'] && typeof props['hp'] === 'number' && `height:${props['hp']}%;`}
    ${props => props['dhp'] && media_container.desktop`${`height:${props['dhp']}%;`}`}
    ${props => props['thp'] && media_container.tablet`${`height:${props['thp']}%;`}`}
    ${props => props['php'] && media_container.phone`${`height:${props['php']}%;`}`}
    
    ${props => props['c'] && `color:${getColor(props['c'], props['o'])};`}
    ${props => props['fs'] && typeof props['fs'] === 'number' && `font-size:${props['fs']}px;`}
    ${props => props['dfs'] && media_container.desktop`${`font-size:${props['dfs']}px;`}`}
    ${props => props['tfs'] && media_container.tablet`${`font-size:${props['tfs']}px;`}`}
    ${props => props['pfs'] && media_container.phone`${`font-size:${props['pfs']}px;`}`}
    ${props => props['mpfs'] && media_container.miniPhone`${`font-size:${props['mpfs']}px;`}`}
    
    ${props => props['lh'] && typeof props['lh'] === 'number' && `line-height:${props['lh']}px;`}
    ${props => props['dlh'] && media_container.desktop`${`line-height:${props['dlh']}px;`}`}
    ${props => props['tlh'] && media_container.tablet`${`line-height:${props['tlh']}px;`}`}
    ${props => props['plh'] && media_container.phone`${`line-height:${props['plh']}px;`}`}
    
    ${props => props['l'] && typeof props['l'] === 'boolean' && `font-weight:300;`}
    ${props => props['b'] && typeof props['b'] === 'boolean' && `font-weight:600;`}
        
    ${props =>
  props['bg'] && typeof props['bg'] === 'string' && props['g']
    ? setBackground(props['bg'], props['g'])
    : `background:${getColor(props['bg'], props['bgo'])};`}
    ${props =>
  props['dbg'] && media_container.desktop`${props['g'] ? setBackground(props['dbg'], props['g']) : `background:${getColor(props['dbg'], props['dbgo'])};`}`}
    ${props =>
  props['tbg'] && media_container.tablet`${props['g'] ? setBackground(props['tbg'], props['g']) : `background:${getColor(props['tbg'], props['tbgo'])};`}`}
    ${props =>
  props['pbg'] && media_container.phone`${props['g'] ? setBackground(props['pbg'], props['g']) : `background:${getColor(props['pbg'], props['pbgo'])};`}`}
    
    ${props => props['br'] && typeof props['br'] === 'number' && `border-radius:${props['br']}px;`}
        
    ${props => border(props)}
    ${props => rounded(props)}
    ${props => padding(props)}
    ${props => margin(props)}
    ${props => media(props)}
    ${props => opacity(props)}
    
    ${props => props['col'] && column(props)}
    ${props => props['dcol'] && media_container.desktop`${column(props['dcol'])}`}
    ${props => props['tcol'] && media_container.tablet`${column(props['tcol'])}`}
    ${props => props['pcol'] && media_container.phone`${column(props['pcol'])}`}

		${props => position(props)}
    
    ${props => props['tl'] && typeof props['tl'] === 'boolean' && `text-align:left;`}
    ${props => props['tc'] && typeof props['tc'] === 'boolean' && `text-align:center;`}
    ${props => props['tr'] && typeof props['tr'] === 'boolean' && `text-align:right;`}
    
    ${props => props['oh'] && typeof props['oh'] === 'boolean' && `overflow:hidden;`}
    ${props => props['oa'] && typeof props['oa'] === 'boolean' && `overflow:auto;`}
    ${props => props['oy'] && typeof props['oy'] === 'boolean' && `overflow-x:auto;overflow-y:hidden;`}
    ${props => props['ox'] && typeof props['ox'] === 'boolean' && `overflow-y:auto;overflow-x:hidden;`}
    
    ${props => props['cp'] && typeof props['cp'] === 'boolean' && `cursor:pointer;`}
    ${props => props['cc'] && typeof props['cc'] === 'boolean' && `cursor:crosshair;`}
    
    ${props => props['xw'] && typeof props['xw'] === 'number' && `max-width:${props['xw']}px;`}
    ${props => props['nw'] && typeof props['nw'] === 'number' && `min-width:${props['nw']}px;`}
    
    ${props => props['xwp'] && typeof props['xwp'] === 'number' && `max-width:${props['xwp']}%;`}
    ${props => props['nwp'] && typeof props['nwp'] === 'number' && `min-width:${props['nwp']}%;`}
    
    ${props => props['xh'] && typeof props['xh'] === 'number' && `max-height:${props['xh']}px;`}
    ${props => props['nh'] && typeof props['nh'] === 'number' && `min-height:${props['nh']}px;`}
    
    ${props => props['xhp'] && typeof props['xhp'] === 'number' && `max-height:${props['xhp']}%;`}
    ${props => props['nhp'] && typeof props['nhp'] === 'number' && `min-height:${props['nhp']}%;`}
    ${props => props['ns'] && typeof props['ns'] === 'boolean' && `user-select: none;`}
    ${props =>
  props['bs'] &&
  typeof props['bs'] === 'object' &&
  `box-shadow:${props['bs'][0]}px ${props['bs'][1]}px ${props['bs'][2]}px rgba(0,0,0,${props['bs'][3]});`} 
    ${props => props['tr'] && typeof props['tr'] === 'number' && `transform:rotate(${props['tr']}deg);`}   
        
    ${props =>
  props['ch'] &&
  `
        :hover{color:${getColor(props['ch'], props['cho'], true)};transition: all 0.5s;}
    `} 
    ${props =>
  props['bh'] &&
  `
        :hover{background:${getColor(props['bh'], props['bho'])};transition: all 0.5s;}
    `} 
    
    box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;
   
`;

/*
 * 改造img
 * 属性 width,height,border-radius,border,padding,margin
 * */
export const Img = styled.img`
    object-fit:cover;
    ${props => props['xw'] && typeof props['xw'] === 'number' && `max-width:${props['xw']}px;`}
    ${props => props['nw'] && typeof props['nw'] === 'number' && `min-width:${props['nw']}px;`}

    ${props => props['xwp'] && typeof props['xwp'] === 'number' && `max-width:${props['xwp']}%;`}
    ${props => props['nwp'] && typeof props['nwp'] === 'number' && `min-width:${props['nwp']}%;`}

     ${props => props['xh'] && typeof props['xh'] === 'number' && `max-height:${props['xh']}px;`}
    ${props => props['nh'] && typeof props['nh'] === 'number' && `min-height:${props['nh']}px;`}

    ${props => props['xhp'] && typeof props['xhp'] === 'number' && `max-height:${props['xhp']}%;`}
    ${props => props['nhp'] && typeof props['nhp'] === 'number' && `min-height:${props['nhp']}%;`}

    ${props => props['w'] && typeof props['w'] === 'number' && `width:${props['w']}px;`}
    ${props => props['dw'] && media_container.desktop`${`width:${props['dw']}px;`}`}
    ${props => props['tw'] && media_container.tablet`${`width:${props['tw']}px;`}`}
    ${props => props['pw'] && media_container.phone`${`width:${props['pw']}px;`}`}
    
    ${props => props['wp'] && typeof props['wp'] === 'number' && `width:${props['wp']}%;`}
    ${props => props['wwp'] && media_container.desktop`${`width:${props['dwp']}%;`}`}
    ${props => props['twp'] && media_container.tablet`${`width:${props['twp']}%;`}`}
    ${props => props['pwp'] && media_container.phone`${`width:${props['pwp']}%;`}`}
  
    ${props => props['h'] && typeof props['h'] === 'number' && `height:${props['h']}px;`}
    ${props => props['dh'] && media_container.desktop`${`height:${props['dh']}px;`}`}
    ${props => props['th'] && media_container.tablet`${`height:${props['th']}px;`}`}
    ${props => props['ph'] && media_container.phone`${`height:${props['ph']}px;`}`}
    
    ${props => props['hp'] && typeof props['hp'] === 'number' && `height:${props['hp']}%;`}
    ${props => props['dhp'] && media_container.desktop`${`height:${props['dhp']}%;`}`}
    ${props => props['thp'] && media_container.tablet`${`height:${props['thp']}%;`}`}
    ${props => props['php'] && media_container.phone`${`height:${props['php']}%;`}`}
    ${props => props['br'] && typeof props['br'] === 'number' && `border-radius:${props['br']}px;`};
    
    ${props => border(props)}
    ${props => rounded(props)}
    ${props => padding(props)}
    ${props => margin(props)}
    ${props => media(props)}
     ${props => opacity(props)}
`;

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
const getButton = (props, type) => {
  const {xs, s, l, xl, bg, bgo, g, c, co, b, bt, br, bb, bl, bro, i = false, fs, pfs} = props;
  let {r} = props;
  let rounded = '';

  let style = `line-height: 1.42857143;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    touch-action: manipulation;
    ${type === 'button' && 'text-align: center;'}
    background-image: none;
    -webkit-appearance: button;
    -webkit-writing-mode: horizontal-tb !important;
    `;

  const background = bgo === 0 && !bg ? 'rgba(255,255,255,0)' : getColor(bg, bgo);
  const color = getColor(c, co);

  let padding = type === 'button' ? '6px 16px' : '6px',
    fontWeight = '400',
    border = `1px solid ${Color.fc};`,
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
      rounded = `${r}px`;
    }
    if (typeof r === 'object') {
      r.forEach(i => (rounded = rounded + `${i}px `));
    }
  }

  //判断是否手动设置
  fontSize = fs || pfs ? fontSize + 'px' : fontSize;

  const [gs, ge] = getGradient(bg);
  let gradient = `
        background-color: ${gs};
        background-image: -webkit-linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
        background-image: -moz-linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
        background-image: -o-linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
        background-image: -ms-linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
        background-image: linear-gradient(${g}deg, ${gs} 0%, ${ge} 100%);
    `;

  return (
    style +
    `
        padding:${padding};
        font-size:${fontSize};
        font-weight:${fontWeight};
        ${!b && !bt && !br && !bb && !bl ? `border:${bgo === 0 || bg ? `1px solid ${getColor(bg, bro)};` : border}` : ''}
        border-radius:${r === 0 ? '0' : rounded || borderRadius};
        background:${g ? gradient : background};
        color:${c ? color : bg ? (bgo === 0 ? getColor(bg) : Color.ff) : Color.f6};
        line-height:${lineHeight};
    `
  );
};

const buttonIcon = () => {
  return `
    span{display:block;float:left;padding-bottom:0;padding-top:1px;}
    span:first-child{margin-right:3px;}
    span:first-child>svg{padding-top:1px;}
  `;
};

/*
 * 改造button
 * 属性 width,height,border-radius,border,padding,margin
 * 全宽 a
 * */
export const Button = styled.button`
	transition: all 0.5s;
    :hover {
    	transition: all 0.5s;
        background: ${props => (props['bg'] ? getColor(props['bg'], props['bgo'], true) : '#eceff1;')}
        ${props =>
  (props['bgo'] || props['bgo'] === 0) &&
  `
            border:${props.b ? props.b[0] : `1`}px ${props.b && props.b[1] && props.b[1] === 'd' ? `dashed` : `solid`} ${getColor(
    props.b ? props.b[2] : props['bg'],
    null,
    1
  )}
            color:${getColor(props.b ? props.b[2] : props['bgo'] === 0 ? props['bg'] : '', null, 1)}
        `}
    }

    ${props => props['fd'] && flexDirection(props['fd'])}
    ${props => props['dfd'] && media_container.desktop`${flexDirection(props['dfd'])}`}
    ${props => props['tfd'] && media_container.tablet`${flexDirection(props['tfd'])}`}
    ${props => props['pfd'] && media_container.phone`${flexDirection(props['pfd'])}`}
     
    ${props => props['fw'] && flexWrap(props['fw'])}
    ${props => props['dfw'] && media_container.desktop`${flexWrap(props['dfw'])}`}
    ${props => props['tfw'] && media_container.tablet`${flexWrap(props['tfw'])}`}
    ${props => props['pfw'] && media_container.phone`${flexWrap(props['pfw'])}`}
    
    ${props => props['jc'] && justifyContent(props['jc'])}
    ${props => props['djc'] && media_container.desktop`${justifyContent(props['djc'])}`}
    ${props => props['tjc'] && media_container.tablet`${justifyContent(props['tjc'])}`}
    ${props => props['pjc'] && media_container.phone`${justifyContent(props['pjc'])}`}
    
    ${props => props['ai'] && alignItems(props['ai'])}
    ${props => props['dai'] && media_container.desktop`${alignItems(props['dai'])}`}
    ${props => props['tai'] && media_container.tablet`${alignItems(props['tai'])}`}
    ${props => props['pai'] && media_container.phone`${alignItems(props['pai'])}`}
    ${props => props['ac'] && alignContent(props['ac'])}
    ${props => props['as'] && alignSelf(props['as'])}
    ${props => props['f'] && typeof props['f'] === 'number' && `flex:${props['f']};`}
    ${props => props['df'] && media_container.desktop`${flexDirection(props['df'])}`}
    ${props => props['tf'] && media_container.tablet`${flexDirection(props['tf'])}`}
    ${props => props['pf'] && media_container.phone`${flexDirection(props['pf'])}`}
    ${props => props['_o'] && typeof props['_o'] === 'number' && `order:${props['_o']};`}

    ${props => props['w'] && typeof props['w'] === 'number' && `width:${props['w']}px;`}
    ${props => props['h'] && typeof props['h'] === 'number' && `height:${props['h']}px;`}
    ${props => props['br'] && typeof props['br'] === 'number' && `border-radius:${props['br']}px;`}
   
    ${props => props['a'] && typeof props['a'] === 'boolean' && `width:100%;`}
    ${props => border(props)}
    ${props => margin(props)}
    ${props => getButton(props, 'button')}
    ${props => media(props)}
     ${props => opacity(props)}
    ${props => props['col'] && column(props)}
    ${props => props['_pr'] && typeof props['_pr'] === 'boolean' && `position:relative;`}
    ${props => props['_pa'] && typeof props['_pa'] === 'boolean' && `position:absolute;width:100%;`}
    ${props => props['_pf'] && typeof props['_pf'] === 'boolean' && `position:fixed;width:100%;`}
    ${props => props['_pi'] && typeof props['_pi'] === 'boolean' && `position:inherit;`}
    ${props => props['_z'] && typeof props['_z'] === 'number' && `z-index:${props['_z']};`}
    ${props => (props['_t'] || props['_t'] === 0) && typeof props['_t'] === 'number' && `top:${props['_t']}px;`}
    ${props => (props['_r'] || props['_r'] === 0) && typeof props['_r'] === 'number' && `right:${props['_r']}px;`}
    ${props => (props['_b'] || props['_b'] === 0) && typeof props['_b'] === 'number' && `bottom:${props['_b']}px;`}
    ${props => (props['_l'] || props['_l'] === 0) && typeof props['_l'] === 'number' && `left:${props['_l']}px;`}

    ${props => props['tl'] && typeof props['tl'] === 'boolean' && `text-align:left;`}
    ${props => props['tc'] && typeof props['tc'] === 'boolean' && `text-align:center;`}
    ${props => props['tr'] && typeof props['tr'] === 'boolean' && `text-align:right;`}
    ${props => props['fs'] && typeof props['fs'] === 'number' && `font-size:${props['fs']}px;`}
    ${props => props['dfs'] && media_container.desktop`${`font-size:${props['dfs']}px;`}`}
    ${props => props['tfs'] && media_container.tablet`${`font-size:${props['tfs']}px;`}`}
    ${props => props['pfs'] && media_container.phone`${`font-size:${props['pfs']}px;`}`}
    ${props => props['mpfs'] && media_container.miniPhone`${`font-size:${props['mpfs']}px;`}`}
    ${props => props['cp'] && typeof props['cd'] === 'boolean' && `cursor:pointer;`}
    ${props => props['cd'] && typeof props['cd'] === 'boolean' && `cursor:default;`}
    
    ${props => props['d'] && typeof props['d'] === 'boolean' && `disabled:disabled;`}
    
    ${props => props['i'] && buttonIcon()}
    ${props =>
  props['ch'] &&
  `
        :hover{transition: all 0.5s;color:${getColor(props['ch'], props['cho'], true)};}
    `} 
    ${props =>
  props['bh'] &&
  `
        :hover{transition: all 0.5s;background:${getColor(props['bh'], props['bho'])};}
    `} 
`;

/*
 * 设置输入框placeholder颜色
 * */
const setColor = ({c, b, bg}) => {
  let color = '#333';
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
export const Input = styled.input`
    ::-webkit-input-placeholder {color:${props => setColor(props)};${props => props['phfs'] && `font-size:${props['phfs']}px;`}}
    :-moz-placeholder {color:${props => setColor(props)};${props => props['phfs'] && `font-size:${props['phfs']}px;`}}
    ::-moz-placeholder {color:${props => setColor(props)};${props => props['phfs'] && `font-size:${props['phfs']}px;`}}
    :-ms-input-placeholder {color:${props => setColor(props)};${props => props['phfs'] && `font-size:${props['phfs']}px;`}}
    ${props => props['w'] && typeof props['w'] === 'number' && `width:${props['w']}px;`}
    ${props => props['dw'] && media_container.desktop`${`width:${props['dw']}px;`}`}
    ${props => props['tw'] && media_container.tablet`${`width:${props['tw']}px;`}`}
    ${props => props['pw'] && media_container.phone`${`width:${props['pw']}px;`}`}
    
    ${props => props['wp'] && typeof props['wp'] === 'number' && `width:${props['wp']}%;`}
    ${props => props['wwp'] && media_container.desktop`${`width:${props['dwp']}%;`}`}
    ${props => props['twp'] && media_container.tablet`${`width:${props['twp']}%;`}`}
    ${props => props['pwp'] && media_container.phone`${`width:${props['pwp']}%;`}`}
  
    ${props => props['h'] && typeof props['h'] === 'number' && `height:${props['h']}px;`}
    ${props => props['dh'] && media_container.desktop`${`height:${props['dh']}px;`}`}
    ${props => props['th'] && media_container.tablet`${`height:${props['th']}px;`}`}
    ${props => props['ph'] && media_container.phone`${`height:${props['ph']}px;`}`}
    
    ${props => props['hp'] && typeof props['hp'] === 'number' && `height:${props['hp']}%;`}
    ${props => props['dhp'] && media_container.desktop`${`height:${props['dhp']}%;`}`}
    ${props => props['thp'] && media_container.tablet`${`height:${props['thp']}%;`}`}
    ${props => props['php'] && media_container.phone`${`height:${props['php']}%;`}`}
    ${props => props['br'] && typeof props['br'] === 'number' && `border-radius:${props['br']}px;`}
    ${props => props['a'] && typeof props['a'] === 'boolean' && `width:100%;`}
    ${props => props['fs'] && typeof props['fs'] === 'number' && `font-size:${props['fs']}px;`}
    ${props => props['dfs'] && media_container.desktop`${`font-size:${props['dfs']}px;`}`}
    ${props => props['tfs'] && media_container.tablet`${`font-size:${props['tfs']}px;`}`}
    ${props => props['pfs'] && media_container.phone`${`font-size:${props['pfs']}px;`}`}
    ${props => props['mpfs'] && media_container.miniPhone`${`font-size:${props['pfs']}px;`}`}
    
    ${props => props['tl'] && typeof props['tl'] === 'boolean' && `text-align:left;vertical-align:middle;`}
    ${props => props['tc'] && typeof props['tc'] === 'boolean' && `text-align:center;vertical-align:middle;`}
    ${props => props['tr'] && typeof props['tr'] === 'boolean' && `text-align:right;vertical-align:middle;`}
    
    ${props => border(props)}
    ${props => margin(props)}
    ${props => getButton(props, 'input')}
    ${props => media(props)}
     ${props => opacity(props)}
`;

/*
 * 改造 textarea
 * 其它属性同 input
 * ro:  可见行数，数字
 * */
export const Textarea = styled.textarea`
    ${props => props['w'] && typeof props['w'] === 'number' && `width:${props['w']}px;`}
    ${props => props['dw'] && media_container.desktop`${`width:${props['dw']}px;`}`}
    ${props => props['tw'] && media_container.tablet`${`width:${props['tw']}px;`}`}
    ${props => props['pw'] && media_container.phone`${`width:${props['pw']}px;`}`}
    
    ${props => props['wp'] && typeof props['wp'] === 'number' && `width:${props['wp']}%;`}
    ${props => props['wwp'] && media_container.desktop`${`width:${props['dwp']}%;`}`}
    ${props => props['twp'] && media_container.tablet`${`width:${props['twp']}%;`}`}
    ${props => props['pwp'] && media_container.phone`${`width:${props['pwp']}%;`}`}
  
    ${props => props['h'] && typeof props['h'] === 'number' && `height:${props['h']}px;`}
    ${props => props['dh'] && media_container.desktop`${`height:${props['dh']}px;`}`}
    ${props => props['th'] && media_container.tablet`${`height:${props['th']}px;`}`}
    ${props => props['ph'] && media_container.phone`${`height:${props['ph']}px;`}`}
    
    ${props => props['hp'] && typeof props['hp'] === 'number' && `height:${props['hp']}%;`}
    ${props => props['dhp'] && media_container.desktop`${`height:${props['dhp']}%;`}`}
    ${props => props['thp'] && media_container.tablet`${`height:${props['thp']}%;`}`}
    ${props => props['php'] && media_container.phone`${`height:${props['php']}%;`}`}
    ${props => props['br'] && typeof props['br'] === 'number' && `border-radius:${props['br']}px;`}
    ${props => props['a'] && typeof props['a'] === 'boolean' && `width:100%;`}
    ${props => props['fs'] && typeof props['fs'] === 'number' && `font-size:${props['fs']}px;`}
    ${props => props['dfs'] && media_container.desktop`${`font-size:${props['dfs']}px;`}`}
    ${props => props['tfs'] && media_container.tablet`${`font-size:${props['tfs']}px;`}`}
    ${props => props['pfs'] && media_container.phone`${`font-size:${props['pfs']}px;`}`}
    ${props => props['mpfs'] && media_container.miniPhone`${`font-size:${props['pfs']}px;`}`}
	${props => props['ro'] && `rows:${props['ro']};`}
   
    ${props => border(props)}
    ${props => margin(props)}
    ${props => getButton(props, 'input')}
    ${props => media(props)}
     ${props => opacity(props)}
`;

/*
 * 改变a链接
 * color,font-size,line-height,border,padding,margin
 * :hover ch,cho 颜色，透明度
 * */
export const A = styled.a`
    ${props => props['fd'] && flexDirection(props['fd'])}
    ${props => props['dfd'] && media_container.desktop`${flexDirection(props['dfd'])}`}
    ${props => props['tfd'] && media_container.tablet`${flexDirection(props['tfd'])}`}
    ${props => props['pfd'] && media_container.phone`${flexDirection(props['pfd'])}`}
     
    ${props => props['fw'] && flexWrap(props['fw'])}
    ${props => props['dfw'] && media_container.desktop`${flexWrap(props['dfw'])}`}
    ${props => props['tfw'] && media_container.tablet`${flexWrap(props['tfw'])}`}
    ${props => props['pfw'] && media_container.phone`${flexWrap(props['pfw'])}`}
    
    ${props => props['jc'] && justifyContent(props['jc'])}
    ${props => props['djc'] && media_container.desktop`${justifyContent(props['djc'])}`}
    ${props => props['tjc'] && media_container.tablet`${justifyContent(props['tjc'])}`}
    ${props => props['pjc'] && media_container.phone`${justifyContent(props['pjc'])}`}
    
    ${props => props['ai'] && alignItems(props['ai'])}
    ${props => props['dai'] && media_container.desktop`${alignItems(props['dai'])}`}
    ${props => props['tai'] && media_container.tablet`${alignItems(props['tai'])}`}
    ${props => props['pai'] && media_container.phone`${alignItems(props['pai'])}`}
    ${props => props['ac'] && alignContent(props['ac'])}
    ${props => props['as'] && alignSelf(props['as'])}
    ${props => props['f'] && typeof props['f'] === 'number' && `flex:${props['f']};`}
    ${props => props['df'] && media_container.desktop`${flexDirection(props['df'])}`}
    ${props => props['tf'] && media_container.tablet`${flexDirection(props['tf'])}`}
    ${props => props['pf'] && media_container.phone`${flexDirection(props['pf'])}`}
    ${props => props['_o'] && typeof props['_o'] === 'number' && `order:${props['_o']};`}
    
    ${props => props['w'] && typeof props['w'] === 'number' && `width:${props['w']}px;`}
    ${props => props['dw'] && media_container.desktop`${`width:${props['dw']}px;`}`}
    ${props => props['tw'] && media_container.tablet`${`width:${props['tw']}px;`}`}
    ${props => props['pw'] && media_container.phone`${`width:${props['pw']}px;`}`}
    
    ${props => props['wp'] && typeof props['wp'] === 'number' && `width:${props['wp']}%;`}
    ${props => props['wwp'] && media_container.desktop`${`width:${props['dwp']}%;`}`}
    ${props => props['twp'] && media_container.tablet`${`width:${props['twp']}%;`}`}
    ${props => props['pwp'] && media_container.phone`${`width:${props['pwp']}%;`}`}
  
    ${props => props['h'] && typeof props['h'] === 'number' && `height:${props['h']}px;`}
    ${props => props['dh'] && media_container.desktop`${`height:${props['dh']}px;`}`}
    ${props => props['th'] && media_container.tablet`${`height:${props['th']}px;`}`}
    ${props => props['ph'] && media_container.phone`${`height:${props['ph']}px;`}`}
    
    ${props => props['hp'] && typeof props['hp'] === 'number' && `height:${props['hp']}%;`}
    ${props => props['dhp'] && media_container.desktop`${`height:${props['dhp']}%;`}`}
    ${props => props['thp'] && media_container.tablet`${`height:${props['thp']}%;`}`}
    ${props => props['php'] && media_container.phone`${`height:${props['php']}%;`}`}

    ${props =>
  props['bg'] && typeof props['bg'] === 'string' && props['g']
    ? setBackground(props['bg'], props['g'])
    : `background:${getColor(props['bg'], props['bgo'])};`}
    ${props => props['br'] && typeof props['br'] === 'number' && `border-radius:${props['br']}px;`}

    ${props => props['c'] && typeof props['c'] === 'string' && `color:${getColor(props['c'], props['o'])};`}
    ${props => props['fs'] && typeof props['fs'] === 'number' && `font-size:${props['fs']}px;`}
    ${props => props['dfs'] && media_container.desktop`${`font-size:${props['dfs']}px;`}`}
    ${props => props['tfs'] && media_container.tablet`${`font-size:${props['tfs']}px;`}`}
    ${props => props['pfs'] && media_container.phone`${`font-size:${props['pfs']}px;`}`}
   
    ${props => props['lh'] && typeof props['lh'] === 'number' && `line-height:${props['lh']}px;`}
    ${props => props['dlh'] && media_container.desktop`${`line-height:${props['dlh']}px;`}`}
    ${props => props['tlh'] && media_container.tablet`${`line-height:${props['tlh']}px;`}`}
    ${props => props['plh'] && media_container.phone`${`line-height:${props['plh']}px;`}`}
    ${props => border(props)}
    ${props => padding(props)}
    ${props => margin(props)}
    ${props => media(props)}
     ${props => opacity(props)}
    ${props => props['col'] && column(props)}

    ${props =>
  props['ch'] &&
  `
        :hover{transition: all 0.5s;color:${getColor(props['ch'], props['cho'], true)};}
    `}
    ${props =>
  props['bh'] &&
  `
        :hover{transition: all 0.5s;background:${getColor(props['bh'], props['bho'])};}
    `}
`;

/*
 * 改造行内元素
 * 标签 h1~h6,p,span
 * 可定义 color,background,padding,margin,font-size,line-height
 * */
const text = props => {
  let res = '';
  if (props && props['c']) {
    res = `color:${getColor(props['c'], props['o'])};`;
  }
  if (props && props['fs']) {
    res = res + `font-size:${props['fs']}px;`;
  }
  if (props && props['dfs']) {
    res = res + `@media (max-width: 1200px){font-size:${props['dfs']}px;}`;
  }
  if (props && props['tfs']) {
    res = res + `@media (max-width: 992px){font-size:${props['tfs']}px;}`;
  }
  if (props && props['pfs']) {
    res = res + `@media (max-width: 768px){font-size:${props['pfs']}px;}`;
  }
  if (props && props['lh']) {
    res = res + `line-height:${props['lh']}px;`;
  }
  if (props && props['dlh']) {
    res = res + `@media (max-width: 1200px){line-height:${props['dlh']}px;}`;
  }
  if (props && props['tlh']) {
    res = res + `@media (max-width: 992px){line-height:${props['tlh']}px;}`;
  }
  if (props && props['plh']) {
    res = res + `@media (max-width: 768px){line-height:${props['plh']}px;}`;
  }
  if (props && props['bg']) {
    res = res + `background:${getColor(props['bg'], props['bgo'])};`;
  }
  if (props && props['l']) {
    res = res + `font-weight:300;`;
  }
  if (props && props['b']) {
    res = res + `font-weight:600;`;
  }
  if (props && props['ch']) {
    res = res + `:hover{color:${getColor(props['ch'], props['cho'], true)};transition: all 0.5s;}`;
  }
  return res;
};

export const H1 = styled.h1`${props => text(props)} ${props => padding(props)} ${props => margin(props)} ${props => media(props)}`;
export const H2 = styled.h2`${props => text(props)} ${props => padding(props)} ${props => margin(props)} ${props => media(props)}`;
export const H3 = styled.h3`${props => text(props)} ${props => padding(props)} ${props => margin(props)} ${props => media(props)}`;
export const H4 = styled.h4`${props => text(props)} ${props => padding(props)} ${props => margin(props)} ${props => media(props)}`;
export const H5 = styled.h5`${props => text(props)} ${props => padding(props)} ${props => margin(props)} ${props => media(props)}`;
export const H6 = styled.h6`${props => text(props)} ${props => padding(props)} ${props => margin(props)} ${props => media(props)}`;
export const Ul = styled.ul`${props => text(props)} ${props => padding(props)} ${props => margin(props)} ${props => media(props)}`;
export const Li = styled.li`${props => text(props)} ${props => padding(props)} ${props => margin(props)} ${props => media(props)}`;
export const Dl = styled.dl`${props => text(props)} ${props => padding(props)} ${props => margin(props)} ${props => media(props)}`;
export const Dt = styled.dt`${props => text(props)} ${props => padding(props)} ${props => margin(props)} ${props => media(props)}`;
export const Dd = styled.dd`${props => text(props)} ${props => padding(props)} ${props => margin(props)} ${props => media(props)}`;
export const Em = styled.em`${props => text(props)} ${props => padding(props)} ${props => margin(props)} ${props => media(props)}`;

export const Span = styled.span`${props => text(props)} ${props => padding(props)} ${props => margin(props)} ${props => media(props)}`;
export const P = styled(Span)``;
