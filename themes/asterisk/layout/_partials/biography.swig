<header class="Biography">
  <div class="Biography-avatar">
    {% include "avatar.swig" %}
  </div>
  <div class="Biography-meta">
    <h1 class="Biography-name">{{ page.name }}</h1>
    <h2 class="Biography-role">{{ page.role }}</h2>
    <span class="Biography-work">at {{ page.work }}</span>
  </div>
</header>
