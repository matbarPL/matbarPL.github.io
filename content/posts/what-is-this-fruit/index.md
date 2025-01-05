---
title: What is this fruit? Deep learning application for Vietnamese fruit recognition.
description: We developed a deep learning application to help identify Vietnamese fruits.
date: 2018-05-04
draft: false
slug: /pensieve/what-is-this-fruit
tags:
  - cnn
---

In April 2018 I deployed first deep learning application to production. This app was a group project during the subject called Introduction to Artificial Intelligence conducted in Asia, at Ton Duc Thang University in Vietnam. I was one of first two students that represented Wrocław University of Science and Technology in Asia. It was a great opportunity to learn how to relate with other people in international environment. I also deepened my understanding of AI building from scratch web application in python, HTML and CSS. The final model was selected from several deep learning models. Deep learning algorithms draws inspiration from many fields especially applied maths fundamentals like linear algebra, probability, information theory and numerical optimization which I truly enjoyed due to my math&computer science backgroud.

I am entrepreneur by heart, hence, I was motivated to sale the app to larger audience. As the result I talked to a colleague at TDT who was a photographer and he helped us to create a marketing video. You can watch it below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/MRP2OjZHOi8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Hope you find it interesting! Now we come back from a trip to Vietnam and talk about tech. First things first - Keras. It's a library that at a high-level allows to train own deep learning models without a need to deep dive into more complex packages such as theano or tensorflow. It's easy to use thanks to quite intuitive API that wraps a single model as a sequence object or a graph of standalone. In the documentation you can find more about optimizers, initialization schemes, activation functions, regularization schemes and more. Of course the biggest piece of cake is to combine them into perfectly working deep learning model ;-)

Having mentioned the engine we move to oil - the dataset. I used observations from https://github.com/Horea94/Fruit-Images-Dataset to train the model. In the end we encouraged users to take pictures at the similar not too noisy background.

The final model was chosen from different set of architectures. The final one is presented below in a table.

<style>
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
</style>
<table>
  <thead>
    <tr>
      <th>Layer Type</th>
      <th>Kernel Size/Pool Size</th>
      <th>Filters/Strides</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Convolutional</td>
      <td>(5,5)</td>
      <td>16</td>
    </tr>
    <tr>
      <td>MaxPooling</td>
      <td>(2,2)</td>
      <td>(2,2)</td>
    </tr>
    <tr>
      <td>Convolutional</td>
      <td>(5,5)</td>
      <td>32</td>
    </tr>
    <tr>
      <td>MaxPooling</td>
      <td>(2,2)</td>
      <td>(2,2)</td>
    </tr>
    <tr>
      <td>Convolutional</td>
      <td>(5,5)</td>
      <td>64</td>
    </tr>
    <tr>
      <td>MaxPooling</td>
      <td>(2,2)</td>
      <td>(2,2)</td>
    </tr>
  </tbody>
</table>

The main purpose of this application was to help foreigners to recognize different kinds of fruit by taking a picture of it. Simultaneously I learned a tone of useful stuff about deep learning.