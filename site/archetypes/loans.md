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
canonical: {{ .Canonical }}
service: "Loans"
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
author_name: "TotallyMoney"
author_title: ""
categories: [ "Loans" ]
tags: [ "Loans" ]
draft: true
---
