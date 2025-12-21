---
layout: archive
title: ""
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

{% capture education %}
# Education
* B.Sc. in Computing Science, University of Malta, 2016–2019
* M.Sc. in Digital Games, University of Malta, 2019–2021
* PhD. in Games Research, University of Malta, 2022–Present
{% endcapture %}

{% capture work %}
# Work experience
* **Research Support Officer II**, 2022–Present  
  * University of Malta  
  * Duties included: Research, EU project duties
* **Freelance Game Developer**, 2022–2023  
  * MightyBox Malta  
  * Duties included: Developed digital vertical slice of a board game using Unity.
* **Research Support Officer I**, 2020–2022  
  * University of Malta  
  * Duties included: Research, EU project duties
{% endcapture %}

{% capture skills %}
# Skills
* Reinforcement Learning (RL)
* Player Modelling
* Affective Computing
* Machine Learning
* Procedural Content Generation (PCG)
* Large Language Models (LLMs)
* Game Development
* Unity Game Engine
* Godot Game Engine
* Basic 3D Modelling (Autodesk Maya)
* Basic Video Editing (Premiere Pro, After Effects)
{% endcapture %}

{% capture publications %}
# Publications
<ul>
{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}
</ul>
{% endcapture %}

{% capture talks %}
# Talks
<ul class="pub-list">
{% for post in site.talks reversed %}
  {% include archive-single-talk-cv.html %}
{% endfor %}
</ul>
{% endcapture %}

{% capture teaching %}
# Teaching
<ul>
{% for post in site.teaching reversed %}
  {% include archive-single-cv.html %}
{% endfor %}
</ul>
{% endcapture %}

{% capture tutorials %}
# Tutorials
<ul>
{% for post in site.tutorial reversed %}
  {% include archive-single-cv.html %}
{% endfor %}
</ul>
{% endcapture %}


  <div class="notice--about education">
    {{ education | markdownify }}
  </div>

  <div class="notice--about work">
    {{ work | markdownify }}
  </div>

  <div class="notice--about two-column">
    {{ skills | markdownify }}
  </div>

  <div class="notice--about publications">
    {{ publications | markdownify }}
  </div>


<div class="about-grid">

  <div class="notice--about talks">
    {{ talks | markdownify }}
  </div>

  <div class="notice--about teaching">
    {{ teaching | markdownify }}
  </div>

</div>
