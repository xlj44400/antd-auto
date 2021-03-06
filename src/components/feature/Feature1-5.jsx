// 含有可操作 table 栏的数据展示
import React from 'react';

import FeatureSetConfig from '../common/FeatureSetConfig';

import Immutable from 'immutable';
import Reqwest from 'reqwest';

const conf = {
    
    type: 'tableList', 
    
    // 初始化页面的数据 回调函数传入 items 列表
    initData: function(callback){

        // 接口调用数据形式
        Reqwest({
            url: '/api/oneList',
            data: {},

            type: 'json',
            success: function (data) {
                let list = data.data;
                list.forEach(function(ele) {
                    ele.key =  ele.id;
                });
                callback(list);
            }
        });
           
    },

    columns: [
        {
            title: 'ID',
            dataIndex: 'id',
            type: 'string'
        }, {
            title: '邮箱',
            dataIndex: 'email',
            type: 'string'
        }, {
            title: '日期',
            dataIndex: 'date',
            type: 'string'
        },{
            title: '图片',
            dataIndex: 'image',
            type: 'image'
        },{
            title: 'ischange',
            dataIndex: 'ischange',
            type: 'string'
        },{
            title: 'rtype',
            dataIndex: 'rtype',
            type: 'string'
        },{
            title: 'stype',
            dataIndex: 'stype',
            type: 'string'
        },{
            title: '操作',
            type: 'operate',    // 操作的类型必须为 operate
            btns: [{
                text: '更新',
                type: 'update'
            },{
                text: '展示',
                callback: function(item){
                    console.log(item)
                }
            }], // 可选
            
        }
    ],
    
    
    Update:function(data, callback){
        console.log(data);

        // 这块请求更新数据 成功回调
        data.key =  data.id;
        callback(data);
    },
  

    // 创建项目所需的字段 与 更新项目所需的字段
    // rules 规范可见 https://github.com/yiminghe/async-validator
    UType: [
        {
            name: 'id',
            label: '唯一标识',
            type: 'string',
            placeholder: '请输入标示名称',
            rules: [{ required: true, min: 5, message: '用户名至少为 5 个字符' }]
        },{
            name: 'email',
            label: '唯一标识',
            type: 'string',
            placeholder: '请输入标示名称',
            rules: [{ required: true, type: 'email', message: '请输入正确的邮箱地址' }]
        },{
            name: 'date',
            label: '项目开始时间',
            type: 'date',
        },{
            name: 'stype',
            label: '项目类型Select',
            type: 'select',
            defaultValue: 'one',
            options:[{
                text: '选项一',
                value: 'one'
            },{
                text: '选项二',
                value: 'two'
            },{
                text: '选项三',
                value: 'three'
            }]
        },{
            name: 'rtype',
            label: '项目类型Radio',
            type: 'radio',
            defaultValue: 'one',
            options:[{
                text: '选项一',
                value: 'one'
            },{
                text: '选项二',
                value: 'two'
            },{
                text: '选项三',
                value: 'three'
            }]
        },{
            name: 'ischange',
            label: '是否过滤',
            type: 'switch'
        },{
            name: 'image',
            label: '背景图片',
            type: 'imageUpload'
        }
    ]

};

const Feature = FeatureSetConfig(conf);

export default Feature;
