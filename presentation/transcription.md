**Slide 1-5:**

- Let&#39;s talk about machine learning and Tensorflow for java script.
- **Tensorflow**** is a free and open-source software library for dataflow and differentiable programming across a range of tasks.**
- TensorFlow was developed in 2011 at Google as their propitiatory library for Machine learning/Deep learning applications at Google. This library was open sourced in 2015 under the Apache License.
- TensorFlow is built in C++, which enables the code to execute at a very low level. TensorFlow has bindings to different language like Python, R, &amp; Java. This enables TensorFlow to be used in these languages.
- Conventionally, in JavaScript, ML/DL was performed by using an API. An API was made using some framework, and the model was deployed at the server. The client sent a request using JavaScript to get results from the server.
- In 2017, a project called Deeplearn.js appeared, which aimed to enable ML/DL in JavaScript, without the API hassle.
- In March 2018, the DeepLearn.js team got merged into the TensorFlow Team at Google and was renamed TensorFlow.js.

**Slide 7**

Because TF has Core APi, Layers API and few frameworks you can run existing models.Use off-the-shelf JavaScript models or convert Python TensorFlow models to run in the browser or under Node.js.

- Retrain pre-existing ML models using your own data.
- Build and train models directly in JavaScript using flexible and intuitive APIs.

**Slide 8**

TensorFlow.js easy to use because no need drivers or installs, has interactive apps.

**Slide 9**

**What is tensor?**

- A tensor is a _n-_dimensional array with _n_\&gt;2

TensorFlow.js has utility functions for common cases like Scalar, 1D, 2D, 3D and 4D tensors, as well a number of functions to initialize tensors in ways useful for machine learning.

**Slide 11-15**

Let&#39;s first create simplest web page imaginable. It&#39;s empty but for one div.

The next thing is to add the tensorflow.js libraries and this can be inserted using a script tag.

The goal of machine learning is to train a model from input data. This model can be then used to in fare or predict output data for future input values. So for example, take a look at this data.

Now it&#39;s pretty obvious to the human eye that there&#39;s a linear relationship in this data. These dots can be join by a straight line. Thus even thought I don&#39;t know what the Y value is when X is 5 I can infer that by looking at the line. In machine learning we do this by training a model on the input data.

First if all I&#39;m going to create new script block and within that I&#39;ll create an asynchronous function called learnLinear. It&#39;s asynchronous because the learning will take some time. Now I&#39;m going to add a model I&#39;m using a TF dot sequential where the outputs of one layer are the inputs to the next. It&#39;s a simple stack of layers with no branching or any kind of skipping. I will then add a dense layer to this. And dense means all of the nodes in each of the layers are connected to each other. In this case it&#39;s a little redundant as I only have one layer and one node but it&#39;s the easiest way to define a simple neural network like this. Now that my model is defined it&#39;s time to compile it. To do this I have to specify some parameters including the loss function and the optimizer I&#39;m setting the loss function to be a meansquared error it&#39;s a pretty standard one particularly for linear equations and the optimizer is going to be said to SGD which stands for a stochastic gradient descent. This simply defines a methodology for the learning there are a bunch of them supported including SGD and the popular atom. For the next step I&#39;ll define my x and y values for the line.

That you can see that I&#39;ve labeled them here with their x and y coordinates from a machine learning perspective we can consider the X values to be our inputs and our Y values to be our desired outputs. Thus in the future if we feed in a new x value would get a Y value back. So to train a model to do this we can create two tensors for the training values. One for the X&#39;s and one for the Y&#39;s. I&#39;ll create a tensor for the X&#39;s. The second parameter is the shape of this array 6 rows and 1 column. Now all I have to do is train my model now this can take some time for complex models but because his is really simple it&#39;s going to be really quick. To train a model for a fixed number of iterations known as epochs you call the fit method here you can see I&#39;m telling it my input values the X&#39;s my output values the Y&#39;s and then asking it to train for 250 iterations. Once the model is trained I can try to do a prediction from it so if you&#39;re good at math you&#39;ll see that the relationship here between x and y is y equals 2x minus 1. Thus the value for X is 5 well then Y should be 9 you use the model to predict method to get a prediction. I&#39;ll refer to the div called output field that I created earlier and I&#39;ll load the results of the prediction into its inner text to do this I call model duck predict and I pass my input tensor which is a single value in a one by one array. Tensorflow will then give me back the value and that it predicted 38.1 which is pretty close to the correct value of 39. I can impact the accuracy by training for more epochs giving the network more time to error correct. For 500 epochs my value is 38.9. So I just created a neural network using javascript in the browser and trained it to predict a linear relationship this was made possible by tensorflow.js.

You can use already existed models based on TF.js such as:

Image Classification – Classify images with labels from the ImageNet database.

Object detection – localize and identify multipli objects in a single image.

Body Segmentation – Segment persons and body parts in real time.

Pose segmentation – Estimate human poses in real time.

Speech command recognition – Classify 1-second audio snippest from the speech commands database.

Let see some real ML examples:

- Google use TF everywhere. For example to create doodles.
-
 Airbnb improves the guest experience by using TensorFlow to classify images and detect objects at scale
- Twitter used TensorFlow to build their &quot;Ranked Timeline,&quot; allowing users to ensure that they don&#39;t miss their most important tweets even if they follow thousands of users.