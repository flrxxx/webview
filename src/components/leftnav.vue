<template>
    <div class="leftnav">
        <div class="userinfo">
            <div class="pic">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545419493773&di=66678af10fa246c89724ecc12f287788&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201410%2F02%2F20141002234520_mSTxE.jpeg">
            </div>
            <div class="name">徐小磊</div>
        </div>
        <div class="nav">
                <a href="javascript:void(0)" class="nav_item active">
                    <i class="myicon myicon-shouye"></i>
                    <font>首页</font>
                </a>
                <a href="javascript:void(0)" class="nav_item">
                    <i class="myicon myicon-yonghu"></i>
                    <font>关于我</font>
                </a>
                <a href="javascript:void(0)" class="nav_item">
                    <i class="myicon myicon-zuopin"></i>
                    <font>作品案例</font>
                </a>
                <a href="javascript:void(0)" class="nav_item">
                    <i class="myicon myicon-icon-test"></i>
                    <font>组件开发</font>
                </a>
        </div>
        <div class="contact">
            <div class="title">联系方式</div>
            <ul class="contact_box">
                <li class="contact_item">
                    <i class="myicon myicon-shouji"></i>
                    <font>18704075051</font>
                </li>
                <li class="contact_item">
                    <i class="myicon myicon-weixin"></i>
                    <font>qq281046941</font>
                </li>
                <li class="contact_item">
                    <i class="myicon myicon-qq"></i>
                    <font>281046941</font>
                </li>
            </ul>
        </div>
        <div class="wechart">
            <img src="../image/wechart.png">
        </div>
    </div>
</template>

<script>
    export default {
        name: "leftnav"
    }
</script>

<style scoped lang="less" type="text/less">
    @navheight:40px;
    .leftnav{
        background-color: #fff;
        position: absolute;
        left: 0px;
        top:0px;
        bottom:0px;
        width: 240px;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.15);
        .userinfo{
            padding:30px 15px;
            .pic{
                width: 80px;
                height: 80px;
                border-radius: 40px;
                overflow: hidden;
                margin: 0 auto 15px;
            }
            .name{
                text-align: center;
                font-size: 16px;
            }
        }
        .nav{
            padding: 0px 30px;
            .nav_item{
                font-size: 16px;
                display: block;
                height: @navheight;
                line-height: @navheight;
                color: #8fa4af;
                transition: color 0.1s;
                margin:10px 0;
                &:hover{
                    color: #000;
                 }
                &.active{
                    color: #000;
                    &:before{
                        display: block;
                        content: "";
                        position: absolute;
                        left: 0px;
                        height: @navheight;
                        border-left: #f60 solid 3px;
                     }
                 }

            }
        }
        .myicon{
            font-size: 24px;
            vertical-align: middle;
            vertical-align: -3px;
            margin-right: 10px;
        }
        .contact{
            padding: 30px;
            .title{
                height: @navheight;
                line-height: @navheight;
            }
            .contact_item{
                height: 34px;
                line-height: 34px;
                color: #8fa4af;
                font-size: 14px;;
                transition: color 0.1s;
                .myicon{
                    font-size: 20px;
                    color: #333;
                    margin-right: 5px;
                }
            }
        }
        .wechart{
            width: 180px;
            margin: 0 auto;
        }
    }
</style>