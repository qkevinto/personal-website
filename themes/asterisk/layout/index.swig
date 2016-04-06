<!DOCTYPE html>
<html>
  {% include "_partials/head.swig" %}
  <body>
    {% include "_partials/hero.swig" %}
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
