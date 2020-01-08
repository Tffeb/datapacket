import Mock from 'mockjs'
import data from './jiaoyie.json'
import chengjiao from './chengjiao.json'
import ZhiShicq from './ZhiShicq.json'
Mock.mock('/jiaoyie',{code:0,data:data.year})
Mock.mock('/chengjiao',{code:0,data:chengjiao})
Mock.mock('/ZhiShicq',{code:0,data:ZhiShicq})