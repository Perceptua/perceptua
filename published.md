---
title: Published
permalink: /published
layout: default
---

{% for post in site.posts %}
  <div class="creator-card">
    <p class="added right">{{ post.date }}</p>
    
    <h3>{{ post.title }}</h3>
    
    {% if post.image %}
      ![{{ post.description }}]({{ post.image }})
    {% endif %}
    
    {% for c in post.categories %}
      <p class="medium">{{ c }}</p>
    {% endfor %}
  </div>
{% endfor %}
