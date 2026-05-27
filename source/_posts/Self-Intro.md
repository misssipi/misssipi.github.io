---
title: Self-Intro
date: 2026-05-27 12:00:00
tags: [Cybersecurity, Graph Learning, Privacy Computing, Cryptography, About Me]
categories: About Me
---

Hi, I'm **HONG Jinyi** (洪锦仪), an undergraduate majoring in **Cyberspace Security** at **Xidian University**. I'm a CPC probationary member with excellent academic performance in my major. I passed both CET-4 and CET-6 with high scores, and I'm proficient in **C, Python, and LaTeX**.

<!-- more -->

## Honors & Awards

- **National Scholarship**
- **Challenge Cup "揭榜挂帅" Special Prize**
- MCM/ICM (Mathematical Contest in Modeling)
- National English Competition
- **6 national-level awards, 1 provincial-level award**

These experiences have strengthened both my innovative thinking and practical capabilities.

## Research Experience

### 1. SM2 Optimization on Kunpeng Platform — National Cryptography Competition (1st Prize)

The national push for domestic technology substitution faces a bottleneck: **SM2 performs poorly on Kunpeng ARM platforms** — big-number arithmetic is slow, point operations are serial, and modular reduction is too complex for high-throughput scenarios like finance and government systems.

I worked on **full-stack optimization from low-level instructions to high-level protocols**:

- Reconstructed point operations using **NEON SIMD** instruction set
- Designed a fast modular reduction algorithm
- Introduced **w-NAF** and improved **Comb algorithm** to reduce scalar multiplication complexity
- Completed full testing and performance data analysis

**Result:** Signing performance improved by **602.3%**, verification by **218.0%** on the Kunpeng platform. Won **National 1st Prize** in the College Student Cryptography Technology Competition.

### 2. G2PC: Privacy-Preserving Graph Neural Network Framework (Targeting CCS 2026)

Large-scale graph data (communication topologies, node relationships) contains sensitive information. Direct usage causes privacy leakage. Traditional secure computation schemes are expensive, lack GNN-specific protocols, and don't support GPU acceleration — making it hard to achieve **low latency + high security** in distributed scenarios.

Under the guidance of my advisor and a senior PhD student, I:

- Independently reproduced and rigorously verified two top-conference papers: **ABY2.0** and **MD-ML**
- Unified experimental environments and aligned baseline metrics
- Provided reliable baseline support for the team's **GPU-accelerated two-party secure computation protocol**
- Participated throughout in data processing, figure generation, and paper writing

### 3. GNN-Based Anomaly Detection & Training Optimization — National-level Innovation Project

In large-scale dynamic topological scenarios like citation networks and social networks, traditional graph models have clear limitations:

- **GCN**: fixed neighborhood aggregation, insensitive to anomalous structures
- **GAT**: full-graph attention, high computation, noisy, poor at capturing local details

Existing methods cannot simultaneously guarantee **high accuracy and high efficiency**.

Our project is based on **GraphCAD** — an anomaly detection system targeting graphs with scarce labels and noisy relationships. The overall framework is: **edge update + node update + global context update + contrastive learning**. We replaced the traditional dot-product attention in the global graph update module with **sliding convolutional attention**, enabling the model to better exploit local structural patterns when updating global centers. Experiments show significant gains in high unlabelled ratio scenarios (especially above 93.74%).

The project was successfully funded as a **National-level College Students' Innovation and Entrepreneurship Training Program**.

### 4. Side-Channel Analysis & Post-Quantum Cryptography (CSIDH)

I also participate in research on **side-channel analysis** and **post-quantum cryptography CSIDH** within my research group, further strengthening my engineering capabilities in embedded system implementation, cryptographic algorithm analysis, and security verification.

## Extracurricular

I serve as a **student cadre** and actively participate in **volunteer service**, which has cultivated my sense of responsibility and teamwork skills.

