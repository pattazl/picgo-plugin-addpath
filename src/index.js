"use strict";
const pluginConfig = ctx => {
    let userConfig = ctx.getConfig('picgo-plugin-addpath');
    if (!userConfig) {
        userConfig = {};
    }
    return [
    {
            name: 'remotePath',
            type: 'input',
            alias: '远端添加路径',
            default: userConfig.remotePath || '',
            message: '在原路径后添加路径,如原路径C:\\,则为c:\\blog_pics',
            required: false
        }
    ];
};
module.exports = (ctx) => {
    const register = () => {
        ctx.helper.beforeUploadPlugins.register('addpath', {
            async handle(ctx) {
                // console.log(ctx)
                let userConfig = ctx.getConfig('picgo-plugin-addpath');
                if (!userConfig) {
                    userConfig = {
                        remotePath: ''
                    };
                }
                //console.log(process.argv);
                //console.log(ctx.output);
                //console.log(ctx.cmd.program.args);
                // 如果存在 : 的内容，表明是需要增加文件夹，并且移除
                var newPath = '',prefixCode=':';
                var arr = ctx.cmd.program.args||[];
                arr.some(s => {
                    // 以:冒号开头并不为空
                    if (s.indexOf(prefixCode) == 0 && s.length>prefixCode.length) {
                        newPath = s.replace(prefixCode,'');
                        return true; // 找到符合要求
                    } else {
                        return false;
                    }
                });
                // 如果没有命令行传参，则用配置路径
                if( newPath == '')
                {
                    newPath = userConfig.remotePath;
                }
                for (let i = 0; i < ctx.output.length; i++) {
                    let fileName = ctx.output[i].fileName;
                    ctx.output[i].fileName =  newPath + '/' + fileName;
                }
            },
            config: pluginConfig
        });
    };
    return {
        register,
        config: pluginConfig
    };
};
