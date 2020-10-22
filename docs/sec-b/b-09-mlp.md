---
title: Multi-Layered Perceptron
---
Authors: Shuheng Ma, Anqi Lou, Mauricio Morales. ([PDF](../../static/b-09-mlp.pdf))

## Introduction:

The lecture is about the forward/backward process, key parameters including # hidden layers, # epoches, activation function, learning rate(SDG), momentum of MLP and deep learning.

## Forward/Backward

We start with a brief review of the forward and backward pass of the MLP.
* The forward process is the following:
    * We apply the activation function through all the layers to the input x and get the output y_hat
* The backward Pass process is the following:
    * After we obtain the y_hat from the forward process, we use the target point to subtract the predicted y_hat, we will obtain the error, then apply the error to SGD to update the weight

![](https://i.imgur.com/ymgaKqG.png)

The backward pass will stop until we find the location in the graph below that the validation set has it's lowest loss.

![](https://i.imgur.com/sRwQmBF.png)

### Google Playground Tensorflow

From the lecture, we have discussed of how to decrease the loss via adjust parameters in the playground:
* Add hidden layer, epoch
* Change activation, regularization
* Transform data from it's original shape to x^2, sin(x)...

![](https://i.imgur.com/hXKtWmP.png)

## Model complexity for MLP

* The effective number of parameters of an MLP increase with amount of training
* Ex. The MLP has 50 weights, then max DF = 50, we start with DF with a small number, then increases the DF with # of epochs till 50.

![](https://i.imgur.com/bRTQarg.png)

## Deep Learning

* Deep learning is a subset of machine learning in artificial intelligence that has networks capable of learning unsupervised from data that is unstructured or unlabeled. Also known as deep neural learning or deep neural network.
* The figure below shows how deep learning utilize a very "deep"(a lot neurons) to improve it's accuracy

![](https://i.imgur.com/RYdia83.png)

## Additional Resources

* Google Playground Tensorflow:
    * https://playground.tensorflow.org/
* Deep Learning:
    * http://www.iro.umontreal.ca/~bengioy/talks/mlss-austin.pdf
    * https://www.cs.toronto.edu/~ranzato/publications/taigman_cvpr14.pdf
