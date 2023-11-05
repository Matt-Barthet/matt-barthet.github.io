---
title: "Open-Ended Evolution for Minecraft Building Generation"
collection: publications
permalink: /publication/open-ended-minecraft-buildings
excerpt: ''
date: 2022-07-08
venue: 'IEEE Transactions on Games'
paperurl: 'http://academicpages.github.io/files/Open-Ended-Minecraft-Buildings.pdf'
citation: 'Barthet, M., Liapis, A., & Yannakakis, G. N. (2022). Open-ended evolution for Minecraft building generation. IEEE Transactions on Games.'
---
This paper proposes a procedural content generator which evolves Minecraft buildings according to an open-ended and intrinsic definition of novelty. To realize this goal we evaluate individuals’ novelty in the latent space using a 3D autoencoder, and alternate between phases of exploration and transformation. During exploration the system evolves multiple populations of CPPNs through CPPN-NEAT and constrained novelty search in the latent space (defined by the current autoencoder). We apply a set of repair and constraint functions to ensure candidates adhere to basic structural rules and constraints during evolution. During transformation, we reshape the boundaries of the latent space to identify new interesting areas of the solution space by retraining the autoencoder with novel content. In this study we evaluate five different approaches for training the autoencoder during transformation and its impact on populations’ quality and diversity during evolution. Our results show that by retraining the autoencoder we can achieve better open-ended complexity compared to a static model, which is further improved when retraining using larger datasets of individuals with diverse complexities.

[Download paper here](http://academicpages.github.io/files/Open-Ended-Minectaft-Buildings.pdf)