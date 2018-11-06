const fs = require('fs');
const path = require('path');

const excludeModule = ['base'];

// 根据文件夹结构规则遍历提取模块
var findModules = function () {
    const modulePath = path.resolve('core/src/elements');
    const modules = fs.readdirSync(modulePath);
    const moduleFiltered = modules.filter(item => {
        return excludeModule.indexOf(item) === -1;
    });
    return moduleFiltered;
};

module.exports = findModules();