let vm =new Vue({
    el:'#app',
    created(){ //初始化数据，或者进行ajax调用
        let res=localStorage.getItem('list')
        if(res==null || res=='[]'){
            this.initdata();
        }else{
            this.todos= JSON.parse(res)
        }
    },
    data:{
        todos:[],
        todo:{
            "selected":false,
            "title":''
        },
        cur:{},
        newobj:{},
        hash:'all'
    },
    methods:{
        initdata(){
            axios.get('./todo.json').then((res)=>{
                this.todos=res.data
            },(err)=>{
                console.log(err)
            });
        },
        add(){
            this.todos.push(this.todo)
            this.todo={'title':'','selected':false}

        },
        removefn(v){
            this.todos=this.todos.filter(item=>item!==v)
        },
        savecurrent(v){
            Object.assign(this.newobj,v) //克隆一份
            this.cur=v; //赋值给cur
        },
        cancel(){
            this.cur={}
        },
        submitfn(v){
            v.title=this.newobj.title;
            this.cancel()
        }
    },
    filters:{

    },
    directives:{
        autoFocus(el,bindings){
            setTimeout(()=>{
                if(bindings.value){
                    el.focus();
                }
            },0)

        }
    },
    computed:{
        notodo(){
            return (this.todos.filter(item=>!item.selected)).length;
        },
        newtodos(){
            if(this.hash==='all'){
                return this.todos
            }else if(this.hash==='unfinish'){
                return this.todos.filter(item=>!item.selected)
            }else{
                return this.todos.filter(item=>item.selected)
            }
        }
    },
    watch:{ //只能默认监控一层
        todos:{
            handler(){
                localStorage.setItem('list',JSON.stringify(this.todos))
            },deep:true
        }
    }
})

//路由：不同的路径返回不同的结果  1.hash值  2. h5 history  单页应用
//window.history.go()
//history.pushState('','','/a')
//hash值会导致路径出现#号，在开发使用这种方式
//history不会出现#号，但是刷新会导致404错误，上线时我们可能通过服务器来解决这种404问题

let listener=()=>{
    let hash=window.location.hash
    hash=hash?hash.slice(1):'all'
    vm.hash=hash;
}
listener() //进来先执行一下获取hash值的函数，以后再执行时只需要触发hashchange事件
window.addEventListener('hashchange',listener,false)