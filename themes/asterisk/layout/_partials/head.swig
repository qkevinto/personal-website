<head>
  <meta charset="UTF-8">
  <meta name="author" content="{{ config.author }}">
  <meta name="description" content="{{ config.description }}">
  <meta name="keywords" content="{{ config.keyword }}">
  <meta property="og:title" content="{{ config.title }}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="{{ config.url }}">
  <meta property="og:image" content="{{ config.url }}{{ page.image }}">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@{{ config.twitter }}">
  <meta name="twitter:title" content="{{ config.title }}">
  <meta name="twitter:description" content="{{ config.description }}">
  <meta name="twitter:image" content="{{ config.url }}{{ page.image }}" />
  <title>{{ config.title }}</title>
  {% include "styles.swig" %}
</head>
