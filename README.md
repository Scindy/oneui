# Cow UI
Cow UI 是一个 完全 定制的 基于 Styled-Components 框架 和 React 组件思维的 前端 UI 库。采用Flex布局和CSS3样式编写规范。


# 特征
通过 Cow UI，你可以构建出任何随心所欲的 前端UI 界面。灵活的，定制任意你的UI界面。遵循 All in js 思想，让 CSS 样式像 React 组件一样传递参数，并通过 Styled-Components 编译生成前端 CSS样式。
Cow UI目前还处于beta状态。目前她已经可用，但你可能需要通过pull request 修复若干复杂使用场景下的问题。


# Why？
为什么发明Cow UI呢？好吧...（注意，这部份内容包含了一些我的个人观点!）
在发明 Cow UI 之前，我尝试了许多不同的 前端UI库。我发现虽然它们在编写简单示例时基本没有问题，但一旦想要构建一些 复杂和美观，自由度较高的 页面，你就会发现一些深层次的问题，比如，UI库硬 编码了文档结构规范，难以定制。类似布局结构可以开箱即用，但很多时候你无法随意进行个性化的需求定制。


# 原则
Cow UI 尝试通过一些原则来解决随心所欲定制的问题:
<li>基于Styled-Components。采用 Styled-Components 一致的构建方法，进行CSS样式的编译</li>
<li>Flex Box布局模式</li>
<li>灵活的原生HTML标签切换。将原生 HTML 标签 如div 重新改造为 Div，大写字母 开头的 React 组件</li>
<li>当你不想使用 Cow UI的时候，可以直接使用原生标签</li>
<li>简洁的参数传递。将原生 CSS 样式，尽量精减为一个字母</li>


# 官网
进入官网 [cowui.com](http://cowui.com/). 

# 用法

**使用 npm**  
npm i -s cowui

**使用 yarn**  
yarn add cowui

**ES6**  
import {Div} from 'cowui'

**API**  
#GlobalColor  
  
GlobalColor({  
  primary: '#ff3300',  
});    

primary,    
primaryRGB,    
success,    
successRGB,    
danger,    
dangerRGB,    
warning,   
warningRGB,   
info,   
infoRGB  

所有包含 RGB 的属性都是 '255,255,255' 的格式   

# 参考
[Styled-Components](https://www.styled-components.com/). 官方文档  
[HTML5](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5). 指南  
[CSS3](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_started). 指南  
[JavaScript](https://developer.mozilla.org/zh-CN/docs/Web). Web开发技术  
[React](https://reactjs.org/). 官方文档  

如果这还不够，你还可以随时阅读Cow UI的重度注释源码。


# 贡献
非常欢迎各种形式的贡献！

#团队
鱼歌科技  
进入官网 [eugle.cn](http://eugle.cn/). 
