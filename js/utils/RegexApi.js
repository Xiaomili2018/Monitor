/**
 * <pre>
 *     author : xiaomili
 *     e-mail : 946891360@qq.com
 *     time   : 2019-08-12 15:27
 *     version: 1.0.0
 *     desc   : 正则表达式判断工具类
 * </pre>
 */

export default class RegexApi {
    /**
     * 正则表达式集合
     */
    static regExp = {
        Reg_TelNo: /^1[3|4|5|6|7|8|9]\d{9}$/,// 手机号
        Reg_email: /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,//邮箱
        RegNull: /^\s*$/g,// 空字符
        invoiceTitle: /^[0-9a-zA-Z\(\)\（\）\u4e00-\u9fa5]{0,50}$/, //发票抬头
        identifyNumber: /^[A-Z0-9]{15}$|^[A-Z0-9]{17}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/, //纳税人识别号
        bankNumber: /^\d{16,19}$/, //银行卡
    };

    /**
     * 是否为手机号
     */
    static isPhone(targetString) {
        return RegexApi.regExp.Reg_TelNo.test(targetString);
    }

}
