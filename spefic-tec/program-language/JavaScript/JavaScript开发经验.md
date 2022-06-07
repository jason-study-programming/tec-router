# JavaScript开发经验



## 问题处理



### HTML元素没有完成加载

**内嵌模式下的解决方案：**

1.内嵌的代码写在元素加载完成事件的响应函数中

```html
<script>
    document.addEventListener("DOMContentLoaded", function(){
        ...
    });
</script>
```

2.将代码写在html元素之后

```html
<body>
    ...
    <script>
        ....
    </script>
</body>
```

**引用外部文件的解决方案：**

使用`defer`关键字

```html
<script src="main.js" defer></script>
```



### CSS 没有完成加载

**引用外部文件解决方案：**

将js代码写在window的加载完成事件的响应函数中

```javascript
window.addEventListener("load", function(){
   ... 
});
```



### 函数参数传参

使用`target.addEventListener(type, listerner)`添加事件监听时，`listener`参数为响应函数的引用。当事件发生时则调用响应函数，但是传递索引则无法给响应函数传递参数。

解决方案：

使用匿名函数对响应函数进行封装，对内可以给响应函数传递参数，对外给`listener`返回封装后的函数索引。

```javascript
let target = document.getElementById('addNewPassageButton');

function createNewPassage(content){
    let article = document.getElementById('article');
    let newPassage = document.createElement('p');
    newPassage.textContent = content;
    article.appendChild(newPassage);    
}

target.addEventListener('click', function(){
    createNewPassage("Hello World!")
});
```



### 元素位置改变事件检测

MutationOberver

https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver

不仅可以检测元素的位置发生改变，元素的其他属性的改变也可以检测。



### 获取位置信息

1.获取鼠标位置

当鼠标相关事件发生后，响应函数接收到的event对象中包含鼠标的位置属性

```javascript
function printMousePosition(event){
    console.log("X:" + event.clientX + ", Y:" + event.clientY);
}
```

2.获取元素当前位置

```javascript
let target = document.getElementById('myTarget');

let targetX = target.getBoundingClientRect().left;
let targetY = target.getBoundingClientRect().top;
```



### 事件响应冲突

**实际需求：**

mouseup用于检测鼠标拖动控件后放的放置操作，需要保留mouseup的响应处理。控件被放置后自动上锁，通过点击进行开锁，只有开锁后才能继续移动。由于控件较小，鼠标拖动控件移动时鼠标可能移动到控件外，此时松开鼠标控件检测不到mouseup事件，因此只能使用window的mouseup事件。

**问题描述：**

在处理事件响应时遇到了`window`在Capture模式下的mouseup事件与`div`的click同时发生，但是对应的相应函数维护同一个状态参数，导致相互矛盾。

**问题分析：**

首先要理解事件的检测不是由程序来完成的，而是操作系统来管理的，程序只是读取了操作系统的事件队列。因此每一个事件并不是属于某个程序。在浏览器中事件是在对象中按照一定模式逐层传递的。

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture

可以理解为click = mousedown + mouseup，而mouseup发生的前提是mousedown发生。Capture模式下`window`检测到的事件会向下传递到子元素`div`，因此当`window`将mouseup事件传递给`div`会间接导致`div`检测到click事件。

**保留mouseup的解决方案：**

计算mousedown与mouseup发生的时间差，作为判断条件

```javascript
let lockState = 'unlock';
let mouseDownTime;

let myDiv = document.getElementById('lockIt');

window.addEventListener('mousedown', function(){
    mouseDownTime = new Date();
});

//mouseup实际检测由于实际操作需要，必须检测mouseup
window.addEventListener('mouseup', function(){
    lockState = 'unlock';
});

myDiv.addEventListener('ckick', function(){
    let clickTime = new Date();
    if (Math.abs(clickTime - mouseDownTime) < 200){
        lockState = 'lock';
    }
});
```



### JS引用JS/CSS

https://css-tricks.com/the-many-ways-to-include-css-in-javascript-applications/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

### JS 修改 element class 属性列表

https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript



### 引用多个JS文件发生命名冲突

定位冲突名称，修改



### 控制页面元素的压盖次序

使用 zIndex 样式属性

https://developer.mozilla.org/en-US/docs/Web/CSS/z-index



### 判断是否是同一个对象

Oject.is();

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is



### JS动态处理元素class属性常用方法

target.classList.add(str);

增加类型

target.classList.contains(str);

检查是否为某个类型



### 字符串模板

使用的是 grave accent(`)（位于键盘中数字1左侧），而不是apostrophe(')

```javascript
`this is a template ${expression}`
```





## 常用第三方库



### 图形库

D3: 数据可视化 https://d3js.org/

Leader Line：绘制元素连线 https://github.com/anseki/leader-line

Plain Draggable: 元素的拖动效果 https://github.com/anseki/plain-draggable

