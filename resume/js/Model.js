window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        //初始化数据库
        init: function () {
            var APP_ID = '80nhCNBegfJaid8u89I7pJ1h-gzGzoHsz';
            var APP_KEY = 'WQCQl9wmJ6PF0So3uV4SoTWo';
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        //获取信息
        fetch: function () {
            var query = new AV.Query(resourceName);
            return query.find()
        },
        //创建数据
        save: function (object) {
            var X = AV.Object.extend(resourceName);//继承数据库
            var x = new X();//表对象
            return x.save(object)   //存数据       
        }
    }
}