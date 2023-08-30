# DedeCMS判断空值模板语法

```html
{dede:channelartlist type='son' row='10' runphp='yes'}
    if( @me == '' ) echo "this is null...";
{/dede:channelartlist}
```

其它标签判断空值，也是如此。