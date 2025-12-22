---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% assign journals = site.publications | where: "type", "journal" | sort: "year" | reverse %}
{% assign conferences = site.publications | where: "type", "conference" | sort: "year" | reverse %}
{% assign workshops = site.publications | where: "type", "workshop" | sort: "year" | reverse %}

Check out my full publication list on <a href="https://scholar.google.com/citations?user=QrXVsvUAAAAJ&hl=en"> Google Scholar. </a>


<div class="notice--cv publications">
  <h2 class="pub-header">Journal Papers</h2><br>
  {% for post in journals %}
    {% include archive-single.html %}
  {% endfor %}
</div>

<div class="notice--cv publications">
  <h2 class="pub-header">Conference Papers</h2><br>
  {% for post in conferences %}
    {% include archive-single.html %}
  {% endfor %}
</div>

<div class="notice--cv publications">
  <h2 class="pub-header">Workshop Papers</h2><br>
  {% for post in workshops %}
    {% include archive-single.html %}
  {% endfor %}
</div>
