var app = {
    el: '#app',
    data:
    {
        name: '', //对象名称
        tag: '',   //对象功能描述
        title:'',
        mems: [] //成员集合 
    },
    methods: {}
};

app.methods.onClick1 = function () {
    this.name = "adjustPanel";
    this.tag = "可调整控件";
    this.title="属性和方法",
    this.mems = [        {
            name: 'adjustPanel()', 
            pname: 'void',
            ptag: '无参数' 
        },{
            name: 'ReadPanel()', 
            pname: 'pathway',
            ptag: '读取路径' 
        }
    ]
};


app.methods.onClick2 = function () {
    this.name = "adjustPanelHelper";
    this.tag = "可调整控件帮助器";
    this.mems = [        {
            name: 'adjustPanelHelper()', 
            pname: 'void',
            ptag: '无参数' 
        },{
            name: 'ReadPanelFromXml()', 
            pname: 'xmlPathway',
            ptag: '文件读取路径' 
        }
    ]
};










