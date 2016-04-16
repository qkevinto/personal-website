<!DOCTYPE html>
<html lang="{{ config.language }}">
  {% include "_partials/head.swig" %}
  <body>
    <main class="Main">
      <div class="Main-inner">
        {% include "_partials/profile.swig" %}
        {% include "_partials/about.swig" %}
      </div>
    </main>
    {% include "_partials/scripts.swig" %}
  </body>
</html>
