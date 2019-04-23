const rate = my.getSystemInfoSync().windowWidth / 750
console.log(rate)
module.exports = function(rpx) {
    return rate * rpx
}