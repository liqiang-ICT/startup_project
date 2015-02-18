'use strict';
angular.module('myApp').controller('UserSecurityController', ['gbIdentity', function(gbIdentity) {
    var vm = this;
    vm.user = gbIdentity.currentUser;

    vm.securityObjects = [
        {
            class: "am-icon-user-secret am-icon-lg",
            title: "实名认证",
            status: vm.user.identity.id ? "已认证" : "未认证",
            url: "/user/identity",
            action: "去认证",
            show: vm.user.identity.id ? false : true
        },
        {
            class: "am-icon-mobile am-icon-lg",
            title: "绑定手机",
            status: "已认证",
            url: "#",
            action: "修改",
            show: true
        },
        {
            class: "am-icon-envelope am-icon-lg",
            title: "验证邮箱",
            status: vm.user.profile.email ? "已验证" : "未验证",
            url: "#",
            action: "修改",
            show: true
        },
        {
            class: "am-icon-key am-icon-lg",
            title: "登录密码",
            status: "已设置",
            url: "#",
            action: "修改",
            show: true
        }
    ];
}]);