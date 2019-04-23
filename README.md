# alipay_program_qrcode

支付宝小程序qrcodejs适配

`canvas`的长宽通过计算获得
```js
const QRCode = require('../../utils/weapp-qrcode.js');
const rpx2px = require('../../utils/rpx2px.js');
let qrcode;

// 300rpx 在6s上为 150px
const qrcodeWidth = rpx2px(300)

Page({
    data: {
        ...
        qrcodeWidth: qrcodeWidth,
        ...
    },
    onReady: function () {
        qrcode = new QRCode('canvas', {
            // usingIn: this,
            text: "https://github.com/wenchenkof2001/alipay_program_qrcode",
            image: '/images/bg.jpg',
            width: qrcodeWidth,
            height: qrcodeWidth,
            colorDark: "#1CA4FC",
            colorLight: "white",
            correctLevel: QRCode.CorrectLevel.H,
        });
    },
    ...
})
```

`axml`页面中：
```html
<canvas class='canvas' style="width:{{qrcodeWidth}}px; height:{{qrcodeWidth}}px;" id='canvas'></canvas>
```

`acss`中的`canvas`样式不再设置长宽。这样后就达到了自适应的效果，可以在不同设备上进行查看。
