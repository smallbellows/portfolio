---
title: 'Email Tables'
description: 'Experimenting with react.email by making a data table component'
publishDate: '2025-04-03'
tags: ['FrontEnd', 'Experiment']
---

Writing html for email templates is one of my least favourite tasks, so when I heard about `react.email` I couldn't wait to try it out. I thought there might be an opportunity to use it at work, but but it turned out that we could reuse existing email templates so it didn't make sense to rewrite them.

But I still wanted to experiment, so I did it on my own time instead. I've made a little package that just has a sample email and a `Table` component.

Like most email html, `react.email` does use `table` components internally for it's `Section`, `Row` and `Column` components, but there was no clean way to have a multi-row table like might be used to actually send a table of data in an email. Their components are great if you're wanting to use a `table` as the only layout option in an email.
