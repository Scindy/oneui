# One UI
One UI 是一个 完全 定制的 基于 Styled-Components 框架 和 React 组件思维的 前端 UI 库。采用Flex布局和CSS3样式编写规范。


# 特征
通过 One UI，你可以构建出任何随心所欲的 前端UI 界面。灵活的，定制任意你的UI界面。遵循 All in js 思想，让 CSS 样式像 React 组件一样传递参数，并通过 Styled-Components 编译生成前端 CSS样式。
One UI目前已经发布正式版，但你仍然可以通过pull request 修复若干复杂使用场景下的问题。


# Why？
为什么发明One UI呢？好吧...（注意，这部份内容包含了一些我的个人观点!）
在发明 One UI 之前，我尝试了许多不同的 前端UI库。我发现虽然它们在编写简单示例时基本没有问题，但一旦想要构建一些 复杂和美观，自由度较高的 页面，你就会发现一些深层次的问题，比如，UI库硬 编码了文档结构规范，难以定制。类似布局结构可以开箱即用，但很多时候你无法随意进行个性化的需求定制。


# 原则
One UI 尝试通过一些原则来解决随心所欲定制的问题:
<li>基于Styled-Components。采用 Styled-Components 一致的构建方法，进行CSS样式的编译</li>
<li>Flex Box布局模式</li>
<li>灵活的原生HTML标签切换。将原生 HTML 标签 如div 重新改造为 Div，大写字母 开头的 React 组件</li>
<li>当你不想使用 One UI的时候，可以直接使用原生标签</li>
<li>简洁的参数传递。将原生 CSS 样式，尽量精减为一个字母</li>

# 用法

**使用 npm**  
npm i -s @eugle/oneui

**使用 yarn**  
yarn add @eugle/oneui

**ES6**  
import {Div} from '@eugle/oneui'

**API**  
# GlobalColor  

自定义默认的颜色  
```
GlobalColor({  
	primary: '#35b8e0',  
	primaryRGB: '53,184,224',  
	primaryG: '#0081ee',  
	success: '#10c469',  
	successRGB: '16,196,105',  
	successG: '#009f5a',   
	danger: '#ff5b5b',  
	dangerRGB: '255,93,93',
	dangerG: '#e02e2e',
	warning: '#f9c851',
	warningRGB: '249,200,81',
	warningG: '#ff8a00',
	info: '#002fa7',
	infoRGB: '0,47,167',
	infoG: '#002687',
}); 
```

RGB结尾的 表示 '255,255,255' 的格式，用于透明度  
G结尾的 用于设置渐变结束的颜色  

# 参考
[Styled-Components](https://www.styled-components.com/). 官方文档  
[HTML5](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5). 指南  
[CSS3](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_started). 指南  
[JavaScript](https://developer.mozilla.org/zh-CN/docs/Web). Web开发技术  
[React](https://reactjs.org/). 官方文档  

如果这还不够，你还可以随时阅读One UI的重度注释源码。

# 贡献
非常欢迎各种形式的贡献！
