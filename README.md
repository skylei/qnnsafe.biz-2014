qnnsafe.biz-2014
=============

全能保险柜增城花都从化代理商官网2014年版


域名绑定、301转向及nginx配置
-----

新建配置文件: ``sudo nano /etc/nginx/sites-available/qnnsafe.biz``

编辑配置文件及保存: 

    server {
        server_name qnnsafe.biz;
        return 301 http://www.qnnsafe.biz$request_uri;
    }
    server {
        server_name www.qnnsafe.biz;
        index index.html;
        root /srv/qnnsafe.biz-2014/_site;
    }

建立链接: ``sudo ln -s /etc/nginx/sites-available/qnnsafe.biz /etc/nginx/sites-enabled/``

重启nginx: ``sudo service nginx restart``


下载及生成网站
-----

1. 下载网站源码: ``git clone git://github.com/zackwong/qnnsafe.biz-2014.git``

2. 进入源码根目录: ``cd qnnsafe.biz-2014``

3. 生成网站: ``jekyll build``