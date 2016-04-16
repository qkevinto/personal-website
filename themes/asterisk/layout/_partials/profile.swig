<header class="Profile">
  <div class="Profile-avatar">
    {% include "avatar.swig" %}
  </div>
  <div class="Profile-meta">
    <h1 class="Profile-name">{{ page.name }}</h1>
    <h2 class="Profile-role">{{ page.role }}</h2>
    <span class="Profile-work">at {{ page.work }}</span>
  </div>
</header>
