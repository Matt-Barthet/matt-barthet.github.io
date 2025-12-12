---
permalink: /
title: "About Me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a full-time PhD student at the Institute of Digital Games (University of Malta), specializing in Games Research and AI. My research is at the cutting edge of the field, focusing on leveraging Artificial Intelligence to train game-playing agents to behave and exhibit emotions in a human-like manner. I'm also interested in the use of AI to procedurally generate unique and captivating game content, which led me to work with Minecraft where I designed an innovative, creativity-centric building generator for my master's thesis.  

In addition to my academic pursuits, I have also started working part-time as a freelance/independent game developer using the Unity and Godot game engines. This experience has greatly benefited my research as it’s given me the skillset required to create specialized game environments for the testing and deployment of my work. I’m very passionate about combining my work in AI and academia with the practical side of my game development skills, and it’s something I intend to keep exploring in the future.

Research Highlight #1: Affectively Framework
=====
<video src="images/stitched.mov" width="750" height="550" controls></video>


Game environments offer a unique opportunity for training virtual agents due to their interactive nature, which provides diverse play traces and affect labels. Despite their potential, no reinforcement learning framework incorporates human affect models as part of their observation space or reward mechanism. To address this, we present the Affectively Framework, a set of Open-AI Gym environments that integrate affect as part of the observation space. Check out my [github repository](https://github.com/Matt-Barthet/Affectively-Framework) to access the source code and run the framework for yourself!

Research Highlight #2: GameVibe Game Corpus
=====

<img src="images/gamevibe.gif" width="750" height="550" alt="Game Vibe animation">

What makes people interested in games? What if we could capture aspects of experience just by looking at the gameplay screen, as a mirror of a viewer's experience? We could then learn to design better games and speed up research towards general AI models of player experience. Check out my [blog post](https://communities.springernature.com/posts/gamevibe-a-multimodal-affective-game-corpus) on nature communities where I describe GameVibe, our first-person shooter engagement dataset publish in the Nature Scientific Data journal.


PhD Proposal: Affect-Driven Reinforcement Learning
======
Affect modelling (AM) has traditionally been approached as a supervised learning problem, where some form of model is trained to link the current state (e.g., pixels, features, physiological signals) to a corresponding ground truth label of emotion, typically provided through human annotations. The resulting model is then paired with a separately designed/learned action selection mechanism to create agents which demonstrate humanlike affective interactions. While affect is modelled in the context of an interaction between an agent and its environment, the impact of the agent’s actions on its affective response is not directly explored through learning. In this project, we aim to expand upon the Go-Blend proof of concept (Barthet, Liapis & Yannakakis, 2021) and investigate this relationship between behavior and affect, and its impact on training reinforcement learning (RL) agents to play games and/or generate content.

![My Research Image](images/MyResearch.png)

As a result, we propose a paradigm shift in AM where the task is viewed from an RL lens. Whilst RL has typically been used for learning behavior policies for gameplaying agents, recent works have also used it for simulating agent emotion to study its influence on the agents’ learning loop when using different methods for emotion elicitation (Moerland, Broekens & Jonker, 2018). However, these works focus on the impact of simulated agent emotion training signals rather than using human emotional to influence training. In our proposed approach, the agent’s rewards are not only tied to
its behavior (e.g., learn to play optimally/humanlike) but also to its current affective state to imitate human affective responses. This combination of behavioural and affective rewards can be used to create a variety of reward functions which vary the priority between the two components to observe
their impact on training and the resulting behavioural/affective patterns.

![Go Blend](images/goblend.png)

To accomplish this task, we propose using the Go-Explore (Ecoffet et. al., 2019) algorithm in conjunction with human affect demonstrations provided through the AGAIN dataset (Melhart, Liapis & Yannakakis, 2021). Go-Explore is a recent RL algorithm which has showcased state-of-the-art performance for hard exploration problems which most other deep learning methods have typically struggled (most notably Montezuma’s Revenge and Pitfall). It achieved these breakthroughs by splitting learning into two phases, an exploration phase where a deterministic model of the game is used to create several high performing trajectories, and a robustification phase where an RL agents is trained to mimic these trajectories in a stochastic setting. Through the strengths of go-explore, our approach is capable of training agents which both play optimally (capable of superhuman performance) but also behave in a manner to “feel” as humans would in that game state. To evaluate our approach, we will test the game playing agents on the 9 games present in the AGAIN dataset and benchmark the results against humans and the models used in its study (random forest, imitation learning, etc.) We will also test different reward functions for behavior (optimal/humanlike play) and affect (regression, preference learning), as well as single vs multi-objective solutions.

![EDRL](images/Examples.png)

Another novel application of RL is for procedural content generation (PCG), such as the EDRL framework (Shu, Liu, Yannakakis, 2021). Frameworks such as EDRL focus on the use of RL for procedural content generation using a model for experience/affect in players to evaluate its output. This allows for content to be generated which satisfies playability requirements whilst also promoting the desired experience and emotional responses through its gameplay. Using our Go-Explore RL framework as the foundation, this project proposes altering the go-explore algorithm to generate content using a quality-diversity (QD) approach (through the archive of cells) for an experience-driven content generator. The content generated will then be evaluated using one or more RL agents trained to imitate behavior and affect. This allows us to generate content which elicits a desired behavioural and affective response in the agents. We will the evaluate our generator both quantitatively (e.g., expressive range, successful emotion elicitation) and qualitatively (comparison with content generated through other methods).
