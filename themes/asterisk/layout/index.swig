<!DOCTYPE html>
<html lang="{{ config.language }}">
  {% include "_partials/head.swig" %}
  <body>
    <main class="Main">
      <div class="Main-inner">
        {% include "_partials/biography.swig" %}
        <article class="Article">
          {{ page.content }}
        </article>
      </div>
    </main>
    {% include "_partials/scripts.swig" %}
  </body>
</html>
