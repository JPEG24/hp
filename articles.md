---
layout: default
title: 記事一覧
permalink: /articles/
---

<div class="post-list">
  <h1>記事一覧</h1>

  <!-- タグフィルター -->
  <div class="home-tags">
    <div class="tag-list">
      <button class="tag filter-tag active" type="button" data-filter="all">
        すべて
      </button>

      {% for tag in site.tags %}
        <button
          class="tag filter-tag"
          type="button"
          data-filter="{{ tag[0] | escape }}"
        >
          {{ tag[0] }}
          <span>{{ tag[1].size }}</span>
        </button>
      {% endfor %}
    </div>
  </div>

  <!-- 記事一覧 -->
  <ul id="article-list">
    {% for post in site.posts %}
      <li
        class="article-item"
        data-tags="{{ post.tags | jsonify | escape }}"
      >
        <time datetime="{{ post.date | date_to_xmlschema }}">
          {{ post.date | date: "%Y年%m月%d日" }}
        </time>

        <a class="post-title-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>

        {% if post.tags.size > 0 %}
          <div class="tag-list-post">
            {% for tag in post.tags %}
              <button
                class="tag filter-tag"
                type="button"
                data-filter="{{ tag | escape }}"
              >
                {{ tag }}
              </button>
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

  <p id="no-articles" hidden>
    該当する記事はありません。
  </p>
</div>

<script src="{{ '/assets/js/article-filter.js' | relative_url }}" defer></script>