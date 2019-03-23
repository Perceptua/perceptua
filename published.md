---
title: Published
permalink: /published
layout: default
---

{% for post in site.posts %}
  <a class="greyscale" href="{{ post.url }}">

    <div class="creator-card">

      <p class="added right">{{ post.date | date: "%A, %-d %B %Y" }}</p>

      <h3>{{ post.title }}</h3>

      {% if post.image %}
        [{{ post.description }}]({{ post.image }})
      {% endif %}

      {% for c in post.categories %}
        <p class="medium">{{ c }}</p>
      {% endfor %}
      
    </div>

  </a>
{% endfor %}
