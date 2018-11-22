---
seo:
  og:
    locale: {{ .seo.og.locale }}
    type: {{ .seo.og.type }}
    title: {{ .seo.og.title }}
    url: {{ .seo.og.url }}
    description: {{ .seo.og.description }}
    site_name: {{ .seo.og.site_name }}
  twitter:
    card: {{ .seo.twitter.card }}
    site: {{ .seo.twitter.site }}
canonical: {{ .canonical }}
service: "Free Credit Report"
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
lastmod: {{ .Lastmod }}
author_name: "TotallyMoney"
author_title: ""
categories: [ "Credit Report" ]
tags: [ "Credit Report" ]
draft: true
---
