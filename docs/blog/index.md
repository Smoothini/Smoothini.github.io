---
title: Blog posts
nav_order: 3
layout: page
has_children: true
---

### Latest posts:
<ul>
  {% assign sorted_posts = site.pages | sort: 'date' | reverse %}
  {% for post in sorted_posts %}
    {% if post.path contains 'blog/' and post.subject %}
      <li>
        <a href="{{ post.url }}">{{ post.date | date: "%d-%m-%Y" }} ➝ {{ post.subject }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>
