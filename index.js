module.exports = function vanes(str, varList = {}) {
    if (typeof str !== 'string') {
        return '';
    }
    
    if (typeof varList !== 'object' || varList === null) {
        return str;
    }
    
    return str.replace(/\{(\w+)\}/g, (_, key) => 
        varList[key] !== undefined ? varList[key] : ''
    );
};
