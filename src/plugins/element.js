import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//国际化，设置语言
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
//默认使用英文
locale.use(lang);

Vue.use(Element)
