$TTL 3600
@	IN SOA dns103.ovh.net. tech.ovh.net. (2024011405 86400 3600 3600000 60)
        IN NS     dns103.ovh.net.
        IN NS     ns103.ovh.net.
        IN MX     1 mx1.mail.ovh.net.
        IN MX     5 mx2.mail.ovh.net.
        IN MX     100 mx3.mail.ovh.net.
        IN A     185.199.108.153
        IN A     185.199.109.153
        IN A     185.199.110.153
        IN A     185.199.111.153
    600 IN TXT     "1|www.tm4soul.ch"
    600 IN TXT     "v=spf1 include:mx.ovh.com ~all"
_autodiscover._tcp        IN SRV     0 0 443 mailconfig.ovh.net.
_imaps._tcp        IN SRV     0 0 993 ssl0.ovh.net.
_submission._tcp        IN SRV     0 0 465 ssl0.ovh.net.
autoconfig        IN CNAME     mailconfig.ovh.net.
autodiscover        IN CNAME     mailconfig.ovh.net.
ftp        IN CNAME     tm4soul.ch.
monitoring        IN A     173.249.10.127
www        IN CNAME     at3flo.github.io.
