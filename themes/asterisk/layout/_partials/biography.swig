<header class="Biography">
  <div class="Biography-avatar">
    {% include "avatar.swig" %}
  </div>
  <div class="Biography-meta">
    <h1 class="Biography-name">{{ config.author }}</h1>
    <h2 class="Biography-role">{{ config.role }}</h2>
    <span class="Biography-work">{{ config.work }}</span>
  </div>
</header>
