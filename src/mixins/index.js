import route from '../router/index'

var created =  {
    created() {
        var _self = this;
        var query = _self.$route.query;
        _self.query = (function () {
            var obj = _self.query;
            for (var x in query) {
                if (x == 'page' || x == 'page_size') {
                    obj[x] = Number(query[x]);
                } else {
                    obj[x] = query[x]
                }
            }
            return obj;
        })();
        _self.getData();
    }
}

var methods = {
    methods:{
        handleSizeChange(val) {
            this.query.page_size = val;
            route.push({query:this.query});
            this.getData();
        },
        handleCurrentChange(val) {
            this.query.page = val;
            route.push({query:this.query});
            this.getData();
        }
    }
}

export {created, methods}
