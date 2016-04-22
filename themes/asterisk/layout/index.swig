<!DOCTYPE html>
<html lang="{{ config.language }}">
  {% include "_partials/head.swig" %}
  <body class="About">
    <main class="Main">
      <div class="Main-inner">
        <div class="About-profile">
          {% include "_partials/profile.swig" %}
        </div>
        <div class="About-article">
          {% include "_partials/article.swig" %}
        </div>
      </div>
    </main>
    {% include "_partials/styles.swig" %}
    {% include "_partials/scripts.swig" %}
  </body>
</html>
