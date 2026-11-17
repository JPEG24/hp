---
layout: default
title: 記事一覧
permalink: /articles/
---

<div class="post-list">
  <h1>記事一覧</h1>

  <div class="home-tags">
    <div class="tag-list">
      {% for tag in site.tags %}
        <a class="tag" href="{{ '/tags/' | relative_url }}#{{ tag[0] | slugify }}">
          {{ tag[0] }}
          <span>{{ tag[1].size }}</span>
        </a>
      {% endfor %}
    </div>
  </div>

  <ul>
    {% for post in site.posts %}
      <li>
        <time datetime="{{ post.date | date_to_xmlschema }}">
          {{ post.date | date: "%Y年%m月%d日" }}
        </time>

        <a class="post-title-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>

        {% if post.tags.size > 0 %}
          <div class="tag-list-post">
            {% for tag in post.tags %}
              <a
                class="tag"
                href="{{ '/tags/' | relative_url }}#{{ tag | slugify }}"
              >
                {{ tag }}
              </a>
            {% endfor %}
          </div>
        {% endif %}

        {% if post.excerpt %}
          <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
        {% endif %}
      </li>
    {% else %}
      <li>まだ記事はありません。</li>
    {% endfor %}
  </ul>
</div>