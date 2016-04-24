<!DOCTYPE html>
<html lang="{{ config.language }}">
  {% include "_partials/head.swig" %}
  <body>
    <main class="Main">
      {% include "_partials/about.swig" %}
      {% include "_partials/social-stream.swig" %}
    </main>
    {% include "_partials/styles.swig" %}
    {% include "_partials/scripts.swig" %}
  </body>
</html>
